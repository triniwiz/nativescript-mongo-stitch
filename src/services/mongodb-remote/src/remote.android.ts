import {
    NamedServiceClientFactory,
    RemoteCountOptions,
    RemoteDeleteResult,
    RemoteFindOneAndModifyOptions,
    RemoteFindOptions,
    RemoteInsertManyResult,
    RemoteInsertOneResult,
    RemoteUpdateDescription,
    RemoteUpdateOptions,
    RemoteUpdateResult
} from 'nativescript-mongo-stitch-core';
import { ObjectId } from './bson';
import { deserialize, serialize } from './bson.android';

export class RemoteMongoClient implements NamedServiceClientFactory {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient;
    private _nativeFactory;

    private constructor() {
    }

    static get factory(): any {
        const client = new RemoteMongoClient();
        client._nativeFactory = com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient.factory;
        return client;
    }

    set instance(instance) {
        this._android = instance;
    }

    get nativeFactory() {
        return this._nativeFactory;
    }

    static fromNative(instance) {
        const client = new RemoteMongoClient();
        client._android = instance;
        return client;
    }

    db(name: string): RemoteMongoDatabase {
        return RemoteMongoDatabase.fromNative(this._android.getDatabase(name));
    }
}

export class RemoteMongoDatabase {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new RemoteMongoDatabase();
        db._android = instance;
        return db;
    }

    get name(): string {
        return this._android.getName();
    }

    collection(name: string) {
        return RemoteMongoCollection.fromNative(this._android.getCollection(name));
    }
}

export class RemoteMongoCollection<T> {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;

    private constructor() {

    }

    static fromNative(instance) {
        const db = new RemoteMongoCollection();
        db._android = instance;
        return db;
    }

    get namespace(): string {
        return this._android.getNamespace().getCollectionName();
    }

    count(query?: object, options?: RemoteCountOptions) {
        return new Promise<number>((resolve, reject) => {
            const q = query || {};
            const bson = serialize(q);
            try {
                let count;
                if (options) {
                    const opts = new com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions();
                    opts.limit(options.limit);
                    count = this._android.count(bson, opts);
                } else {
                    count = this._android.count(bson);
                }
                count.addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                    onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                        if (task.isSuccessful()) {
                            resolve(task.getResult());
                        } else {
                            reject(task.getException().getMessage());
                        }
                    }
                }));
            } catch (e) {
                reject(e.getMessage());
            }
        });
    }


    sync(): Sync {
        return Sync.fromNative(this._android.sync());
    }

    find(
        query?: object,
        options?: RemoteFindOptions
    ): RemoteMongoReadOperation<T> {
        let q = query || {};
        const findQuery = this._android.find(serialize(q));
        if (options) {
            if (options.limit !== null || options.limit !== undefined) {
                findQuery.limit(options.limit);
            }
            if (options.projection) {
                findQuery.projection(serialize(options.projection));
            }

            if (options.sort) {
                findQuery.sort(serialize(options.sort));
            }
        }
        return RemoteMongoReadOperation.fromNative(findQuery) as RemoteMongoReadOperation<T>;
    }

    findOne(
        query?: object,
        options?: RemoteFindOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            let q = query || {};
            const findQuery = this._android.find(serialize(q));
            if (options) {
                if (options.limit !== null || options.limit !== undefined) {
                    findQuery.limit(options.limit);
                }
                if (options.projection) {
                    findQuery.projection(serialize(options.projection));
                }

                if (options.sort) {
                    findQuery.sort(serialize(options.sort));
                }
            }

            findQuery.first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        const first = task.getResult();
                        let data = first ? JSON.parse(first.toJson() || '{}') : null;
                        if (data && data._id) {
                            data = Object.assign(data, {_id: ObjectId.fromNative(first.getObjectId('_id'))});
                        }
                        resolve(data);
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }


    findOneAndUpdate(
        query: object,
        update: object,
        options?: RemoteFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            const ref = new WeakRef<RemoteMongoCollection<T>>(this);
            let q = query || {};
            const findQuery = this._android.find();
            if (options) {
                if (options.projection) {
                    findQuery.projection(serialize(options.projection));
                }

                if (options.sort) {
                    findQuery.sort(serialize(options.sort));
                }
            }

            // TODO replace with sdk method when released 🤷
            findQuery.first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        const doc = task.getResult();
                        const owner = ref.get();
                        const opts = new com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions();
                        if (options) {
                            opts.upsert(options.upsert);
                        }
                        owner._android.updateOne(doc, serialize(update), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                            onComplete(updateTask: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>): void {
                                if (updateTask.isSuccessful()) {
                                    if (options) {
                                        if (options.returnNewDocument) {
                                            if (!doc && options.upsert) {
                                                const _task = updateTask.getResult();
                                                const filter = new org.bson.Document();
                                                filter.put('_id', _task.getUpsertedId().asObjectId());
                                                owner._android.find(filter).first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                                                    onComplete(newTask: com.google.android.gms.tasks.Task<any>): void {
                                                        if (newTask.isSuccessful()) {
                                                            const _doc = newTask.getResult();
                                                            resolve(deserialize(_doc));
                                                        } else {
                                                            reject(newTask.getException().getMessage());
                                                        }

                                                    }
                                                }));
                                            } else if (doc) {
                                                const id = doc.getObjectId('_id');
                                                const filter = new org.bson.Document();
                                                filter.put('_id', id);
                                                owner._android.find(filter).first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                                                    onComplete(newTask: com.google.android.gms.tasks.Task<any>): void {
                                                        if (newTask.isSuccessful()) {
                                                            const _doc = newTask.getResult();
                                                            resolve(deserialize(_doc));
                                                        } else {
                                                            reject(newTask.getException().getMessage());
                                                        }

                                                    }
                                                }));
                                            } else {
                                                resolve(null);
                                            }
                                        } else {
                                            resolve(null);
                                        }
                                    } else {
                                        resolve(null);
                                    }
                                } else {
                                    reject(updateTask.getException().getMessage());
                                }
                            }
                        }));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    /* NOT Implemented
    findOneAndReplace(
        query: object,
        replacement: object,
        options?: RemoteFindOneAndModifyOptions
    ) {
    }
    */

    /* NOT Implemented
    findOneAndDelete(
        query: object,
        options?: RemoteFindOneAndModifyOptions
    ): Promise<T | null> {
        return new Promise((resolve, reject) => {
        });
    }
    */

    aggregate(pipeline: object[]): RemoteMongoReadOperation<T> {
        const list = new java.util.ArrayList();
        pipeline.forEach(item => {
            list.add(item);
        });
        return RemoteMongoReadOperation.fromNative(this._android.aggregate(list)) as RemoteMongoReadOperation<T>;
    }


    insertOne(document: object) {
        return new Promise<RemoteInsertOneResult>((resolve, reject) => {
            this._android.insertOne(serialize(document)).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>): void {
                    if (task.isSuccessful()) {
                        const result = task.getResult();
                        resolve(<RemoteInsertOneResult>{
                            insertedId: ObjectId.fromNative(result.getInsertedId().asObjectId())
                        });
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }


    insertMany(documents: object[]) {
        return new Promise<RemoteInsertManyResult>((resolve, reject) => {
            const nativeList = new java.util.ArrayList();
            documents.forEach(item => {
                nativeList.add(serialize(item));
            });
            this._android.insertMany(nativeList).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>): void {
                    if (task.isSuccessful()) {
                        const resultIds = [];
                        const result = task.getResult();
                        if (result) {
                            const ids = result.getInsertedIds();
                            const keys = ids.keySet().toArray();
                            const length = keys.length;
                            for (let i = 0; i < length; i++) {
                                const value = ids.get(keys[i]);
                                resultIds.push(ObjectId.fromNative(value.asObjectId()));
                            }
                        }
                        resolve(new RemoteInsertManyResult(resultIds));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }


    deleteOne(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._android.deleteOne(serialize(query)).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>): void {
                    if (task.isSuccessful()) {
                        const results = task.getResult();
                        resolve(<RemoteDeleteResult>{
                            deletedCount: results.getDeletedCount()
                        });
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    deleteMany(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._android.deleteMany(serialize(query)).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>): void {
                    if (task.isSuccessful()) {
                        const results = task.getResult();
                        resolve(<RemoteDeleteResult>{
                            deletedCount: results.getDeletedCount()
                        });
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    updateOne(
        query: object,
        update: object,
        updateOptions?: RemoteUpdateOptions
    ) {
        return new Promise<RemoteUpdateResult>((resolve, reject) => {
            const opts = new com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions();
            if (updateOptions) {
                opts.upsert(updateOptions.upsert);
            }
            this._android.updateOne(serialize(query), serialize(update), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>): void {
                    if (task.isSuccessful()) {
                        const result = task.getResult();
                        resolve(<RemoteUpdateResult>{
                            modifiedCount: result.getModifiedCount(),
                            matchedCount: result.getMatchedCount(),
                            upsertedId: ObjectId.fromNative(result.getUpsertedId().asObjectId())
                        });
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    updateMany(
        query: object,
        update: object,
        updateOptions?: RemoteUpdateOptions
    ) {
        return new Promise<RemoteUpdateResult>((resolve, reject) => {
            const opts = new com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions();
            if (updateOptions) {
                opts.upsert(updateOptions.upsert);
            }
            this._android.updateMany(serialize(query), serialize(update), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>): void {
                    if (task.isSuccessful()) {
                        const result = task.getResult();
                        resolve(<RemoteUpdateResult>{
                            modifiedCount: result.getModifiedCount(),
                            matchedCount: result.getMatchedCount(),
                            upsertedId: ObjectId.fromNative(result.getUpsertedId().asObjectId())
                        });
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }
}

export class RemoteMongoReadOperation<T> {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;

    private constructor() {
    }


    static fromNative(instance) {
        const operation = new RemoteMongoReadOperation();
        operation._android = instance;
        return operation;
    }

    public first() {
        return new Promise<T | undefined>((resolve, reject) => {
            this._android.first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(tasks: com.google.android.gms.tasks.Task<any>): void {
                    if (tasks.isSuccessful()) {
                        const first = tasks.getResult();
                        let data = first ? JSON.parse(first.toJson() || '{}') : null;
                        resolve(deserialize(data));
                    } else {
                        reject(tasks.getException().getMessage());
                    }
                }
            }));
        });
    }


    public toArray() {
        return new Promise((resolve, reject) => {
            const array = [];
            this._android.forEach(new com.mongodb.Block<any>({
                apply(doc: any): void {
                    let data = doc ? JSON.parse(doc.toJson() || '{}') : null;
                    array.push(deserialize(data));
                }
            }));
            resolve();
        });
    }

    public iterator() {
        return new Promise<RemoteMongoCursor<any>>((resolve, reject) => {
            this._android.iterator().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve(RemoteMongoCursor.fromNative(task.getResult()));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }
}

export class RemoteMongoCursor<T> {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new RemoteMongoCursor();
        db._android = instance;
        return db;
    }

    public next() {
        return new Promise<T | undefined>((resolve, reject) => {
            this._android.next().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        const doc = task.getResult();
                        let data = doc ? JSON.parse(doc.toJson() || '{}') : null;
                        resolve(deserialize(data));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    public hasNext() {
        return new Promise<boolean>((resolve, reject) => {
            this._android.hasNext().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve(task.getResult());
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }
}


export enum ConflictResolvers {
    localWins = 'localWins',
    remoteWins = 'remoteWins'
}

export enum OperationType {
    DELETE = 'delete',
    INSERT = 'insert',
    REPLACE = 'replace',
    UPDATE = 'update',
    UNKNOWN = 'unknown',
}

export class SyncEvent {
    hasUncommittedWrites: boolean;
    operationType: OperationType;
    namespace: string;
    updateDescription: RemoteUpdateDescription;
}

export class Sync {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.Sync<any>;

    private constructor() {
    }

    public static fromNative(instance) {
        const sync = new Sync();
        sync._android = instance;
        return sync;
    }

    public configure(conflictResolver: ConflictResolvers, listener: (error?: { id: ObjectId, message: string }, event?: SyncEvent) => void) {
        let resolver: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>;
        switch (conflictResolver) {
            case ConflictResolvers.remoteWins:
                resolver = com.mongodb.stitch.core.services.mongodb.remote.sync.DefaultSyncConflictResolvers.remoteWins();
                break;
            default:
                resolver = com.mongodb.stitch.core.services.mongodb.remote.sync.DefaultSyncConflictResolvers.localWins();
                break;
        }

        const changeListener = new com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>({
            onEvent(docId: org.bson.BsonValue, event: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>): void {
                let operationType: OperationType;
                switch (event.getOperationType()) {
                    case com.mongodb.stitch.core.services.mongodb.remote.OperationType.DELETE:
                        operationType = OperationType.DELETE;
                        break;
                    case com.mongodb.stitch.core.services.mongodb.remote.OperationType.INSERT:
                        operationType = OperationType.INSERT;
                        break;
                    case com.mongodb.stitch.core.services.mongodb.remote.OperationType.REPLACE:
                        operationType = OperationType.REPLACE;
                        break;
                    case com.mongodb.stitch.core.services.mongodb.remote.OperationType.UPDATE:
                        operationType = OperationType.UPDATE;
                        break;
                    default:
                        operationType = OperationType.UNKNOWN;
                }

                const desc = event.getUpdateDescription();
                const removedFields = [];
                const fields = desc.getRemovedFields().toArray();
                const fieldsLength = fields.length;
                for (let i = 0; i < fieldsLength; i++) {
                    removedFields.push(fields[i]);
                }

                const updatedFields = {};

                const nativeUpdatedFields = desc.getUpdatedFields();
                const keys = nativeUpdatedFields.keySet().toArray();
                const keysLength = keys.length;
                for (let i = 0; i < keysLength; i++) {
                    const key = keys[i];
                    updatedFields[key] = deserialize(nativeUpdatedFields.get(key));
                }
                listener(null, {
                    hasUncommittedWrites: event.hasUncommittedWrites(),
                    operationType: operationType,
                    namespace: event.getNamespace().getCollectionName(),
                    updateDescription: <RemoteUpdateDescription>{
                        removedFields,
                        updatedFields
                    }
                });
            }
        });

        const errorListener = new com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener({
            onError(docId: org.bson.BsonValue, exception: java.lang.Exception): void {
                listener({id: ObjectId.fromNative(docId.asObjectId()), message: exception.getMessage()});
            }
        });
        this._android.configure(resolver, changeListener, errorListener);
    }
}

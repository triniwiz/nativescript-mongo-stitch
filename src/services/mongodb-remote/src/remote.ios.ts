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
import { deserialize, ObjectId, serialize } from './bson';

export class RemoteMongoClient implements NamedServiceClientFactory {
    private _ios: TNSRemoteMongoClient;
    private _nativeFactory;

    private constructor() {
    }

    static get factory(): any {
        const client = new RemoteMongoClient();
        client._nativeFactory = TNSRemoteMongoClient.getfactory();
        return client;
    }

    set instance(instance) {
        this._ios = instance;
    }

    get nativeFactory() {
        return this._nativeFactory;
    }

    static fromNative(instance) {
        const client = new RemoteMongoClient();
        client._ios = instance;
        return client;
    }

    db(name: string): RemoteMongoDatabase {
        return RemoteMongoDatabase.fromNative(this._ios.dbWithName(name));
    }
}

export class RemoteMongoDatabase {
    private _ios: TNSRemoteMongoDatabase;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new RemoteMongoDatabase();
        db._ios = instance;
        return db;
    }

    get name(): string {
        return this._ios.name;
    }

    collection(name: string) {
        return RemoteMongoCollection.fromNative(this._ios.collectionWithName(name));
    }
}

export class RemoteMongoCollection<T> {
    private _ios: TNSRemoteMongoCollection;

    private constructor() {

    }

    static fromNative(instance) {
        const db = new RemoteMongoCollection();
        db._ios = instance;
        return db;
    }

    get namespace(): string {
        return this._ios.namespace_;
    }

    count(query?: object, options?: RemoteCountOptions) {
        return new Promise<number>((resolve, reject) => {
            const q = query || {};
            let opts = null;
            if (options) {
                opts = TNSRemoteCountOptions.alloc().initWithLimit(options.limit);
            }
            this._ios.countWithFilterOptionsListener(serialize(q), opts, (error, count) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(count);
                }
            });
        });
    }


    sync(): Sync {
        return Sync.fromNative(null);
    }

    find(
        query?: object,
        options?: RemoteFindOptions
    ): RemoteMongoReadOperation<T> {
        let q = query || {};
        let opts = null;
        if (options) {
            opts = TNSRemoteFindOptions.alloc().initWithLimitProjectionSort(options.limit, options.projection, options.sort);
        }

        return RemoteMongoReadOperation.fromNative(this._ios.findWithFilterOptions(serialize(q), opts)) as RemoteMongoReadOperation<T>;
    }

    findOne(
        query?: object,
        options?: RemoteFindOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            const q = query || {};
            let opts = null;
            if (options) {
                opts = TNSRemoteFindOptions.alloc().initWithLimitProjectionSort(options.limit, options.projection, options.sort);
            }
            this._ios.findOneWithFilterOptionsListener(serialize(q), opts, (error, document) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(deserialize(document));
                }
            });
        });
    }


    findOneAndUpdate(
        query: object,
        update: object,
        options?: RemoteFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {

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
        const list = [];
        pipeline.forEach(item => {
            list.push(serialize(item));
        });
        return RemoteMongoReadOperation.fromNative(this._ios.aggregateWithPipeline(list)) as RemoteMongoReadOperation<T>;
    }


    insertOne(document: object) {
        return new Promise<RemoteInsertOneResult>((resolve, reject) => {
            this._ios.insertOneWithDocumentListener(serialize(document), (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(<RemoteInsertOneResult>{
                        insertedId: result.insertedId
                    });
                }
            });
        });
    }


    insertMany(documents: object[]) {
        return new Promise<RemoteInsertManyResult>((resolve, reject) => {
            return new Promise<RemoteInsertOneResult>((resolve, reject) => {
                const list = [];
                documents.forEach(item => {
                    list.push(serialize(item));
                });
                this._ios.insertManyWithDocumentsListener(list, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        const array = [];
                        let count = result.insertedIds.count;
                        for (let i = 0; i < count; i++) {
                            array.push(result.insertedIds.objectAtIndex(i));
                        }
                        resolve(new RemoteInsertManyResult(array));
                    }
                });
            });
        });
    }


    deleteOne(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._ios.deleteOneWithFilterListener(serialize(query), (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(<RemoteDeleteResult>{
                        deletedCount: result.deletedCount
                    });
                }
            });
        });
    }

    deleteMany(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._ios.deleteManyWithFilterListener(serialize(query), (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(<RemoteDeleteResult>{
                        deletedCount: result.deletedCount
                    });
                }
            });
        });
    }

    updateOne(
        query: object,
        update: object,
        updateOptions?: RemoteUpdateOptions
    ) {
        return new Promise<RemoteUpdateResult>((resolve, reject) => {
            let opts = TNSRemoteUpdateOptions.alloc().initWithUpsert(updateOptions ? updateOptions.upsert : false);
            this._ios.updateOneWithFilterUpdateUpdateOptionsListener(serialize(query), serialize(update), opts, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(<RemoteUpdateResult>{
                        upsertedId: result.upsertedId,
                        matchedCount: result.matchedCount,
                        modifiedCount: result.modifiedCount
                    });
                }
            });
        });
    }

    updateMany(
        query: object,
        update: object,
        updateOptions?: RemoteUpdateOptions
    ) {
        return new Promise<RemoteUpdateResult>((resolve, reject) => {
            let opts = TNSRemoteUpdateOptions.alloc().initWithUpsert(updateOptions ? updateOptions.upsert : false);
            this._ios.updateManyWithFilterUpdateUpdateOptionsListener(serialize(query), serialize(update), opts, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(<RemoteUpdateResult>{
                        upsertedId: result.upsertedId,
                        matchedCount: result.matchedCount,
                        modifiedCount: result.modifiedCount
                    });
                }
            });
        });
    }
}

export class RemoteMongoReadOperation<T> {
    private _ios: TNSRemoteMongoReadOperation;

    private constructor() {
    }


    static fromNative(instance) {
        const operation = new RemoteMongoReadOperation();
        operation._ios = instance;
        return operation;
    }

    public first() {
        return new Promise<T | undefined>((resolve, reject) => {
            this._ios.firstWithListener((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(deserialize(result));
                }
            });
        });
    }


    public toArray() {
        return new Promise<any[]>((resolve, reject) => {
            this._ios.toArrayWithListener((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    const array = [];
                    const count = result.count;
                    for (let i = 0; i < count; i++) {
                        array.push(deserialize(result.objectAtIndex(i)));
                    }
                    resolve(array);
                }
            });
        });
    }

    public iterator() {
        return new Promise<RemoteMongoCursor<any>>((resolve, reject) => {
            this._ios.iteratorWithListener((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(RemoteMongoCursor.fromNative(result));
                }
            });
        });
    }
}

export class RemoteMongoCursor<T> {
    private _ios: TNSRemoteMongoCursor;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new RemoteMongoCursor();
        db._ios = instance;
        return db;
    }

    public next() {
        return new Promise<T | undefined>((resolve, reject) => {
            this._ios.nextWithListener((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(deserialize(result));
                }
            });
        });
    }

    public hasNext() {
        return new Promise<boolean>((resolve, reject) => {
            reject('Not implemented');
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
    private _ios;

    private constructor() {
    }

    public static fromNative(instance) {
        const sync = new Sync();
        sync._ios = instance;
        return sync;
    }

    public configure(conflictResolver: ConflictResolvers, listener: (error?: { id: ObjectId, message: string }, event?: SyncEvent) => void) {

    }
}

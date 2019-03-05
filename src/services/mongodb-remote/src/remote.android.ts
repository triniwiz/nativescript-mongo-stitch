import {
    RemoteCountOptions,
    RemoteDeleteResult,
    RemoteFindOneAndModifyOptions,
    RemoteFindOptions,
    RemoteInsertManyResult,
    RemoteInsertOneResult,
    RemoteUpdateOptions,
    RemoteUpdateResult
} from 'nativescript-mongo-stitch-core';


export class LocalMongoClient {
    private _android: com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService;

    private constructor() {
    }

    static get factory() {
        return com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService.clientFactory;
    }
}

export class RemoteMongoClient {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient;

    private constructor() {
    }

    static get factory() {
        return com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient.factory;
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
            const bson = org.bson.Document.parse(JSON.stringify(q));
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


    sync(){
        this._android.sync().configure()
    }
    find(
        query?: object,
        options?: RemoteFindOptions
    ): RemoteMongoReadOperation<T> {
        let q = query || {};
        const findQuery = this._android.find(org.bson.Document.parse(JSON.stringify(q)));
        if (options) {
            if (options.limit !== null || options.limit !== undefined) {
                findQuery.limit(options.limit);
            }
            if (options.projection) {
                findQuery.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
            }

            if (options.sort) {
                findQuery.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
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
            const findQuery = this._android.find(org.bson.Document.parse(JSON.stringify(q)));
            if (options) {
                if (options.limit !== null || options.limit !== undefined) {
                    findQuery.limit(options.limit);
                }
                if (options.projection) {
                    findQuery.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
                }

                if (options.sort) {
                    findQuery.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
                }
            }

            findQuery.first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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


    findOneAndUpdate(
        query: object,
        update: object,
        options?: RemoteFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            const ref = new WeakRef<RemoteMongoCollection<T>>(this);
            let q = query || {};
            const findQuery = this._android.find(org.bson.Document.parse(JSON.stringify(q)));
            if (options) {
                if (options.projection) {
                    findQuery.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
                }

                if (options.sort) {
                    findQuery.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
                }
            }
            findQuery.first().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        const doc = task.getResult();
                        const owner = ref.get();
                        const opts = new com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions();
                        if (options) {
                            opts.upsert(options.upsert);
                        }
                        owner._android.updateOne(doc, org.bson.Document.parse(JSON.stringify(update)), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                            onComplete(updateTask: com.google.android.gms.tasks.Task<any>): void {
                                if (updateTask.isSuccessful()) {
                                    resolve(options && options.returnNewDocument ? updateTask.getResult() : null);
                                } else {
                                    reject(task.getException().getMessage());
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


    insertOne(document: T) {
        return new Promise<RemoteInsertOneResult>((resolve, reject) => {
            this._android.insertOne(org.bson.Document.parse(JSON.stringify(document))).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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


    insertMany(documents: T[]) {
        return new Promise<RemoteInsertManyResult>((resolve, reject) => {
            const nativeList = new java.util.ArrayList();
            documents.forEach(item => {
                nativeList.add(org.bson.Document.parse(JSON.stringify(item)));
            });
            this._android.insertMany(nativeList).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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


    deleteOne(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._android.deleteOne(org.bson.Document.parse(JSON.stringify(query))).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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

    deleteMany(query: object) {
        return new Promise<RemoteDeleteResult>((resolve, reject) => {
            this._android.deleteMany(org.bson.Document.parse(JSON.stringify(query))).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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
            this._android.updateOne(org.bson.Document.parse(JSON.stringify(query)), org.bson.Document.parse(JSON.stringify(update)), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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
            this._android.updateMany(org.bson.Document.parse(JSON.stringify(query)), org.bson.Document.parse(JSON.stringify(update)), opts).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
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
                        resolve(tasks.getResult());
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
                apply(data: T): void {

                }
            }));
            resolve();
        });
    }

    public iterator() {
        return this.toArray();
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
                onComplete(param0: com.google.android.gms.tasks.Task<any>): void {
                }
            }));
        });
    }
}

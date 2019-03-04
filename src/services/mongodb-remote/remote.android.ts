import { RemoteCountOptions, RemoteFindOptions } from 'nativescript-mongo-stitch-core';

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


export class RemoteMongoCollection {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;

    private constructor() {

    }

    static fromNative(instance) {
        const db = new RemoteMongoCollection();
        db._android = instance;
        return db;
    }

    get namespace(): string {
        return this._android.getNamespace();
    }

    count(query?: object, options?: RemoteCountOptions): Promise<number> {
        return new Promise((resolve, reject) => {
            const q = query || {};
            const bson = org.bson.BsonDocument.parse(JSON.stringify(q));
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

    find(
        query?: object,
        options?: RemoteFindOptions
    ): RemoteMongoReadOperation<any> {
        this._android.find();
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

    public first(): Promise<T | undefined> {
        return new Promise((resolve, reject) => {
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


    public toArray(): Promise<T[]> {
        return new Promise((resolve,reject)=>{
            this._android.forEach()
        });
    }

    public iterator(): Promise<RemoteMongoCursor<T>> {
        return new Promise((resolve,reject)=>{
            this._android.forEach()
        });
    }
}

export class RemoteMongoCursor {
    private _android: com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new RemoteMongoCursor();
        db._android = instance;
        return db;
    }

    public next(): Promise<T | undefined> {
        return new Promise((resolve, reject)=>{
            this._android.next().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(param0: com.google.android.gms.tasks.Task<any>): void {
                }
            }));
        });
    }
}

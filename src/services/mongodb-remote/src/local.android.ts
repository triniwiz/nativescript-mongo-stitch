import {
    LocalCountOptions,
    LocalDeleteResult,
    LocalFindOneAndModifyOptions,
    LocalFindOptions,
    LocalInsertManyResult,
    LocalInsertOneResult,
    LocalUpdateOptions,
    LocalUpdateResult,
    ServiceClientFactory
} from 'nativescript-mongo-stitch-core';
import { deserialize, ObjectId } from './bson';


export class LocalMongoClient implements ServiceClientFactory {
    private _android: com.mongodb.client.MongoClient;
    private _nativeClientFactory;

    private constructor() {
    }

    static get factory(): any {
        const client = new LocalMongoClient();
        client._nativeClientFactory = com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService.clientFactory;
        return client;
    }

    set instance(instance) {
        this._android = instance;
    }

    get nativeClientFactory() {
        return this._nativeClientFactory;
    }


    static fromNative(instance) {
        const client = new LocalMongoClient();
        client._android = instance;
        return client;
    }

    db(name: string): LocalMongoDatabase {
        return LocalMongoDatabase.fromNative(this._android.getDatabase(name));
    }
}

export class LocalMongoDatabase {
    private _android: com.mongodb.client.MongoDatabase;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new LocalMongoDatabase();
        db._android = instance;
        return db;
    }

    get name(): string {
        return this._android.getName();
    }

    collection(name: string) {
        return LocalMongoCollection.fromNative(this._android.getCollection(name));
    }
}

export class LocalMongoCollection<T> {
    private _android: com.mongodb.client.MongoCollection<any>;

    private constructor() {

    }

    static fromNative(instance) {
        const db = new LocalMongoCollection();
        db._android = instance;
        return db;
    }

    get namespace(): string {
        return this._android.getNamespace().getCollectionName();
    }

    count(query?: object, options?: LocalCountOptions) {
        return new Promise<number>((resolve, reject) => {
            const q = query || {};
            const bson = org.bson.Document.parse(JSON.stringify(q));
            try {
                let count;
                if (options) {
                    const opts = new com.mongodb.client.model.CountOptions();
                    opts.limit(options.limit);
                    count = this._android.count(bson, opts);
                } else {
                    count = this._android.count(bson);
                }
                resolve(count);
            } catch (e) {
                reject(e.getMessage());
            }
        });
    }

    find(
        query?: object,
        options?: LocalFindOptions
    ): LocalMongoReadOperation<T> {
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
        return LocalMongoReadOperation.fromNative(findQuery) as LocalMongoReadOperation<T>;
    }

    findOne(
        query?: object,
        options?: LocalFindOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            try {
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
                const first = findQuery.first();
                let data = first ? JSON.parse(first.toJson() || '{}') : null;
                resolve(deserialize(data));
            } catch (e) {
                reject(e.message);
            }
        });
    }


    findOneAndUpdate(
        query: object,
        update: object,
        options?: LocalFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            try {
                let q = query || {};
                const opts = new com.mongodb.client.model.FindOneAndUpdateOptions();
                if (options) {

                    opts.upsert(options.upsert);
                    if (options.projection) {
                        opts.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
                    }

                    if (options.sort) {
                        opts.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
                    }
                    opts.returnDocument(options.returnNewDocument);
                }
                const document = this._android.findOneAndUpdate(org.bson.Document.parse(JSON.stringify(q)), org.bson.Document.parse(JSON.stringify(update)));
                let data = document ? JSON.parse(document.toJson() || '{}') : null;
                resolve(deserialize(data));
            } catch (e) {
                reject(e.message);
            }
        });
    }


    findOneAndReplace(
        query: object,
        replacement: object,
        options?: LocalFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            try {
                let q = query || {};
                const opts = new com.mongodb.client.model.FindOneAndReplaceOptions();
                if (options) {
                    opts.upsert(options.upsert);
                    if (options.projection) {
                        opts.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
                    }

                    if (options.sort) {
                        opts.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
                    }
                    opts.returnDocument(options.returnNewDocument);
                }
                const document = this._android.findOneAndUpdate(org.bson.Document.parse(JSON.stringify(q)), org.bson.Document.parse(JSON.stringify(replacement)));
                let data = document ? JSON.parse(document.toJson() || '{}') : null;
                resolve(deserialize(data));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    findOneAndDelete(
        query: object,
        options?: LocalFindOneAndModifyOptions
    ) {
        return new Promise<T | null>((resolve, reject) => {
            try {
                let q = query || {};
                const opts = new com.mongodb.client.model.FindOneAndDeleteOptions();
                if (options) {
                    if (options.projection) {
                        opts.projection(org.bson.Document.parse(JSON.stringify(options.projection)));
                    }

                    if (options.sort) {
                        opts.sort(org.bson.Document.parse(JSON.stringify(options.sort)));
                    }
                }
                const document = this._android.findOneAndDelete(org.bson.Document.parse(JSON.stringify(q)));
                let data = document ? JSON.parse(document.toJson() || '{}') : null;
                resolve(deserialize(data));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    aggregate(pipeline: object[]): LocalMongoReadOperation<T> {
        const list = new java.util.ArrayList();
        pipeline.forEach(item => {
            list.add(item);
        });
        return LocalMongoReadOperation.fromNative(this._android.aggregate(list)) as LocalMongoReadOperation<T>;
    }


    insertOne(document: T) {
        return new Promise<LocalInsertOneResult>((resolve, reject) => {
            try {
                this._android.insertOne(org.bson.Document.parse(JSON.stringify(document)));
                resolve();
            } catch (e) {
                reject(e.message);
            }
        });
    }


    insertMany(documents: T[]) {
        return new Promise<LocalInsertManyResult>((resolve, reject) => {
            try {
                const nativeList = new java.util.ArrayList();
                documents.forEach(item => {
                    nativeList.add(org.bson.Document.parse(JSON.stringify(item)));
                });
                this._android.insertMany(nativeList);
                resolve();
            } catch (e) {
                reject(e.message);
            }
        });
    }


    deleteOne(query: object) {
        return new Promise<LocalDeleteResult>((resolve, reject) => {
            try {
                const result = this._android.deleteOne(org.bson.Document.parse(JSON.stringify(query)));
                resolve(<LocalDeleteResult>{
                    deletedCount: result.getDeletedCount()
                });
            } catch (e) {
                reject(e.message);
            }
        });
    }

    deleteMany(query: object) {
        return new Promise<LocalDeleteResult>((resolve, reject) => {
            try {
                const result = this._android.deleteMany(org.bson.Document.parse(JSON.stringify(query)));
                resolve(<LocalDeleteResult>{
                    deletedCount: result.getDeletedCount()
                });
            } catch (e) {
                reject(e.message);
            }
        });
    }

    updateOne(
        query: object,
        update: object,
        updateOptions?: LocalUpdateOptions
    ) {
        return new Promise<LocalUpdateResult>((resolve, reject) => {
            try {
                const opts = new com.mongodb.client.model.UpdateOptions();
                if (updateOptions) {
                    opts.upsert(updateOptions.upsert);
                }
                const result = this._android.updateOne(org.bson.Document.parse(JSON.stringify(query)), org.bson.Document.parse(JSON.stringify(update)), opts);
                resolve(<LocalUpdateResult>{
                    matchedCount: result.getMatchedCount(),
                    modifiedCount: result.getModifiedCount(),
                    upsertedId: ObjectId.fromNative(result.getUpsertedId().asObjectId())
                });
            } catch (e) {
                reject(e.message);
            }
        });
    }

    updateMany(
        query: object,
        update: object,
        updateOptions?: LocalUpdateOptions
    ) {
        return new Promise<LocalUpdateResult>((resolve, reject) => {
            try {
                const opts = new com.mongodb.client.model.UpdateOptions();
                if (updateOptions) {
                    opts.upsert(updateOptions.upsert);
                }
                const result = this._android.updateMany(org.bson.Document.parse(JSON.stringify(query)), org.bson.Document.parse(JSON.stringify(update)), opts);
                resolve(<LocalUpdateResult>{
                    upsertedId: ObjectId.fromNative(result.getUpsertedId().asObjectId()),
                    matchedCount: result.getMatchedCount(),
                    modifiedCount: result.getModifiedCount()
                });
            } catch (e) {
                reject(e.message);
            }
        });
    }
}

export class LocalMongoReadOperation<T> {
    private _android: com.mongodb.client.FindIterable<any>;

    private constructor() {
    }


    static fromNative(instance) {
        const operation = new LocalMongoReadOperation();
        operation._android = instance;
        return operation;
    }

    public first() {
        return new Promise<T | undefined>((resolve, reject) => {
            try {
                const first = this._android.first();
                let data = first ? JSON.parse(first.toJson() || '{}') : null;
                resolve(deserialize(data));
            } catch (e) {
                reject(e.message);
            }
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
            resolve(array);
        });
    }

    public iterator() {
        return LocalMongoCursor.fromNative(this._android.iterator());
    }
}

export class LocalMongoCursor<T> {
    private _android: com.mongodb.client.MongoCursor<any>;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new LocalMongoCursor();
        db._android = instance;
        return db;
    }

    public next() {
        const doc = this._android.next();
        let data = doc ? JSON.parse(doc.toJson() || '{}') : null;
        return deserialize(data);
    }

    public hasNext() {
        return this._android.hasNext();
    }
}

import {
    LocalCountOptions,
    LocalDeleteResult,
    LocalFindOneAndModifyOptions,
    LocalFindOptions,
    LocalInsertManyResult,
    LocalInsertOneResult,
    LocalUpdateOptions,
    RemoteUpdateResult,
    ServiceClientFactory
} from 'nativescript-mongo-stitch-core';
import { deserialize, serialize } from './bson';


export class LocalMongoClient implements ServiceClientFactory {
    private _ios: TNSLocalMongoClient;
    private _nativeClientFactory;

    private constructor() {
    }

    static get factory(): any {
        const client = new LocalMongoClient();
        client._nativeClientFactory = TNSLocalMongoClient.getfactory();
        return client;
    }

    set instance(instance) {
        this._ios = instance;
    }

    get nativeClientFactory() {
        return this._nativeClientFactory;
    }


    static fromNative(instance) {
        const client = new LocalMongoClient();
        client._ios = instance;
        return client;
    }

    db(name: string): LocalMongoDatabase {
        return LocalMongoDatabase.fromNative(this._ios.dbWithName(name));
    }
}

export class LocalMongoDatabase {
    private _ios: TNSLocalMongoDatabase;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new LocalMongoDatabase();
        db._ios = instance;
        return db;
    }

    get name(): string {
        return this._ios.name;
    }

    collection(name: string) {
        return LocalMongoCollection.fromNative(this._ios.collectionWithName(name));
    }
}

export class LocalMongoCollection<T> {
    private _ios: TNSLocalMongoCollection;

    private constructor() {

    }

    static fromNative(instance) {
        const db = new LocalMongoCollection();
        db._ios = instance;
        return db;
    }

    get namespace(): string {
        return this._ios.namespace_;
    }

    count(query?: object, options?: LocalCountOptions): number {
        const q = query || {};
        let opts = null;
        if (options) {
            opts = TNSLocalCountOptions.alloc().initWithLimit(options.limit);
        }
        return this._ios.countWithFilterOptions(serialize(q), opts);
    }

    find(
        query?: object,
        options?: LocalFindOptions
    ): LocalMongoReadOperation<T> {
        let q = query || {};
        let opts = null;
        if (options) {
            opts = TNSLocalFindOptions.alloc().initWithLimitProjectionSort(options.limit, options.projection, options.sort);
        }

        return LocalMongoReadOperation.fromNative(this._ios.findWithFilterOptions(serialize(q), opts)) as LocalMongoReadOperation<T>;
    }

    findOne(
        query?: object,
        options?: LocalFindOptions
    ) {
        const q = query || {};
        let opts = null;
        if (options) {
            opts = TNSLocalFindOptions.alloc().initWithLimitProjectionSort(options.limit, options.projection, options.sort);
        }

        let result = this._ios.findOneWithFilterOptions(serialize(q), opts);
        if (result) {
            return deserialize(result);
        }
        return null;
    }


    findOneAndUpdate(
        query: object,
        update: object,
        options?: LocalFindOneAndModifyOptions
    ) {
    }


    findOneAndReplace(
        query: object,
        replacement: object,
        options?: LocalFindOneAndModifyOptions
    ) {

    }

    findOneAndDelete(
        query: object,
        options?: LocalFindOneAndModifyOptions
    ) {

    }

    aggregate(pipeline: object[]): LocalMongoReadOperation<T> {
        const list = [];
        pipeline.forEach(item => {
            list.push(serialize(item));
        });
        return LocalMongoReadOperation.fromNative(this._ios.aggregateWithPipeline(list)) as LocalMongoReadOperation<T>;
    }


    insertOne(document: T) {
        let result = this._ios.insertOneWithDocument(serialize(document));
        if (result) {
            return <LocalInsertOneResult>{
                insertedId: result.insertedId
            };
        }
        return null;
    }


    insertMany(documents: T[]) {
        const list = [];
        documents.forEach(item => {
            list.push(serialize(item));
        });
        let result = this._ios.insertManyWithDocuments(list);
        if (result) {
            const array = [];
            const count = result.insertedIds.count;
            for (let i = 0; i < count; i++) {
                array.push(result.insertedIds.objectAtIndex(i));
            }
            return <LocalInsertManyResult>{
                insertedIds: new LocalInsertManyResult(array)
            };
        }
        return null;
    }


    deleteOne(query: object) {
        let result = this._ios.deleteOneWithFilter(serialize(query));
        if (result) {
            return <LocalDeleteResult>{
                deletedCount: result.deletedCount
            };
        }
        return null;
    }

    deleteMany(query: object) {
        const result = this._ios.deleteManyWithFilter(serialize(query));
        if (result) {
            return <LocalDeleteResult>{
                deletedCount: result.deletedCount
            };
        }
        return null;
    }

    updateOne(
        query: object,
        update: object,
        updateOptions?: LocalUpdateOptions
    ) {
        let opts = TNSRemoteUpdateOptions.alloc().initWithUpsert(updateOptions ? updateOptions.upsert : false);
        let result = this._ios.updateOneWithFilterUpdateUpdateOptions(serialize(document), serialize(update), opts);

        if (result) {
            return <RemoteUpdateResult>{
                upsertedId: result.upsertedId,
                matchedCount: result.matchedCount,
                modifiedCount: result.modifiedCount
            };
        }
        return null;
    }

    updateMany(
        query: object,
        update: object,
        updateOptions?: LocalUpdateOptions
    ) {

        let opts = TNSRemoteUpdateOptions.alloc().initWithUpsert(updateOptions ? updateOptions.upsert : false);
        let result = this._ios.updateManyWithFilterUpdateUpdateOptions(serialize(document), serialize(update), opts);

        if (result) {
            return <RemoteUpdateResult>{
                upsertedId: result.upsertedId,
                matchedCount: result.matchedCount,
                modifiedCount: result.modifiedCount
            };
        }
        return null;
    }
}

export class LocalMongoReadOperation<T> {
    private _ios: TNSLocalMongoReadOperation;

    private constructor() {
    }


    static fromNative(instance) {
        const operation = new LocalMongoReadOperation();
        operation._ios = instance;
        return operation;
    }

    public first() {
        const first = this._ios.first();
        if (first) {
            return deserialize(first);
        }
        return null;
    }


    public toArray() {
        const array = this._ios.toArray();
        if (array) {
            let _array = [];
            const count = array.count;
            for (let i = 0; i < count; i++) {
                _array.push(deserialize(array.objectAtIndex(i)));
            }
            return _array;
        }
        return null;
    }

    public iterator() {
        return LocalMongoCursor.fromNative(this._ios.iterator());
    }
}

export class LocalMongoCursor<T> {
    private _ios: TNSLocalMongoCursor;

    private constructor() {
    }

    static fromNative(instance) {
        const db = new LocalMongoCursor();
        db._ios = instance;
        return db;
    }

    public next() {
        const doc = this._ios.next();
        if (doc) {
            return deserialize(doc);
        }
        return null;
    }

    public hasNext() {
        return this._ios.hasNext();
    }
}

import { LocalCountOptions, LocalFindOneAndModifyOptions, LocalFindOptions, LocalUpdateOptions, ServiceClientFactory } from 'nativescript-mongo-stitch-core';
export declare class LocalMongoClient implements ServiceClientFactory {
    private _ios;
    private _nativeClientFactory;
    private constructor();
    static readonly factory: any;
    instance: any;
    readonly nativeClientFactory: any;
    static fromNative(instance: any): LocalMongoClient;
    db(name: string): LocalMongoDatabase;
}
export declare class LocalMongoDatabase {
    private _ios;
    private constructor();
    static fromNative(instance: any): LocalMongoDatabase;
    readonly name: string;
    collection(name: string): LocalMongoCollection<{}>;
}
export declare class LocalMongoCollection<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): LocalMongoCollection<{}>;
    readonly namespace: string;
    count(query?: object, options?: LocalCountOptions): number;
    find(query?: object, options?: LocalFindOptions): LocalMongoReadOperation<T>;
    findOne(query?: object, options?: LocalFindOptions): any;
    findOneAndUpdate(query: object, update: object, options?: LocalFindOneAndModifyOptions): void;
    findOneAndReplace(query: object, replacement: object, options?: LocalFindOneAndModifyOptions): void;
    findOneAndDelete(query: object, options?: LocalFindOneAndModifyOptions): void;
    aggregate(pipeline: object[]): LocalMongoReadOperation<T>;
    insertOne(document: T): any;
    insertMany(documents: T[]): any;
    deleteOne(query: object): any;
    deleteMany(query: object): any;
    updateOne(query: object, update: object, updateOptions?: LocalUpdateOptions): any;
    updateMany(query: object, update: object, updateOptions?: LocalUpdateOptions): any;
}
export declare class LocalMongoReadOperation<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): LocalMongoReadOperation<{}>;
    first(): any;
    toArray(): any[];
    iterator(): LocalMongoCursor<{}>;
}
export declare class LocalMongoCursor<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): LocalMongoCursor<{}>;
    next(): any;
    hasNext(): boolean;
}

import { LocalCountOptions, LocalFindOneAndModifyOptions, LocalFindOptions, LocalUpdateOptions, ServiceClientFactory } from 'nativescript-mongo-stitch-core';
export declare class LocalMongoClient implements ServiceClientFactory {
    private _android;
    private _nativeClientFactory;
    private constructor();
    static readonly factory: any;
    instance: any;
    readonly nativeClientFactory: any;
    static fromNative(instance: any): LocalMongoClient;
    db(name: string): LocalMongoDatabase;
}
export declare class LocalMongoDatabase {
    private _android;
    private constructor();
    static fromNative(instance: any): LocalMongoDatabase;
    readonly name: string;
    collection(name: string): LocalMongoCollection<{}>;
}
export declare class LocalMongoCollection<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): LocalMongoCollection<{}>;
    readonly namespace: string;
    count(query?: object, options?: LocalCountOptions): Promise<number>;
    find(query?: object, options?: LocalFindOptions): LocalMongoReadOperation<T>;
    findOne(query?: object, options?: LocalFindOptions): Promise<T>;
    findOneAndUpdate(query: object, update: object, options?: LocalFindOneAndModifyOptions): Promise<T>;
    findOneAndReplace(query: object, replacement: object, options?: LocalFindOneAndModifyOptions): Promise<T>;
    findOneAndDelete(query: object, options?: LocalFindOneAndModifyOptions): Promise<T>;
    aggregate(pipeline: object[]): LocalMongoReadOperation<T>;
    insertOne(document: T): Promise<any>;
    insertMany(documents: T[]): Promise<any>;
    deleteOne(query: object): Promise<any>;
    deleteMany(query: object): Promise<any>;
    updateOne(query: object, update: object, updateOptions?: LocalUpdateOptions): Promise<any>;
    updateMany(query: object, update: object, updateOptions?: LocalUpdateOptions): Promise<any>;
}
export declare class LocalMongoReadOperation<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): LocalMongoReadOperation<{}>;
    first(): Promise<T>;
    toArray(): Promise<{}>;
    iterator(): LocalMongoCursor<{}>;
}
export declare class LocalMongoCursor<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): LocalMongoCursor<{}>;
    next(): any;
    hasNext(): boolean;
}

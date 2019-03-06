import { NamedServiceClientFactory, RemoteCountOptions, RemoteFindOneAndModifyOptions, RemoteFindOptions, RemoteUpdateOptions } from 'nativescript-mongo-stitch-core';
export declare class RemoteMongoClient implements NamedServiceClientFactory {
    private _android;
    private _nativeFactory;
    private constructor();
    static readonly factory: RemoteMongoClient;
    instance: any;
    readonly nativeFactory: any;
    static fromNative(instance: any): RemoteMongoClient;
    db(name: string): RemoteMongoDatabase;
}
export declare class RemoteMongoDatabase {
    private _android;
    private constructor();
    static fromNative(instance: any): RemoteMongoDatabase;
    readonly name: string;
    collection(name: string): RemoteMongoCollection<{}>;
}
export declare class RemoteMongoCollection<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): RemoteMongoCollection<{}>;
    readonly namespace: string;
    count(query?: object, options?: RemoteCountOptions): Promise<number>;
    sync(): void;
    find(query?: object, options?: RemoteFindOptions): RemoteMongoReadOperation<T>;
    findOne(query?: object, options?: RemoteFindOptions): Promise<T>;
    findOneAndUpdate(query: object, update: object, options?: RemoteFindOneAndModifyOptions): Promise<T>;
    aggregate(pipeline: object[]): RemoteMongoReadOperation<T>;
    insertOne(document: T): Promise<any>;
    insertMany(documents: T[]): Promise<any>;
    deleteOne(query: object): Promise<any>;
    deleteMany(query: object): Promise<any>;
    updateOne(query: object, update: object, updateOptions?: RemoteUpdateOptions): Promise<any>;
    updateMany(query: object, update: object, updateOptions?: RemoteUpdateOptions): Promise<any>;
}
export declare class RemoteMongoReadOperation<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): RemoteMongoReadOperation<{}>;
    first(): Promise<T>;
    toArray(): Promise<{}>;
    iterator(): Promise<{}>;
}
export declare class RemoteMongoCursor<T> {
    private _android;
    private constructor();
    static fromNative(instance: any): RemoteMongoCursor<{}>;
    next(): Promise<T>;
}

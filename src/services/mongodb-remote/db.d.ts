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


import { NamedServiceClientFactory, RemoteCountOptions, RemoteFindOneAndModifyOptions, RemoteFindOptions, RemoteUpdateOptions } from 'nativescript-mongo-stitch-core';
import { ObjectId } from './bson';
export declare class RemoteMongoClient implements NamedServiceClientFactory {
    private _android;
    private _nativeFactory;
    private constructor();
    static readonly factory: any;
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
    sync(): Sync;
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
export declare enum ConflictResolvers {
    localWins = "localWins",
    remoteWins = "remoteWins"
}
export declare enum OperationType {
    DELETE = "delete",
    INSERT = "insert",
    REPLACE = "replace",
    UPDATE = "update",
    UNKNOWN = "unknown"
}
export declare class Sync {
    private _android;
    private constructor();
    static fromNative(instance: any): Sync;
    configure(conflictResolver: ConflictResolvers, listener: (error: {
        id: ObjectId;
        message: string;
    }) => void): void;
}


export declare class ObjectId {
    private _android;
    private constructor();
    static fromNative(instance: any): ObjectId;
    readonly counter: number;
    toHexString(): string;
    readonly date: Date;
    readonly time: number;
    readonly timeSecond: number;
    readonly timeStamp: number;
}
export declare class Bson {
    static ObjectId(): ObjectId;
}

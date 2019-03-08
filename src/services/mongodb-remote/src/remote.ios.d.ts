import { NamedServiceClientFactory, RemoteCountOptions, RemoteFindOneAndModifyOptions, RemoteFindOptions, RemoteUpdateDescription, RemoteUpdateOptions } from 'nativescript-mongo-stitch-core';
import { ObjectId } from './bson';
export declare class RemoteMongoClient implements NamedServiceClientFactory {
    private _ios;
    private _nativeFactory;
    private constructor();
    static readonly factory: any;
    instance: any;
    readonly nativeFactory: any;
    static fromNative(instance: any): RemoteMongoClient;
    db(name: string): RemoteMongoDatabase;
}
export declare class RemoteMongoDatabase {
    private _ios;
    private constructor();
    static fromNative(instance: any): RemoteMongoDatabase;
    readonly name: string;
    collection(name: string): RemoteMongoCollection<{}>;
}
export declare class RemoteMongoCollection<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): RemoteMongoCollection<{}>;
    readonly namespace: string;
    count(query?: object, options?: RemoteCountOptions): Promise<number>;
    sync(): Sync;
    find(query?: object, options?: RemoteFindOptions): RemoteMongoReadOperation<T>;
    findOne(query?: object, options?: RemoteFindOptions): Promise<T>;
    findOneAndUpdate(query: object, update: object, options?: RemoteFindOneAndModifyOptions): Promise<T>;
    aggregate(pipeline: object[]): RemoteMongoReadOperation<T>;
    insertOne(document: object): Promise<any>;
    insertMany(documents: object[]): Promise<any>;
    deleteOne(query: object): Promise<any>;
    deleteMany(query: object): Promise<any>;
    updateOne(query: object, update: object, updateOptions?: RemoteUpdateOptions): Promise<any>;
    updateMany(query: object, update: object, updateOptions?: RemoteUpdateOptions): Promise<any>;
}
export declare class RemoteMongoReadOperation<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): RemoteMongoReadOperation<{}>;
    first(): Promise<T>;
    toArray(): Promise<any[]>;
    iterator(): Promise<RemoteMongoCursor<any>>;
}
export declare class RemoteMongoCursor<T> {
    private _ios;
    private constructor();
    static fromNative(instance: any): RemoteMongoCursor<{}>;
    next(): Promise<T>;
    hasNext(): Promise<boolean>;
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
export declare class SyncEvent {
    hasUncommittedWrites: boolean;
    operationType: OperationType;
    namespace: string;
    updateDescription: RemoteUpdateDescription;
}
export declare class Sync {
    private _ios;
    private constructor();
    static fromNative(instance: any): Sync;
    configure(conflictResolver: ConflictResolvers, listener: (error?: {
        id: ObjectId;
        message: string;
    }, event?: SyncEvent) => void): void;
}

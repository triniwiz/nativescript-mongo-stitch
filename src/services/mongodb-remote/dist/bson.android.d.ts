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
export declare function deserialize(object: any): any;
export declare class Bson {
    static ObjectId(): ObjectId;
}

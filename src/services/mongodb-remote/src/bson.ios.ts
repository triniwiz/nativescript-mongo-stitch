export class ObjectId {
    private _ios; // Using js bson lib

    private constructor() {
    }

    public static fromNative(instance) {
        const objId = new ObjectId();
        objId._ios = instance;
        return objId;
    }

    toHexString() {
        return this._ios.toHexString();
    }

    get date() {
        return this._ios.getTimestamp();
    }

    get time() {
        const date = this._ios.getTimestamp() as Date;
        return date.getTime();
    }

    get timeSecond() {
        const date = this._ios.getTimestamp() as Date;
        return date.getSeconds();
    }

    get timeStamp() {
        const date = this._ios.getTimestamp() as Date;
        return date.getDate();
    }

}

import * as bson from 'bson';

export function deserialize(object: any) {
    if (object) {
        return (bson as any).EJSON.parse(object);
    }
    return null;
}

export function serialize(object: any) {
    if (object) {
        const newObject = {};
        Object.keys(object).forEach(key => {
            let value = object[key];
            if (value instanceof ObjectId) {
                value = {$oid: value.toHexString()};
            }
            newObject[key] = value;
        });
        console.log((bson as any).EJSON.stringify(newObject, { relaxed: false }))
        return (bson as any).EJSON.stringify(newObject, { relaxed: false });
    }
    return null;
}


export class Bson {
    public static ObjectId(id?: string): ObjectId {
        return ObjectId.fromNative(new (bson as any).ObjectId(id));
    }
}

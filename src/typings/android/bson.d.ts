declare module org {
	export module bson {
		export abstract class AbstractBsonReader extends org.bson.BsonReader {
			public static class: java.lang.Class<org.bson.AbstractBsonReader>;
			public readDecimal128(param0: string): org.bson.types.Decimal128;
			public peekBinarySubType(): number;
			public readJavaScript(): string;
			public readInt64(): number;
			public readObjectId(): org.bson.types.ObjectId;
			public doSkipValue(): void;
			public readString(): string;
			public readMinKey(param0: string): void;
			public doReadSymbol(): string;
			public setCurrentBsonType(param0: org.bson.BsonType): void;
			public doReadEndDocument(): void;
			public doReadMinKey(): void;
			public readDateTime(param0: string): number;
			public throwInvalidState(param0: string, param1: native.Array<org.bson.AbstractBsonReader.State>): void;
			public throwInvalidContextType(param0: string, param1: org.bson.BsonContextType, param2: native.Array<org.bson.BsonContextType>): void;
			public doReadJavaScript(): string;
			public doReadString(): string;
			public readDBPointer(param0: string): org.bson.BsonDbPointer;
			public skipValue(): void;
			public doReadTimestamp(): org.bson.BsonTimestamp;
			public mark(): void;
			public readSymbol(): string;
			public readBinaryData(param0: string): org.bson.BsonBinary;
			public getState(): org.bson.AbstractBsonReader.State;
			public verifyName(param0: string): void;
			public readMinKey(): void;
			public constructor();
			public doPeekBinarySubType(): number;
			public readEndArray(): void;
			public readMaxKey(param0: string): void;
			public verifyBSONType(param0: string, param1: org.bson.BsonType): void;
			public checkPreconditions(param0: string, param1: org.bson.BsonType): void;
			public doReadMaxKey(): void;
			public readBoolean(): boolean;
			public readTimestamp(): org.bson.BsonTimestamp;
			public doReadDBPointer(): org.bson.BsonDbPointer;
			public readStartDocument(): void;
			public doReadInt32(): number;
			public readEndDocument(): void;
			public getMark(): org.bson.BsonReaderMark;
			public doPeekBinarySize(): number;
			public readJavaScriptWithScope(): string;
			public readRegularExpression(): org.bson.BsonRegularExpression;
			public doReadBoolean(): boolean;
			public getCurrentBsonType(): org.bson.BsonType;
			public readRegularExpression(param0: string): org.bson.BsonRegularExpression;
			public doReadStartDocument(): void;
			public readBoolean(param0: string): boolean;
			public isClosed(): boolean;
			public peekBinarySize(): number;
			public doReadUndefined(): void;
			public doSkipName(): void;
			public doReadDateTime(): number;
			public readJavaScript(param0: string): string;
			public readTimestamp(param0: string): org.bson.BsonTimestamp;
			public readUndefined(): void;
			public setContext(param0: org.bson.AbstractBsonReader.Context): void;
			public doReadBinaryData(): org.bson.BsonBinary;
			public readStartArray(): void;
			public readDouble(param0: string): number;
			public doReadEndArray(): void;
			public readDouble(): number;
			public readInt32(): number;
			public readInt64(param0: string): number;
			public readJavaScriptWithScope(param0: string): string;
			public getNextState(): org.bson.AbstractBsonReader.State;
			public reset(): void;
			public doReadDouble(): number;
			public readName(param0: string): void;
			public close(): void;
			public readBsonType(): org.bson.BsonType;
			public doReadObjectId(): org.bson.types.ObjectId;
			public doReadDecimal128(): org.bson.types.Decimal128;
			public doReadJavaScriptWithScope(): string;
			public readDateTime(): number;
			public readDBPointer(): org.bson.BsonDbPointer;
			public getCurrentName(): string;
			public readObjectId(param0: string): org.bson.types.ObjectId;
			public readDecimal128(): org.bson.types.Decimal128;
			public doReadInt64(): number;
			public readNull(param0: string): void;
			public doReadNull(): void;
			public setState(param0: org.bson.AbstractBsonReader.State): void;
			public doReadRegularExpression(): org.bson.BsonRegularExpression;
			public readNull(): void;
			public readBinaryData(): org.bson.BsonBinary;
			public doReadStartArray(): void;
			public skipName(): void;
			public readMaxKey(): void;
			public readName(): string;
			public readUndefined(param0: string): void;
			public setCurrentName(param0: string): void;
			public readInt32(param0: string): number;
			public readSymbol(param0: string): string;
			public readString(param0: string): string;
			public getContext(): org.bson.AbstractBsonReader.Context;
		}
		export module AbstractBsonReader {
			export abstract class Context {
				public static class: java.lang.Class<org.bson.AbstractBsonReader.Context>;
				public getParentContext(): org.bson.AbstractBsonReader.Context;
				public constructor(param0: org.bson.AbstractBsonReader, param1: org.bson.AbstractBsonReader.Context, param2: org.bson.BsonContextType);
				public getContextType(): org.bson.BsonContextType;
			}
			export class Mark extends org.bson.BsonReaderMark {
				public static class: java.lang.Class<org.bson.AbstractBsonReader.Mark>;
				public reset(): void;
				public getParentContext(): org.bson.AbstractBsonReader.Context;
				public constructor(param0: org.bson.AbstractBsonReader);
				public getContextType(): org.bson.BsonContextType;
			}
			export class State {
				public static class: java.lang.Class<org.bson.AbstractBsonReader.State>;
				public static INITIAL: org.bson.AbstractBsonReader.State;
				public static TYPE: org.bson.AbstractBsonReader.State;
				public static NAME: org.bson.AbstractBsonReader.State;
				public static VALUE: org.bson.AbstractBsonReader.State;
				public static SCOPE_DOCUMENT: org.bson.AbstractBsonReader.State;
				public static END_OF_DOCUMENT: org.bson.AbstractBsonReader.State;
				public static END_OF_ARRAY: org.bson.AbstractBsonReader.State;
				public static DONE: org.bson.AbstractBsonReader.State;
				public static CLOSED: org.bson.AbstractBsonReader.State;
				public static valueOf(param0: string): org.bson.AbstractBsonReader.State;
				public static values(): native.Array<org.bson.AbstractBsonReader.State>;
			}
		}
	}
}

declare module org {
	export module bson {
		export abstract class AbstractBsonWriter extends org.bson.BsonWriter {
			public static class: java.lang.Class<org.bson.AbstractBsonWriter>;
			public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDBPointer(param0: org.bson.BsonDbPointer): void;
			public writeJavaScriptWithScope(param0: string): void;
			public pipeExtraElements(param0: java.util.List<org.bson.BsonElement>): void;
			public writeName(param0: string): void;
			public writeSymbol(param0: string, param1: string): void;
			public doWriteMaxKey(): void;
			public writeStartArray(param0: string): void;
			public doWriteDateTime(param0: number): void;
			public doWriteRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDouble(param0: number): void;
			public writeInt64(param0: number): void;
			public constructor(param0: org.bson.BsonWriterSettings);
			public doWriteSymbol(param0: string): void;
			public throwInvalidContextType(param0: string, param1: org.bson.BsonContextType, param2: native.Array<org.bson.BsonContextType>): void;
			public checkState(param0: native.Array<org.bson.AbstractBsonWriter.State>): boolean;
			public checkPreconditions(param0: string, param1: native.Array<org.bson.AbstractBsonWriter.State>): void;
			public writeStartDocument(param0: string): void;
			public writeJavaScriptWithScope(param0: string, param1: string): void;
			public writeNull(): void;
			public flush(): void;
			public doWriteEndArray(): void;
			public doWriteNull(): void;
			public writeBinaryData(param0: org.bson.BsonBinary): void;
			public writeSymbol(param0: string): void;
			public doWriteBinaryData(param0: org.bson.BsonBinary): void;
			public writeDBPointer(param0: org.bson.BsonDbPointer): void;
			public doWriteMinKey(): void;
			public writeStartDocument(): void;
			public doWriteObjectId(param0: org.bson.types.ObjectId): void;
			public writeBoolean(param0: boolean): void;
			public doWriteBoolean(param0: boolean): void;
			public writeJavaScript(param0: string, param1: string): void;
			public writeUndefined(): void;
			public abortPipe(): boolean;
			public doWriteTimestamp(param0: org.bson.BsonTimestamp): void;
			public writeDecimal128(param0: org.bson.types.Decimal128): void;
			public pipe(param0: org.bson.BsonReader, param1: java.util.List<org.bson.BsonElement>): void;
			public setState(param0: org.bson.AbstractBsonWriter.State): void;
			public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public getNextState(): org.bson.AbstractBsonWriter.State;
			public writeInt64(param0: string, param1: number): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.FieldNameValidator);
			public doWriteInt64(param0: number): void;
			public isClosed(): boolean;
			public writeDateTime(param0: string, param1: number): void;
			public writeDateTime(param0: number): void;
			public writeMinKey(): void;
			public pipe(param0: org.bson.BsonReader): void;
			public writeMaxKey(param0: string): void;
			public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public writeObjectId(param0: org.bson.types.ObjectId): void;
			public doWriteString(param0: string): void;
			public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
			public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
			public writeInt32(param0: number): void;
			public writeNull(param0: string): void;
			public writeString(param0: string): void;
			public writeDouble(param0: string, param1: number): void;
			public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
			public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
			public doWriteDecimal128(param0: org.bson.types.Decimal128): void;
			public doWriteJavaScript(param0: string): void;
			public doWriteName(param0: string): void;
			public writeString(param0: string, param1: string): void;
			public throwInvalidState(param0: string, param1: native.Array<org.bson.AbstractBsonWriter.State>): void;
			public doWriteStartDocument(): void;
			public writeMinKey(param0: string): void;
			public close(): void;
			public doWriteUndefined(): void;
			public writeStartArray(): void;
			public writeMaxKey(): void;
			public writeEndDocument(): void;
			public setContext(param0: org.bson.AbstractBsonWriter.Context): void;
			public getState(): org.bson.AbstractBsonWriter.State;
			public writeInt32(param0: string, param1: number): void;
			public doWriteJavaScriptWithScope(param0: string): void;
			public writeEndArray(): void;
			public writeBoolean(param0: string, param1: boolean): void;
			public doWriteEndDocument(): void;
			public writeDouble(param0: number): void;
			public doWriteInt32(param0: number): void;
			public writeJavaScript(param0: string): void;
			public getContext(): org.bson.AbstractBsonWriter.Context;
			public getName(): string;
			public writeUndefined(param0: string): void;
			public writeTimestamp(param0: org.bson.BsonTimestamp): void;
			public doWriteStartArray(): void;
		}
		export module AbstractBsonWriter {
			export class Context {
				public static class: java.lang.Class<org.bson.AbstractBsonWriter.Context>;
				public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context);
				public getParentContext(): org.bson.AbstractBsonWriter.Context;
				public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context, param2: org.bson.BsonContextType);
				public getContextType(): org.bson.BsonContextType;
				public copy(): org.bson.AbstractBsonWriter.Context;
			}
			export class Mark {
				public static class: java.lang.Class<org.bson.AbstractBsonWriter.Mark>;
				public reset(): void;
				public constructor(param0: org.bson.AbstractBsonWriter);
			}
			export class State {
				public static class: java.lang.Class<org.bson.AbstractBsonWriter.State>;
				public static INITIAL: org.bson.AbstractBsonWriter.State;
				public static NAME: org.bson.AbstractBsonWriter.State;
				public static VALUE: org.bson.AbstractBsonWriter.State;
				public static SCOPE_DOCUMENT: org.bson.AbstractBsonWriter.State;
				public static DONE: org.bson.AbstractBsonWriter.State;
				public static CLOSED: org.bson.AbstractBsonWriter.State;
				public static values(): native.Array<org.bson.AbstractBsonWriter.State>;
				public static valueOf(param0: string): org.bson.AbstractBsonWriter.State;
			}
		}
	}
}

declare module org {
	export module bson {
		export class BSON {
			public static class: java.lang.Class<org.bson.BSON>;
			public static EOO: number;
			public static NUMBER: number;
			public static STRING: number;
			public static OBJECT: number;
			public static ARRAY: number;
			public static BINARY: number;
			public static UNDEFINED: number;
			public static OID: number;
			public static BOOLEAN: number;
			public static DATE: number;
			public static NULL: number;
			public static REGEX: number;
			public static REF: number;
			public static CODE: number;
			public static SYMBOL: number;
			public static CODE_W_SCOPE: number;
			public static NUMBER_INT: number;
			public static TIMESTAMP: number;
			public static NUMBER_LONG: number;
			public static MINKEY: number;
			public static MAXKEY: number;
			public static B_GENERAL: number;
			public static B_FUNC: number;
			public static B_BINARY: number;
			public static B_UUID: number;
			public static toInt(param0: any): number;
			public static decode(param0: native.Array<number>): org.bson.BSONObject;
			public static clearEncodingHooks(): void;
			public static clearDecodingHooks(): void;
			public constructor();
			public static removeEncodingHook(param0: java.lang.Class<any>, param1: org.bson.Transformer): void;
			public static regexFlags(param0: string): number;
			public static addEncodingHook(param0: java.lang.Class<any>, param1: org.bson.Transformer): void;
			public static encode(param0: org.bson.BSONObject): native.Array<number>;
			public static applyEncodingHooks(param0: any): any;
			public static hasDecodeHooks(): boolean;
			public static clearAllHooks(): void;
			public static hasEncodeHooks(): boolean;
			public static addDecodingHook(param0: java.lang.Class<any>, param1: org.bson.Transformer): void;
			public static getDecodingHooks(param0: java.lang.Class<any>): java.util.List<org.bson.Transformer>;
			public static regexFlag(param0: string): number;
			public static removeDecodingHooks(param0: java.lang.Class<any>): void;
			public static applyDecodingHooks(param0: any): any;
			public static regexFlags(param0: number): string;
			public static getEncodingHooks(param0: java.lang.Class<any>): java.util.List<org.bson.Transformer>;
			public static removeEncodingHooks(param0: java.lang.Class<any>): void;
			public static removeDecodingHook(param0: java.lang.Class<any>, param1: org.bson.Transformer): void;
		}
	}
}

declare module org {
	export module bson {
		export class BSONCallback {
			public static class: java.lang.Class<org.bson.BSONCallback>;
			/**
			 * Constructs a new instance of the org.bson.BSONCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				objectStart(): void;
				objectStart(param0: string): void;
				objectDone(): any;
				reset(): void;
				get(): any;
				createBSONCallback(): org.bson.BSONCallback;
				arrayStart(): void;
				arrayStart(param0: string): void;
				arrayDone(): any;
				gotNull(param0: string): void;
				gotUndefined(param0: string): void;
				gotMinKey(param0: string): void;
				gotMaxKey(param0: string): void;
				gotBoolean(param0: string, param1: boolean): void;
				gotDouble(param0: string, param1: number): void;
				gotDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
				gotInt(param0: string, param1: number): void;
				gotLong(param0: string, param1: number): void;
				gotDate(param0: string, param1: number): void;
				gotString(param0: string, param1: string): void;
				gotSymbol(param0: string, param1: string): void;
				gotRegex(param0: string, param1: string, param2: string): void;
				gotTimestamp(param0: string, param1: number, param2: number): void;
				gotObjectId(param0: string, param1: org.bson.types.ObjectId): void;
				gotDBRef(param0: string, param1: string, param2: org.bson.types.ObjectId): void;
				gotBinaryArray(param0: string, param1: native.Array<number>): void;
				gotBinary(param0: string, param1: number, param2: native.Array<number>): void;
				gotUUID(param0: string, param1: number, param2: number): void;
				gotCode(param0: string, param1: string): void;
				gotCodeWScope(param0: string, param1: string, param2: any): void;
			});
			public constructor();
			public arrayDone(): any;
			public arrayStart(param0: string): void;
			public get(): any;
			public objectStart(): void;
			public gotTimestamp(param0: string, param1: number, param2: number): void;
			public gotSymbol(param0: string, param1: string): void;
			public gotDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public objectDone(): any;
			public arrayStart(): void;
			public gotMaxKey(param0: string): void;
			public reset(): void;
			public gotUndefined(param0: string): void;
			public gotMinKey(param0: string): void;
			public gotInt(param0: string, param1: number): void;
			public gotCode(param0: string, param1: string): void;
			public objectStart(param0: string): void;
			public gotDBRef(param0: string, param1: string, param2: org.bson.types.ObjectId): void;
			public gotDouble(param0: string, param1: number): void;
			public gotString(param0: string, param1: string): void;
			public gotCodeWScope(param0: string, param1: string, param2: any): void;
			public gotObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public gotBoolean(param0: string, param1: boolean): void;
			public gotBinaryArray(param0: string, param1: native.Array<number>): void;
			public gotBinary(param0: string, param1: number, param2: native.Array<number>): void;
			public gotUUID(param0: string, param1: number, param2: number): void;
			public gotNull(param0: string): void;
			public gotDate(param0: string, param1: number): void;
			public gotLong(param0: string, param1: number): void;
			public createBSONCallback(): org.bson.BSONCallback;
			public gotRegex(param0: string, param1: string, param2: string): void;
		}
	}
}

declare module org {
	export module bson {
		export class BSONCallbackAdapter extends org.bson.AbstractBsonWriter {
			public static class: java.lang.Class<org.bson.BSONCallbackAdapter>;
			public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDBPointer(param0: org.bson.BsonDbPointer): void;
			public writeJavaScriptWithScope(param0: string): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.BSONCallback);
			public writeName(param0: string): void;
			public writeSymbol(param0: string, param1: string): void;
			public doWriteMaxKey(): void;
			public writeStartArray(param0: string): void;
			public doWriteDateTime(param0: number): void;
			public doWriteRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDouble(param0: number): void;
			public writeInt64(param0: number): void;
			public constructor(param0: org.bson.BsonWriterSettings);
			public doWriteSymbol(param0: string): void;
			public getContext(): org.bson.BSONCallbackAdapter.Context;
			public writeStartDocument(param0: string): void;
			public writeJavaScriptWithScope(param0: string, param1: string): void;
			public writeNull(): void;
			public flush(): void;
			public doWriteEndArray(): void;
			public doWriteNull(): void;
			public writeBinaryData(param0: org.bson.BsonBinary): void;
			public writeSymbol(param0: string): void;
			public doWriteBinaryData(param0: org.bson.BsonBinary): void;
			public writeDBPointer(param0: org.bson.BsonDbPointer): void;
			public doWriteMinKey(): void;
			public writeStartDocument(): void;
			public doWriteObjectId(param0: org.bson.types.ObjectId): void;
			public writeBoolean(param0: boolean): void;
			public doWriteBoolean(param0: boolean): void;
			public writeJavaScript(param0: string, param1: string): void;
			public writeUndefined(): void;
			public doWriteTimestamp(param0: org.bson.BsonTimestamp): void;
			public writeDecimal128(param0: org.bson.types.Decimal128): void;
			public pipe(param0: org.bson.BsonReader, param1: java.util.List<org.bson.BsonElement>): void;
			public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public writeInt64(param0: string, param1: number): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.FieldNameValidator);
			public doWriteInt64(param0: number): void;
			public writeDateTime(param0: string, param1: number): void;
			public writeDateTime(param0: number): void;
			public writeMinKey(): void;
			public pipe(param0: org.bson.BsonReader): void;
			public writeMaxKey(param0: string): void;
			public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public writeObjectId(param0: org.bson.types.ObjectId): void;
			public doWriteString(param0: string): void;
			public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
			public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
			public writeInt32(param0: number): void;
			public writeNull(param0: string): void;
			public writeString(param0: string): void;
			public writeDouble(param0: string, param1: number): void;
			public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
			public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
			public doWriteDecimal128(param0: org.bson.types.Decimal128): void;
			public doWriteJavaScript(param0: string): void;
			public writeString(param0: string, param1: string): void;
			public doWriteStartDocument(): void;
			public writeMinKey(param0: string): void;
			public doWriteUndefined(): void;
			public writeStartArray(): void;
			public writeMaxKey(): void;
			public writeEndDocument(): void;
			public writeInt32(param0: string, param1: number): void;
			public doWriteJavaScriptWithScope(param0: string): void;
			public writeBoolean(param0: string, param1: boolean): void;
			public writeEndArray(): void;
			public doWriteEndDocument(): void;
			public writeDouble(param0: number): void;
			public doWriteInt32(param0: number): void;
			public writeJavaScript(param0: string): void;
			public getContext(): org.bson.AbstractBsonWriter.Context;
			public getName(): string;
			public writeUndefined(param0: string): void;
			public writeTimestamp(param0: org.bson.BsonTimestamp): void;
			public doWriteStartArray(): void;
		}
		export module BSONCallbackAdapter {
			export class Context extends org.bson.AbstractBsonWriter.Context {
				public static class: java.lang.Class<org.bson.BSONCallbackAdapter.Context>;
				public getParentContext(): org.bson.AbstractBsonWriter.Context;
				public getParentContext(): org.bson.BSONCallbackAdapter.Context;
			}
		}
	}
}

declare module org {
	export module bson {
		export class BSONDecoder {
			public static class: java.lang.Class<org.bson.BSONDecoder>;
			/**
			 * Constructs a new instance of the org.bson.BSONDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				readObject(param0: native.Array<number>): org.bson.BSONObject;
				readObject(param0: java.io.InputStream): org.bson.BSONObject;
				decode(param0: native.Array<number>, param1: org.bson.BSONCallback): number;
				decode(param0: java.io.InputStream, param1: org.bson.BSONCallback): number;
			});
			public constructor();
			public readObject(param0: java.io.InputStream): org.bson.BSONObject;
			public decode(param0: native.Array<number>, param1: org.bson.BSONCallback): number;
			public readObject(param0: native.Array<number>): org.bson.BSONObject;
			public decode(param0: java.io.InputStream, param1: org.bson.BSONCallback): number;
		}
	}
}

declare module org {
	export module bson {
		export class BSONEncoder {
			public static class: java.lang.Class<org.bson.BSONEncoder>;
			/**
			 * Constructs a new instance of the org.bson.BSONEncoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encode(param0: org.bson.BSONObject): native.Array<number>;
				putObject(param0: org.bson.BSONObject): number;
				done(): void;
				set(param0: org.bson.io.OutputBuffer): void;
			});
			public constructor();
			public putObject(param0: org.bson.BSONObject): number;
			public set(param0: org.bson.io.OutputBuffer): void;
			public done(): void;
			public encode(param0: org.bson.BSONObject): native.Array<number>;
		}
	}
}

declare module org {
	export module bson {
		export class BSONException {
			public static class: java.lang.Class<org.bson.BSONException>;
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number, param1: string);
			public getErrorCode(): java.lang.Integer;
			public constructor(param0: string);
			public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			public hasErrorCode(): boolean;
		}
	}
}

declare module org {
	export module bson {
		export class BSONObject {
			public static class: java.lang.Class<org.bson.BSONObject>;
			/**
			 * Constructs a new instance of the org.bson.BSONObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				put(param0: string, param1: any): any;
				putAll(param0: org.bson.BSONObject): void;
				putAll(param0: java.util.Map): void;
				get(param0: string): any;
				toMap(): java.util.Map;
				removeField(param0: string): any;
				containsKey(param0: string): boolean;
				containsField(param0: string): boolean;
				keySet(): java.util.Set<string>;
			});
			public constructor();
			public removeField(param0: string): any;
			public keySet(): java.util.Set<string>;
			public put(param0: string, param1: any): any;
			public get(param0: string): any;
			public toMap(): java.util.Map;
			public containsField(param0: string): boolean;
			public putAll(param0: org.bson.BSONObject): void;
			public containsKey(param0: string): boolean;
			public putAll(param0: java.util.Map): void;
		}
	}
}

declare module org {
	export module bson {
		export class BasicBSONCallback extends org.bson.BSONCallback {
			public static class: java.lang.Class<org.bson.BasicBSONCallback>;
			public arrayDone(): any;
			public arrayStart(param0: string): void;
			public get(): any;
			public objectStart(): void;
			public isStackEmpty(): boolean;
			public gotTimestamp(param0: string, param1: number, param2: number): void;
			public gotSymbol(param0: string, param1: string): void;
			public gotDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public objectDone(): any;
			public setRoot(param0: any): void;
			public arrayStart(): void;
			public gotMaxKey(param0: string): void;
			public cur(): org.bson.BSONObject;
			public gotUndefined(param0: string): void;
			public reset(): void;
			public gotMinKey(param0: string): void;
			public gotInt(param0: string, param1: number): void;
			public gotCode(param0: string, param1: string): void;
			public createList(): org.bson.BSONObject;
			public constructor();
			public objectStart(param0: string): void;
			public gotDBRef(param0: string, param1: string, param2: org.bson.types.ObjectId): void;
			public gotDouble(param0: string, param1: number): void;
			public create(param0: boolean, param1: java.util.List<string>): org.bson.BSONObject;
			public gotString(param0: string, param1: string): void;
			public gotCodeWScope(param0: string, param1: string, param2: any): void;
			public curName(): string;
			public gotObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public gotBoolean(param0: string, param1: boolean): void;
			public gotBinaryArray(param0: string, param1: native.Array<number>): void;
			public _put(param0: string, param1: any): void;
			public gotBinary(param0: string, param1: number, param2: native.Array<number>): void;
			public gotUUID(param0: string, param1: number, param2: number): void;
			public gotNull(param0: string): void;
			public gotDate(param0: string, param1: number): void;
			public create(): org.bson.BSONObject;
			public gotLong(param0: string, param1: number): void;
			public createBSONCallback(): org.bson.BSONCallback;
			public gotRegex(param0: string, param1: string, param2: string): void;
		}
	}
}

declare module org {
	export module bson {
		export class BasicBSONDecoder extends org.bson.BSONDecoder {
			public static class: java.lang.Class<org.bson.BasicBSONDecoder>;
			public readObject(param0: java.io.InputStream): org.bson.BSONObject;
			public decode(param0: native.Array<number>, param1: org.bson.BSONCallback): number;
			public readObject(param0: native.Array<number>): org.bson.BSONObject;
			public constructor();
			public decode(param0: java.io.InputStream, param1: org.bson.BSONCallback): number;
		}
	}
}

declare module org {
	export module bson {
		export class BasicBSONEncoder extends org.bson.BSONEncoder {
			public static class: java.lang.Class<org.bson.BasicBSONEncoder>;
			public set(param0: org.bson.io.OutputBuffer): void;
			public putObject(param0: org.bson.BSONObject): number;
			public done(): void;
			public putString(param0: string, param1: string): void;
			public putSpecial(param0: string, param1: any): boolean;
			public putUUID(param0: string, param1: java.util.UUID): void;
			public putArray(param0: string, param1: any): void;
			public encode(param0: org.bson.BSONObject): native.Array<number>;
			public _putObjectField(param0: string, param1: any): void;
			public putTimestamp(param0: string, param1: org.bson.types.BSONTimestamp): void;
			public putObject(param0: string, param1: org.bson.BSONObject): number;
			public putName(param0: string): void;
			public putIterable(param0: string, param1: java.lang.Iterable): void;
			public putCode(param0: string, param1: org.bson.types.Code): void;
			public putBinary(param0: string, param1: native.Array<number>): void;
			public putMinKey(param0: string): void;
			public putObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public getOutputBuffer(): org.bson.io.OutputBuffer;
			public putPattern(param0: string, param1: java.util.regex.Pattern): void;
			public putDate(param0: string, param1: java.util.Date): void;
			public putMaxKey(param0: string): void;
			public putNull(param0: string): void;
			public putMap(param0: string, param1: java.util.Map): void;
			public putNumber(param0: string, param1: java.lang.Number): void;
			public putUndefined(param0: string): void;
			public putSymbol(param0: string, param1: org.bson.types.Symbol): void;
			public putDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public constructor();
			public putBoolean(param0: string, param1: java.lang.Boolean): void;
			public getBsonWriter(): org.bson.BsonBinaryWriter;
			public putBinary(param0: string, param1: org.bson.types.Binary): void;
			public putCodeWScope(param0: string, param1: org.bson.types.CodeWScope): void;
		}
	}
}

declare module org {
	export module bson {
		export class BasicBSONObject extends java.util.LinkedHashMap<string,any> implements org.bson.BSONObject  {
			public static class: java.lang.Class<org.bson.BasicBSONObject>;
			public constructor(param0: java.util.Map);
			public keySet(): java.util.Set<string>;
			public equals(param0: any): boolean;
			public put(param0: string, param1: any): any;
			public getBoolean(param0: string): boolean;
			public getObjectId(param0: string, param1: org.bson.types.ObjectId): org.bson.types.ObjectId;
			public getObjectId(param0: string): org.bson.types.ObjectId;
			public getLong(param0: string, param1: number): number;
			public getDate(param0: string): java.util.Date;
			public getDate(param0: string, param1: java.util.Date): java.util.Date;
			public append(param0: string, param1: any): org.bson.BasicBSONObject;
			public constructor(param0: string, param1: any);
			public containsKey(param0: string): boolean;
			public getLong(param0: string): number;
			public get(param0: string): any;
			public getInt(param0: string): number;
			public toMap(): java.util.Map;
			public getInt(param0: string, param1: number): number;
			public constructor(param0: number);
			public getString(param0: string): string;
			public constructor();
			public containsField(param0: string): boolean;
			public removeField(param0: string): any;
			public getDouble(param0: string, param1: number): number;
			public getDouble(param0: string): number;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getString(param0: string, param1: string): string;
			public putAll(param0: org.bson.BSONObject): void;
			public putAll(param0: java.util.Map): void;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonArray extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonArray>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): native.Array<any>;
			public listIterator(param0: number): java.util.ListIterator<org.bson.BsonValue>;
			public add(param0: org.bson.BsonValue): boolean;
			public add(param0: number, param1: org.bson.BsonValue): void;
			public contains(param0: any): boolean;
			public clone(): org.bson.BsonArray;
			public getValues(): java.util.List<org.bson.BsonValue>;
			public remove(param0: number): org.bson.BsonValue;
			public clear(): void;
			public subList(param0: number, param1: number): java.util.List<org.bson.BsonValue>;
			public iterator(): java.util.Iterator<org.bson.BsonValue>;
			public size(): number;
			public isEmpty(): boolean;
			public toArray(param0: native.Array<any>): native.Array<any>;
			public constructor();
			public constructor(param0: java.util.List<any>);
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public listIterator(): java.util.ListIterator<org.bson.BsonValue>;
			public lastIndexOf(param0: any): number;
			public toString(): string;
			public get(param0: number): org.bson.BsonValue;
			public set(param0: number, param1: org.bson.BsonValue): org.bson.BsonValue;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public static parse(param0: string): org.bson.BsonArray;
			public getBsonType(): org.bson.BsonType;
			public indexOf(param0: any): number;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonBinary extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonBinary>;
			public getType(): number;
			public equals(param0: any): boolean;
			public constructor(param0: number, param1: native.Array<number>);
			public constructor(param0: org.bson.BsonBinarySubType, param1: native.Array<number>);
			public constructor(param0: native.Array<number>);
			public asUuid(): java.util.UUID;
			public asUuid(param0: org.bson.UuidRepresentation): java.util.UUID;
			public constructor(param0: java.util.UUID, param1: org.bson.UuidRepresentation);
			public constructor(param0: java.util.UUID);
			public getData(): native.Array<number>;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonBinaryReader extends org.bson.AbstractBsonReader {
			public static class: java.lang.Class<org.bson.BsonBinaryReader>;
			public readDecimal128(param0: string): org.bson.types.Decimal128;
			public peekBinarySubType(): number;
			public readJavaScript(): string;
			public readInt64(): number;
			public readObjectId(): org.bson.types.ObjectId;
			public doSkipValue(): void;
			public readMinKey(param0: string): void;
			public readString(): string;
			public doReadSymbol(): string;
			public doReadMinKey(): void;
			public doReadEndDocument(): void;
			public readDateTime(param0: string): number;
			public doReadJavaScript(): string;
			public getBsonInput(): org.bson.io.BsonInput;
			public doReadString(): string;
			public readDBPointer(param0: string): org.bson.BsonDbPointer;
			public skipValue(): void;
			public doReadTimestamp(): org.bson.BsonTimestamp;
			public mark(): void;
			public readBinaryData(param0: string): org.bson.BsonBinary;
			public readSymbol(): string;
			public readMinKey(): void;
			public constructor();
			public doPeekBinarySubType(): number;
			public readEndArray(): void;
			public readMaxKey(param0: string): void;
			public doReadMaxKey(): void;
			public readBoolean(): boolean;
			public readTimestamp(): org.bson.BsonTimestamp;
			public doReadDBPointer(): org.bson.BsonDbPointer;
			public readStartDocument(): void;
			public doReadInt32(): number;
			public readEndDocument(): void;
			public getMark(): org.bson.BsonReaderMark;
			public doPeekBinarySize(): number;
			public readJavaScriptWithScope(): string;
			public readRegularExpression(): org.bson.BsonRegularExpression;
			public doReadBoolean(): boolean;
			public getCurrentBsonType(): org.bson.BsonType;
			public readRegularExpression(param0: string): org.bson.BsonRegularExpression;
			public doReadStartDocument(): void;
			public readBoolean(param0: string): boolean;
			public getContext(): org.bson.BsonBinaryReader.Context;
			public peekBinarySize(): number;
			public doReadUndefined(): void;
			public doSkipName(): void;
			public doReadDateTime(): number;
			public constructor(param0: java.nio.ByteBuffer);
			public readJavaScript(param0: string): string;
			public readTimestamp(param0: string): org.bson.BsonTimestamp;
			public readUndefined(): void;
			public doReadBinaryData(): org.bson.BsonBinary;
			public readStartArray(): void;
			public readDouble(param0: string): number;
			public doReadEndArray(): void;
			public readDouble(): number;
			public readInt32(): number;
			public readInt64(param0: string): number;
			public reset(): void;
			public readJavaScriptWithScope(param0: string): string;
			public doReadDouble(): number;
			public readName(param0: string): void;
			public close(): void;
			public readBsonType(): org.bson.BsonType;
			public constructor(param0: org.bson.io.BsonInput);
			public doReadObjectId(): org.bson.types.ObjectId;
			public doReadDecimal128(): org.bson.types.Decimal128;
			public doReadJavaScriptWithScope(): string;
			public readDateTime(): number;
			public readDBPointer(): org.bson.BsonDbPointer;
			public getCurrentName(): string;
			public readObjectId(param0: string): org.bson.types.ObjectId;
			public readDecimal128(): org.bson.types.Decimal128;
			public doReadInt64(): number;
			public readNull(param0: string): void;
			public doReadNull(): void;
			public doReadRegularExpression(): org.bson.BsonRegularExpression;
			public readNull(): void;
			public readBinaryData(): org.bson.BsonBinary;
			public doReadStartArray(): void;
			public skipName(): void;
			public readMaxKey(): void;
			public readName(): string;
			public readUndefined(param0: string): void;
			public readInt32(param0: string): number;
			public readSymbol(param0: string): string;
			public getContext(): org.bson.AbstractBsonReader.Context;
			public readString(param0: string): string;
		}
		export module BsonBinaryReader {
			export class Context extends org.bson.AbstractBsonReader.Context {
				public static class: java.lang.Class<org.bson.BsonBinaryReader.Context>;
				public getParentContext(): org.bson.AbstractBsonReader.Context;
				public getParentContext(): org.bson.BsonBinaryReader.Context;
			}
			export class Mark extends org.bson.AbstractBsonReader.Mark {
				public static class: java.lang.Class<org.bson.BsonBinaryReader.Mark>;
				public reset(): void;
				public constructor(param0: org.bson.BsonBinaryReader);
				public constructor(param0: org.bson.AbstractBsonReader);
			}
		}
	}
}

declare module org {
	export module bson {
		export class BsonBinarySubType {
			public static class: java.lang.Class<org.bson.BsonBinarySubType>;
			public static BINARY: org.bson.BsonBinarySubType;
			public static FUNCTION: org.bson.BsonBinarySubType;
			public static OLD_BINARY: org.bson.BsonBinarySubType;
			public static UUID_LEGACY: org.bson.BsonBinarySubType;
			public static UUID_STANDARD: org.bson.BsonBinarySubType;
			public static MD5: org.bson.BsonBinarySubType;
			public static USER_DEFINED: org.bson.BsonBinarySubType;
			public getValue(): number;
			public static values(): native.Array<org.bson.BsonBinarySubType>;
			public static valueOf(param0: string): org.bson.BsonBinarySubType;
			public static isUuid(param0: number): boolean;
		}
	}
}

declare module org {
	export module bson {
		export class BsonBinaryWriter extends org.bson.AbstractBsonWriter {
			public static class: java.lang.Class<org.bson.BsonBinaryWriter>;
			public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDBPointer(param0: org.bson.BsonDbPointer): void;
			public writeJavaScriptWithScope(param0: string): void;
			public writeName(param0: string): void;
			public writeSymbol(param0: string, param1: string): void;
			public doWriteMaxKey(): void;
			public writeStartArray(param0: string): void;
			public doWriteDateTime(param0: number): void;
			public doWriteRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDouble(param0: number): void;
			public writeInt64(param0: number): void;
			public constructor(param0: org.bson.BsonWriterSettings);
			public doWriteSymbol(param0: string): void;
			public writeStartDocument(param0: string): void;
			public writeJavaScriptWithScope(param0: string, param1: string): void;
			public writeNull(): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.BsonBinaryWriterSettings, param2: org.bson.io.BsonOutput, param3: org.bson.FieldNameValidator);
			public flush(): void;
			public mark(): void;
			public doWriteEndArray(): void;
			public doWriteNull(): void;
			public writeBinaryData(param0: org.bson.BsonBinary): void;
			public writeSymbol(param0: string): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.BsonBinaryWriterSettings, param2: org.bson.io.BsonOutput);
			public doWriteBinaryData(param0: org.bson.BsonBinary): void;
			public writeDBPointer(param0: org.bson.BsonDbPointer): void;
			public doWriteMinKey(): void;
			public writeStartDocument(): void;
			public doWriteObjectId(param0: org.bson.types.ObjectId): void;
			public pushMaxDocumentSize(param0: number): void;
			public writeBoolean(param0: boolean): void;
			public doWriteBoolean(param0: boolean): void;
			public writeJavaScript(param0: string, param1: string): void;
			public writeUndefined(): void;
			public doWriteTimestamp(param0: org.bson.BsonTimestamp): void;
			public writeDecimal128(param0: org.bson.types.Decimal128): void;
			public pipe(param0: org.bson.BsonReader, param1: java.util.List<org.bson.BsonElement>): void;
			public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public writeInt64(param0: string, param1: number): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.FieldNameValidator);
			public doWriteInt64(param0: number): void;
			public writeDateTime(param0: string, param1: number): void;
			public writeDateTime(param0: number): void;
			public pipe(param0: org.bson.BsonReader): void;
			public writeMinKey(): void;
			public getBsonOutput(): org.bson.io.BsonOutput;
			public writeMaxKey(param0: string): void;
			public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public writeObjectId(param0: org.bson.types.ObjectId): void;
			public doWriteString(param0: string): void;
			public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
			public getContext(): org.bson.BsonBinaryWriter.Context;
			public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
			public writeInt32(param0: number): void;
			public writeNull(param0: string): void;
			public writeString(param0: string): void;
			public popMaxDocumentSize(): void;
			public writeDouble(param0: string, param1: number): void;
			public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
			public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
			public doWriteDecimal128(param0: org.bson.types.Decimal128): void;
			public doWriteJavaScript(param0: string): void;
			public constructor(param0: org.bson.io.BsonOutput, param1: org.bson.FieldNameValidator);
			public reset(): void;
			public writeString(param0: string, param1: string): void;
			public doWriteStartDocument(): void;
			public close(): void;
			public writeMinKey(param0: string): void;
			public doWriteUndefined(): void;
			public writeStartArray(): void;
			public writeMaxKey(): void;
			public writeEndDocument(): void;
			public constructor(param0: org.bson.io.BsonOutput);
			public writeInt32(param0: string, param1: number): void;
			public doWriteJavaScriptWithScope(param0: string): void;
			public writeBoolean(param0: string, param1: boolean): void;
			public writeEndArray(): void;
			public doWriteEndDocument(): void;
			public writeDouble(param0: number): void;
			public doWriteInt32(param0: number): void;
			public getBinaryWriterSettings(): org.bson.BsonBinaryWriterSettings;
			public writeJavaScript(param0: string): void;
			public getContext(): org.bson.AbstractBsonWriter.Context;
			public writeUndefined(param0: string): void;
			public writeTimestamp(param0: org.bson.BsonTimestamp): void;
			public doWriteStartArray(): void;
		}
		export module BsonBinaryWriter {
			export class Context extends org.bson.AbstractBsonWriter.Context {
				public static class: java.lang.Class<org.bson.BsonBinaryWriter.Context>;
				public constructor(param0: org.bson.BsonBinaryWriter, param1: org.bson.BsonBinaryWriter.Context);
				public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context);
				public getParentContext(): org.bson.AbstractBsonWriter.Context;
				public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context, param2: org.bson.BsonContextType);
				public copy(): org.bson.BsonBinaryWriter.Context;
				public getParentContext(): org.bson.BsonBinaryWriter.Context;
				public constructor(param0: org.bson.BsonBinaryWriter, param1: org.bson.BsonBinaryWriter.Context, param2: org.bson.BsonContextType, param3: number);
				public copy(): org.bson.AbstractBsonWriter.Context;
			}
			export class Mark extends org.bson.AbstractBsonWriter.Mark {
				public static class: java.lang.Class<org.bson.BsonBinaryWriter.Mark>;
				public reset(): void;
				public constructor(param0: org.bson.AbstractBsonWriter);
				public constructor(param0: org.bson.BsonBinaryWriter);
			}
		}
	}
}

declare module org {
	export module bson {
		export class BsonBinaryWriterSettings {
			public static class: java.lang.Class<org.bson.BsonBinaryWriterSettings>;
			public getMaxDocumentSize(): number;
			public constructor(param0: number);
			public constructor();
		}
	}
}

declare module org {
	export module bson {
		export class BsonBoolean extends org.bson.BsonValue implements java.lang.Comparable<org.bson.BsonBoolean>  {
			public static class: java.lang.Class<org.bson.BsonBoolean>;
			public static TRUE: org.bson.BsonBoolean;
			public static FALSE: org.bson.BsonBoolean;
			public getValue(): boolean;
			public equals(param0: any): boolean;
			public constructor(param0: boolean);
			public toString(): string;
			public compareTo(param0: org.bson.BsonBoolean): number;
			public static valueOf(param0: boolean): org.bson.BsonBoolean;
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonContextType {
			public static class: java.lang.Class<org.bson.BsonContextType>;
			public static TOP_LEVEL: org.bson.BsonContextType;
			public static DOCUMENT: org.bson.BsonContextType;
			public static ARRAY: org.bson.BsonContextType;
			public static JAVASCRIPT_WITH_SCOPE: org.bson.BsonContextType;
			public static SCOPE_DOCUMENT: org.bson.BsonContextType;
			public static values(): native.Array<org.bson.BsonContextType>;
			public static valueOf(param0: string): org.bson.BsonContextType;
		}
	}
}

declare module org {
	export module bson {
		export class BsonDateTime extends org.bson.BsonValue implements java.lang.Comparable<org.bson.BsonDateTime>  {
			public static class: java.lang.Class<org.bson.BsonDateTime>;
			public getValue(): number;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: number);
			public compareTo(param0: org.bson.BsonDateTime): number;
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonDbPointer extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonDbPointer>;
			public constructor(param0: string, param1: org.bson.types.ObjectId);
			public equals(param0: any): boolean;
			public getNamespace(): string;
			public toString(): string;
			public getId(): org.bson.types.ObjectId;
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonDecimal128 extends org.bson.BsonNumber {
			public static class: java.lang.Class<org.bson.BsonDecimal128>;
			public getValue(): org.bson.types.Decimal128;
			public doubleValue(): number;
			public decimal128Value(): org.bson.types.Decimal128;
			public equals(param0: any): boolean;
			public intValue(): number;
			public toString(): string;
			public constructor();
			public constructor(param0: org.bson.types.Decimal128);
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
			public longValue(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonDocument extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonDocument>;
			public keySet(): java.util.Set<string>;
			public containsValue(param0: any): boolean;
			public getBoolean(param0: any): org.bson.BsonBoolean;
			public isArray(): boolean;
			public isString(): boolean;
			public getBoolean(param0: any, param1: org.bson.BsonBoolean): org.bson.BsonBoolean;
			public asBsonReader(): org.bson.BsonReader;
			public constructor(param0: java.util.List<org.bson.BsonElement>);
			public isNull(): boolean;
			public getArray(param0: any, param1: org.bson.BsonArray): org.bson.BsonArray;
			public append(param0: string, param1: org.bson.BsonValue): org.bson.BsonDocument;
			public isTimestamp(param0: any): boolean;
			public getNumber(param0: any): org.bson.BsonNumber;
			public isString(param0: any): boolean;
			public isBoolean(): boolean;
			public isDateTime(): boolean;
			public getDateTime(param0: any, param1: org.bson.BsonDateTime): org.bson.BsonDateTime;
			public get(param0: any): org.bson.BsonValue;
			public isDocument(): boolean;
			public putAll(param0: java.util.Map<any,any>): void;
			public getDocument(param0: any): org.bson.BsonDocument;
			public isNull(param0: any): boolean;
			public isDocument(param0: any): boolean;
			public isDateTime(param0: any): boolean;
			public isObjectId(): boolean;
			public isBinary(): boolean;
			public clear(): void;
			public getDouble(param0: any, param1: org.bson.BsonDouble): org.bson.BsonDouble;
			public isInt64(): boolean;
			public getInt64(param0: any, param1: org.bson.BsonInt64): org.bson.BsonInt64;
			public isNumber(): boolean;
			public constructor();
			public getString(param0: any): org.bson.BsonString;
			public getRegularExpression(param0: any): org.bson.BsonRegularExpression;
			public isTimestamp(): boolean;
			public isBoolean(param0: any): boolean;
			public put(param0: string, param1: org.bson.BsonValue): org.bson.BsonValue;
			public getInt32(param0: any, param1: org.bson.BsonInt32): org.bson.BsonInt32;
			public isObjectId(param0: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<string,org.bson.BsonValue>>;
			public getDateTime(param0: any): org.bson.BsonDateTime;
			public containsKey(param0: any): boolean;
			public toJson(): string;
			public getBsonType(): org.bson.BsonType;
			public isInt32(): boolean;
			public equals(param0: any): boolean;
			public isDecimal128(param0: any): boolean;
			public getString(param0: any, param1: org.bson.BsonString): org.bson.BsonString;
			public getTimestamp(param0: any): org.bson.BsonTimestamp;
			public clone(): org.bson.BsonDocument;
			public getDouble(param0: any): org.bson.BsonDouble;
			public getDocument(param0: any, param1: org.bson.BsonDocument): org.bson.BsonDocument;
			public getBinary(param0: any): org.bson.BsonBinary;
			public getInt64(param0: any): org.bson.BsonInt64;
			public isNumber(param0: any): boolean;
			public getFirstKey(): string;
			public getRegularExpression(param0: any, param1: org.bson.BsonRegularExpression): org.bson.BsonRegularExpression;
			public isInt64(param0: any): boolean;
			public getArray(param0: any): org.bson.BsonArray;
			public isDouble(): boolean;
			public get(param0: any, param1: org.bson.BsonValue): org.bson.BsonValue;
			public constructor(param0: string, param1: org.bson.BsonValue);
			public remove(param0: any): org.bson.BsonValue;
			public isInt32(param0: any): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public static parse(param0: string): org.bson.BsonDocument;
			public getObjectId(param0: any): org.bson.BsonObjectId;
			public getDecimal128(param0: any): org.bson.BsonDecimal128;
			public getBinary(param0: any, param1: org.bson.BsonBinary): org.bson.BsonBinary;
			public toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			public isDouble(param0: any): boolean;
			public toString(): string;
			public getObjectId(param0: any, param1: org.bson.BsonObjectId): org.bson.BsonObjectId;
			public toJson(param0: org.bson.json.JsonWriterSettings): string;
			public isBinary(param0: any): boolean;
			public getNumber(param0: any, param1: org.bson.BsonNumber): org.bson.BsonNumber;
			public values(): java.util.Collection<org.bson.BsonValue>;
			public getInt32(param0: any): org.bson.BsonInt32;
			public getDecimal128(param0: any, param1: org.bson.BsonDecimal128): org.bson.BsonDecimal128;
			public getTimestamp(param0: any, param1: org.bson.BsonTimestamp): org.bson.BsonTimestamp;
			public isArray(param0: any): boolean;
			public isDecimal128(): boolean;
			public hashCode(): number;
		}
		export module BsonDocument {
			export class SerializationProxy {
				public static class: java.lang.Class<org.bson.BsonDocument.SerializationProxy>;
			}
		}
	}
}

declare module org {
	export module bson {
		export class BsonDocumentReader extends org.bson.AbstractBsonReader {
			public static class: java.lang.Class<org.bson.BsonDocumentReader>;
			public readDecimal128(param0: string): org.bson.types.Decimal128;
			public peekBinarySubType(): number;
			public readJavaScript(): string;
			public readInt64(): number;
			public readObjectId(): org.bson.types.ObjectId;
			public doSkipValue(): void;
			public readMinKey(param0: string): void;
			public readString(): string;
			public doReadSymbol(): string;
			public doReadEndDocument(): void;
			public doReadMinKey(): void;
			public readDateTime(param0: string): number;
			public doReadJavaScript(): string;
			public doReadString(): string;
			public readDBPointer(param0: string): org.bson.BsonDbPointer;
			public skipValue(): void;
			public doReadTimestamp(): org.bson.BsonTimestamp;
			public mark(): void;
			public readBinaryData(param0: string): org.bson.BsonBinary;
			public readSymbol(): string;
			public readMinKey(): void;
			public constructor();
			public doPeekBinarySubType(): number;
			public readEndArray(): void;
			public readMaxKey(param0: string): void;
			public doReadMaxKey(): void;
			public readBoolean(): boolean;
			public readTimestamp(): org.bson.BsonTimestamp;
			public doReadDBPointer(): org.bson.BsonDbPointer;
			public readStartDocument(): void;
			public doReadInt32(): number;
			public readEndDocument(): void;
			public getMark(): org.bson.BsonReaderMark;
			public doPeekBinarySize(): number;
			public readJavaScriptWithScope(): string;
			public readRegularExpression(): org.bson.BsonRegularExpression;
			public doReadBoolean(): boolean;
			public getCurrentBsonType(): org.bson.BsonType;
			public readRegularExpression(param0: string): org.bson.BsonRegularExpression;
			public doReadStartDocument(): void;
			public readBoolean(param0: string): boolean;
			public peekBinarySize(): number;
			public doReadUndefined(): void;
			public doSkipName(): void;
			public getContext(): org.bson.BsonDocumentReader.Context;
			public doReadDateTime(): number;
			public readJavaScript(param0: string): string;
			public readTimestamp(param0: string): org.bson.BsonTimestamp;
			public readUndefined(): void;
			public doReadBinaryData(): org.bson.BsonBinary;
			public readStartArray(): void;
			public readDouble(param0: string): number;
			public doReadEndArray(): void;
			public readDouble(): number;
			public readInt32(): number;
			public readInt64(param0: string): number;
			public reset(): void;
			public readJavaScriptWithScope(param0: string): string;
			public doReadDouble(): number;
			public readName(param0: string): void;
			public constructor(param0: org.bson.BsonDocument);
			public readBsonType(): org.bson.BsonType;
			public close(): void;
			public doReadObjectId(): org.bson.types.ObjectId;
			public doReadDecimal128(): org.bson.types.Decimal128;
			public doReadJavaScriptWithScope(): string;
			public readDateTime(): number;
			public readDBPointer(): org.bson.BsonDbPointer;
			public getCurrentName(): string;
			public readObjectId(param0: string): org.bson.types.ObjectId;
			public readDecimal128(): org.bson.types.Decimal128;
			public doReadInt64(): number;
			public readNull(param0: string): void;
			public doReadNull(): void;
			public doReadRegularExpression(): org.bson.BsonRegularExpression;
			public readNull(): void;
			public readBinaryData(): org.bson.BsonBinary;
			public doReadStartArray(): void;
			public skipName(): void;
			public readMaxKey(): void;
			public readName(): string;
			public readUndefined(param0: string): void;
			public readInt32(param0: string): number;
			public readSymbol(param0: string): string;
			public getContext(): org.bson.AbstractBsonReader.Context;
			public readString(param0: string): string;
		}
		export module BsonDocumentReader {
			export class BsonDocumentMarkableIterator<T>  extends java.util.Iterator<any> {
				public static class: java.lang.Class<org.bson.BsonDocumentReader.BsonDocumentMarkableIterator<any>>;
				public reset(): void;
				public remove(): void;
				public next(): any;
				public constructor(param0: java.util.Iterator<any>);
				public hasNext(): boolean;
				public mark(): void;
			}
			export class Context extends org.bson.AbstractBsonReader.Context {
				public static class: java.lang.Class<org.bson.BsonDocumentReader.Context>;
				public getNextElement(): java.util.Map.Entry<string,org.bson.BsonValue>;
				public reset(): void;
				public constructor(param0: org.bson.BsonDocumentReader, param1: org.bson.BsonDocumentReader.Context, param2: org.bson.BsonContextType, param3: org.bson.BsonArray);
				public constructor(param0: org.bson.BsonDocumentReader, param1: org.bson.BsonDocumentReader.Context, param2: org.bson.BsonContextType, param3: org.bson.BsonDocument);
				public constructor(param0: org.bson.AbstractBsonReader, param1: org.bson.AbstractBsonReader.Context, param2: org.bson.BsonContextType);
				public getNextValue(): org.bson.BsonValue;
				public mark(): void;
			}
			export class Mark extends org.bson.AbstractBsonReader.Mark {
				public static class: java.lang.Class<org.bson.BsonDocumentReader.Mark>;
				public reset(): void;
				public constructor(param0: org.bson.AbstractBsonReader);
				public constructor(param0: org.bson.BsonDocumentReader);
			}
		}
	}
}

declare module org {
	export module bson {
		export class BsonDocumentWrapper<T>  extends org.bson.BsonDocument {
			public static class: java.lang.Class<org.bson.BsonDocumentWrapper<any>>;
			public keySet(): java.util.Set<string>;
			public equals(param0: any): boolean;
			public static asBsonDocument(param0: any, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			public isUnwrapped(): boolean;
			public containsValue(param0: any): boolean;
			public clone(): org.bson.BsonDocument;
			public constructor(param0: java.util.List<org.bson.BsonElement>);
			public get(param0: any): org.bson.BsonValue;
			public putAll(param0: java.util.Map<any,any>): void;
			public getWrappedDocument(): any;
			public get(param0: any, param1: org.bson.BsonValue): org.bson.BsonValue;
			public constructor(param0: string, param1: org.bson.BsonValue);
			public remove(param0: any): org.bson.BsonValue;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public getEncoder(): org.bson.codecs.Encoder<any>;
			public constructor();
			public put(param0: string, param1: org.bson.BsonValue): org.bson.BsonValue;
			public toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			public toString(): string;
			public constructor(param0: any, param1: org.bson.codecs.Encoder<any>);
			public entrySet(): java.util.Set<java.util.Map.Entry<string,org.bson.BsonValue>>;
			public containsKey(param0: any): boolean;
			public values(): java.util.Collection<org.bson.BsonValue>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonDocumentWriter extends org.bson.AbstractBsonWriter {
			public static class: java.lang.Class<org.bson.BsonDocumentWriter>;
			public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDBPointer(param0: org.bson.BsonDbPointer): void;
			public writeJavaScriptWithScope(param0: string): void;
			public writeName(param0: string): void;
			public writeSymbol(param0: string, param1: string): void;
			public doWriteMaxKey(): void;
			public writeStartArray(param0: string): void;
			public doWriteDateTime(param0: number): void;
			public doWriteRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public doWriteDouble(param0: number): void;
			public writeInt64(param0: number): void;
			public constructor(param0: org.bson.BsonWriterSettings);
			public doWriteSymbol(param0: string): void;
			public writeStartDocument(param0: string): void;
			public writeJavaScriptWithScope(param0: string, param1: string): void;
			public writeNull(): void;
			public flush(): void;
			public doWriteEndArray(): void;
			public doWriteNull(): void;
			public writeBinaryData(param0: org.bson.BsonBinary): void;
			public writeSymbol(param0: string): void;
			public doWriteBinaryData(param0: org.bson.BsonBinary): void;
			public writeDBPointer(param0: org.bson.BsonDbPointer): void;
			public doWriteMinKey(): void;
			public writeStartDocument(): void;
			public doWriteObjectId(param0: org.bson.types.ObjectId): void;
			public getDocument(): org.bson.BsonDocument;
			public writeBoolean(param0: boolean): void;
			public doWriteBoolean(param0: boolean): void;
			public writeJavaScript(param0: string, param1: string): void;
			public writeUndefined(): void;
			public doWriteTimestamp(param0: org.bson.BsonTimestamp): void;
			public writeDecimal128(param0: org.bson.types.Decimal128): void;
			public pipe(param0: org.bson.BsonReader, param1: java.util.List<org.bson.BsonElement>): void;
			public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public writeInt64(param0: string, param1: number): void;
			public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.FieldNameValidator);
			public doWriteInt64(param0: number): void;
			public writeDateTime(param0: string, param1: number): void;
			public writeDateTime(param0: number): void;
			public writeMinKey(): void;
			public pipe(param0: org.bson.BsonReader): void;
			public writeMaxKey(param0: string): void;
			public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public writeObjectId(param0: org.bson.types.ObjectId): void;
			public doWriteString(param0: string): void;
			public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
			public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
			public writeInt32(param0: number): void;
			public writeNull(param0: string): void;
			public getContext(): org.bson.BsonDocumentWriter.Context;
			public writeString(param0: string): void;
			public writeDouble(param0: string, param1: number): void;
			public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
			public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
			public doWriteDecimal128(param0: org.bson.types.Decimal128): void;
			public doWriteJavaScript(param0: string): void;
			public writeString(param0: string, param1: string): void;
			public doWriteStartDocument(): void;
			public constructor(param0: org.bson.BsonDocument);
			public writeMinKey(param0: string): void;
			public doWriteUndefined(): void;
			public writeStartArray(): void;
			public writeMaxKey(): void;
			public writeEndDocument(): void;
			public writeInt32(param0: string, param1: number): void;
			public doWriteJavaScriptWithScope(param0: string): void;
			public writeBoolean(param0: string, param1: boolean): void;
			public writeEndArray(): void;
			public doWriteEndDocument(): void;
			public writeDouble(param0: number): void;
			public doWriteInt32(param0: number): void;
			public writeJavaScript(param0: string): void;
			public getContext(): org.bson.AbstractBsonWriter.Context;
			public writeUndefined(param0: string): void;
			public writeTimestamp(param0: org.bson.BsonTimestamp): void;
			public doWriteStartArray(): void;
		}
		export module BsonDocumentWriter {
			export class Context extends org.bson.AbstractBsonWriter.Context {
				public static class: java.lang.Class<org.bson.BsonDocumentWriter.Context>;
			}
		}
	}
}

declare module org {
	export module bson {
		export class BsonDouble extends org.bson.BsonNumber implements java.lang.Comparable<org.bson.BsonDouble>  {
			public static class: java.lang.Class<org.bson.BsonDouble>;
			public decimal128Value(): org.bson.types.Decimal128;
			public doubleValue(): number;
			public getValue(): number;
			public equals(param0: any): boolean;
			public intValue(): number;
			public toString(): string;
			public constructor(param0: number);
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public compareTo(param0: org.bson.BsonDouble): number;
			public longValue(): number;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonElement {
			public static class: java.lang.Class<org.bson.BsonElement>;
			public constructor(param0: string, param1: org.bson.BsonValue);
			public equals(param0: any): boolean;
			public getName(): string;
			public getValue(): org.bson.BsonValue;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonInt32 extends org.bson.BsonNumber implements java.lang.Comparable<org.bson.BsonInt32>  {
			public static class: java.lang.Class<org.bson.BsonInt32>;
			public decimal128Value(): org.bson.types.Decimal128;
			public doubleValue(): number;
			public getValue(): number;
			public equals(param0: any): boolean;
			public intValue(): number;
			public toString(): string;
			public compareTo(param0: org.bson.BsonInt32): number;
			public constructor(param0: number);
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public longValue(): number;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonInt64 extends org.bson.BsonNumber implements java.lang.Comparable<org.bson.BsonInt64>  {
			public static class: java.lang.Class<org.bson.BsonInt64>;
			public doubleValue(): number;
			public decimal128Value(): org.bson.types.Decimal128;
			public getValue(): number;
			public equals(param0: any): boolean;
			public intValue(): number;
			public compareTo(param0: org.bson.BsonInt64): number;
			public toString(): string;
			public constructor(param0: number);
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public longValue(): number;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonInvalidOperationException extends org.bson.BSONException {
			public static class: java.lang.Class<org.bson.BsonInvalidOperationException>;
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number, param1: string);
			public constructor(param0: string);
			public constructor(param0: number, param1: string, param2: java.lang.Throwable);
		}
	}
}

declare module org {
	export module bson {
		export class BsonJavaScript extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonJavaScript>;
			public equals(param0: any): boolean;
			public getCode(): string;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonJavaScriptWithScope extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonJavaScriptWithScope>;
			public equals(param0: any): boolean;
			public getCode(): string;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public constructor(param0: string, param1: org.bson.BsonDocument);
			public getScope(): org.bson.BsonDocument;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonMaxKey extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonMaxKey>;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonMaximumSizeExceededException extends org.bson.BsonSerializationException {
			public static class: java.lang.Class<org.bson.BsonMaximumSizeExceededException>;
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number, param1: string);
			public constructor(param0: string);
			public constructor(param0: number, param1: string, param2: java.lang.Throwable);
		}
	}
}

declare module org {
	export module bson {
		export class BsonMinKey extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonMinKey>;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonNull extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonNull>;
			public static VALUE: org.bson.BsonNull;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export abstract class BsonNumber extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonNumber>;
			public doubleValue(): number;
			public decimal128Value(): org.bson.types.Decimal128;
			public intValue(): number;
			public constructor();
			public longValue(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonObjectId extends org.bson.BsonValue implements java.lang.Comparable<org.bson.BsonObjectId>  {
			public static class: java.lang.Class<org.bson.BsonObjectId>;
			public getValue(): org.bson.types.ObjectId;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: org.bson.types.ObjectId);
			public compareTo(param0: org.bson.BsonObjectId): number;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonReader {
			public static class: java.lang.Class<org.bson.BsonReader>;
			/**
			 * Constructs a new instance of the org.bson.BsonReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCurrentBsonType(): org.bson.BsonType;
				getCurrentName(): string;
				readBinaryData(): org.bson.BsonBinary;
				peekBinarySubType(): number;
				peekBinarySize(): number;
				readBinaryData(param0: string): org.bson.BsonBinary;
				readBoolean(): boolean;
				readBoolean(param0: string): boolean;
				readBsonType(): org.bson.BsonType;
				readDateTime(): number;
				readDateTime(param0: string): number;
				readDouble(): number;
				readDouble(param0: string): number;
				readEndArray(): void;
				readEndDocument(): void;
				readInt32(): number;
				readInt32(param0: string): number;
				readInt64(): number;
				readInt64(param0: string): number;
				readDecimal128(): org.bson.types.Decimal128;
				readDecimal128(param0: string): org.bson.types.Decimal128;
				readJavaScript(): string;
				readJavaScript(param0: string): string;
				readJavaScriptWithScope(): string;
				readJavaScriptWithScope(param0: string): string;
				readMaxKey(): void;
				readMaxKey(param0: string): void;
				readMinKey(): void;
				readMinKey(param0: string): void;
				readName(): string;
				readName(param0: string): void;
				readNull(): void;
				readNull(param0: string): void;
				readObjectId(): org.bson.types.ObjectId;
				readObjectId(param0: string): org.bson.types.ObjectId;
				readRegularExpression(): org.bson.BsonRegularExpression;
				readRegularExpression(param0: string): org.bson.BsonRegularExpression;
				readDBPointer(): org.bson.BsonDbPointer;
				readDBPointer(param0: string): org.bson.BsonDbPointer;
				readStartArray(): void;
				readStartDocument(): void;
				readString(): string;
				readString(param0: string): string;
				readSymbol(): string;
				readSymbol(param0: string): string;
				readTimestamp(): org.bson.BsonTimestamp;
				readTimestamp(param0: string): org.bson.BsonTimestamp;
				readUndefined(): void;
				readUndefined(param0: string): void;
				skipName(): void;
				skipValue(): void;
				mark(): void;
				getMark(): org.bson.BsonReaderMark;
				reset(): void;
				close(): void;
			});
			public constructor();
			public readDecimal128(param0: string): org.bson.types.Decimal128;
			public peekBinarySubType(): number;
			public readJavaScript(): string;
			public readInt64(): number;
			public readObjectId(): org.bson.types.ObjectId;
			public readMinKey(param0: string): void;
			public readString(): string;
			public readDateTime(param0: string): number;
			public readDBPointer(param0: string): org.bson.BsonDbPointer;
			public skipValue(): void;
			public mark(): void;
			public readBinaryData(param0: string): org.bson.BsonBinary;
			public readSymbol(): string;
			public readMinKey(): void;
			public readEndArray(): void;
			public readMaxKey(param0: string): void;
			public readBoolean(): boolean;
			public readTimestamp(): org.bson.BsonTimestamp;
			public readStartDocument(): void;
			public readEndDocument(): void;
			public getMark(): org.bson.BsonReaderMark;
			public readJavaScriptWithScope(): string;
			public readRegularExpression(): org.bson.BsonRegularExpression;
			public getCurrentBsonType(): org.bson.BsonType;
			public readRegularExpression(param0: string): org.bson.BsonRegularExpression;
			public readBoolean(param0: string): boolean;
			public peekBinarySize(): number;
			public readJavaScript(param0: string): string;
			public readTimestamp(param0: string): org.bson.BsonTimestamp;
			public readUndefined(): void;
			public readStartArray(): void;
			public readDouble(param0: string): number;
			public readDouble(): number;
			public readInt32(): number;
			public readInt64(param0: string): number;
			public readJavaScriptWithScope(param0: string): string;
			public reset(): void;
			public readName(param0: string): void;
			public readBsonType(): org.bson.BsonType;
			public close(): void;
			public readDateTime(): number;
			public readDBPointer(): org.bson.BsonDbPointer;
			public getCurrentName(): string;
			public readObjectId(param0: string): org.bson.types.ObjectId;
			public readDecimal128(): org.bson.types.Decimal128;
			public readNull(param0: string): void;
			public readNull(): void;
			public readBinaryData(): org.bson.BsonBinary;
			public skipName(): void;
			public readMaxKey(): void;
			public readName(): string;
			public readUndefined(param0: string): void;
			public readInt32(param0: string): number;
			public readSymbol(param0: string): string;
			public readString(param0: string): string;
		}
	}
}

declare module org {
	export module bson {
		export class BsonReaderMark {
			public static class: java.lang.Class<org.bson.BsonReaderMark>;
			/**
			 * Constructs a new instance of the org.bson.BsonReaderMark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				reset(): void;
			});
			public constructor();
			public reset(): void;
		}
	}
}

declare module org {
	export module bson {
		export class BsonRegularExpression extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonRegularExpression>;
			public constructor(param0: string, param1: string);
			public equals(param0: any): boolean;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public getPattern(): string;
			public constructor(param0: string);
			public getOptions(): string;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonSerializationException extends org.bson.BSONException {
			public static class: java.lang.Class<org.bson.BsonSerializationException>;
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number, param1: string);
			public constructor(param0: string);
			public constructor(param0: number, param1: string, param2: java.lang.Throwable);
		}
	}
}

declare module org {
	export module bson {
		export class BsonString extends org.bson.BsonValue implements java.lang.Comparable<org.bson.BsonString>  {
			public static class: java.lang.Class<org.bson.BsonString>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public compareTo(param0: org.bson.BsonString): number;
			public getValue(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonSymbol extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonSymbol>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getBsonType(): org.bson.BsonType;
			public getSymbol(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonTimestamp extends org.bson.BsonValue implements java.lang.Comparable<org.bson.BsonTimestamp>  {
			public static class: java.lang.Class<org.bson.BsonTimestamp>;
			public getValue(): number;
			public equals(param0: any): boolean;
			public toString(): string;
			public getTime(): number;
			public constructor(param0: number);
			public compareTo(param0: org.bson.BsonTimestamp): number;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public constructor(param0: number, param1: number);
			public getInc(): number;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class BsonType {
			public static class: java.lang.Class<org.bson.BsonType>;
			public static END_OF_DOCUMENT: org.bson.BsonType;
			public static DOUBLE: org.bson.BsonType;
			public static STRING: org.bson.BsonType;
			public static DOCUMENT: org.bson.BsonType;
			public static ARRAY: org.bson.BsonType;
			public static BINARY: org.bson.BsonType;
			public static UNDEFINED: org.bson.BsonType;
			public static OBJECT_ID: org.bson.BsonType;
			public static BOOLEAN: org.bson.BsonType;
			public static DATE_TIME: org.bson.BsonType;
			public static NULL: org.bson.BsonType;
			public static REGULAR_EXPRESSION: org.bson.BsonType;
			public static DB_POINTER: org.bson.BsonType;
			public static JAVASCRIPT: org.bson.BsonType;
			public static SYMBOL: org.bson.BsonType;
			public static JAVASCRIPT_WITH_SCOPE: org.bson.BsonType;
			public static INT32: org.bson.BsonType;
			public static TIMESTAMP: org.bson.BsonType;
			public static INT64: org.bson.BsonType;
			public static DECIMAL128: org.bson.BsonType;
			public static MIN_KEY: org.bson.BsonType;
			public static MAX_KEY: org.bson.BsonType;
			public static values(): native.Array<org.bson.BsonType>;
			public getValue(): number;
			public static findByValue(param0: number): org.bson.BsonType;
			public isContainer(): boolean;
			public static valueOf(param0: string): org.bson.BsonType;
		}
	}
}

declare module org {
	export module bson {
		export class BsonUndefined extends org.bson.BsonValue {
			public static class: java.lang.Class<org.bson.BsonUndefined>;
			public equals(param0: any): boolean;
			public constructor();
			public getBsonType(): org.bson.BsonType;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export abstract class BsonValue {
			public static class: java.lang.Class<org.bson.BsonValue>;
			public isRegularExpression(): boolean;
			public asDBPointer(): org.bson.BsonDbPointer;
			public isArray(): boolean;
			public isString(): boolean;
			public asDecimal128(): org.bson.BsonDecimal128;
			public asBoolean(): org.bson.BsonBoolean;
			public isNull(): boolean;
			public asSymbol(): org.bson.BsonSymbol;
			public isBoolean(): boolean;
			public isDateTime(): boolean;
			public asJavaScriptWithScope(): org.bson.BsonJavaScriptWithScope;
			public isDocument(): boolean;
			public asInt64(): org.bson.BsonInt64;
			public asDouble(): org.bson.BsonDouble;
			public isObjectId(): boolean;
			public isDouble(): boolean;
			public isBinary(): boolean;
			public isSymbol(): boolean;
			public isInt64(): boolean;
			public asDocument(): org.bson.BsonDocument;
			public asArray(): org.bson.BsonArray;
			public isDBPointer(): boolean;
			public asJavaScript(): org.bson.BsonJavaScript;
			public asInt32(): org.bson.BsonInt32;
			public isNumber(): boolean;
			public asRegularExpression(): org.bson.BsonRegularExpression;
			public asBinary(): org.bson.BsonBinary;
			public asDateTime(): org.bson.BsonDateTime;
			public isJavaScriptWithScope(): boolean;
			public isTimestamp(): boolean;
			public isJavaScript(): boolean;
			public asObjectId(): org.bson.BsonObjectId;
			public asTimestamp(): org.bson.BsonTimestamp;
			public getBsonType(): org.bson.BsonType;
			public asString(): org.bson.BsonString;
			public asNumber(): org.bson.BsonNumber;
			public isInt32(): boolean;
			public isDecimal128(): boolean;
		}
	}
}

declare module org {
	export module bson {
		export class BsonWriter {
			public static class: java.lang.Class<org.bson.BsonWriter>;
			/**
			 * Constructs a new instance of the org.bson.BsonWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				flush(): void;
				writeBinaryData(param0: org.bson.BsonBinary): void;
				writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
				writeBoolean(param0: boolean): void;
				writeBoolean(param0: string, param1: boolean): void;
				writeDateTime(param0: number): void;
				writeDateTime(param0: string, param1: number): void;
				writeDBPointer(param0: org.bson.BsonDbPointer): void;
				writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
				writeDouble(param0: number): void;
				writeDouble(param0: string, param1: number): void;
				writeEndArray(): void;
				writeEndDocument(): void;
				writeInt32(param0: number): void;
				writeInt32(param0: string, param1: number): void;
				writeInt64(param0: number): void;
				writeInt64(param0: string, param1: number): void;
				writeDecimal128(param0: org.bson.types.Decimal128): void;
				writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
				writeJavaScript(param0: string): void;
				writeJavaScript(param0: string, param1: string): void;
				writeJavaScriptWithScope(param0: string): void;
				writeJavaScriptWithScope(param0: string, param1: string): void;
				writeMaxKey(): void;
				writeMaxKey(param0: string): void;
				writeMinKey(): void;
				writeMinKey(param0: string): void;
				writeName(param0: string): void;
				writeNull(): void;
				writeNull(param0: string): void;
				writeObjectId(param0: org.bson.types.ObjectId): void;
				writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
				writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
				writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
				writeStartArray(): void;
				writeStartArray(param0: string): void;
				writeStartDocument(): void;
				writeStartDocument(param0: string): void;
				writeString(param0: string): void;
				writeString(param0: string, param1: string): void;
				writeSymbol(param0: string): void;
				writeSymbol(param0: string, param1: string): void;
				writeTimestamp(param0: org.bson.BsonTimestamp): void;
				writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
				writeUndefined(): void;
				writeUndefined(param0: string): void;
				pipe(param0: org.bson.BsonReader): void;
			});
			public constructor();
			public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
			public writeJavaScriptWithScope(param0: string): void;
			public writeDateTime(param0: number): void;
			public writeDateTime(param0: string, param1: number): void;
			public writeName(param0: string): void;
			public writeSymbol(param0: string, param1: string): void;
			public writeMinKey(): void;
			public pipe(param0: org.bson.BsonReader): void;
			public writeStartArray(param0: string): void;
			public writeMaxKey(param0: string): void;
			public writeInt64(param0: number): void;
			public writeObjectId(param0: org.bson.types.ObjectId): void;
			public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
			public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
			public writeInt32(param0: number): void;
			public writeNull(param0: string): void;
			public writeString(param0: string): void;
			public writeDouble(param0: string, param1: number): void;
			public writeStartDocument(param0: string): void;
			public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
			public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
			public writeString(param0: string, param1: string): void;
			public writeJavaScriptWithScope(param0: string, param1: string): void;
			public writeMinKey(param0: string): void;
			public writeStartArray(): void;
			public writeNull(): void;
			public flush(): void;
			public writeMaxKey(): void;
			public writeEndDocument(): void;
			public writeBinaryData(param0: org.bson.BsonBinary): void;
			public writeSymbol(param0: string): void;
			public writeInt32(param0: string, param1: number): void;
			public writeBoolean(param0: string, param1: boolean): void;
			public writeEndArray(): void;
			public writeDouble(param0: number): void;
			public writeDBPointer(param0: org.bson.BsonDbPointer): void;
			public writeStartDocument(): void;
			public writeJavaScript(param0: string): void;
			public writeBoolean(param0: boolean): void;
			public writeJavaScript(param0: string, param1: string): void;
			public writeUndefined(): void;
			public writeDecimal128(param0: org.bson.types.Decimal128): void;
			public writeUndefined(param0: string): void;
			public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public writeInt64(param0: string, param1: number): void;
			public writeTimestamp(param0: org.bson.BsonTimestamp): void;
		}
	}
}

declare module org {
	export module bson {
		export class BsonWriterSettings {
			public static class: java.lang.Class<org.bson.BsonWriterSettings>;
			public getMaxSerializationDepth(): number;
			public constructor(param0: number);
			public constructor();
		}
	}
}

declare module org {
	export module bson {
		export class ByteBuf {
			public static class: java.lang.Class<org.bson.ByteBuf>;
			/**
			 * Constructs a new instance of the org.bson.ByteBuf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				capacity(): number;
				put(param0: number, param1: number): org.bson.ByteBuf;
				remaining(): number;
				put(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
				hasRemaining(): boolean;
				put(param0: number): org.bson.ByteBuf;
				flip(): org.bson.ByteBuf;
				array(): native.Array<number>;
				limit(): number;
				position(param0: number): org.bson.ByteBuf;
				clear(): org.bson.ByteBuf;
				order(param0: java.nio.ByteOrder): org.bson.ByteBuf;
				get(): number;
				get(param0: number): number;
				get(param0: native.Array<number>): org.bson.ByteBuf;
				get(param0: number, param1: native.Array<number>): org.bson.ByteBuf;
				get(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
				get(param0: number, param1: native.Array<number>, param2: number, param3: number): org.bson.ByteBuf;
				getLong(): number;
				getLong(param0: number): number;
				getDouble(): number;
				getDouble(param0: number): number;
				getInt(): number;
				getInt(param0: number): number;
				position(): number;
				limit(param0: number): org.bson.ByteBuf;
				asReadOnly(): org.bson.ByteBuf;
				duplicate(): org.bson.ByteBuf;
				asNIO(): java.nio.ByteBuffer;
				getReferenceCount(): number;
				retain(): org.bson.ByteBuf;
				release(): void;
			});
			public constructor();
			public flip(): org.bson.ByteBuf;
			public get(param0: number, param1: native.Array<number>, param2: number, param3: number): org.bson.ByteBuf;
			public asNIO(): java.nio.ByteBuffer;
			public put(param0: number, param1: number): org.bson.ByteBuf;
			public duplicate(): org.bson.ByteBuf;
			public limit(): number;
			public position(param0: number): org.bson.ByteBuf;
			public get(param0: number): number;
			public order(param0: java.nio.ByteOrder): org.bson.ByteBuf;
			public get(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
			public limit(param0: number): org.bson.ByteBuf;
			public release(): void;
			public put(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
			public getDouble(param0: number): number;
			public getInt(): number;
			public array(): native.Array<number>;
			public clear(): org.bson.ByteBuf;
			public getLong(): number;
			public getDouble(): number;
			public retain(): org.bson.ByteBuf;
			public hasRemaining(): boolean;
			public put(param0: number): org.bson.ByteBuf;
			public getReferenceCount(): number;
			public get(param0: number, param1: native.Array<number>): org.bson.ByteBuf;
			public asReadOnly(): org.bson.ByteBuf;
			public get(param0: native.Array<number>): org.bson.ByteBuf;
			public getLong(param0: number): number;
			public capacity(): number;
			public remaining(): number;
			public get(): number;
			public position(): number;
			public getInt(param0: number): number;
		}
	}
}

declare module org {
	export module bson {
		export class ByteBufNIO extends org.bson.ByteBuf {
			public static class: java.lang.Class<org.bson.ByteBufNIO>;
			public flip(): org.bson.ByteBuf;
			public get(param0: number, param1: native.Array<number>, param2: number, param3: number): org.bson.ByteBuf;
			public asNIO(): java.nio.ByteBuffer;
			public put(param0: number, param1: number): org.bson.ByteBuf;
			public constructor(param0: java.nio.ByteBuffer);
			public duplicate(): org.bson.ByteBuf;
			public limit(): number;
			public position(param0: number): org.bson.ByteBuf;
			public get(param0: number): number;
			public order(param0: java.nio.ByteOrder): org.bson.ByteBuf;
			public get(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
			public release(): void;
			public limit(param0: number): org.bson.ByteBuf;
			public put(param0: native.Array<number>, param1: number, param2: number): org.bson.ByteBuf;
			public retain(): org.bson.ByteBufNIO;
			public getDouble(param0: number): number;
			public getInt(): number;
			public array(): native.Array<number>;
			public clear(): org.bson.ByteBuf;
			public getLong(): number;
			public getDouble(): number;
			public retain(): org.bson.ByteBuf;
			public hasRemaining(): boolean;
			public put(param0: number): org.bson.ByteBuf;
			public getReferenceCount(): number;
			public get(param0: number, param1: native.Array<number>): org.bson.ByteBuf;
			public asReadOnly(): org.bson.ByteBuf;
			public get(param0: native.Array<number>): org.bson.ByteBuf;
			public getLong(param0: number): number;
			public capacity(): number;
			public remaining(): number;
			public get(): number;
			public position(): number;
			public getInt(param0: number): number;
		}
	}
}

declare module org {
	export module bson {
		export class Document extends java.lang.Object {
			public static class: java.lang.Class<org.bson.Document>;
			public keySet(): java.util.Set<string>;
			public put(param0: string, param1: any): any;
			public equals(param0: any): boolean;
			public containsValue(param0: any): boolean;
			public append(param0: string, param1: any): org.bson.Document;
			public get(param0: any): any;
			public getList(param0: any, param1: java.lang.Class, param2: java.util.List): java.util.List;
			public getString(param0: any): string;
			public toJson(param0: org.bson.json.JsonWriterSettings, param1: org.bson.codecs.Encoder<org.bson.Document>): string;
			public get(param0: any, param1: any): any;
			public remove(param0: any): any;
			public getDouble(param0: any): java.lang.Double;
			public putAll(param0: java.util.Map<any,any>): void;
			public constructor(param0: string, param1: any);
			public getInteger(param0: any, param1: number): number;
			public getEmbedded(param0: java.util.List, param1: java.lang.Class): any;
			public values(): java.util.Collection<any>;
			public toJson(param0: org.bson.codecs.Encoder<org.bson.Document>): string;
			public getList(param0: any, param1: java.lang.Class): java.util.List;
			public getEmbedded(param0: java.util.List, param1: any): any;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public get(param0: any, param1: java.lang.Class): any;
			public getLong(param0: any): java.lang.Long;
			public getBoolean(param0: any): java.lang.Boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
			public constructor();
			public getDate(param0: any): java.util.Date;
			public static parse(param0: string, param1: org.bson.codecs.Decoder<org.bson.Document>): org.bson.Document;
			public toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			public getBoolean(param0: any, param1: boolean): boolean;
			public toString(): string;
			public static parse(param0: string): org.bson.Document;
			public getObjectId(param0: any): org.bson.types.ObjectId;
			public toJson(param0: org.bson.json.JsonWriterSettings): string;
			public constructor(param0: java.util.Map<string,any>);
			public containsKey(param0: any): boolean;
			public toJson(): string;
			public getInteger(param0: any): java.lang.Integer;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module bson {
		export class EmptyBSONCallback extends org.bson.BSONCallback {
			public static class: java.lang.Class<org.bson.EmptyBSONCallback>;
			public arrayDone(): any;
			public arrayStart(param0: string): void;
			public get(): any;
			public objectStart(): void;
			public gotTimestamp(param0: string, param1: number, param2: number): void;
			public gotSymbol(param0: string, param1: string): void;
			public gotDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public objectDone(): any;
			public arrayStart(): void;
			public gotMaxKey(param0: string): void;
			public reset(): void;
			public gotUndefined(param0: string): void;
			public gotMinKey(param0: string): void;
			public gotInt(param0: string, param1: number): void;
			public gotCode(param0: string, param1: string): void;
			public constructor();
			public objectStart(param0: string): void;
			public gotDBRef(param0: string, param1: string, param2: org.bson.types.ObjectId): void;
			public gotDouble(param0: string, param1: number): void;
			public gotString(param0: string, param1: string): void;
			public gotCodeWScope(param0: string, param1: string, param2: any): void;
			public gotObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public gotBoolean(param0: string, param1: boolean): void;
			public gotBinaryArray(param0: string, param1: native.Array<number>): void;
			public gotBinary(param0: string, param1: number, param2: native.Array<number>): void;
			public gotUUID(param0: string, param1: number, param2: number): void;
			public gotNull(param0: string): void;
			public gotDate(param0: string, param1: number): void;
			public gotLong(param0: string, param1: number): void;
			public createBSONCallback(): org.bson.BSONCallback;
			public gotRegex(param0: string, param1: string, param2: string): void;
		}
	}
}

declare module org {
	export module bson {
		export class FieldNameValidator {
			public static class: java.lang.Class<org.bson.FieldNameValidator>;
			/**
			 * Constructs a new instance of the org.bson.FieldNameValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				validate(param0: string): boolean;
				getValidatorForField(param0: string): org.bson.FieldNameValidator;
			});
			public constructor();
			public validate(param0: string): boolean;
			public getValidatorForField(param0: string): org.bson.FieldNameValidator;
		}
	}
}

declare module org {
	export module bson {
		export class LazyBSONCallback extends org.bson.EmptyBSONCallback {
			public static class: java.lang.Class<org.bson.LazyBSONCallback>;
			public createArray(param0: native.Array<number>, param1: number): java.util.List;
			public arrayDone(): any;
			public arrayStart(param0: string): void;
			public get(): any;
			public objectStart(): void;
			public createDBRef(param0: string, param1: org.bson.types.ObjectId): any;
			public gotTimestamp(param0: string, param1: number, param2: number): void;
			public gotSymbol(param0: string, param1: string): void;
			public gotDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
			public objectDone(): any;
			public arrayStart(): void;
			public gotMaxKey(param0: string): void;
			public createObject(param0: native.Array<number>, param1: number): any;
			public reset(): void;
			public gotUndefined(param0: string): void;
			public gotMinKey(param0: string): void;
			public gotInt(param0: string, param1: number): void;
			public gotCode(param0: string, param1: string): void;
			public constructor();
			public objectStart(param0: string): void;
			public gotDBRef(param0: string, param1: string, param2: org.bson.types.ObjectId): void;
			public gotDouble(param0: string, param1: number): void;
			public gotString(param0: string, param1: string): void;
			public gotCodeWScope(param0: string, param1: string, param2: any): void;
			public gotObjectId(param0: string, param1: org.bson.types.ObjectId): void;
			public gotBoolean(param0: string, param1: boolean): void;
			public gotBinaryArray(param0: string, param1: native.Array<number>): void;
			public gotBinary(param0: string, param1: number, param2: native.Array<number>): void;
			public gotUUID(param0: string, param1: number, param2: number): void;
			public gotNull(param0: string): void;
			public gotDate(param0: string, param1: number): void;
			public gotLong(param0: string, param1: number): void;
			public createBSONCallback(): org.bson.BSONCallback;
			public gotRegex(param0: string, param1: string, param2: string): void;
		}
	}
}

declare module org {
	export module bson {
		export class LazyBSONDecoder extends org.bson.BSONDecoder {
			public static class: java.lang.Class<org.bson.LazyBSONDecoder>;
			public readObject(param0: java.io.InputStream): org.bson.BSONObject;
			public decode(param0: native.Array<number>, param1: org.bson.BSONCallback): number;
			public readObject(param0: native.Array<number>): org.bson.BSONObject;
			public constructor();
			public decode(param0: java.io.InputStream, param1: org.bson.BSONCallback): number;
		}
	}
}

declare module org {
	export module bson {
		export class LazyBSONList extends org.bson.LazyBSONObject {
			public static class: java.lang.Class<org.bson.LazyBSONList>;
			public keySet(): java.util.Set<string>;
			public put(param0: string, param1: any): any;
			public toArray(): native.Array<any>;
			public constructor(param0: native.Array<number>, param1: org.bson.LazyBSONCallback);
			public subList(param0: number, param1: number): java.util.List;
			public remove(param0: number): any;
			public listIterator(): java.util.ListIterator;
			public addAll(param0: java.util.Collection): boolean;
			public contains(param0: any): boolean;
			public constructor(param0: native.Array<number>, param1: number, param2: org.bson.LazyBSONCallback);
			public get(param0: number): any;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public add(param0: number, param1: any): void;
			public containsKey(param0: string): boolean;
			public clear(): void;
			public get(param0: string): any;
			public removeAll(param0: java.util.Collection): boolean;
			public toMap(): java.util.Map;
			public size(): number;
			public containsAll(param0: java.util.Collection): boolean;
			public toArray(param0: native.Array<any>): native.Array<any>;
			public containsField(param0: string): boolean;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public removeField(param0: string): any;
			public lastIndexOf(param0: any): number;
			public listIterator(param0: number): java.util.ListIterator;
			public retainAll(param0: java.util.Collection): boolean;
			public add(param0: any): boolean;
			public indexOf(param0: any): number;
			public iterator(): java.util.Iterator;
			public putAll(param0: org.bson.BSONObject): void;
			public putAll(param0: java.util.Map): void;
		}
		export module LazyBSONList {
			export class LazyBSONListIterator {
				public static class: java.lang.Class<org.bson.LazyBSONList.LazyBSONListIterator>;
				public remove(): void;
				public next(): any;
				public hasNext(): boolean;
				public constructor(param0: org.bson.LazyBSONList);
			}
		}
	}
}

declare module org {
	export module bson {
		export class LazyBSONObject extends org.bson.BSONObject {
			public static class: java.lang.Class<org.bson.LazyBSONObject>;
			public keySet(): java.util.Set<string>;
			public equals(param0: any): boolean;
			public put(param0: string, param1: any): any;
			public get(param0: string): any;
			public constructor(param0: native.Array<number>, param1: org.bson.LazyBSONCallback);
			public toMap(): java.util.Map;
			public isEmpty(): boolean;
			public getBytes(): native.Array<number>;
			public pipe(param0: java.io.OutputStream): number;
			public getOffset(): number;
			public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
			public containsField(param0: string): boolean;
			public removeField(param0: string): any;
			public getBSONSize(): number;
			public constructor(param0: native.Array<number>, param1: number, param2: org.bson.LazyBSONCallback);
			public containsKey(param0: string): boolean;
			public putAll(param0: org.bson.BSONObject): void;
			public hashCode(): number;
			public putAll(param0: java.util.Map): void;
		}
	}
}

declare module org {
	export module bson {
		export class NoOpFieldNameValidator extends org.bson.FieldNameValidator {
			public static class: java.lang.Class<org.bson.NoOpFieldNameValidator>;
			public validate(param0: string): boolean;
			public getValidatorForField(param0: string): org.bson.FieldNameValidator;
		}
	}
}

declare module org {
	export module bson {
		export class RawBsonArray extends org.bson.BsonArray {
			public static class: java.lang.Class<org.bson.RawBsonArray>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public clear(): void;
			public equals(param0: any): boolean;
			public add(param0: org.bson.BsonValue): boolean;
			public constructor();
			public constructor(param0: native.Array<number>);
			public add(param0: number, param1: org.bson.BsonValue): void;
			public constructor(param0: java.util.List<any>);
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public clone(): org.bson.BsonArray;
			public remove(param0: number): org.bson.BsonValue;
			public set(param0: number, param1: org.bson.BsonValue): org.bson.BsonValue;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public hashCode(): number;
		}
		export module RawBsonArray {
			export class RawBsonArrayList extends java.util.AbstractList<org.bson.BsonValue> {
				public static class: java.lang.Class<org.bson.RawBsonArray.RawBsonArrayList>;
				public get(param0: number): org.bson.BsonValue;
				public listIterator(param0: number): java.util.ListIterator<org.bson.BsonValue>;
				public iterator(): java.util.Iterator<org.bson.BsonValue>;
				public listIterator(): java.util.ListIterator<org.bson.BsonValue>;
				public size(): number;
			}
			export module RawBsonArrayList {
				export class Itr extends java.util.Iterator<org.bson.BsonValue> {
					public static class: java.lang.Class<org.bson.RawBsonArray.RawBsonArrayList.Itr>;
					public setCursor(param0: number): void;
					public next(): org.bson.BsonValue;
					public getCursor(): number;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class ListItr extends org.bson.RawBsonArray.RawBsonArrayList.Itr implements java.util.ListIterator<org.bson.BsonValue>  {
					public static class: java.lang.Class<org.bson.RawBsonArray.RawBsonArrayList.ListItr>;
					public previousIndex(): number;
					public previous(): org.bson.BsonValue;
					public nextIndex(): number;
					public hasPrevious(): boolean;
					public set(param0: org.bson.BsonValue): void;
					public add(param0: org.bson.BsonValue): void;
				}
			}
			export class SerializationProxy {
				public static class: java.lang.Class<org.bson.RawBsonArray.SerializationProxy>;
			}
		}
	}
}

declare module org {
	export module bson {
		export class RawBsonDocument extends org.bson.BsonDocument {
			public static class: java.lang.Class<org.bson.RawBsonDocument>;
			public keySet(): java.util.Set<string>;
			public equals(param0: any): boolean;
			public containsValue(param0: any): boolean;
			public clone(): org.bson.BsonDocument;
			public constructor(param0: java.util.List<org.bson.BsonElement>);
			public append(param0: string, param1: org.bson.BsonValue): org.bson.BsonDocument;
			public get(param0: any): org.bson.BsonValue;
			public getFirstKey(): string;
			public decode(param0: org.bson.codecs.Codec<any>): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public constructor(param0: any, param1: org.bson.codecs.Codec<any>);
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public get(param0: any, param1: org.bson.BsonValue): org.bson.BsonValue;
			public constructor(param0: string, param1: org.bson.BsonValue);
			public clear(): void;
			public remove(param0: any): org.bson.BsonValue;
			public static parse(param0: string): org.bson.RawBsonDocument;
			public isEmpty(): boolean;
			public size(): number;
			public getByteBuffer(): org.bson.ByteBuf;
			public static parse(param0: string): org.bson.BsonDocument;
			public constructor();
			public constructor(param0: native.Array<number>);
			public put(param0: string, param1: org.bson.BsonValue): org.bson.BsonValue;
			public decode(param0: org.bson.codecs.Decoder<any>): any;
			public toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			public entrySet(): java.util.Set<java.util.Map.Entry<string,org.bson.BsonValue>>;
			public toJson(param0: org.bson.json.JsonWriterSettings): string;
			public containsKey(param0: any): boolean;
			public values(): java.util.Collection<org.bson.BsonValue>;
			public toJson(): string;
			public hashCode(): number;
		}
		export module RawBsonDocument {
			export class SerializationProxy {
				public static class: java.lang.Class<org.bson.RawBsonDocument.SerializationProxy>;
			}
		}
	}
}

declare module org {
	export module bson {
		export class RawBsonValueHelper {
			public static class: java.lang.Class<org.bson.RawBsonValueHelper>;
		}
	}
}

declare module org {
	export module bson {
		export class StringUtils {
			public static class: java.lang.Class<org.bson.StringUtils>;
			public static join(param0: string, param1: java.util.Collection<any>): string;
		}
	}
}

declare module org {
	export module bson {
		export class Transformer {
			public static class: java.lang.Class<org.bson.Transformer>;
			/**
			 * Constructs a new instance of the org.bson.Transformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				transform(param0: any): any;
			});
			public constructor();
			public transform(param0: any): any;
		}
	}
}

declare module org {
	export module bson {
		export class UuidRepresentation {
			public static class: java.lang.Class<org.bson.UuidRepresentation>;
			public static STANDARD: org.bson.UuidRepresentation;
			public static C_SHARP_LEGACY: org.bson.UuidRepresentation;
			public static JAVA_LEGACY: org.bson.UuidRepresentation;
			public static PYTHON_LEGACY: org.bson.UuidRepresentation;
			public static valueOf(param0: string): org.bson.UuidRepresentation;
			public static values(): native.Array<org.bson.UuidRepresentation>;
		}
	}
}

declare module org {
	export module bson {
		export module assertions {
			export class Assertions {
				public static class: java.lang.Class<org.bson.assertions.Assertions>;
				public static isTrue(param0: string, param1: boolean): void;
				public static notNull(param0: string, param1: any): any;
				public static convertToType(param0: java.lang.Class, param1: any, param2: string): any;
				public static isTrueArgument(param0: string, param1: boolean): void;
				public static isTrueArgument(param0: string, param1: any, param2: boolean): any;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class AtomicBooleanCodec extends org.bson.codecs.Codec<java.util.concurrent.atomic.AtomicBoolean> {
				public static class: java.lang.Class<org.bson.codecs.AtomicBooleanCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.util.concurrent.atomic.AtomicBoolean, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.concurrent.atomic.AtomicBoolean;
				public getEncoderClass(): java.lang.Class<java.util.concurrent.atomic.AtomicBoolean>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class AtomicIntegerCodec extends org.bson.codecs.Codec<java.util.concurrent.atomic.AtomicInteger> {
				public static class: java.lang.Class<org.bson.codecs.AtomicIntegerCodec>;
				public getEncoderClass(): java.lang.Class<java.util.concurrent.atomic.AtomicInteger>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.concurrent.atomic.AtomicInteger;
				public encode(param0: org.bson.BsonWriter, param1: java.util.concurrent.atomic.AtomicInteger, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class AtomicLongCodec extends org.bson.codecs.Codec<java.util.concurrent.atomic.AtomicLong> {
				public static class: java.lang.Class<org.bson.codecs.AtomicLongCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.concurrent.atomic.AtomicLong;
				public getEncoderClass(): java.lang.Class<java.util.concurrent.atomic.AtomicLong>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: java.util.concurrent.atomic.AtomicLong, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BigDecimalCodec extends org.bson.codecs.Codec<java.math.BigDecimal> {
				public static class: java.lang.Class<org.bson.codecs.BigDecimalCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.math.BigDecimal, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.math.BigDecimal;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public getEncoderClass(): java.lang.Class<java.math.BigDecimal>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BinaryCodec extends org.bson.codecs.Codec<org.bson.types.Binary> {
				public static class: java.lang.Class<org.bson.codecs.BinaryCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.Binary;
				public getEncoderClass(): java.lang.Class<org.bson.types.Binary>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.Binary, param2: org.bson.codecs.EncoderContext): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BooleanCodec extends org.bson.codecs.Codec<java.lang.Boolean> {
				public static class: java.lang.Class<org.bson.codecs.BooleanCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Boolean, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<java.lang.Boolean>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Boolean;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonArrayCodec extends org.bson.codecs.Codec<org.bson.BsonArray> {
				public static class: java.lang.Class<org.bson.codecs.BsonArrayCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonArray;
				public readValue(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonValue;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry);
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonArray, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonArray>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonBinaryCodec extends org.bson.codecs.Codec<org.bson.BsonBinary> {
				public static class: java.lang.Class<org.bson.codecs.BsonBinaryCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonBinary;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public getEncoderClass(): java.lang.Class<org.bson.BsonBinary>;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonBinary, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonBooleanCodec extends org.bson.codecs.Codec<org.bson.BsonBoolean> {
				public static class: java.lang.Class<org.bson.codecs.BsonBooleanCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonBoolean;
				public getEncoderClass(): java.lang.Class<org.bson.BsonBoolean>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonBoolean, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDBPointerCodec extends org.bson.codecs.Codec<org.bson.BsonDbPointer> {
				public static class: java.lang.Class<org.bson.codecs.BsonDBPointerCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDbPointer;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDbPointer, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
				public getEncoderClass(): java.lang.Class<org.bson.BsonDbPointer>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDateTimeCodec extends org.bson.codecs.Codec<org.bson.BsonDateTime> {
				public static class: java.lang.Class<org.bson.codecs.BsonDateTimeCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDateTime, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonDateTime>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDateTime;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDecimal128Codec extends org.bson.codecs.Codec<org.bson.BsonDecimal128> {
				public static class: java.lang.Class<org.bson.codecs.BsonDecimal128Codec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDecimal128, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonDecimal128>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDecimal128;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDocumentCodec extends org.bson.codecs.CollectibleCodec<org.bson.BsonDocument> {
				public static class: java.lang.Class<org.bson.codecs.BsonDocumentCodec>;
				public generateIdIfAbsentFromDocument(param0: any): any;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry);
				public getDocumentId(param0: org.bson.BsonDocument): org.bson.BsonValue;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDocument;
				public documentHasId(param0: any): boolean;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public generateIdIfAbsentFromDocument(param0: org.bson.BsonDocument): org.bson.BsonDocument;
				public constructor();
				public getDocumentId(param0: any): org.bson.BsonValue;
				public readValue(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonValue;
				public getEncoderClass(): java.lang.Class<org.bson.BsonDocument>;
				public documentHasId(param0: org.bson.BsonDocument): boolean;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDocument, param2: org.bson.codecs.EncoderContext): void;
				public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDocumentWrapperCodec extends org.bson.codecs.Codec<org.bson.BsonDocumentWrapper<any>> {
				public static class: java.lang.Class<org.bson.codecs.BsonDocumentWrapperCodec>;
				public constructor(param0: org.bson.codecs.Codec<org.bson.BsonDocument>);
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDocumentWrapper<any>, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonDocumentWrapper<any>>;
				public getEncoderClass(): java.lang.Class<any>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDocumentWrapper<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonDoubleCodec extends org.bson.codecs.Codec<org.bson.BsonDouble> {
				public static class: java.lang.Class<org.bson.codecs.BsonDoubleCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonDouble, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonDouble>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonDouble;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonInt32Codec extends org.bson.codecs.Codec<org.bson.BsonInt32> {
				public static class: java.lang.Class<org.bson.codecs.BsonInt32Codec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonInt32;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public getEncoderClass(): java.lang.Class<org.bson.BsonInt32>;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonInt32, param2: org.bson.codecs.EncoderContext): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonInt64Codec extends org.bson.codecs.Codec<org.bson.BsonInt64> {
				public static class: java.lang.Class<org.bson.codecs.BsonInt64Codec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonInt64;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonInt64>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonInt64, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonJavaScriptCodec extends org.bson.codecs.Codec<org.bson.BsonJavaScript> {
				public static class: java.lang.Class<org.bson.codecs.BsonJavaScriptCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonJavaScript;
				public getEncoderClass(): java.lang.Class<org.bson.BsonJavaScript>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonJavaScript, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonJavaScriptWithScopeCodec extends org.bson.codecs.Codec<org.bson.BsonJavaScriptWithScope> {
				public static class: java.lang.Class<org.bson.codecs.BsonJavaScriptWithScopeCodec>;
				public constructor(param0: org.bson.codecs.Codec<org.bson.BsonDocument>);
				public getEncoderClass(): java.lang.Class<org.bson.BsonJavaScriptWithScope>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonJavaScriptWithScope;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonJavaScriptWithScope, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonMaxKeyCodec extends org.bson.codecs.Codec<org.bson.BsonMaxKey> {
				public static class: java.lang.Class<org.bson.codecs.BsonMaxKeyCodec>;
				public getEncoderClass(): java.lang.Class<org.bson.BsonMaxKey>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonMaxKey, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonMaxKey;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonMinKeyCodec extends org.bson.codecs.Codec<org.bson.BsonMinKey> {
				public static class: java.lang.Class<org.bson.codecs.BsonMinKeyCodec>;
				public getEncoderClass(): java.lang.Class<org.bson.BsonMinKey>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonMinKey, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonMinKey;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonNullCodec extends org.bson.codecs.Codec<org.bson.BsonNull> {
				public static class: java.lang.Class<org.bson.codecs.BsonNullCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonNull;
				public getEncoderClass(): java.lang.Class<org.bson.BsonNull>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonNull, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonObjectIdCodec extends org.bson.codecs.Codec<org.bson.BsonObjectId> {
				public static class: java.lang.Class<org.bson.codecs.BsonObjectIdCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonObjectId;
				public getEncoderClass(): java.lang.Class<org.bson.BsonObjectId>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonObjectId, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonRegularExpressionCodec extends org.bson.codecs.Codec<org.bson.BsonRegularExpression> {
				public static class: java.lang.Class<org.bson.codecs.BsonRegularExpressionCodec>;
				public getEncoderClass(): java.lang.Class<org.bson.BsonRegularExpression>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonRegularExpression;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonRegularExpression, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonStringCodec extends org.bson.codecs.Codec<org.bson.BsonString> {
				public static class: java.lang.Class<org.bson.codecs.BsonStringCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonString;
				public getEncoderClass(): java.lang.Class<org.bson.BsonString>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonString, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonSymbolCodec extends org.bson.codecs.Codec<org.bson.BsonSymbol> {
				public static class: java.lang.Class<org.bson.codecs.BsonSymbolCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonSymbol;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonSymbol>;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonSymbol, param2: org.bson.codecs.EncoderContext): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonTimestampCodec extends org.bson.codecs.Codec<org.bson.BsonTimestamp> {
				public static class: java.lang.Class<org.bson.codecs.BsonTimestampCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonTimestamp;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonTimestamp, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public getEncoderClass(): java.lang.Class<org.bson.BsonTimestamp>;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonTypeClassMap {
				public static class: java.lang.Class<org.bson.codecs.BsonTypeClassMap>;
				public constructor(param0: java.util.Map<org.bson.BsonType,java.lang.Class<any>>);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public get(param0: org.bson.BsonType): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonTypeCodecMap {
				public static class: java.lang.Class<org.bson.codecs.BsonTypeCodecMap>;
				public constructor(param0: org.bson.codecs.BsonTypeClassMap, param1: org.bson.codecs.configuration.CodecRegistry);
				public get(param0: org.bson.BsonType): org.bson.codecs.Codec<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonUndefinedCodec extends org.bson.codecs.Codec<org.bson.BsonUndefined> {
				public static class: java.lang.Class<org.bson.codecs.BsonUndefinedCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonUndefined, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.BsonUndefined>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonUndefined;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonValueCodec extends org.bson.codecs.Codec<org.bson.BsonValue> {
				public static class: java.lang.Class<org.bson.codecs.BsonValueCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.BsonValue, param2: org.bson.codecs.EncoderContext): void;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry);
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.BsonValue;
				public getEncoderClass(): java.lang.Class<any>;
				public getEncoderClass(): java.lang.Class<org.bson.BsonValue>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class BsonValueCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.BsonValueCodecProvider>;
				public static getBsonTypeClassMap(): org.bson.codecs.BsonTypeClassMap;
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				public static getClassForBsonType(param0: org.bson.BsonType): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ByteArrayCodec extends org.bson.codecs.Codec<native.Array<number>> {
				public static class: java.lang.Class<org.bson.codecs.ByteArrayCodec>;
				public getEncoderClass(): java.lang.Class<native.Array<number>>;
				public encode(param0: org.bson.BsonWriter, param1: native.Array<number>, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): native.Array<number>;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ByteCodec extends org.bson.codecs.Codec<java.lang.Byte> {
				public static class: java.lang.Class<org.bson.codecs.ByteCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Byte, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Byte;
				public getEncoderClass(): java.lang.Class<any>;
				public getEncoderClass(): java.lang.Class<java.lang.Byte>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class CharacterCodec extends org.bson.codecs.Codec<java.lang.Character> {
				public static class: java.lang.Class<org.bson.codecs.CharacterCodec>;
				public getEncoderClass(): java.lang.Class<java.lang.Character>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Character, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Character;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class CodeCodec extends org.bson.codecs.Codec<org.bson.types.Code> {
				public static class: java.lang.Class<org.bson.codecs.CodeCodec>;
				public getEncoderClass(): java.lang.Class<org.bson.types.Code>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.Code, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.Code;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class CodeWithScopeCodec extends org.bson.codecs.Codec<org.bson.types.CodeWithScope> {
				public static class: java.lang.Class<org.bson.codecs.CodeWithScopeCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.CodeWithScope;
				public getEncoderClass(): java.lang.Class<org.bson.types.CodeWithScope>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public constructor(param0: org.bson.codecs.Codec<org.bson.Document>);
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.CodeWithScope, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class Codec<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.codecs.Codec<any>>;
				/**
				 * Constructs a new instance of the org.bson.codecs.Codec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encode(param0: org.bson.BsonWriter, param1: T, param2: org.bson.codecs.EncoderContext): void;
					getEncoderClass(): java.lang.Class<T>;
					decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): T;
				});
				public constructor();
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): T;
				public encode(param0: org.bson.BsonWriter, param1: T, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<T>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class CollectibleCodec<T>  extends org.bson.codecs.Codec<any> {
				public static class: java.lang.Class<org.bson.codecs.CollectibleCodec<any>>;
				/**
				 * Constructs a new instance of the org.bson.codecs.CollectibleCodec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					generateIdIfAbsentFromDocument(param0: any): any;
					documentHasId(param0: any): boolean;
					getDocumentId(param0: any): org.bson.BsonValue;
					encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					getEncoderClass(): java.lang.Class<any>;
					decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				});
				public constructor();
				public getDocumentId(param0: any): org.bson.BsonValue;
				public generateIdIfAbsentFromDocument(param0: any): any;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public documentHasId(param0: any): boolean;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class DateCodec extends org.bson.codecs.Codec<java.util.Date> {
				public static class: java.lang.Class<org.bson.codecs.DateCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.Date;
				public getEncoderClass(): java.lang.Class<java.util.Date>;
				public encode(param0: org.bson.BsonWriter, param1: java.util.Date, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class Decimal128Codec extends org.bson.codecs.Codec<org.bson.types.Decimal128> {
				public static class: java.lang.Class<org.bson.codecs.Decimal128Codec>;
				public getEncoderClass(): java.lang.Class<org.bson.types.Decimal128>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.Decimal128;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.Decimal128, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class Decoder<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.codecs.Decoder<any>>;
				/**
				 * Constructs a new instance of the org.bson.codecs.Decoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): T;
				});
				public constructor();
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): T;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class DecoderContext {
				public static class: java.lang.Class<org.bson.codecs.DecoderContext>;
				public static builder(): org.bson.codecs.DecoderContext.Builder;
				public decodeWithChildContext(param0: org.bson.codecs.Decoder<any>, param1: org.bson.BsonReader): any;
				public hasCheckedDiscriminator(): boolean;
			}
			export module DecoderContext {
				export class Builder {
					public static class: java.lang.Class<org.bson.codecs.DecoderContext.Builder>;
					public build(): org.bson.codecs.DecoderContext;
					public checkedDiscriminator(param0: boolean): org.bson.codecs.DecoderContext.Builder;
					public hasCheckedDiscriminator(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class DocumentCodec extends org.bson.codecs.CollectibleCodec<org.bson.Document> {
				public static class: java.lang.Class<org.bson.codecs.DocumentCodec>;
				public generateIdIfAbsentFromDocument(param0: any): any;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry);
				public encode(param0: org.bson.BsonWriter, param1: org.bson.Document, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.Document;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap, param2: org.bson.Transformer);
				public documentHasId(param0: any): boolean;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public generateIdIfAbsentFromDocument(param0: org.bson.Document): org.bson.Document;
				public constructor();
				public getDocumentId(param0: org.bson.Document): org.bson.BsonValue;
				public getDocumentId(param0: any): org.bson.BsonValue;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap);
				public documentHasId(param0: org.bson.Document): boolean;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public getEncoderClass(): java.lang.Class<org.bson.Document>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class DocumentCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.DocumentCodecProvider>;
				public constructor(param0: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap, param1: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap);
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class DoubleCodec extends org.bson.codecs.Codec<java.lang.Double> {
				public static class: java.lang.Class<org.bson.codecs.DoubleCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Double;
				public getEncoderClass(): java.lang.Class<java.lang.Double>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Double, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class Encoder<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.codecs.Encoder<any>>;
				/**
				 * Constructs a new instance of the org.bson.codecs.Encoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encode(param0: org.bson.BsonWriter, param1: T, param2: org.bson.codecs.EncoderContext): void;
					getEncoderClass(): java.lang.Class<T>;
				});
				public constructor();
				public encode(param0: org.bson.BsonWriter, param1: T, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<T>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class EncoderContext {
				public static class: java.lang.Class<org.bson.codecs.EncoderContext>;
				public encodeWithChildContext(param0: org.bson.codecs.Encoder<any>, param1: org.bson.BsonWriter, param2: any): void;
				public static builder(): org.bson.codecs.EncoderContext.Builder;
				public isEncodingCollectibleDocument(): boolean;
				public getChildContext(): org.bson.codecs.EncoderContext;
			}
			export module EncoderContext {
				export class Builder {
					public static class: java.lang.Class<org.bson.codecs.EncoderContext.Builder>;
					public build(): org.bson.codecs.EncoderContext;
					public isEncodingCollectibleDocument(param0: boolean): org.bson.codecs.EncoderContext.Builder;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class FloatCodec extends org.bson.codecs.Codec<java.lang.Float> {
				public static class: java.lang.Class<org.bson.codecs.FloatCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Float, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Float;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public getEncoderClass(): java.lang.Class<java.lang.Float>;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class IdGenerator {
				public static class: java.lang.Class<org.bson.codecs.IdGenerator>;
				/**
				 * Constructs a new instance of the org.bson.codecs.IdGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					generate(): any;
				});
				public constructor();
				public generate(): any;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class IntegerCodec extends org.bson.codecs.Codec<java.lang.Integer> {
				public static class: java.lang.Class<org.bson.codecs.IntegerCodec>;
				public getEncoderClass(): java.lang.Class<java.lang.Integer>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Integer;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Integer, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class IterableCodec extends org.bson.codecs.Codec<java.lang.Iterable> {
				public static class: java.lang.Class<org.bson.codecs.IterableCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Iterable, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Iterable;
				public getEncoderClass(): java.lang.Class<java.lang.Iterable>;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap);
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap, param2: org.bson.Transformer);
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class IterableCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.IterableCodecProvider>;
				public constructor(param0: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap, param1: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap);
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class LongCodec extends org.bson.codecs.Codec<java.lang.Long> {
				public static class: java.lang.Class<org.bson.codecs.LongCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Long, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Long;
				public getEncoderClass(): java.lang.Class<java.lang.Long>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class MapCodec extends org.bson.codecs.Codec<java.util.Map<string,any>> {
				public static class: java.lang.Class<org.bson.codecs.MapCodec>;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry);
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.Map<string,any>;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap);
				public getEncoderClass(): java.lang.Class<java.util.Map<string,any>>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public constructor(param0: org.bson.codecs.configuration.CodecRegistry, param1: org.bson.codecs.BsonTypeClassMap, param2: org.bson.Transformer);
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public encode(param0: org.bson.BsonWriter, param1: java.util.Map<string,any>, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class MapCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.MapCodecProvider>;
				public constructor(param0: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap, param1: org.bson.Transformer);
				public constructor(param0: org.bson.codecs.BsonTypeClassMap);
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class MaxKeyCodec extends org.bson.codecs.Codec<org.bson.types.MaxKey> {
				public static class: java.lang.Class<org.bson.codecs.MaxKeyCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.MaxKey, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.types.MaxKey>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.MaxKey;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class MinKeyCodec extends org.bson.codecs.Codec<org.bson.types.MinKey> {
				public static class: java.lang.Class<org.bson.codecs.MinKeyCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.MinKey, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.MinKey;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.types.MinKey>;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class NumberCodecHelper {
				public static class: java.lang.Class<org.bson.codecs.NumberCodecHelper>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ObjectIdCodec extends org.bson.codecs.Codec<org.bson.types.ObjectId> {
				public static class: java.lang.Class<org.bson.codecs.ObjectIdCodec>;
				public getEncoderClass(): java.lang.Class<org.bson.types.ObjectId>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.ObjectId, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.ObjectId;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ObjectIdGenerator extends org.bson.codecs.IdGenerator {
				public static class: java.lang.Class<org.bson.codecs.ObjectIdGenerator>;
				public generate(): any;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class PatternCodec extends org.bson.codecs.Codec<java.util.regex.Pattern> {
				public static class: java.lang.Class<org.bson.codecs.PatternCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.regex.Pattern;
				public encode(param0: org.bson.BsonWriter, param1: java.util.regex.Pattern, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public getEncoderClass(): java.lang.Class<java.util.regex.Pattern>;
				public constructor();
			}
			export module PatternCodec {
				export class RegexFlag {
					public static class: java.lang.Class<org.bson.codecs.PatternCodec.RegexFlag>;
					public static CANON_EQ: org.bson.codecs.PatternCodec.RegexFlag;
					public static UNIX_LINES: org.bson.codecs.PatternCodec.RegexFlag;
					public static GLOBAL: org.bson.codecs.PatternCodec.RegexFlag;
					public static CASE_INSENSITIVE: org.bson.codecs.PatternCodec.RegexFlag;
					public static MULTILINE: org.bson.codecs.PatternCodec.RegexFlag;
					public static DOTALL: org.bson.codecs.PatternCodec.RegexFlag;
					public static LITERAL: org.bson.codecs.PatternCodec.RegexFlag;
					public static UNICODE_CASE: org.bson.codecs.PatternCodec.RegexFlag;
					public static COMMENTS: org.bson.codecs.PatternCodec.RegexFlag;
					public static values(): native.Array<org.bson.codecs.PatternCodec.RegexFlag>;
					public static valueOf(param0: string): org.bson.codecs.PatternCodec.RegexFlag;
					public static getByCharacter(param0: string): org.bson.codecs.PatternCodec.RegexFlag;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class RawBsonDocumentCodec extends org.bson.codecs.Codec<org.bson.RawBsonDocument> {
				public static class: java.lang.Class<org.bson.codecs.RawBsonDocumentCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.RawBsonDocument;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.RawBsonDocument>;
				public getEncoderClass(): java.lang.Class<any>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.RawBsonDocument, param2: org.bson.codecs.EncoderContext): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ShortCodec extends org.bson.codecs.Codec<java.lang.Short> {
				public static class: java.lang.Class<org.bson.codecs.ShortCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.lang.Short, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.lang.Short;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public getEncoderClass(): java.lang.Class<java.lang.Short>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class StringCodec extends org.bson.codecs.Codec<string> {
				public static class: java.lang.Class<org.bson.codecs.StringCodec>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): string;
				public encode(param0: org.bson.BsonWriter, param1: string, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<string>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class SymbolCodec extends org.bson.codecs.Codec<org.bson.types.Symbol> {
				public static class: java.lang.Class<org.bson.codecs.SymbolCodec>;
				public encode(param0: org.bson.BsonWriter, param1: org.bson.types.Symbol, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<org.bson.types.Symbol>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): org.bson.types.Symbol;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class UuidCodec extends org.bson.codecs.Codec<java.util.UUID> {
				public static class: java.lang.Class<org.bson.codecs.UuidCodec>;
				public encode(param0: org.bson.BsonWriter, param1: java.util.UUID, param2: org.bson.codecs.EncoderContext): void;
				public constructor(param0: org.bson.UuidRepresentation);
				public getEncoderClass(): java.lang.Class<java.util.UUID>;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.UUID;
				public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
				public getEncoderClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class UuidCodecHelper {
				public static class: java.lang.Class<org.bson.codecs.UuidCodecHelper>;
				public static reverseByteArray(param0: native.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class UuidCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.UuidCodecProvider>;
				public constructor(param0: org.bson.UuidRepresentation);
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export class ValueCodecProvider extends org.bson.codecs.configuration.CodecProvider {
				public static class: java.lang.Class<org.bson.codecs.ValueCodecProvider>;
				public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class ChildCodecRegistry<T>  extends org.bson.codecs.configuration.CodecRegistry {
					public static class: java.lang.Class<org.bson.codecs.configuration.ChildCodecRegistry<any>>;
					public equals(param0: any): boolean;
					public getCodecClass(): java.lang.Class<any>;
					public get(param0: java.lang.Class): org.bson.codecs.Codec<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class CodecCache {
					public static class: java.lang.Class<org.bson.codecs.configuration.CodecCache>;
					public containsKey(param0: java.lang.Class<any>): boolean;
					public getOrThrow(param0: java.lang.Class): org.bson.codecs.Codec<any>;
					public put(param0: java.lang.Class<any>, param1: org.bson.codecs.Codec<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class CodecConfigurationException {
					public static class: java.lang.Class<org.bson.codecs.configuration.CodecConfigurationException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class CodecProvider {
					public static class: java.lang.Class<org.bson.codecs.configuration.CodecProvider>;
					/**
					 * Constructs a new instance of the org.bson.codecs.configuration.CodecProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
					});
					public constructor();
					public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class CodecRegistries {
					public static class: java.lang.Class<org.bson.codecs.configuration.CodecRegistries>;
					public static fromRegistries(param0: java.util.List<any>): org.bson.codecs.configuration.CodecRegistry;
					public static fromCodecs(param0: native.Array<org.bson.codecs.Codec<any>>): org.bson.codecs.configuration.CodecRegistry;
					public static fromCodecs(param0: java.util.List<any>): org.bson.codecs.configuration.CodecRegistry;
					public static fromProviders(param0: java.util.List<any>): org.bson.codecs.configuration.CodecRegistry;
					public static fromRegistries(param0: native.Array<org.bson.codecs.configuration.CodecRegistry>): org.bson.codecs.configuration.CodecRegistry;
					public static fromProviders(param0: native.Array<org.bson.codecs.configuration.CodecProvider>): org.bson.codecs.configuration.CodecRegistry;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class CodecRegistry {
					public static class: java.lang.Class<org.bson.codecs.configuration.CodecRegistry>;
					/**
					 * Constructs a new instance of the org.bson.codecs.configuration.CodecRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: java.lang.Class): org.bson.codecs.Codec<any>;
					});
					public constructor();
					public get(param0: java.lang.Class): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class LazyCodec<T>  extends org.bson.codecs.Codec<any> {
					public static class: java.lang.Class<org.bson.codecs.configuration.LazyCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class MapOfCodecsProvider extends org.bson.codecs.configuration.CodecProvider {
					public static class: java.lang.Class<org.bson.codecs.configuration.MapOfCodecsProvider>;
					public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export abstract class Optional<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.configuration.Optional<any>>;
					public toString(): string;
					public isEmpty(): boolean;
					public static of(param0: any): org.bson.codecs.configuration.Optional<any>;
					public isDefined(): boolean;
					public static empty(): org.bson.codecs.configuration.Optional<any>;
					public get(): T;
				}
				export module Optional {
					export class Some<T>  extends org.bson.codecs.configuration.Optional<any> {
						public static class: java.lang.Class<org.bson.codecs.configuration.Optional.Some<any>>;
						public isEmpty(): boolean;
						public get(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module configuration {
				export class ProvidersCodecRegistry implements org.bson.codecs.configuration.CodecRegistry, org.bson.codecs.configuration.CodecProvider {
					public static class: java.lang.Class<org.bson.codecs.configuration.ProvidersCodecRegistry>;
					public equals(param0: any): boolean;
					public get(param0: java.lang.Class): org.bson.codecs.Codec<any>;
					public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export abstract class DateTimeBasedCodec<T>  extends org.bson.codecs.Codec<any> {
					public static class: java.lang.Class<org.bson.codecs.jsr310.DateTimeBasedCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export class InstantCodec extends org.bson.codecs.jsr310.DateTimeBasedCodec<java.time.Instant> {
					public static class: java.lang.Class<org.bson.codecs.jsr310.InstantCodec>;
					public getEncoderClass(): java.lang.Class<java.time.Instant>;
					public encode(param0: org.bson.BsonWriter, param1: java.time.Instant, param2: org.bson.codecs.EncoderContext): void;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.time.Instant;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export class Jsr310CodecProvider extends org.bson.codecs.configuration.CodecProvider {
					public static class: java.lang.Class<org.bson.codecs.jsr310.Jsr310CodecProvider>;
					public constructor();
					public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export class LocalDateCodec extends org.bson.codecs.jsr310.DateTimeBasedCodec<java.time.LocalDate> {
					public static class: java.lang.Class<org.bson.codecs.jsr310.LocalDateCodec>;
					public constructor();
					public getEncoderClass(): java.lang.Class<java.time.LocalDate>;
					public encode(param0: org.bson.BsonWriter, param1: java.time.LocalDate, param2: org.bson.codecs.EncoderContext): void;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.time.LocalDate;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export class LocalDateTimeCodec extends org.bson.codecs.jsr310.DateTimeBasedCodec<java.time.LocalDateTime> {
					public static class: java.lang.Class<org.bson.codecs.jsr310.LocalDateTimeCodec>;
					public constructor();
					public getEncoderClass(): java.lang.Class<java.time.LocalDateTime>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.time.LocalDateTime;
					public encode(param0: org.bson.BsonWriter, param1: java.time.LocalDateTime, param2: org.bson.codecs.EncoderContext): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module jsr310 {
				export class LocalTimeCodec extends org.bson.codecs.jsr310.DateTimeBasedCodec<java.time.LocalTime> {
					public static class: java.lang.Class<org.bson.codecs.jsr310.LocalTimeCodec>;
					public constructor();
					public encode(param0: org.bson.BsonWriter, param1: java.time.LocalTime, param2: org.bson.codecs.EncoderContext): void;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.time.LocalTime;
					public getEncoderClass(): java.lang.Class<java.time.LocalTime>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class AutomaticPojoCodec<T>  extends org.bson.codecs.pojo.PojoCodec<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.AutomaticPojoCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ClassModel<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.ClassModel<any>>;
					public static builder(param0: java.lang.Class): org.bson.codecs.pojo.ClassModelBuilder<any>;
					public getType(): java.lang.Class<T>;
					public getPropertyModel(param0: string): org.bson.codecs.pojo.PropertyModel<any>;
					public getDiscriminator(): string;
					public getPropertyModels(): java.util.List<org.bson.codecs.pojo.PropertyModel<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getName(): string;
					public getIdPropertyModel(): org.bson.codecs.pojo.PropertyModel<any>;
					public hashCode(): number;
					public hasTypeParameters(): boolean;
					public getDiscriminatorKey(): string;
					public useDiscriminator(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ClassModelBuilder<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.ClassModelBuilder<any>>;
					public getInstanceCreatorFactory(): org.bson.codecs.pojo.InstanceCreatorFactory<T>;
					public type(param0: java.lang.Class<T>): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public conventions(param0: java.util.List<org.bson.codecs.pojo.Convention>): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public enableDiscriminator(param0: boolean): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public instanceCreatorFactory(param0: org.bson.codecs.pojo.InstanceCreatorFactory<T>): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public getProperty(param0: string): org.bson.codecs.pojo.PropertyModelBuilder<any>;
					public getType(): java.lang.Class<T>;
					public useDiscriminator(): java.lang.Boolean;
					public getDiscriminator(): string;
					public annotations(param0: java.util.List<java.lang.annotation.Annotation>): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public toString(): string;
					public removeProperty(param0: string): boolean;
					public getConventions(): java.util.List<org.bson.codecs.pojo.Convention>;
					public idPropertyName(param0: string): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public idGenerator(param0: org.bson.codecs.pojo.IdGenerator<any>): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public getIdGenerator(): org.bson.codecs.pojo.IdGenerator<any>;
					public discriminator(param0: string): org.bson.codecs.pojo.ClassModelBuilder<T>;
					public getIdPropertyName(): string;
					public getDiscriminatorKey(): string;
					public build(): org.bson.codecs.pojo.ClassModel<T>;
					public getPropertyModelBuilders(): java.util.List<org.bson.codecs.pojo.PropertyModelBuilder<any>>;
					public discriminatorKey(param0: string): org.bson.codecs.pojo.ClassModelBuilder<T>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class CollectionPropertyCodecProvider extends org.bson.codecs.pojo.PropertyCodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.CollectionPropertyCodecProvider>;
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
				}
				export module CollectionPropertyCodecProvider {
					export class CollectionCodec<T>  extends org.bson.codecs.Codec<java.util.Collection<any>> {
						public static class: java.lang.Class<org.bson.codecs.pojo.CollectionPropertyCodecProvider.CollectionCodec<any>>;
						public getEncoderClass(): java.lang.Class<java.util.Collection<any>>;
						public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
						public encode(param0: org.bson.BsonWriter, param1: java.util.Collection<any>, param2: org.bson.codecs.EncoderContext): void;
						public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.Collection<any>;
						public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
						public getEncoderClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.Convention>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.Convention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
					});
					public constructor();
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ConventionAnnotationImpl extends org.bson.codecs.pojo.Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.ConventionAnnotationImpl>;
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ConventionDefaultsImpl extends org.bson.codecs.pojo.Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.ConventionDefaultsImpl>;
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ConventionObjectIdGeneratorsImpl extends org.bson.codecs.pojo.Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.ConventionObjectIdGeneratorsImpl>;
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ConventionSetPrivateFieldImpl extends org.bson.codecs.pojo.Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.ConventionSetPrivateFieldImpl>;
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
				export module ConventionSetPrivateFieldImpl {
					export class PrivatePropertyAccessor<T>  extends org.bson.codecs.pojo.PropertyAccessor<any> {
						public static class: java.lang.Class<org.bson.codecs.pojo.ConventionSetPrivateFieldImpl.PrivatePropertyAccessor<any>>;
						public set(param0: any, param1: any): void;
						public get(param0: any): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class ConventionUseGettersAsSettersImpl extends org.bson.codecs.pojo.Convention {
					public static class: java.lang.Class<org.bson.codecs.pojo.ConventionUseGettersAsSettersImpl>;
					public apply(param0: org.bson.codecs.pojo.ClassModelBuilder<any>): void;
				}
				export module ConventionUseGettersAsSettersImpl {
					export class PrivatePropertyAccessor<T>  extends org.bson.codecs.pojo.PropertyAccessor<any> {
						public static class: java.lang.Class<org.bson.codecs.pojo.ConventionUseGettersAsSettersImpl.PrivatePropertyAccessor<any>>;
						public set(param0: any, param1: any): void;
						public get(param0: any): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class Conventions {
					public static class: java.lang.Class<org.bson.codecs.pojo.Conventions>;
					public static CLASS_AND_PROPERTY_CONVENTION: org.bson.codecs.pojo.Convention;
					public static ANNOTATION_CONVENTION: org.bson.codecs.pojo.Convention;
					public static SET_PRIVATE_FIELDS_CONVENTION: org.bson.codecs.pojo.Convention;
					public static USE_GETTERS_FOR_SETTERS: org.bson.codecs.pojo.Convention;
					public static OBJECT_ID_GENERATORS: org.bson.codecs.pojo.Convention;
					public static DEFAULT_CONVENTIONS: java.util.List<org.bson.codecs.pojo.Convention>;
					public static NO_CONVENTIONS: java.util.List<org.bson.codecs.pojo.Convention>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class CreatorExecutable<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.CreatorExecutable<any>>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class DiscriminatorLookup {
					public static class: java.lang.Class<org.bson.codecs.pojo.DiscriminatorLookup>;
					public lookup(param0: string): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class EnumPropertyCodecProvider extends org.bson.codecs.pojo.PropertyCodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.EnumPropertyCodecProvider>;
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
				}
				export module EnumPropertyCodecProvider {
					export class EnumCodec<T>  extends org.bson.codecs.Codec<any> {
						public static class: java.lang.Class<org.bson.codecs.pojo.EnumPropertyCodecProvider.EnumCodec<any>>;
						public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
						public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
						public getEncoderClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class FallbackPropertyCodecProvider extends org.bson.codecs.pojo.PropertyCodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.FallbackPropertyCodecProvider>;
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class IdGenerator<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.IdGenerator<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.IdGenerator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generate(): T;
						getType(): java.lang.Class<T>;
					});
					public constructor();
					public getType(): java.lang.Class<T>;
					public generate(): T;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class IdGenerators {
					public static class: java.lang.Class<org.bson.codecs.pojo.IdGenerators>;
					public static OBJECT_ID_GENERATOR: org.bson.codecs.pojo.IdGenerator<org.bson.types.ObjectId>;
					public static BSON_OBJECT_ID_GENERATOR: org.bson.codecs.pojo.IdGenerator<org.bson.BsonObjectId>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class IdPropertyModelHolder<I>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.IdPropertyModelHolder<any>>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class InstanceCreator<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.InstanceCreator<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						set(param0: any, param1: org.bson.codecs.pojo.PropertyModel<any>): void;
						getInstance(): T;
					});
					public constructor();
					public getInstance(): T;
					public set(param0: any, param1: org.bson.codecs.pojo.PropertyModel<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class InstanceCreatorFactory<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.InstanceCreatorFactory<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.InstanceCreatorFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(): org.bson.codecs.pojo.InstanceCreator<T>;
					});
					public constructor();
					public create(): org.bson.codecs.pojo.InstanceCreator<T>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class InstanceCreatorFactoryImpl<T>  extends org.bson.codecs.pojo.InstanceCreatorFactory<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.InstanceCreatorFactoryImpl<any>>;
					public create(): org.bson.codecs.pojo.InstanceCreator<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class InstanceCreatorImpl<T>  extends org.bson.codecs.pojo.InstanceCreator<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.InstanceCreatorImpl<any>>;
					public getInstance(): any;
					public set(param0: any, param1: org.bson.codecs.pojo.PropertyModel<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class LazyMissingCodec<S>  extends org.bson.codecs.Codec<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.LazyMissingCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class LazyPojoCodec<T>  extends org.bson.codecs.pojo.PojoCodec<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.LazyPojoCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class MapPropertyCodecProvider extends org.bson.codecs.pojo.PropertyCodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.MapPropertyCodecProvider>;
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
				}
				export module MapPropertyCodecProvider {
					export class MapCodec<T>  extends org.bson.codecs.Codec<java.util.Map<string,any>> {
						public static class: java.lang.Class<org.bson.codecs.pojo.MapPropertyCodecProvider.MapCodec<any>>;
						public getEncoderClass(): java.lang.Class<java.util.Map<string,any>>;
						public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
						public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.Map<string,any>;
						public encode(param0: org.bson.BsonWriter, param1: java.util.Map<string,any>, param2: org.bson.codecs.EncoderContext): void;
						public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
						public getEncoderClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PojoBuilderHelper {
					public static class: java.lang.Class<org.bson.codecs.pojo.PojoBuilderHelper>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export abstract class PojoCodec<T>  extends org.bson.codecs.Codec<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.PojoCodec<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PojoCodecImpl<T>  extends org.bson.codecs.pojo.PojoCodec<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.PojoCodecImpl<any>>;
					public encode(param0: org.bson.BsonWriter, param1: any, param2: org.bson.codecs.EncoderContext): void;
					public toString(): string;
					public getEncoderClass(): java.lang.Class<any>;
					public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PojoCodecProvider extends org.bson.codecs.configuration.CodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.PojoCodecProvider>;
					public static builder(): org.bson.codecs.pojo.PojoCodecProvider.Builder;
					public get(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.codecs.Codec<any>;
				}
				export module PojoCodecProvider {
					export class Builder {
						public static class: java.lang.Class<org.bson.codecs.pojo.PojoCodecProvider.Builder>;
						public register(param0: native.Array<java.lang.Class<any>>): org.bson.codecs.pojo.PojoCodecProvider.Builder;
						public register(param0: native.Array<string>): org.bson.codecs.pojo.PojoCodecProvider.Builder;
						public build(): org.bson.codecs.pojo.PojoCodecProvider;
						public conventions(param0: java.util.List<org.bson.codecs.pojo.Convention>): org.bson.codecs.pojo.PojoCodecProvider.Builder;
						public register(param0: native.Array<org.bson.codecs.pojo.PropertyCodecProvider>): org.bson.codecs.pojo.PojoCodecProvider.Builder;
						public automatic(param0: boolean): org.bson.codecs.pojo.PojoCodecProvider.Builder;
						public register(param0: native.Array<org.bson.codecs.pojo.ClassModel<any>>): org.bson.codecs.pojo.PojoCodecProvider.Builder;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyAccessor<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyAccessor<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.PropertyAccessor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: any): any;
						set(param0: any, param1: any): void;
					});
					public constructor();
					public set(param0: any, param1: any): void;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyAccessorImpl<T>  extends org.bson.codecs.pojo.PropertyAccessor<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyAccessorImpl<any>>;
					public set(param0: any, param1: any): void;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyCodecProvider {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyCodecProvider>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.PropertyCodecProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
					});
					public constructor();
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>, param1: org.bson.codecs.pojo.PropertyCodecRegistry): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyCodecRegistry {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyCodecRegistry>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.PropertyCodecRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>): org.bson.codecs.Codec<any>;
					});
					public constructor();
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyCodecRegistryImpl extends org.bson.codecs.pojo.PropertyCodecRegistry {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyCodecRegistryImpl>;
					public get(param0: org.bson.codecs.pojo.TypeWithTypeParameters<any>): org.bson.codecs.Codec<any>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyMetadata<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyMetadata<any>>;
					public getGetter(): java.lang.reflect.Method;
					public setGetter(param0: java.lang.reflect.Method): void;
					public typeParameterInfo(param0: org.bson.codecs.pojo.TypeParameterMap, param1: org.bson.codecs.pojo.TypeData<any>): org.bson.codecs.pojo.PropertyMetadata<any>;
					public field(param0: java.lang.reflect.Field): org.bson.codecs.pojo.PropertyMetadata<T>;
					public getSetter(): java.lang.reflect.Method;
					public getTypeParameterMap(): org.bson.codecs.pojo.TypeParameterMap;
					public addReadAnnotation(param0: java.lang.annotation.Annotation): org.bson.codecs.pojo.PropertyMetadata<T>;
					public getWriteAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public isSerializable(): boolean;
					public setSetter(param0: java.lang.reflect.Method): void;
					public getName(): string;
					public getReadAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public addWriteAnnotation(param0: java.lang.annotation.Annotation): org.bson.codecs.pojo.PropertyMetadata<T>;
					public isDeserializable(): boolean;
					public getField(): java.lang.reflect.Field;
					public getTypeData(): org.bson.codecs.pojo.TypeData<T>;
					public getTypeParameters(): java.util.List<org.bson.codecs.pojo.TypeData<any>>;
					public getDeclaringClassName(): string;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyModel<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyModel<any>>;
					public getPropertyAccessor(): org.bson.codecs.pojo.PropertyAccessor<T>;
					public isReadable(): boolean;
					public static builder(): org.bson.codecs.pojo.PropertyModelBuilder<any>;
					public useDiscriminator(): java.lang.Boolean;
					public getCodec(): org.bson.codecs.Codec<T>;
					public equals(param0: any): boolean;
					public toString(): string;
					public isWritable(): boolean;
					public getName(): string;
					public shouldSerialize(param0: T): boolean;
					public getReadName(): string;
					public getTypeData(): org.bson.codecs.pojo.TypeData<T>;
					public getWriteName(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyModelBuilder<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyModelBuilder<any>>;
					public getPropertyAccessor(): org.bson.codecs.pojo.PropertyAccessor<T>;
					public getPropertySerialization(): org.bson.codecs.pojo.PropertySerialization<T>;
					public isReadable(): boolean;
					public propertySerialization(param0: org.bson.codecs.pojo.PropertySerialization<T>): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public writeAnnotations(param0: java.util.List<java.lang.annotation.Annotation>): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public readName(param0: string): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public isDiscriminatorEnabled(): java.lang.Boolean;
					public getWriteAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public build(): org.bson.codecs.pojo.PropertyModel<T>;
					public toString(): string;
					public isWritable(): boolean;
					public getName(): string;
					public propertyAccessor(param0: org.bson.codecs.pojo.PropertyAccessor<T>): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public getReadAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public readAnnotations(param0: java.util.List<java.lang.annotation.Annotation>): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public getReadName(): string;
					public getWriteName(): string;
					public codec(param0: org.bson.codecs.Codec<T>): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public discriminatorEnabled(param0: boolean): org.bson.codecs.pojo.PropertyModelBuilder<T>;
					public writeName(param0: string): org.bson.codecs.pojo.PropertyModelBuilder<T>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyModelSerializationImpl<T>  extends org.bson.codecs.pojo.PropertySerialization<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyModelSerializationImpl<any>>;
					public shouldSerialize(param0: any): boolean;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertyReflectionUtils {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertyReflectionUtils>;
				}
				export module PropertyReflectionUtils {
					export class PropertyMethods {
						public static class: java.lang.Class<org.bson.codecs.pojo.PropertyReflectionUtils.PropertyMethods>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class PropertySerialization<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.PropertySerialization<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.PropertySerialization<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldSerialize(param0: T): boolean;
					});
					public constructor();
					public shouldSerialize(param0: T): boolean;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class TypeData<T>  extends org.bson.codecs.pojo.TypeWithTypeParameters<any> {
					public static class: java.lang.Class<org.bson.codecs.pojo.TypeData<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getTypeParameters(): java.util.List<any>;
					public static builder(param0: java.lang.Class): org.bson.codecs.pojo.TypeData.Builder<any>;
					public static newInstance(param0: java.lang.reflect.Type, param1: java.lang.Class): org.bson.codecs.pojo.TypeData<any>;
					public static newInstance(param0: java.lang.reflect.Method): org.bson.codecs.pojo.TypeData<any>;
					public getType(): java.lang.Class<any>;
					public getTypeParameters(): java.util.List<org.bson.codecs.pojo.TypeData<any>>;
					public hashCode(): number;
					public static newInstance(param0: java.lang.reflect.Field): org.bson.codecs.pojo.TypeData<any>;
				}
				export module TypeData {
					export class Builder<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.bson.codecs.pojo.TypeData.Builder<any>>;
						public addTypeParameters(param0: java.util.List<org.bson.codecs.pojo.TypeData<any>>): org.bson.codecs.pojo.TypeData.Builder<T>;
						public build(): org.bson.codecs.pojo.TypeData<T>;
						public addTypeParameter(param0: org.bson.codecs.pojo.TypeData<any>): org.bson.codecs.pojo.TypeData.Builder<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class TypeParameterMap {
					public static class: java.lang.Class<org.bson.codecs.pojo.TypeParameterMap>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
				export module TypeParameterMap {
					export class Builder {
						public static class: java.lang.Class<org.bson.codecs.pojo.TypeParameterMap.Builder>;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export class TypeWithTypeParameters<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.codecs.pojo.TypeWithTypeParameters<any>>;
					/**
					 * Constructs a new instance of the org.bson.codecs.pojo.TypeWithTypeParameters<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getType(): java.lang.Class<T>;
						getTypeParameters(): java.util.List<any>;
					});
					public constructor();
					public getTypeParameters(): java.util.List<any>;
					public getType(): java.lang.Class<T>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export module annotations {
					export class BsonCreator {
						public static class: java.lang.Class<org.bson.codecs.pojo.annotations.BsonCreator>;
						/**
						 * Constructs a new instance of the org.bson.codecs.pojo.annotations.BsonCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export module annotations {
					export class BsonDiscriminator {
						public static class: java.lang.Class<org.bson.codecs.pojo.annotations.BsonDiscriminator>;
						/**
						 * Constructs a new instance of the org.bson.codecs.pojo.annotations.BsonDiscriminator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							key(): string;
						});
						public constructor();
						public value(): string;
						public key(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export module annotations {
					export class BsonId {
						public static class: java.lang.Class<org.bson.codecs.pojo.annotations.BsonId>;
						/**
						 * Constructs a new instance of the org.bson.codecs.pojo.annotations.BsonId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export module annotations {
					export class BsonIgnore {
						public static class: java.lang.Class<org.bson.codecs.pojo.annotations.BsonIgnore>;
						/**
						 * Constructs a new instance of the org.bson.codecs.pojo.annotations.BsonIgnore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module codecs {
			export module pojo {
				export module annotations {
					export class BsonProperty {
						public static class: java.lang.Class<org.bson.codecs.pojo.annotations.BsonProperty>;
						/**
						 * Constructs a new instance of the org.bson.codecs.pojo.annotations.BsonProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							useDiscriminator(): boolean;
						});
						public constructor();
						public value(): string;
						public useDiscriminator(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module conversions {
			export class Bson {
				public static class: java.lang.Class<org.bson.conversions.Bson>;
				/**
				 * Constructs a new instance of the org.bson.conversions.Bson interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
				});
				public constructor();
				public toBsonDocument(param0: java.lang.Class, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
			}
		}
	}
}

declare module org {
	export module bson {
		export module diagnostics {
			export class JULLogger extends org.bson.diagnostics.Logger {
				public static class: java.lang.Class<org.bson.diagnostics.JULLogger>;
				public isInfoEnabled(): boolean;
				public trace(param0: string, param1: java.lang.Throwable): void;
				public error(param0: string): void;
				public getName(): string;
				public debug(param0: string, param1: java.lang.Throwable): void;
				public isWarnEnabled(): boolean;
				public warn(param0: string, param1: java.lang.Throwable): void;
				public isErrorEnabled(): boolean;
				public info(param0: string): void;
				public error(param0: string, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: string): void;
				public warn(param0: string): void;
				public trace(param0: string): void;
				public info(param0: string, param1: java.lang.Throwable): void;
				public isTraceEnabled(): boolean;
				public log(param0: java.util.logging.Level, param1: string, param2: java.lang.Throwable): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module diagnostics {
			export class Logger {
				public static class: java.lang.Class<org.bson.diagnostics.Logger>;
				/**
				 * Constructs a new instance of the org.bson.diagnostics.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getName(): string;
					isTraceEnabled(): boolean;
					trace(param0: string): void;
					trace(param0: string, param1: java.lang.Throwable): void;
					isDebugEnabled(): boolean;
					debug(param0: string): void;
					debug(param0: string, param1: java.lang.Throwable): void;
					isInfoEnabled(): boolean;
					info(param0: string): void;
					info(param0: string, param1: java.lang.Throwable): void;
					isWarnEnabled(): boolean;
					warn(param0: string): void;
					warn(param0: string, param1: java.lang.Throwable): void;
					isErrorEnabled(): boolean;
					error(param0: string): void;
					error(param0: string, param1: java.lang.Throwable): void;
				});
				public constructor();
				public isInfoEnabled(): boolean;
				public trace(param0: string, param1: java.lang.Throwable): void;
				public error(param0: string): void;
				public getName(): string;
				public debug(param0: string, param1: java.lang.Throwable): void;
				public isWarnEnabled(): boolean;
				public warn(param0: string, param1: java.lang.Throwable): void;
				public isErrorEnabled(): boolean;
				public info(param0: string): void;
				public error(param0: string, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: string): void;
				public warn(param0: string): void;
				public trace(param0: string): void;
				public info(param0: string, param1: java.lang.Throwable): void;
				public isTraceEnabled(): boolean;
			}
		}
	}
}

declare module org {
	export module bson {
		export module diagnostics {
			export class Loggers {
				public static class: java.lang.Class<org.bson.diagnostics.Loggers>;
				public static PREFIX: string;
				public static getLogger(param0: string): org.bson.diagnostics.Logger;
			}
		}
	}
}

declare module org {
	export module bson {
		export module diagnostics {
			export class SLF4JLogger extends org.bson.diagnostics.Logger {
				public static class: java.lang.Class<org.bson.diagnostics.SLF4JLogger>;
				public isInfoEnabled(): boolean;
				public trace(param0: string, param1: java.lang.Throwable): void;
				public error(param0: string): void;
				public getName(): string;
				public debug(param0: string, param1: java.lang.Throwable): void;
				public isWarnEnabled(): boolean;
				public warn(param0: string, param1: java.lang.Throwable): void;
				public isErrorEnabled(): boolean;
				public info(param0: string): void;
				public error(param0: string, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: string): void;
				public warn(param0: string): void;
				public trace(param0: string): void;
				public info(param0: string, param1: java.lang.Throwable): void;
				public isTraceEnabled(): boolean;
			}
		}
	}
}

declare module org {
	export module bson {
		export module internal {
			export class Base64 {
				public static class: java.lang.Class<org.bson.internal.Base64>;
				public static decode(param0: string): native.Array<number>;
				public static encode(param0: native.Array<number>): string;
			}
		}
	}
}

declare module org {
	export module bson {
		export module internal {
			export class UnsignedLongs {
				public static class: java.lang.Class<org.bson.internal.UnsignedLongs>;
				public static toString(param0: number): string;
				public static parse(param0: string): number;
				public static compare(param0: number, param1: number): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module internal {
			export class UuidHelper {
				public static class: java.lang.Class<org.bson.internal.UuidHelper>;
				public static encodeUuidToBinary(param0: java.util.UUID, param1: org.bson.UuidRepresentation): native.Array<number>;
				public static decodeBinaryToUuid(param0: native.Array<number>, param1: number, param2: org.bson.UuidRepresentation): java.util.UUID;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class BasicOutputBuffer extends org.bson.io.OutputBuffer {
				public static class: java.lang.Class<org.bson.io.BasicOutputBuffer>;
				public getInternalBuffer(): native.Array<number>;
				public write(param0: number, param1: number): void;
				public close(): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public writeInt32(param0: number, param1: number): void;
				public write(param0: native.Array<number>): void;
				public writeDouble(param0: number): void;
				public writeInt64(param0: number): void;
				public writeBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public getPosition(): number;
				public writeObjectId(param0: org.bson.types.ObjectId): void;
				public constructor();
				public getByteBuffers(): java.util.List<org.bson.ByteBuf>;
				public write(param0: number): void;
				public writeString(param0: string): void;
				public getSize(): number;
				public writeBytes(param0: native.Array<number>): void;
				public pipe(param0: java.io.OutputStream): number;
				public constructor(param0: number);
				public writeCString(param0: string): void;
				public writeInt32(param0: number): void;
				public writeByte(param0: number): void;
				public truncateToPosition(param0: number): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class Bits {
				public static class: java.lang.Class<org.bson.io.Bits>;
				public static readLong(param0: native.Array<number>): number;
				public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number): void;
				public static readIntBE(param0: native.Array<number>, param1: number): number;
				public constructor();
				public static readFully(param0: java.io.InputStream, param1: native.Array<number>): void;
				public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): void;
				public static readInt(param0: java.io.InputStream): number;
				public static readLong(param0: java.io.InputStream): number;
				public static readInt(param0: java.io.InputStream, param1: native.Array<number>): number;
				public static readInt(param0: native.Array<number>, param1: number): number;
				public static readLong(param0: native.Array<number>, param1: number): number;
				public static readInt(param0: native.Array<number>): number;
				public static readLong(param0: java.io.InputStream, param1: native.Array<number>): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class BsonInput {
				public static class: java.lang.Class<org.bson.io.BsonInput>;
				/**
				 * Constructs a new instance of the org.bson.io.BsonInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPosition(): number;
					readByte(): number;
					readBytes(param0: native.Array<number>): void;
					readBytes(param0: native.Array<number>, param1: number, param2: number): void;
					readInt64(): number;
					readDouble(): number;
					readInt32(): number;
					readString(): string;
					readObjectId(): org.bson.types.ObjectId;
					readCString(): string;
					skipCString(): void;
					skip(param0: number): void;
					mark(param0: number): void;
					getMark(param0: number): org.bson.io.BsonInputMark;
					reset(): void;
					hasRemaining(): boolean;
					close(): void;
				});
				public constructor();
				public hasRemaining(): boolean;
				public close(): void;
				public getPosition(): number;
				public skipCString(): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public readInt32(): number;
				public getMark(param0: number): org.bson.io.BsonInputMark;
				public reset(): void;
				public readByte(): number;
				public readCString(): string;
				public skip(param0: number): void;
				public readInt64(): number;
				public readObjectId(): org.bson.types.ObjectId;
				public readBytes(param0: native.Array<number>): void;
				public readString(): string;
				public mark(param0: number): void;
				public readDouble(): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class BsonInputMark {
				public static class: java.lang.Class<org.bson.io.BsonInputMark>;
				/**
				 * Constructs a new instance of the org.bson.io.BsonInputMark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					reset(): void;
				});
				public constructor();
				public reset(): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class BsonOutput {
				public static class: java.lang.Class<org.bson.io.BsonOutput>;
				/**
				 * Constructs a new instance of the org.bson.io.BsonOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPosition(): number;
					getSize(): number;
					truncateToPosition(param0: number): void;
					writeBytes(param0: native.Array<number>): void;
					writeBytes(param0: native.Array<number>, param1: number, param2: number): void;
					writeByte(param0: number): void;
					writeCString(param0: string): void;
					writeString(param0: string): void;
					writeDouble(param0: number): void;
					writeInt32(param0: number): void;
					writeInt32(param0: number, param1: number): void;
					writeInt64(param0: number): void;
					writeObjectId(param0: org.bson.types.ObjectId): void;
					close(): void;
				});
				public constructor();
				public close(): void;
				public writeInt32(param0: number, param1: number): void;
				public writeDouble(param0: number): void;
				public writeInt64(param0: number): void;
				public writeBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public getPosition(): number;
				public writeObjectId(param0: org.bson.types.ObjectId): void;
				public writeString(param0: string): void;
				public getSize(): number;
				public writeBytes(param0: native.Array<number>): void;
				public writeCString(param0: string): void;
				public writeInt32(param0: number): void;
				public writeByte(param0: number): void;
				public truncateToPosition(param0: number): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export class ByteBufferBsonInput extends org.bson.io.BsonInput {
				public static class: java.lang.Class<org.bson.io.ByteBufferBsonInput>;
				public hasRemaining(): boolean;
				public close(): void;
				public constructor(param0: org.bson.ByteBuf);
				public getPosition(): number;
				public skipCString(): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public readInt32(): number;
				public getMark(param0: number): org.bson.io.BsonInputMark;
				public reset(): void;
				public readByte(): number;
				public readCString(): string;
				public skip(param0: number): void;
				public readInt64(): number;
				public readObjectId(): org.bson.types.ObjectId;
				public readBytes(param0: native.Array<number>): void;
				public readString(): string;
				public mark(param0: number): void;
				public readDouble(): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module io {
			export abstract class OutputBuffer implements org.bson.io.BsonOutput {
				public static class: java.lang.Class<org.bson.io.OutputBuffer>;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public writeInt32(param0: number, param1: number): void;
				public write(param0: native.Array<number>): void;
				public writeInt64(param0: number): void;
				public writeDouble(param0: number): void;
				public writeBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public getPosition(): number;
				public constructor();
				public writeString(param0: string): void;
				public getSize(): number;
				public writeBytes(param0: native.Array<number>): void;
				public writeCString(param0: string): void;
				public toByteArray(): native.Array<number>;
				public writeByte(param0: number): void;
				public truncateToPosition(param0: number): void;
				public close(): void;
				public write(param0: number, param1: number): void;
				public writeLong(param0: number): void;
				public writeInt(param0: number): void;
				public toString(): string;
				public writeObjectId(param0: org.bson.types.ObjectId): void;
				public size(): number;
				public getByteBuffers(): java.util.List<org.bson.ByteBuf>;
				public write(param0: number): void;
				public pipe(param0: java.io.OutputStream): number;
				public writeInt32(param0: number): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class Converter<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.json.Converter<any>>;
				/**
				 * Constructs a new instance of the org.bson.json.Converter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					convert(param0: T, param1: org.bson.json.StrictJsonWriter): void;
				});
				public constructor();
				public convert(param0: T, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class DateTimeFormatter {
				public static class: java.lang.Class<org.bson.json.DateTimeFormatter>;
			}
			export module DateTimeFormatter {
				export class FormatterImpl {
					public static class: java.lang.Class<org.bson.json.DateTimeFormatter.FormatterImpl>;
					/**
					 * Constructs a new instance of the org.bson.json.DateTimeFormatter$FormatterImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parse(param0: string): number;
						format(param0: number): string;
					});
					public constructor();
					public parse(param0: string): number;
					public format(param0: number): string;
				}
				export class Java8DateTimeFormatter extends org.bson.json.DateTimeFormatter.FormatterImpl {
					public static class: java.lang.Class<org.bson.json.DateTimeFormatter.Java8DateTimeFormatter>;
					public parse(param0: string): number;
					public format(param0: number): string;
				}
				export class JaxbDateTimeFormatter extends org.bson.json.DateTimeFormatter.FormatterImpl {
					public static class: java.lang.Class<org.bson.json.DateTimeFormatter.JaxbDateTimeFormatter>;
					public parse(param0: string): number;
					public format(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonBinaryConverter extends org.bson.json.Converter<org.bson.BsonBinary> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonBinaryConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonBinary, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonDateTimeConverter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonDateTimeConverter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonDecimal128Converter extends org.bson.json.Converter<org.bson.types.Decimal128> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonDecimal128Converter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.types.Decimal128, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonDoubleConverter extends org.bson.json.Converter<java.lang.Double> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonDoubleConverter>;
				public convert(param0: java.lang.Double, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonInt32Converter extends org.bson.json.Converter<java.lang.Integer> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonInt32Converter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: java.lang.Integer, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonInt64Converter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonInt64Converter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonMaxKeyConverter extends org.bson.json.Converter<org.bson.BsonMaxKey> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonMaxKeyConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonMaxKey, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonMinKeyConverter extends org.bson.json.Converter<org.bson.BsonMinKey> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonMinKeyConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonMinKey, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonObjectIdConverter extends org.bson.json.Converter<org.bson.types.ObjectId> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonObjectIdConverter>;
				public convert(param0: org.bson.types.ObjectId, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonRegularExpressionConverter extends org.bson.json.Converter<org.bson.BsonRegularExpression> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonRegularExpressionConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonRegularExpression, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonTimestampConverter extends org.bson.json.Converter<org.bson.BsonTimestamp> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonTimestampConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonTimestamp, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ExtendedJsonUndefinedConverter extends org.bson.json.Converter<org.bson.BsonUndefined> {
				public static class: java.lang.Class<org.bson.json.ExtendedJsonUndefinedConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonUndefined, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonBooleanConverter extends org.bson.json.Converter<java.lang.Boolean> {
				public static class: java.lang.Class<org.bson.json.JsonBooleanConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: java.lang.Boolean, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonBuffer {
				public static class: java.lang.Class<org.bson.json.JsonBuffer>;
				public read(): number;
				public substring(param0: number): string;
				public substring(param0: number, param1: number): string;
				public getPosition(): number;
				public setPosition(param0: number): void;
				public unread(param0: number): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonDoubleConverter extends org.bson.json.Converter<java.lang.Double> {
				public static class: java.lang.Class<org.bson.json.JsonDoubleConverter>;
				public convert(param0: java.lang.Double, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonInt32Converter extends org.bson.json.Converter<java.lang.Integer> {
				public static class: java.lang.Class<org.bson.json.JsonInt32Converter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: java.lang.Integer, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonJavaScriptConverter extends org.bson.json.Converter<string> {
				public static class: java.lang.Class<org.bson.json.JsonJavaScriptConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: string, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonMode {
				public static class: java.lang.Class<org.bson.json.JsonMode>;
				public static STRICT: org.bson.json.JsonMode;
				public static SHELL: org.bson.json.JsonMode;
				public static EXTENDED: org.bson.json.JsonMode;
				public static RELAXED: org.bson.json.JsonMode;
				public static values(): native.Array<org.bson.json.JsonMode>;
				public static valueOf(param0: string): org.bson.json.JsonMode;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonNullConverter extends org.bson.json.Converter<org.bson.BsonNull> {
				public static class: java.lang.Class<org.bson.json.JsonNullConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonNull, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonParseException {
				public static class: java.lang.Class<org.bson.json.JsonParseException>;
				public constructor(param0: string, param1: native.Array<any>);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonReader extends org.bson.AbstractBsonReader {
				public static class: java.lang.Class<org.bson.json.JsonReader>;
				public doReadSymbol(): string;
				public doReadMaxKey(): void;
				public doReadBoolean(): boolean;
				public readDecimal128(): org.bson.types.Decimal128;
				public readEndDocument(): void;
				public constructor();
				public doReadUndefined(): void;
				public doReadNull(): void;
				public readEndArray(): void;
				public readNull(param0: string): void;
				public doReadInt32(): number;
				public readObjectId(): org.bson.types.ObjectId;
				public doReadDecimal128(): org.bson.types.Decimal128;
				public readBinaryData(): org.bson.BsonBinary;
				public readMinKey(): void;
				public readTimestamp(): org.bson.BsonTimestamp;
				public doReadDBPointer(): org.bson.BsonDbPointer;
				public readJavaScript(param0: string): string;
				public readDouble(): number;
				public readDBPointer(param0: string): org.bson.BsonDbPointer;
				public doReadString(): string;
				public close(): void;
				public readRegularExpression(): org.bson.BsonRegularExpression;
				public doPeekBinarySize(): number;
				public readInt32(param0: string): number;
				public readTimestamp(param0: string): org.bson.BsonTimestamp;
				public readStartArray(): void;
				public getContext(): org.bson.AbstractBsonReader.Context;
				public readName(): string;
				public peekBinarySize(): number;
				public readSymbol(param0: string): string;
				public readObjectId(param0: string): org.bson.types.ObjectId;
				public readNull(): void;
				public readString(param0: string): string;
				public skipValue(): void;
				public readJavaScript(): string;
				public readName(param0: string): void;
				public readMinKey(param0: string): void;
				public doSkipValue(): void;
				public doPeekBinarySubType(): number;
				public readBoolean(param0: string): boolean;
				public doReadJavaScriptWithScope(): string;
				public readDBPointer(): org.bson.BsonDbPointer;
				public peekBinarySubType(): number;
				public getCurrentName(): string;
				public skipName(): void;
				public readSymbol(): string;
				public doReadBinaryData(): org.bson.BsonBinary;
				public readStartDocument(): void;
				public readInt32(): number;
				public doReadDouble(): number;
				public constructor(param0: string);
				public doReadEndArray(): void;
				public readDouble(param0: string): number;
				public reset(): void;
				public readMaxKey(): void;
				public readDateTime(): number;
				public readDecimal128(param0: string): org.bson.types.Decimal128;
				public readInt64(param0: string): number;
				public readJavaScriptWithScope(): string;
				public doReadEndDocument(): void;
				public doReadStartArray(): void;
				public doReadDateTime(): number;
				public readString(): string;
				public doSkipName(): void;
				public doReadMinKey(): void;
				public doReadJavaScript(): string;
				public readRegularExpression(param0: string): org.bson.BsonRegularExpression;
				public readBinaryData(param0: string): org.bson.BsonBinary;
				public readUndefined(param0: string): void;
				public doReadInt64(): number;
				public doReadStartDocument(): void;
				public getContext(): org.bson.json.JsonReader.Context;
				public readBsonType(): org.bson.BsonType;
				public doReadTimestamp(): org.bson.BsonTimestamp;
				public mark(): void;
				public getCurrentBsonType(): org.bson.BsonType;
				public readUndefined(): void;
				public readMaxKey(param0: string): void;
				public getMark(): org.bson.BsonReaderMark;
				public readJavaScriptWithScope(param0: string): string;
				public readDateTime(param0: string): number;
				public doReadObjectId(): org.bson.types.ObjectId;
				public doReadRegularExpression(): org.bson.BsonRegularExpression;
				public readInt64(): number;
				public readBoolean(): boolean;
			}
			export module JsonReader {
				export class Context extends org.bson.AbstractBsonReader.Context {
					public static class: java.lang.Class<org.bson.json.JsonReader.Context>;
					public getParentContext(): org.bson.json.JsonReader.Context;
					public constructor(param0: org.bson.json.JsonReader, param1: org.bson.AbstractBsonReader.Context, param2: org.bson.BsonContextType);
					public getContextType(): org.bson.BsonContextType;
					public getParentContext(): org.bson.AbstractBsonReader.Context;
					public constructor(param0: org.bson.AbstractBsonReader, param1: org.bson.AbstractBsonReader.Context, param2: org.bson.BsonContextType);
				}
				export class Mark extends org.bson.AbstractBsonReader.Mark {
					public static class: java.lang.Class<org.bson.json.JsonReader.Mark>;
					public reset(): void;
					public constructor(param0: org.bson.json.JsonReader);
					public constructor(param0: org.bson.AbstractBsonReader);
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonScanner {
				public static class: java.lang.Class<org.bson.json.JsonScanner>;
				public setBufferPosition(param0: number): void;
				public nextToken(): org.bson.json.JsonToken;
				public getBufferPosition(): number;
			}
			export module JsonScanner {
				export class NumberState {
					public static class: java.lang.Class<org.bson.json.JsonScanner.NumberState>;
					public static SAW_LEADING_MINUS: org.bson.json.JsonScanner.NumberState;
					public static SAW_LEADING_ZERO: org.bson.json.JsonScanner.NumberState;
					public static SAW_INTEGER_DIGITS: org.bson.json.JsonScanner.NumberState;
					public static SAW_DECIMAL_POINT: org.bson.json.JsonScanner.NumberState;
					public static SAW_FRACTION_DIGITS: org.bson.json.JsonScanner.NumberState;
					public static SAW_EXPONENT_LETTER: org.bson.json.JsonScanner.NumberState;
					public static SAW_EXPONENT_SIGN: org.bson.json.JsonScanner.NumberState;
					public static SAW_EXPONENT_DIGITS: org.bson.json.JsonScanner.NumberState;
					public static SAW_MINUS_I: org.bson.json.JsonScanner.NumberState;
					public static DONE: org.bson.json.JsonScanner.NumberState;
					public static INVALID: org.bson.json.JsonScanner.NumberState;
					public static valueOf(param0: string): org.bson.json.JsonScanner.NumberState;
					public static values(): native.Array<org.bson.json.JsonScanner.NumberState>;
				}
				export class RegularExpressionState {
					public static class: java.lang.Class<org.bson.json.JsonScanner.RegularExpressionState>;
					public static IN_PATTERN: org.bson.json.JsonScanner.RegularExpressionState;
					public static IN_ESCAPE_SEQUENCE: org.bson.json.JsonScanner.RegularExpressionState;
					public static IN_OPTIONS: org.bson.json.JsonScanner.RegularExpressionState;
					public static DONE: org.bson.json.JsonScanner.RegularExpressionState;
					public static INVALID: org.bson.json.JsonScanner.RegularExpressionState;
					public static valueOf(param0: string): org.bson.json.JsonScanner.RegularExpressionState;
					public static values(): native.Array<org.bson.json.JsonScanner.RegularExpressionState>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonStringConverter extends org.bson.json.Converter<string> {
				public static class: java.lang.Class<org.bson.json.JsonStringConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: string, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonSymbolConverter extends org.bson.json.Converter<string> {
				public static class: java.lang.Class<org.bson.json.JsonSymbolConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: string, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonToken {
				public static class: java.lang.Class<org.bson.json.JsonToken>;
				public getType(): org.bson.json.JsonTokenType;
				public getValue(): any;
				public getValue(param0: java.lang.Class): any;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonTokenType {
				public static class: java.lang.Class<org.bson.json.JsonTokenType>;
				public static INVALID: org.bson.json.JsonTokenType;
				public static BEGIN_ARRAY: org.bson.json.JsonTokenType;
				public static BEGIN_OBJECT: org.bson.json.JsonTokenType;
				public static END_ARRAY: org.bson.json.JsonTokenType;
				public static LEFT_PAREN: org.bson.json.JsonTokenType;
				public static RIGHT_PAREN: org.bson.json.JsonTokenType;
				public static END_OBJECT: org.bson.json.JsonTokenType;
				public static COLON: org.bson.json.JsonTokenType;
				public static COMMA: org.bson.json.JsonTokenType;
				public static DOUBLE: org.bson.json.JsonTokenType;
				public static INT32: org.bson.json.JsonTokenType;
				public static INT64: org.bson.json.JsonTokenType;
				public static REGULAR_EXPRESSION: org.bson.json.JsonTokenType;
				public static STRING: org.bson.json.JsonTokenType;
				public static UNQUOTED_STRING: org.bson.json.JsonTokenType;
				public static END_OF_FILE: org.bson.json.JsonTokenType;
				public static valueOf(param0: string): org.bson.json.JsonTokenType;
				public static values(): native.Array<org.bson.json.JsonTokenType>;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonWriter extends org.bson.AbstractBsonWriter {
				public static class: java.lang.Class<org.bson.json.JsonWriter>;
				public doWriteStartDocument(): void;
				public writeBinaryData(param0: org.bson.BsonBinary): void;
				public writeEndDocument(): void;
				public writeSymbol(param0: string): void;
				public writeStartArray(): void;
				public pipe(param0: org.bson.BsonReader, param1: java.util.List<org.bson.BsonElement>): void;
				public doWriteMaxKey(): void;
				public writeObjectId(param0: string, param1: org.bson.types.ObjectId): void;
				public writeDBPointer(param0: string, param1: org.bson.BsonDbPointer): void;
				public writeDouble(param0: number): void;
				public writeInt64(param0: number): void;
				public doWriteEndDocument(): void;
				public doWriteDouble(param0: number): void;
				public doWriteInt64(param0: number): void;
				public writeStartDocument(): void;
				public flush(): void;
				public writeName(param0: string): void;
				public writeString(param0: string, param1: string): void;
				public writeEndArray(): void;
				public doWriteJavaScript(param0: string): void;
				public doWriteDBPointer(param0: org.bson.BsonDbPointer): void;
				public doWriteRegularExpression(param0: org.bson.BsonRegularExpression): void;
				public writeInt32(param0: string, param1: number): void;
				public pipe(param0: org.bson.BsonReader): void;
				public constructor(param0: org.bson.BsonWriterSettings, param1: org.bson.FieldNameValidator);
				public doWriteUndefined(): void;
				public doWriteDateTime(param0: number): void;
				public doWriteMinKey(): void;
				public writeObjectId(param0: org.bson.types.ObjectId): void;
				public doWriteEndArray(): void;
				public doWriteInt32(param0: number): void;
				public writeNull(): void;
				public getContext(): org.bson.AbstractBsonWriter.Context;
				public doWriteNull(): void;
				public doWriteSymbol(param0: string): void;
				public writeInt32(param0: number): void;
				public writeBoolean(param0: boolean): void;
				public writeInt64(param0: string, param1: number): void;
				public writeMinKey(): void;
				public writeRegularExpression(param0: string, param1: org.bson.BsonRegularExpression): void;
				public writeTimestamp(param0: string, param1: org.bson.BsonTimestamp): void;
				public writeTimestamp(param0: org.bson.BsonTimestamp): void;
				public writeDateTime(param0: number): void;
				public writeJavaScriptWithScope(param0: string): void;
				public writeMinKey(param0: string): void;
				public writeDouble(param0: string, param1: number): void;
				public doWriteTimestamp(param0: org.bson.BsonTimestamp): void;
				public writeDBPointer(param0: org.bson.BsonDbPointer): void;
				public writeRegularExpression(param0: org.bson.BsonRegularExpression): void;
				public writeUndefined(): void;
				public abortPipe(): boolean;
				public writeJavaScriptWithScope(param0: string, param1: string): void;
				public constructor(param0: java.io.Writer, param1: org.bson.json.JsonWriterSettings);
				public doWriteBoolean(param0: boolean): void;
				public writeStartDocument(param0: string): void;
				public getWriter(): java.io.Writer;
				public writeString(param0: string): void;
				public writeNull(param0: string): void;
				public doWriteString(param0: string): void;
				public writeBoolean(param0: string, param1: boolean): void;
				public writeSymbol(param0: string, param1: string): void;
				public writeJavaScript(param0: string, param1: string): void;
				public doWriteName(param0: string): void;
				public doWriteDecimal128(param0: org.bson.types.Decimal128): void;
				public writeBinaryData(param0: string, param1: org.bson.BsonBinary): void;
				public doWriteStartArray(): void;
				public writeStartArray(param0: string): void;
				public doWriteBinaryData(param0: org.bson.BsonBinary): void;
				public writeDecimal128(param0: string, param1: org.bson.types.Decimal128): void;
				public doWriteJavaScriptWithScope(param0: string): void;
				public writeJavaScript(param0: string): void;
				public doWriteObjectId(param0: org.bson.types.ObjectId): void;
				public writeUndefined(param0: string): void;
				public constructor(param0: org.bson.BsonWriterSettings);
				public writeDecimal128(param0: org.bson.types.Decimal128): void;
				public isTruncated(): boolean;
				public writeMaxKey(): void;
				public writeDateTime(param0: string, param1: number): void;
				public constructor(param0: java.io.Writer);
				public writeMaxKey(param0: string): void;
				public getContext(): org.bson.json.JsonWriter.Context;
			}
			export module JsonWriter {
				export class Context extends org.bson.AbstractBsonWriter.Context {
					public static class: java.lang.Class<org.bson.json.JsonWriter.Context>;
					public getParentContext(): org.bson.json.JsonWriter.Context;
					public getParentContext(): org.bson.AbstractBsonWriter.Context;
					public constructor(param0: org.bson.json.JsonWriter, param1: org.bson.json.JsonWriter.Context, param2: org.bson.BsonContextType);
					public constructor(param0: org.bson.json.JsonWriter, param1: org.bson.json.JsonWriter.Context, param2: org.bson.BsonContextType, param3: string);
					public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context, param2: org.bson.BsonContextType);
					public constructor(param0: org.bson.AbstractBsonWriter, param1: org.bson.AbstractBsonWriter.Context);
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class JsonWriterSettings extends org.bson.BsonWriterSettings {
				public static class: java.lang.Class<org.bson.json.JsonWriterSettings>;
				public getInt32Converter(): org.bson.json.Converter<java.lang.Integer>;
				public getObjectIdConverter(): org.bson.json.Converter<org.bson.types.ObjectId>;
				public constructor(param0: boolean);
				public getDecimal128Converter(): org.bson.json.Converter<org.bson.types.Decimal128>;
				public constructor();
				public constructor(param0: org.bson.json.JsonMode, param1: string, param2: string);
				public getMaxKeyConverter(): org.bson.json.Converter<org.bson.BsonMaxKey>;
				public getMaxLength(): number;
				public getUndefinedConverter(): org.bson.json.Converter<org.bson.BsonUndefined>;
				public getNewLineCharacters(): string;
				public getStringConverter(): org.bson.json.Converter<string>;
				public static builder(): org.bson.json.JsonWriterSettings.Builder;
				public constructor(param0: org.bson.json.JsonMode);
				public isIndent(): boolean;
				public constructor(param0: org.bson.json.JsonMode, param1: string);
				public getMinKeyConverter(): org.bson.json.Converter<org.bson.BsonMinKey>;
				public getIndentCharacters(): string;
				public getJavaScriptConverter(): org.bson.json.Converter<string>;
				public getDoubleConverter(): org.bson.json.Converter<java.lang.Double>;
				public getOutputMode(): org.bson.json.JsonMode;
				public getBooleanConverter(): org.bson.json.Converter<java.lang.Boolean>;
				public constructor(param0: org.bson.json.JsonMode, param1: boolean);
				public getRegularExpressionConverter(): org.bson.json.Converter<org.bson.BsonRegularExpression>;
				public getNullConverter(): org.bson.json.Converter<org.bson.BsonNull>;
				public getSymbolConverter(): org.bson.json.Converter<string>;
				public getInt64Converter(): org.bson.json.Converter<java.lang.Long>;
				public getTimestampConverter(): org.bson.json.Converter<org.bson.BsonTimestamp>;
				public constructor(param0: number);
				public getDateTimeConverter(): org.bson.json.Converter<java.lang.Long>;
				public getBinaryConverter(): org.bson.json.Converter<org.bson.BsonBinary>;
			}
			export module JsonWriterSettings {
				export class Builder {
					public static class: java.lang.Class<org.bson.json.JsonWriterSettings.Builder>;
					public build(): org.bson.json.JsonWriterSettings;
					public indent(param0: boolean): org.bson.json.JsonWriterSettings.Builder;
					public maxKeyConverter(param0: org.bson.json.Converter<org.bson.BsonMaxKey>): org.bson.json.JsonWriterSettings.Builder;
					public dateTimeConverter(param0: org.bson.json.Converter<java.lang.Long>): org.bson.json.JsonWriterSettings.Builder;
					public nullConverter(param0: org.bson.json.Converter<org.bson.BsonNull>): org.bson.json.JsonWriterSettings.Builder;
					public minKeyConverter(param0: org.bson.json.Converter<org.bson.BsonMinKey>): org.bson.json.JsonWriterSettings.Builder;
					public undefinedConverter(param0: org.bson.json.Converter<org.bson.BsonUndefined>): org.bson.json.JsonWriterSettings.Builder;
					public javaScriptConverter(param0: org.bson.json.Converter<string>): org.bson.json.JsonWriterSettings.Builder;
					public newLineCharacters(param0: string): org.bson.json.JsonWriterSettings.Builder;
					public stringConverter(param0: org.bson.json.Converter<string>): org.bson.json.JsonWriterSettings.Builder;
					public objectIdConverter(param0: org.bson.json.Converter<org.bson.types.ObjectId>): org.bson.json.JsonWriterSettings.Builder;
					public booleanConverter(param0: org.bson.json.Converter<java.lang.Boolean>): org.bson.json.JsonWriterSettings.Builder;
					public doubleConverter(param0: org.bson.json.Converter<java.lang.Double>): org.bson.json.JsonWriterSettings.Builder;
					public binaryConverter(param0: org.bson.json.Converter<org.bson.BsonBinary>): org.bson.json.JsonWriterSettings.Builder;
					public decimal128Converter(param0: org.bson.json.Converter<org.bson.types.Decimal128>): org.bson.json.JsonWriterSettings.Builder;
					public regularExpressionConverter(param0: org.bson.json.Converter<org.bson.BsonRegularExpression>): org.bson.json.JsonWriterSettings.Builder;
					public indentCharacters(param0: string): org.bson.json.JsonWriterSettings.Builder;
					public int64Converter(param0: org.bson.json.Converter<java.lang.Long>): org.bson.json.JsonWriterSettings.Builder;
					public outputMode(param0: org.bson.json.JsonMode): org.bson.json.JsonWriterSettings.Builder;
					public maxLength(param0: number): org.bson.json.JsonWriterSettings.Builder;
					public timestampConverter(param0: org.bson.json.Converter<org.bson.BsonTimestamp>): org.bson.json.JsonWriterSettings.Builder;
					public int32Converter(param0: org.bson.json.Converter<java.lang.Integer>): org.bson.json.JsonWriterSettings.Builder;
					public symbolConverter(param0: org.bson.json.Converter<string>): org.bson.json.JsonWriterSettings.Builder;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class LegacyExtendedJsonBinaryConverter extends org.bson.json.Converter<org.bson.BsonBinary> {
				public static class: java.lang.Class<org.bson.json.LegacyExtendedJsonBinaryConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonBinary, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class LegacyExtendedJsonDateTimeConverter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.LegacyExtendedJsonDateTimeConverter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class LegacyExtendedJsonRegularExpressionConverter extends org.bson.json.Converter<org.bson.BsonRegularExpression> {
				public static class: java.lang.Class<org.bson.json.LegacyExtendedJsonRegularExpressionConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonRegularExpression, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class RelaxedExtendedJsonDateTimeConverter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.RelaxedExtendedJsonDateTimeConverter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class RelaxedExtendedJsonDoubleConverter extends org.bson.json.Converter<java.lang.Double> {
				public static class: java.lang.Class<org.bson.json.RelaxedExtendedJsonDoubleConverter>;
				public convert(param0: java.lang.Double, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class RelaxedExtendedJsonInt64Converter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.RelaxedExtendedJsonInt64Converter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellBinaryConverter extends org.bson.json.Converter<org.bson.BsonBinary> {
				public static class: java.lang.Class<org.bson.json.ShellBinaryConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonBinary, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellDateTimeConverter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.ShellDateTimeConverter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellDecimal128Converter extends org.bson.json.Converter<org.bson.types.Decimal128> {
				public static class: java.lang.Class<org.bson.json.ShellDecimal128Converter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.types.Decimal128, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellInt64Converter extends org.bson.json.Converter<java.lang.Long> {
				public static class: java.lang.Class<org.bson.json.ShellInt64Converter>;
				public convert(param0: java.lang.Long, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellMaxKeyConverter extends org.bson.json.Converter<org.bson.BsonMaxKey> {
				public static class: java.lang.Class<org.bson.json.ShellMaxKeyConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonMaxKey, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellMinKeyConverter extends org.bson.json.Converter<org.bson.BsonMinKey> {
				public static class: java.lang.Class<org.bson.json.ShellMinKeyConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonMinKey, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellObjectIdConverter extends org.bson.json.Converter<org.bson.types.ObjectId> {
				public static class: java.lang.Class<org.bson.json.ShellObjectIdConverter>;
				public convert(param0: org.bson.types.ObjectId, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellRegularExpressionConverter extends org.bson.json.Converter<org.bson.BsonRegularExpression> {
				public static class: java.lang.Class<org.bson.json.ShellRegularExpressionConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonRegularExpression, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellTimestampConverter extends org.bson.json.Converter<org.bson.BsonTimestamp> {
				public static class: java.lang.Class<org.bson.json.ShellTimestampConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonTimestamp, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class ShellUndefinedConverter extends org.bson.json.Converter<org.bson.BsonUndefined> {
				public static class: java.lang.Class<org.bson.json.ShellUndefinedConverter>;
				public convert(param0: any, param1: org.bson.json.StrictJsonWriter): void;
				public convert(param0: org.bson.BsonUndefined, param1: org.bson.json.StrictJsonWriter): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class StrictCharacterStreamJsonWriter extends org.bson.json.StrictJsonWriter {
				public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriter>;
				public writeStartArray(): void;
				public constructor(param0: java.io.Writer, param1: org.bson.json.StrictCharacterStreamJsonWriterSettings);
				public writeNumber(param0: string): void;
				public writeStartArray(param0: string): void;
				public getCurrentLength(): number;
				public writeName(param0: string): void;
				public writeStartObject(param0: string): void;
				public writeString(param0: string, param1: string): void;
				public writeEndArray(): void;
				public writeString(param0: string): void;
				public writeNull(param0: string): void;
				public writeNull(): void;
				public isTruncated(): boolean;
				public writeStartObject(): void;
				public writeBoolean(param0: string, param1: boolean): void;
				public writeRaw(param0: string, param1: string): void;
				public writeBoolean(param0: boolean): void;
				public writeEndObject(): void;
				public writeNumber(param0: string, param1: string): void;
				public writeRaw(param0: string): void;
			}
			export module StrictCharacterStreamJsonWriter {
				export class JsonContextType {
					public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType>;
					public static TOP_LEVEL: org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType;
					public static DOCUMENT: org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType;
					public static ARRAY: org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType;
					public static valueOf(param0: string): org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType;
					public static values(): native.Array<org.bson.json.StrictCharacterStreamJsonWriter.JsonContextType>;
				}
				export class State {
					public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriter.State>;
					public static INITIAL: org.bson.json.StrictCharacterStreamJsonWriter.State;
					public static NAME: org.bson.json.StrictCharacterStreamJsonWriter.State;
					public static VALUE: org.bson.json.StrictCharacterStreamJsonWriter.State;
					public static DONE: org.bson.json.StrictCharacterStreamJsonWriter.State;
					public static values(): native.Array<org.bson.json.StrictCharacterStreamJsonWriter.State>;
					public static valueOf(param0: string): org.bson.json.StrictCharacterStreamJsonWriter.State;
				}
				export class StrictJsonContext {
					public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriter.StrictJsonContext>;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class StrictCharacterStreamJsonWriterSettings {
				public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriterSettings>;
				public isIndent(): boolean;
				public getMaxLength(): number;
				public static builder(): org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder;
				public getIndentCharacters(): string;
				public getNewLineCharacters(): string;
			}
			export module StrictCharacterStreamJsonWriterSettings {
				export class Builder {
					public static class: java.lang.Class<org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder>;
					public maxLength(param0: number): org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder;
					public indentCharacters(param0: string): org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder;
					public build(): org.bson.json.StrictCharacterStreamJsonWriterSettings;
					public indent(param0: boolean): org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder;
					public newLineCharacters(param0: string): org.bson.json.StrictCharacterStreamJsonWriterSettings.Builder;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module json {
			export class StrictJsonWriter {
				public static class: java.lang.Class<org.bson.json.StrictJsonWriter>;
				/**
				 * Constructs a new instance of the org.bson.json.StrictJsonWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeName(param0: string): void;
					writeBoolean(param0: boolean): void;
					writeBoolean(param0: string, param1: boolean): void;
					writeNumber(param0: string): void;
					writeNumber(param0: string, param1: string): void;
					writeString(param0: string): void;
					writeString(param0: string, param1: string): void;
					writeRaw(param0: string): void;
					writeRaw(param0: string, param1: string): void;
					writeNull(): void;
					writeNull(param0: string): void;
					writeStartArray(): void;
					writeStartArray(param0: string): void;
					writeStartObject(): void;
					writeStartObject(param0: string): void;
					writeEndArray(): void;
					writeEndObject(): void;
					isTruncated(): boolean;
				});
				public constructor();
				public writeStartArray(): void;
				public writeNumber(param0: string): void;
				public writeStartArray(param0: string): void;
				public writeName(param0: string): void;
				public writeString(param0: string, param1: string): void;
				public writeStartObject(param0: string): void;
				public writeEndArray(): void;
				public writeString(param0: string): void;
				public writeNull(param0: string): void;
				public writeNull(): void;
				public isTruncated(): boolean;
				public writeStartObject(): void;
				public writeBoolean(param0: string, param1: boolean): void;
				public writeRaw(param0: string, param1: string): void;
				public writeBoolean(param0: boolean): void;
				public writeEndObject(): void;
				public writeNumber(param0: string, param1: string): void;
				public writeRaw(param0: string): void;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class BSONTimestamp extends java.lang.Object {
				public static class: java.lang.Class<org.bson.types.BSONTimestamp>;
				public constructor(param0: number, param1: number);
				public compareTo(param0: org.bson.types.BSONTimestamp): number;
				public hashCode(): number;
				public getInc(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public getTime(): number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class BasicBSONList extends java.util.ArrayList<any> implements org.bson.BSONObject  {
				public static class: java.lang.Class<org.bson.types.BasicBSONList>;
				public get(param0: string): any;
				public keySet(): java.util.Set<string>;
				public containsKey(param0: string): boolean;
				public put(param0: number, param1: any): any;
				public putAll(param0: org.bson.BSONObject): void;
				public containsField(param0: string): boolean;
				public toMap(): java.util.Map;
				public putAll(param0: java.util.Map): void;
				public put(param0: string, param1: any): any;
				public constructor();
				public removeField(param0: string): any;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class Binary {
				public static class: java.lang.Class<org.bson.types.Binary>;
				public constructor(param0: native.Array<number>);
				public getData(): native.Array<number>;
				public getType(): number;
				public hashCode(): number;
				public length(): number;
				public equals(param0: any): boolean;
				public constructor(param0: org.bson.BsonBinarySubType, param1: native.Array<number>);
				public constructor(param0: number, param1: native.Array<number>);
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class Code {
				public static class: java.lang.Class<org.bson.types.Code>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getCode(): string;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class CodeWScope extends org.bson.types.Code {
				public static class: java.lang.Class<org.bson.types.CodeWScope>;
				public hashCode(): number;
				public getScope(): org.bson.BSONObject;
				public equals(param0: any): boolean;
				public constructor(param0: string);
				public constructor(param0: string, param1: org.bson.BSONObject);
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class CodeWithScope extends org.bson.types.Code {
				public static class: java.lang.Class<org.bson.types.CodeWithScope>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: org.bson.Document);
				public constructor(param0: string);
				public getScope(): org.bson.Document;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class Decimal128 extends java.lang.Number implements java.lang.Comparable<org.bson.types.Decimal128>  {
				public static class: java.lang.Class<org.bson.types.Decimal128>;
				public static POSITIVE_INFINITY: org.bson.types.Decimal128;
				public static NEGATIVE_INFINITY: org.bson.types.Decimal128;
				public static NEGATIVE_NaN: org.bson.types.Decimal128;
				public static NaN: org.bson.types.Decimal128;
				public static POSITIVE_ZERO: org.bson.types.Decimal128;
				public static NEGATIVE_ZERO: org.bson.types.Decimal128;
				public getHigh(): number;
				public compareTo(param0: org.bson.types.Decimal128): number;
				public getLow(): number;
				public longValue(): number;
				public static parse(param0: string): org.bson.types.Decimal128;
				public intValue(): number;
				public bigDecimalValue(): java.math.BigDecimal;
				public toString(): string;
				public isFinite(): boolean;
				public static fromIEEE754BIDEncoding(param0: number, param1: number): org.bson.types.Decimal128;
				public isNaN(): boolean;
				public floatValue(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public isNegative(): boolean;
				public constructor(param0: java.math.BigDecimal);
				public isInfinite(): boolean;
				public doubleValue(): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class MaxKey {
				public static class: java.lang.Class<org.bson.types.MaxKey>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class MinKey {
				public static class: java.lang.Class<org.bson.types.MinKey>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class ObjectId extends java.lang.Object {
				public static class: java.lang.Class<org.bson.types.ObjectId>;
				public constructor(param0: number, param1: number);
				public constructor(param0: java.nio.ByteBuffer);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: native.Array<number>);
				public static getCurrentCounter(): number;
				public constructor(param0: java.util.Date, param1: number);
				public static isValid(param0: string): boolean;
				public compareTo(param0: org.bson.types.ObjectId): number;
				public hashCode(): number;
				public toHexString(): string;
				public toStringMongod(): string;
				public equals(param0: any): boolean;
				public toByteArray(): native.Array<number>;
				public static createFromLegacyFormat(param0: number, param1: number, param2: number): org.bson.types.ObjectId;
				public getTimestamp(): number;
				public constructor(param0: java.util.Date, param1: number, param2: number, param3: number);
				public static get(): org.bson.types.ObjectId;
				public getDate(): java.util.Date;
				public constructor(param0: java.util.Date);
				public toString(): string;
				public getMachineIdentifier(): number;
				public getTime(): number;
				public static getGeneratedMachineIdentifier(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public static getGeneratedProcessIdentifier(): number;
				public putToByteBuffer(param0: java.nio.ByteBuffer): void;
				public getTimeSecond(): number;
				public getCounter(): number;
				public getProcessIdentifier(): number;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class StringRangeSet extends java.util.Set<string> {
				public static class: java.lang.Class<org.bson.types.StringRangeSet>;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public add(param0: string): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public iterator(): java.util.Iterator<string>;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module org {
	export module bson {
		export module types {
			export class Symbol {
				public static class: java.lang.Class<org.bson.types.Symbol>;
				public getSymbol(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export abstract class AbstractCopyOnWriteMap<K, V, M>  extends java.util.concurrent.ConcurrentMap<any,any> {
				public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap<any,any,any>>;
				public values(): java.util.Collection<any>;
				public get(param0: any): any;
				public replace(param0: any, param1: any): any;
				public putAll(param0: java.util.Map<any,any>): void;
				public set(param0: any): void;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public toString(): string;
				public containsKey(param0: any): boolean;
				public keySet(): java.util.Set<any>;
				public remove(param0: any, param1: any): boolean;
				public size(): number;
				public putIfAbsent(param0: any, param1: any): any;
				public remove(param0: any): any;
				public put(param0: any, param1: any): any;
				public hashCode(): number;
				public constructor(param0: java.util.Map, param1: org.bson.util.AbstractCopyOnWriteMap.View.Type);
				public clear(): void;
				public equals(param0: any): boolean;
				public getDelegate(): any;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
				public replace(param0: any, param1: any, param2: any): boolean;
				public copy(): any;
			}
			export module AbstractCopyOnWriteMap {
				export abstract class CollectionView<E>  extends java.util.Collection<any> {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.CollectionView<any>>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public equals(param0: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public toString(): string;
					public toArray(param0: native.Array<any>): native.Array<any>;
					public constructor();
					public toArray(): native.Array<any>;
					public hashCode(): number;
					public contains(param0: any): boolean;
				}
				export class EntrySet extends org.bson.util.AbstractCopyOnWriteMap.CollectionView<java.util.Map.Entry<any,any>> implements java.util.Set<java.util.Map.Entry<any,any>>  {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.EntrySet>;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public clear(): void;
					public retainAll(param0: java.util.Collection<any>): boolean;
				}
				export class Immutable extends org.bson.util.AbstractCopyOnWriteMap.View<any,any> {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.Immutable>;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public keySet(): java.util.Set<any>;
					public values(): java.util.Collection<any>;
				}
				export class KeySet extends org.bson.util.AbstractCopyOnWriteMap.CollectionView<any> implements java.util.Set<any>  {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.KeySet>;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public clear(): void;
					public retainAll(param0: java.util.Collection<any>): boolean;
				}
				export class Mutable extends org.bson.util.AbstractCopyOnWriteMap.View<any,any> {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.Mutable>;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public keySet(): java.util.Set<any>;
					public values(): java.util.Collection<any>;
				}
				export class UnmodifiableIterator<T>  extends java.util.Iterator<any> {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.UnmodifiableIterator<any>>;
					public next(): any;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class Values extends org.bson.util.AbstractCopyOnWriteMap.CollectionView<any> {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.Values>;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public clear(): void;
					public retainAll(param0: java.util.Collection<any>): boolean;
				}
				export abstract class View<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.View<any,any>>;
				}
				export module View {
					export abstract class Type {
						public static class: java.lang.Class<org.bson.util.AbstractCopyOnWriteMap.View.Type>;
						public static STABLE: org.bson.util.AbstractCopyOnWriteMap.View.Type;
						public static LIVE: org.bson.util.AbstractCopyOnWriteMap.View.Type;
						public static values(): native.Array<org.bson.util.AbstractCopyOnWriteMap.View.Type>;
						public static valueOf(param0: string): org.bson.util.AbstractCopyOnWriteMap.View.Type;
					}
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export class ClassAncestry {
				public static class: java.lang.Class<org.bson.util.ClassAncestry>;
				public static getAncestry(param0: java.lang.Class): java.util.List;
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export class ClassMap<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.util.ClassMap<any>>;
				public get(param0: any): T;
				public put(param0: java.lang.Class<any>, param1: T): T;
				public clear(): void;
				public isEmpty(): boolean;
				public static getAncestry(param0: java.lang.Class): java.util.List;
				public constructor();
				public remove(param0: any): T;
				public size(): number;
			}
			export module ClassMap {
				export class ComputeFunction extends org.bson.util.Function<java.lang.Class<any>,any> {
					public static class: java.lang.Class<org.bson.util.ClassMap.ComputeFunction>;
					public apply(param0: any): any;
					public apply(param0: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export class ComputingMap<K, V>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.util.ComputingMap<any,any>>;
				public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				public putAll(param0: java.util.Map<any,any>): void;
				public static create(param0: org.bson.util.Function<any,any>): java.util.Map;
				public putIfAbsent(param0: K, param1: V): V;
				public replace(param0: K, param1: V): V;
				public apply(param0: K): V;
				public keySet(): java.util.Set<K>;
				public containsKey(param0: any): boolean;
				public apply(param0: any): any;
				public put(param0: K, param1: V): V;
				public values(): java.util.Collection<V>;
				public remove(param0: any, param1: any): boolean;
				public size(): number;
				public replace(param0: K, param1: V, param2: V): boolean;
				public remove(param0: any): V;
				public get(param0: any): V;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export abstract class CopyOnWriteMap<K, V>  extends org.bson.util.AbstractCopyOnWriteMap<any,any,java.util.Map<any,any>> {
				public static class: java.lang.Class<org.bson.util.CopyOnWriteMap<any,any>>;
				public static builder(): org.bson.util.CopyOnWriteMap.Builder<any,any>;
				public static newLinkedMap(param0: java.util.Map): org.bson.util.CopyOnWriteMap<any,any>;
				public constructor(param0: java.util.Map<any,any>, param1: org.bson.util.AbstractCopyOnWriteMap.View.Type);
				public constructor(param0: java.util.Map, param1: org.bson.util.AbstractCopyOnWriteMap.View.Type);
				public constructor(param0: java.util.Map<any,any>);
				public static newLinkedMap(): org.bson.util.CopyOnWriteMap<any,any>;
				public constructor(param0: org.bson.util.AbstractCopyOnWriteMap.View.Type);
				public static newHashMap(): org.bson.util.CopyOnWriteMap<any,any>;
				public static newHashMap(param0: java.util.Map): org.bson.util.CopyOnWriteMap<any,any>;
				public constructor();
				public copy(): any;
				public copy(param0: java.util.Map): java.util.Map;
			}
			export module CopyOnWriteMap {
				export class Builder<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<org.bson.util.CopyOnWriteMap.Builder<any,any>>;
					public addAll(param0: java.util.Map<any,any>): org.bson.util.CopyOnWriteMap.Builder<K,V>;
					public liveViews(): org.bson.util.CopyOnWriteMap.Builder<K,V>;
					public newLinkedMap(): org.bson.util.CopyOnWriteMap<K,V>;
					public newHashMap(): org.bson.util.CopyOnWriteMap<K,V>;
					public stableViews(): org.bson.util.CopyOnWriteMap.Builder<K,V>;
				}
				export class Hash<K, V>  extends org.bson.util.CopyOnWriteMap<any,any> {
					public static class: java.lang.Class<org.bson.util.CopyOnWriteMap.Hash<any,any>>;
					public copy(): any;
					public copy(param0: java.util.Map): java.util.Map;
				}
				export class Linked<K, V>  extends org.bson.util.CopyOnWriteMap<any,any> {
					public static class: java.lang.Class<org.bson.util.CopyOnWriteMap.Linked<any,any>>;
					public copy(): any;
					public copy(param0: java.util.Map): java.util.Map;
				}
			}
		}
	}
}

declare module org {
	export module bson {
		export module util {
			export class Function<A, B>  extends java.lang.Object {
				public static class: java.lang.Class<org.bson.util.Function<any,any>>;
				/**
				 * Constructs a new instance of the org.bson.util.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: A): B;
				});
				public constructor();
				public apply(param0: A): B;
			}
		}
	}
}

//Generics information:
//org.bson.BsonDocumentReader.BsonDocumentMarkableIterator:1
//org.bson.BsonDocumentWrapper:1
//org.bson.codecs.Codec:1
//org.bson.codecs.CollectibleCodec:1
//org.bson.codecs.Decoder:1
//org.bson.codecs.Encoder:1
//org.bson.codecs.configuration.ChildCodecRegistry:1
//org.bson.codecs.configuration.LazyCodec:1
//org.bson.codecs.configuration.Optional:1
//org.bson.codecs.configuration.Optional.Some:1
//org.bson.codecs.jsr310.DateTimeBasedCodec:1
//org.bson.codecs.pojo.AutomaticPojoCodec:1
//org.bson.codecs.pojo.ClassModel:1
//org.bson.codecs.pojo.ClassModelBuilder:1
//org.bson.codecs.pojo.CollectionPropertyCodecProvider.CollectionCodec:1
//org.bson.codecs.pojo.ConventionSetPrivateFieldImpl.PrivatePropertyAccessor:1
//org.bson.codecs.pojo.ConventionUseGettersAsSettersImpl.PrivatePropertyAccessor:1
//org.bson.codecs.pojo.CreatorExecutable:1
//org.bson.codecs.pojo.EnumPropertyCodecProvider.EnumCodec:1
//org.bson.codecs.pojo.IdGenerator:1
//org.bson.codecs.pojo.IdPropertyModelHolder:1
//org.bson.codecs.pojo.InstanceCreator:1
//org.bson.codecs.pojo.InstanceCreatorFactory:1
//org.bson.codecs.pojo.InstanceCreatorFactoryImpl:1
//org.bson.codecs.pojo.InstanceCreatorImpl:1
//org.bson.codecs.pojo.LazyMissingCodec:1
//org.bson.codecs.pojo.LazyPojoCodec:1
//org.bson.codecs.pojo.MapPropertyCodecProvider.MapCodec:1
//org.bson.codecs.pojo.PojoCodec:1
//org.bson.codecs.pojo.PojoCodecImpl:1
//org.bson.codecs.pojo.PropertyAccessor:1
//org.bson.codecs.pojo.PropertyAccessorImpl:1
//org.bson.codecs.pojo.PropertyMetadata:1
//org.bson.codecs.pojo.PropertyModel:1
//org.bson.codecs.pojo.PropertyModelBuilder:1
//org.bson.codecs.pojo.PropertyModelSerializationImpl:1
//org.bson.codecs.pojo.PropertySerialization:1
//org.bson.codecs.pojo.TypeData:1
//org.bson.codecs.pojo.TypeData.Builder:1
//org.bson.codecs.pojo.TypeWithTypeParameters:1
//org.bson.json.Converter:1
//org.bson.util.AbstractCopyOnWriteMap:3
//org.bson.util.AbstractCopyOnWriteMap.CollectionView:1
//org.bson.util.AbstractCopyOnWriteMap.UnmodifiableIterator:1
//org.bson.util.AbstractCopyOnWriteMap.View:2
//org.bson.util.ClassMap:1
//org.bson.util.ComputingMap:2
//org.bson.util.CopyOnWriteMap:2
//org.bson.util.CopyOnWriteMap.Builder:2
//org.bson.util.CopyOnWriteMap.Hash:2
//org.bson.util.CopyOnWriteMap.Linked:2
//org.bson.util.Function:2


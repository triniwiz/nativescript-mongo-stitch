declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class ChangeEvent<DocumentT>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>;
								public getDocumentKey(): org.bson.BsonDocument;
								public getOperationType(): com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public getUpdateDescription(): com.mongodb.stitch.core.services.mongodb.remote.UpdateDescription;
								public toBsonDocument(): org.bson.BsonDocument;
								public hasUncommittedWrites(): boolean;
								public getFullDocument(): DocumentT;
								public getId(): org.bson.BsonDocument;
								public constructor(param0: org.bson.BsonDocument, param1: com.mongodb.stitch.core.services.mongodb.remote.OperationType, param2: DocumentT, param3: com.mongodb.MongoNamespace, param4: org.bson.BsonDocument, param5: com.mongodb.stitch.core.services.mongodb.remote.UpdateDescription, param6: boolean);
								public getNamespace(): com.mongodb.MongoNamespace;
								public static fromBsonDocument(param0: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>;
							}
							export module ChangeEvent {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent.Fields>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export abstract class ChangeStream<EventT, DocumentT>  extends java.io.Closeable {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<any,any>>;
								public dispatchError(param0: com.mongodb.stitch.core.internal.net.StitchEvent<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>): void;
								public setExceptionListener(param0: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
								public getStream(): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>;
								public isOpen(): boolean;
								public getExceptionListener(): com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener;
								public constructor(param0: com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>);
								public close(): void;
								public nextEvent(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class ExceptionListener {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onError(param0: org.bson.BsonValue, param1: java.lang.Exception): void;
								});
								public constructor();
								public onError(param0: org.bson.BsonValue, param1: java.lang.Exception): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class OperationType {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.OperationType>;
								public static INSERT: com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static DELETE: com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static REPLACE: com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static UPDATE: com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static UNKNOWN: com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static valueOf(param0: string): com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static fromRemote(param0: string): com.mongodb.stitch.core.services.mongodb.remote.OperationType;
								public static values(): native.Array<com.mongodb.stitch.core.services.mongodb.remote.OperationType>;
								public toRemote(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteCountOptions {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions>;
								public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions;
								public toString(): string;
								public constructor();
								public getLimit(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteDeleteResult {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
								public constructor(param0: number);
								public getDeletedCount(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteFindOptions {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteFindOptions>;
								public getSort(): org.bson.conversions.Bson;
								public toString(): string;
								public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.RemoteFindOptions;
								public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteFindOptions;
								public constructor();
								public getLimit(): number;
								public getProjection(): org.bson.conversions.Bson;
								public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteFindOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteInsertManyResult {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>;
								public getInsertedIds(): java.util.Map<java.lang.Long,org.bson.BsonValue>;
								public constructor(param0: java.util.Map<java.lang.Long,org.bson.BsonValue>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteInsertOneResult {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>;
								public constructor(param0: org.bson.BsonValue);
								public getInsertedId(): org.bson.BsonValue;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteUpdateOptions {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions>;
								public upsert(param0: boolean): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions;
								public toString(): string;
								public isUpsert(): boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteUpdateResult {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
								public constructor(param0: number, param1: number, param2: org.bson.BsonValue);
								public getUpsertedId(): org.bson.BsonValue;
								public getMatchedCount(): number;
								public getModifiedCount(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export class UpdateDescription {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.UpdateDescription>;
								public static diff(param0: org.bson.BsonDocument, param1: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.UpdateDescription;
								public constructor(param0: org.bson.BsonDocument, param1: java.util.Collection<string>);
								public equals(param0: any): boolean;
								public getUpdatedFields(): org.bson.BsonDocument;
								public getRemovedFields(): java.util.Collection<string>;
								public hashCode(): number;
								public toUpdateDocument(): org.bson.BsonDocument;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class AggregateOperation<T>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.util.Collection<any>> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.AggregateOperation<any>>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.util.Collection<any>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteAggregateIterable<ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										first(): any;
										map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										forEach(param0: com.mongodb.Block<any>): void;
										into(param0: java.util.Collection): java.util.Collection;
										iterator(): java.util.Iterator;
									});
									public constructor();
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteAggregateIterableImpl<DocumentT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterableImpl<any,any> implements com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterableImpl<any,any>>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteFindIterable<ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										first(): any;
										map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										forEach(param0: com.mongodb.Block<any>): void;
										into(param0: java.util.Collection): java.util.Collection;
										iterator(): java.util.Iterator;
									});
									public constructor();
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteFindIterableImpl<DocumentT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterableImpl<any,any> implements com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl<any,any>>;
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl<any,any>;
									public first(): any;
									public forEach(param0: com.mongodb.Block<any>): void;
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public constructor(param0: org.bson.conversions.Bson, param1: java.lang.Class<any>, param2: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param3: com.mongodb.stitch.core.services.mongodb.remote.internal.Operations<any>);
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl<any,any>;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl<any,any>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public constructor(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: java.lang.Class<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.internal.Operations<any>);
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public into(param0: java.util.Collection): java.util.Collection;
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl<any,any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMappingIterable<U, V>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMappingIterable<any,any>>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public first(): any;
									public constructor(param0: com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>, param1: com.mongodb.Function<any,any>);
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoClient {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getDatabase(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase;
									});
									public constructor();
									public getDatabase(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoClientImpl extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClientImpl>;
									public close(): void;
									public getDatabase(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase;
									public constructor(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: string, param2: com.mongodb.stitch.core.StitchAppClientInfo, param3: com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory);
									public getDataSynchronizer(): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer;
									public getDatabase(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabaseImpl;
									public onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoCollection<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getNamespace(): com.mongodb.MongoNamespace;
										getDocumentClass(): java.lang.Class<DocumentT>;
										getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
										withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
										withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<DocumentT>;
										count(): number;
										count(param0: org.bson.conversions.Bson): number;
										count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): number;
										find(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<DocumentT>;
										find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<DocumentT>;
										find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
										aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<DocumentT>;
										aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>;
										insertOne(param0: DocumentT): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult;
										insertMany(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult;
										deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
										deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
										updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
										updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
										updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
										updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
										watch(param0: native.Array<org.bson.types.ObjectId>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>;
										watch(param0: native.Array<org.bson.BsonValue>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>;
										sync(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<DocumentT>;
									});
									public constructor();
									public withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									public deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
									public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
									public count(param0: org.bson.conversions.Bson): number;
									public find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<DocumentT>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<DocumentT>;
									public aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<DocumentT>;
									public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public insertMany(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public watch(param0: native.Array<org.bson.types.ObjectId>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>;
									public watch(param0: native.Array<org.bson.BsonValue>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>;
									public insertOne(param0: DocumentT): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult;
									public count(): number;
									public deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
									public getDocumentClass(): java.lang.Class<DocumentT>;
									public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): number;
									public find(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<DocumentT>;
									public getNamespace(): com.mongodb.MongoNamespace;
									public sync(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<DocumentT>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoCollectionImpl<DocumentT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollectionImpl<any>>;
									public withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									public deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
									public watch(param0: native.Array<org.bson.types.ObjectId>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>;
									public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
									public count(param0: org.bson.conversions.Bson): number;
									public find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>;
									public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public find(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public insertMany(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>;
									public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									public watch(param0: native.Array<org.bson.BsonValue>): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>;
									public count(): number;
									public insertOne(param0: any): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult;
									public deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
									public sync(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<any>;
									public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): number;
									public getNamespace(): com.mongodb.MongoNamespace;
									public getDocumentClass(): java.lang.Class<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoCursor<ResultT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										hasNext(): boolean;
										next(): ResultT;
									});
									public constructor();
									public hasNext(): boolean;
									public next(): ResultT;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoCursorImpl<ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursorImpl<any>>;
									public hasNext(): boolean;
									public close(): void;
									public next(): any;
									public constructor(param0: java.util.Iterator<any>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoDatabase {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getName(): string;
										getCollection(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<org.bson.Document>;
										getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									});
									public constructor();
									public getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									public getName(): string;
									public getCollection(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<org.bson.Document>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoDatabaseImpl extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabase {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoDatabaseImpl>;
									public getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<any>;
									public getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollectionImpl<any>;
									public getCollection(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollectionImpl<org.bson.Document>;
									public getName(): string;
									public getCollection(param0: string): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection<org.bson.Document>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoIterable<ResultT>  extends java.lang.Iterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										first(): any;
										map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										forEach(param0: com.mongodb.Block<any>): void;
										into(param0: java.util.Collection): java.util.Collection;
										iterator(): java.util.Iterator;
									});
									public constructor();
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export abstract class CoreRemoteMongoIterableImpl<DocumentT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterableImpl<any,any>>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public constructor(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: java.lang.Class<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.internal.Operations<any>);
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CoreRemoteMongoMappingCursor<T, U>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoMappingCursor<any,any>>;
									public hasNext(): boolean;
									public close(): void;
									public remove(): void;
									public next(): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class CountOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.lang.Long> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.CountOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.lang.Long;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.CountOperation;
									public filter(param0: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.internal.CountOperation;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class DeleteManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.DeleteManyOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class DeleteOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.DeleteOneOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class FindOperation<T>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.util.Collection<any>> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>>;
									public filter(param0: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>;
									public sort(param0: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.util.Collection<any>;
									public projection(param0: org.bson.BsonDocument): com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class InsertManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.InsertManyOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class InsertOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.InsertOneOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class Operation<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): T;
									});
									public constructor();
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): T;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class Operations<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.Operations<any>>;
									public constructor(param0: com.mongodb.MongoNamespace, param1: java.lang.Class<DocumentT>, param2: org.bson.codecs.configuration.CodecRegistry);
									public createFindOperation(param0: com.mongodb.MongoNamespace, param1: org.bson.conversions.Bson, param2: java.lang.Class, param3: com.mongodb.stitch.core.services.mongodb.remote.RemoteFindOptions): com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class ResultDecoders {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders>;
									public static updateResultDecoder: org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									public static deleteResultDecoder: org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
									public static insertOneResultDecoder: org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>;
									public static insertManyResultDecoder: org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>;
									public static changeEventDecoder(param0: org.bson.codecs.Codec): org.bson.codecs.Decoder;
									public constructor();
								}
								export module ResultDecoders {
									export class ChangeEventDecoder<DocumentT>  extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.ChangeEventDecoder<any>>;
										public equals(param0: any): boolean;
										public hashCode(): number;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>;
									}
									export class DeleteResultDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.DeleteResultDecoder>;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult;
									}
									export module DeleteResultDecoder {
										export class Fields {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.DeleteResultDecoder.Fields>;
										}
									}
									export class InsertManyResultDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.InsertManyResultDecoder>;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult;
									}
									export module InsertManyResultDecoder {
										export class Fields {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.InsertManyResultDecoder.Fields>;
										}
									}
									export class InsertOneResultDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.InsertOneResultDecoder>;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult;
									}
									export module InsertOneResultDecoder {
										export class Fields {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.InsertOneResultDecoder.Fields>;
										}
									}
									export class UpdateResultDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.UpdateResultDecoder>;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									}
									export module UpdateResultDecoder {
										export class Fields {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.UpdateResultDecoder.Fields>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class UpdateManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.UpdateManyOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public upsert(param0: boolean): com.mongodb.stitch.core.services.mongodb.remote.internal.UpdateManyOperation;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class UpdateOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.UpdateOneOperation>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									public upsert(param0: boolean): com.mongodb.stitch.core.services.mongodb.remote.internal.UpdateOneOperation;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class WatchOperation<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.internal.WatchOperation<any>>;
									public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class ChangeEventListener<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onEvent(param0: org.bson.BsonValue, param1: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>): void;
									});
									public constructor();
									public onEvent(param0: org.bson.BsonValue, param1: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class ConflictHandler<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										resolveConflict(param0: org.bson.BsonValue, param1: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>): DocumentT;
									});
									public constructor();
									public resolveConflict(param0: org.bson.BsonValue, param1: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>): DocumentT;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class CoreSync<DocumentT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										configure(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<DocumentT>, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
										syncOne(param0: org.bson.BsonValue): void;
										syncMany(param0: native.Array<org.bson.BsonValue>): void;
										desyncOne(param0: org.bson.BsonValue): void;
										desyncMany(param0: native.Array<org.bson.BsonValue>): void;
										getSyncedIds(): java.util.Set<org.bson.BsonValue>;
										getPausedDocumentIds(): java.util.Set<org.bson.BsonValue>;
										resumeSyncForDocument(param0: org.bson.BsonValue): boolean;
										count(): number;
										count(param0: org.bson.conversions.Bson): number;
										count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): number;
										find(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<DocumentT>;
										find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<DocumentT>;
										find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<DocumentT>;
										aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>;
										insertOne(param0: DocumentT): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult;
										insertMany(param0: java.util.List<DocumentT>): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult;
										deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
										deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
										updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
									});
									public constructor();
									public syncMany(param0: native.Array<org.bson.BsonValue>): void;
									public desyncOne(param0: org.bson.BsonValue): void;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
									public getPausedDocumentIds(): java.util.Set<org.bson.BsonValue>;
									public count(param0: org.bson.conversions.Bson): number;
									public configure(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<DocumentT>, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
									public syncOne(param0: org.bson.BsonValue): void;
									public find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public insertMany(param0: java.util.List<DocumentT>): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult;
									public deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
									public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<DocumentT>;
									public desyncMany(param0: native.Array<org.bson.BsonValue>): void;
									public getSyncedIds(): java.util.Set<org.bson.BsonValue>;
									public resumeSyncForDocument(param0: org.bson.BsonValue): boolean;
									public find(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<DocumentT>;
									public deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
									public count(): number;
									public insertOne(param0: DocumentT): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
									public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<DocumentT>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
									public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): number;
									public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class CoreSyncAggregateIterable<ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										first(): any;
										map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										forEach(param0: com.mongodb.Block<any>): void;
										into(param0: java.util.Collection): java.util.Collection;
										iterator(): java.util.Iterator;
									});
									public constructor();
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class CoreSyncFindIterable<ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										first(): any;
										map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										forEach(param0: com.mongodb.Block<any>): void;
										into(param0: java.util.Collection): java.util.Collection;
										iterator(): java.util.Iterator;
									});
									public constructor();
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public first(): any;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): void;
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									public into(param0: java.util.Collection): java.util.Collection;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class DefaultSyncConflictResolvers {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.DefaultSyncConflictResolvers>;
									public constructor();
									public static remoteWins(): com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>;
									public static localWins(): com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class DocumentSynchronizationConfig {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.DocumentSynchronizationConfig>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.DocumentSynchronizationConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getDocumentId(): org.bson.BsonValue;
										hasUncommittedWrites(): boolean;
									});
									public constructor();
									public getDocumentId(): org.bson.BsonValue;
									public hasUncommittedWrites(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class ErrorListener extends com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.ErrorListener>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onError(param0: org.bson.BsonValue, param1: java.lang.Exception): void;
									});
									public constructor();
									public onError(param0: org.bson.BsonValue, param1: java.lang.Exception): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncCountOptions extends com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions>;
									public constructor();
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions;
									public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncDeleteResult extends com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
									public constructor(param0: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncInsertManyResult extends com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult>;
									public constructor(param0: java.util.Map<java.lang.Long,org.bson.BsonValue>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncInsertOneResult extends com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult>;
									public constructor(param0: org.bson.BsonValue);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncUpdateOptions extends com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions>;
									public constructor();
									public upsert(param0: boolean): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions;
									public upsert(param0: boolean): com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export class SyncUpdateResult extends com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									public constructor(param0: number, param1: number, param2: org.bson.BsonValue);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class AggregateOperation<T>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.util.Collection<any>> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.AggregateOperation<any>>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.util.Collection<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class ChangeEvents {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.ChangeEvents>;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class CoreDocumentSynchronizationConfig {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
										public setStale(param0: boolean): void;
										public equals(param0: any): boolean;
										public hasUncommittedWrites(): boolean;
										public getDocumentId(): org.bson.BsonValue;
										public getNamespace(): com.mongodb.MongoNamespace;
										public hashCode(): number;
										public getLastUncommittedChangeEvent(): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>;
										public getLastResolution(): number;
										public isStale(): boolean;
										public hasCommittedVersion(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DocumentVersionInfo): boolean;
										public getLastKnownRemoteVersion(): org.bson.BsonDocument;
									}
									export module CoreDocumentSynchronizationConfig {
										export class ConfigCodec extends org.bson.codecs.Codec<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig> {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig.ConfigCodec>;
											public getEncoderClass(): java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
											public encode(param0: org.bson.BsonWriter, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig, param2: org.bson.codecs.EncoderContext): void;
											public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig;
										}
										export module ConfigCodec {
											export class Fields {
												public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig.ConfigCodec.Fields>;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export abstract class CoreRemoteClientFactory {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreRemoteClientFactory>;
										public constructor();
										public static getClient(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient;
										public static close(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class CoreSyncAggregateIterableImpl<DocumentT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncMongoIterableImpl<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncOperations<any>,any> implements com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>  {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncAggregateIterableImpl<any,any>>;
										public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										public forEach(param0: com.mongodb.Block<any>): void;
										public into(param0: java.util.Collection): java.util.Collection;
										public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										public first(): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class CoreSyncFindIterableImpl<DocumentT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncMongoIterableImpl<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncOperations<any>,any> implements com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>  {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl<any,any>>;
										public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl<any,any>;
										public limit(param0: number): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl<any,any>;
										public forEach(param0: com.mongodb.Block<any>): void;
										public into(param0: java.util.Collection): java.util.Collection;
										public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl<any,any>;
										public first(): any;
										public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl<any,any>;
										public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class CoreSyncImpl<DocumentT>  extends com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync<any> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncImpl<any>>;
										public configure(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
										public find(param0: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public insertOne(param0: any): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult;
										public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public find(): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
										public syncOne(param0: org.bson.BsonValue): void;
										public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public deleteOne(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
										public desyncOne(param0: org.bson.BsonValue): void;
										public deleteMany(param0: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
										public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public insertMany(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult;
										public constructor(param0: com.mongodb.MongoNamespace, param1: java.lang.Class<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer, param3: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param4: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncOperations<any>);
										public syncMany(param0: native.Array<org.bson.BsonValue>): void;
										public getPausedDocumentIds(): java.util.Set<org.bson.BsonValue>;
										public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public count(): number;
										public aggregate(param0: java.util.List<any>): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>;
										public desyncMany(param0: native.Array<org.bson.BsonValue>): void;
										public count(param0: org.bson.conversions.Bson): number;
										public resumeSyncForDocument(param0: org.bson.BsonValue): boolean;
										public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): number;
										public getSyncedIds(): java.util.Set<org.bson.BsonValue>;
										public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable<any>;
										public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export abstract class CoreSyncMongoIterableImpl<OpsT, ResultT>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncMongoIterableImpl<any,any>>;
										public iterator(): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor<any>;
										public forEach(param0: com.mongodb.Block<any>): void;
										public into(param0: java.util.Collection): java.util.Collection;
										public map(param0: com.mongodb.Function): com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable<any>;
										public first(): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class CountOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.lang.Long> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CountOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.lang.Long;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DataSynchronizer {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer>;
										public static DOCUMENT_VERSION_FIELD: string;
										public isRunning(): boolean;
										public areAllStreamsOpen(): boolean;
										public disableSyncThread(): void;
										public addWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public configure(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>, param3: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener, param4: org.bson.codecs.Codec): void;
										public removeWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public syncDocumentsFromRemote(param0: com.mongodb.MongoNamespace, param1: native.Array<org.bson.BsonValue>): void;
										public getSynchronizedDocuments(param0: com.mongodb.MongoNamespace): java.util.Set<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
										public getPausedDocumentIds(param0: com.mongodb.MongoNamespace): java.util.Set<org.bson.BsonValue>;
										public getSynchronizedNamespaces(): java.util.Set<com.mongodb.MongoNamespace>;
										public find(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonDocument, param2: number, param3: org.bson.BsonDocument, param4: org.bson.BsonDocument, param5: java.lang.Class, param6: org.bson.codecs.configuration.CodecRegistry): java.util.Collection;
										public desyncDocumentsFromRemote(param0: com.mongodb.MongoNamespace, param1: native.Array<org.bson.BsonValue>): void;
										public constructor(param0: string, param1: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param2: com.mongodb.client.MongoClient, param3: com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient, param4: com.mongodb.stitch.core.internal.net.NetworkMonitor, param5: com.mongodb.stitch.core.internal.common.AuthMonitor, param6: com.mongodb.stitch.core.internal.common.Dispatcher);
										public onNetworkStateChanged(): void;
										public reinitialize(param0: com.mongodb.client.MongoClient): void;
										public wipeInMemorySettings(): void;
										public stop(): void;
										public getSynchronizedDocumentIds(param0: com.mongodb.MongoNamespace): java.util.Set<org.bson.BsonValue>;
										public doSyncPass(): boolean;
										public close(): void;
										public disableListeners(): void;
										public start(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DataSynchronizerException {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizerException>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DataSynchronizerRunner {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizerRunner>;
										public run(): void;
										public constructor(param0: java.lang.ref.WeakReference<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer>, param1: com.mongodb.stitch.core.internal.net.NetworkMonitor, param2: org.bson.diagnostics.Logger);
										public onNetworkStateChanged(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DeleteManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DeleteManyOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DeleteOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DeleteOneOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DispatchGroup {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DispatchGroup>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DocumentSynchronizationConfigImpl extends com.mongodb.stitch.core.services.mongodb.remote.sync.DocumentSynchronizationConfig {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DocumentSynchronizationConfigImpl>;
										public equals(param0: any): boolean;
										public hasUncommittedWrites(): boolean;
										public getDocumentId(): org.bson.BsonValue;
										public hashCode(): number;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class DocumentVersionInfo {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DocumentVersionInfo>;
									}
									export module DocumentVersionInfo {
										export class Fields {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DocumentVersionInfo.Fields>;
										}
										export class Version {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DocumentVersionInfo.Version>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class InsertManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InsertManyOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class InsertOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InsertOneOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class InstanceChangeStreamListener {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceChangeStreamListener>;
										/**
										 * Constructs a new instance of the com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceChangeStreamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											start(param0: com.mongodb.MongoNamespace): void;
											start(): void;
											stop(param0: com.mongodb.MongoNamespace): void;
											stop(): void;
											isOpen(param0: com.mongodb.MongoNamespace): boolean;
											areAllStreamsOpen(): boolean;
											addWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
											removeWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
											addNamespace(param0: com.mongodb.MongoNamespace): void;
											removeNamespace(param0: com.mongodb.MongoNamespace): void;
											getEventsForNamespace(param0: com.mongodb.MongoNamespace): java.util.Map<org.bson.BsonValue,com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>>;
											getUnprocessedEventForDocumentId(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>;
										});
										public constructor();
										public areAllStreamsOpen(): boolean;
										public addNamespace(param0: com.mongodb.MongoNamespace): void;
										public start(param0: com.mongodb.MongoNamespace): void;
										public addWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public stop(param0: com.mongodb.MongoNamespace): void;
										public stop(): void;
										public isOpen(param0: com.mongodb.MongoNamespace): boolean;
										public getUnprocessedEventForDocumentId(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>;
										public removeWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public removeNamespace(param0: com.mongodb.MongoNamespace): void;
										public getEventsForNamespace(param0: com.mongodb.MongoNamespace): java.util.Map<org.bson.BsonValue,com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>>;
										public start(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class InstanceChangeStreamListenerImpl extends com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceChangeStreamListener {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceChangeStreamListenerImpl>;
										public areAllStreamsOpen(): boolean;
										public addNamespace(param0: com.mongodb.MongoNamespace): void;
										public start(param0: com.mongodb.MongoNamespace): void;
										public addWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public stop(param0: com.mongodb.MongoNamespace): void;
										public stop(): void;
										public isOpen(param0: com.mongodb.MongoNamespace): boolean;
										public getUnprocessedEventForDocumentId(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>;
										public removeWatcher(param0: com.mongodb.MongoNamespace, param1: com.mongodb.stitch.core.internal.common.Callback<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>,any>): void;
										public removeNamespace(param0: com.mongodb.MongoNamespace): void;
										public getEventsForNamespace(param0: com.mongodb.MongoNamespace): java.util.Map<org.bson.BsonValue,com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>>;
										public start(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class InstanceSynchronizationConfig extends java.lang.Iterable<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig>;
										public getSynchronizedNamespaces(): java.util.Set<com.mongodb.MongoNamespace>;
										public getNamespaceConfig(param0: com.mongodb.MongoNamespace): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig;
										public getSynchronizedDocument(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig;
										public addAndGetSynchronizedDocument(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig;
										public removeSynchronizedDocument(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): boolean;
										public getSynchronizedDocumentIds(param0: com.mongodb.MongoNamespace): java.util.Set<org.bson.BsonValue>;
										public iterator(): java.util.Iterator<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig>;
										public addSynchronizedDocument(param0: com.mongodb.MongoNamespace, param1: org.bson.BsonValue): boolean;
										public getSynchronizedDocuments(param0: com.mongodb.MongoNamespace): java.util.Set<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
									}
									export module InstanceSynchronizationConfig {
										export class ConfigCodec extends org.bson.codecs.Codec<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig> {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig.ConfigCodec>;
											public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig;
											public getEncoderClass(): java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig>;
											public encode(param0: org.bson.BsonWriter, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig, param2: org.bson.codecs.EncoderContext): void;
										}
										export module ConfigCodec {
											export class Fields {
												public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InstanceSynchronizationConfig.ConfigCodec.Fields>;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class NamespaceChangeStreamListener {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceChangeStreamListener>;
										public getEvents(): java.util.Map<org.bson.BsonValue,com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>>;
										public isOpen(): boolean;
										public stop(): void;
										public close(): void;
										public getUnprocessedEventForDocumentId(param0: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<org.bson.BsonDocument>;
										public start(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class NamespaceChangeStreamRunner {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceChangeStreamRunner>;
										public run(): void;
										public close(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class NamespaceListenerConfig {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceListenerConfig>;
										public getDocumentCodec(): org.bson.codecs.Codec;
										public getEventListener(): com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class NamespaceSynchronizationConfig extends java.lang.Iterable<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig>;
										public iterator(): java.util.Iterator<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
										public getNamespace(): com.mongodb.MongoNamespace;
										public getSynchronizedDocumentIds(): java.util.Set<org.bson.BsonValue>;
										public getSynchronizedDocument(param0: org.bson.BsonValue): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig;
										public removeSynchronizedDocument(param0: org.bson.BsonValue): boolean;
										public getSynchronizedDocuments(): java.util.Set<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreDocumentSynchronizationConfig>;
										public getConflictHandler(): com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>;
									}
									export module NamespaceSynchronizationConfig {
										export class ConfigCodec extends org.bson.codecs.Codec<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig> {
											public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig.ConfigCodec>;
											public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig;
											public getEncoderClass(): java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig>;
											public encode(param0: org.bson.BsonWriter, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig, param2: org.bson.codecs.EncoderContext): void;
										}
										export module ConfigCodec {
											export class Fields {
												public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.NamespaceSynchronizationConfig.ConfigCodec.Fields>;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class SyncFindOperation<T>  extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<java.util.Collection<any>> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncFindOperation<any>>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): java.util.Collection<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export abstract class SyncMongoClientFactory {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncMongoClientFactory>;
										public static getClient(param0: com.mongodb.stitch.core.StitchAppClientInfo, param1: string, param2: com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory): com.mongodb.client.MongoClient;
										public constructor();
										public static deleteDatabase(param0: com.mongodb.stitch.core.StitchAppClientInfo, param1: string, param2: com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory, param3: string): boolean;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class SyncOperations<DocumentT>  extends java.lang.Object {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncOperations<any>>;
										public insertOne(param0: DocumentT): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.InsertOneOperation;
										public constructor(param0: com.mongodb.MongoNamespace, param1: java.lang.Class<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer, param3: org.bson.codecs.configuration.CodecRegistry);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class UpdateManyOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.UpdateManyOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module remote {
							export module sync {
								export module internal {
									export class UpdateOneOperation extends com.mongodb.stitch.core.services.mongodb.remote.internal.Operation<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult> {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.remote.sync.internal.UpdateOneOperation>;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult;
										public execute(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent:1
//com.mongodb.stitch.core.services.mongodb.remote.ChangeStream:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.AggregateOperation:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMappingIterable:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollection:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCollectionImpl:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursor:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoCursorImpl:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterable:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoMappingCursor:2
//com.mongodb.stitch.core.services.mongodb.remote.internal.FindOperation:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.Operation:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.Operations:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.ResultDecoders.ChangeEventDecoder:1
//com.mongodb.stitch.core.services.mongodb.remote.internal.WatchOperation:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSync:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncAggregateIterable:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.CoreSyncFindIterable:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.AggregateOperation:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncAggregateIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncFindIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncImpl:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.CoreSyncMongoIterableImpl:2
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncFindOperation:1
//com.mongodb.stitch.core.services.mongodb.remote.sync.internal.SyncOperations:1


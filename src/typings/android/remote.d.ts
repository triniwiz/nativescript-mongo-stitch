declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class AsyncChangeStream<DocumentT>  extends com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>,any> {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.AsyncChangeStream<any>>;
								public constructor(param0: com.mongodb.stitch.core.internal.net.Stream<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
								public nextEvent(): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class BuildConfig {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.BuildConfig>;
								public static DEBUG: boolean;
								public static APPLICATION_ID: string;
								public static BUILD_TYPE: string;
								public static FLAVOR: string;
								public static VERSION_CODE: number;
								public static VERSION_NAME: string;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteAggregateIterable<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									first(): com.google.android.gms.tasks.Task<any>;
									map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								});
								public constructor();
								public first(): com.google.android.gms.tasks.Task<any>;
								public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
								public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteFindIterable<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									first(): com.google.android.gms.tasks.Task<any>;
									map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								});
								public constructor();
								public first(): com.google.android.gms.tasks.Task<any>;
								public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
								public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteMongoClient {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getDatabase(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase;
									lambda$static$0(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient;
									<clinit>(): void;
								});
								public constructor();
								public static factory: com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient>;
								public getDatabase(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteMongoCollection<DocumentT>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getNamespace(): com.mongodb.MongoNamespace;
									getDocumentClass(): java.lang.Class<DocumentT>;
									getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
									withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
									withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<DocumentT>;
									count(): com.google.android.gms.tasks.Task<java.lang.Long>;
									count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
									count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
									find(): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<DocumentT>;
									find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<DocumentT>;
									find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<DocumentT>;
									aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>;
									insertOne(param0: DocumentT): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>;
									insertMany(param0: java.util.List<any>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>;
									deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
									deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
									updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									watch(param0: native.Array<org.bson.types.ObjectId>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>,DocumentT>>;
									watch(param0: native.Array<org.bson.BsonValue>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>,DocumentT>>;
									sync(): com.mongodb.stitch.android.services.mongodb.remote.Sync<DocumentT>;
								});
								public constructor();
								public watch(param0: native.Array<org.bson.BsonValue>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>,DocumentT>>;
								public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
								public withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
								public deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
								public find(): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<DocumentT>;
								public insertOne(param0: DocumentT): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>;
								public insertMany(param0: java.util.List<any>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>;
								public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
								public getNamespace(): com.mongodb.MongoNamespace;
								public deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
								public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
								public getDocumentClass(): java.lang.Class<DocumentT>;
								public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>;
								public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
								public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<DocumentT>;
								public find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
								public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<DocumentT>;
								public watch(param0: native.Array<org.bson.types.ObjectId>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<DocumentT>>,DocumentT>>;
								public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
								public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
								public count(): com.google.android.gms.tasks.Task<java.lang.Long>;
								public sync(): com.mongodb.stitch.android.services.mongodb.remote.Sync<DocumentT>;
								public aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<DocumentT>;
								public count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteMongoCursor<ResultT>  extends java.io.Closeable {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasNext(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
									next(): com.google.android.gms.tasks.Task<any>;
									tryNext(): com.google.android.gms.tasks.Task<any>;
								});
								public constructor();
								public tryNext(): com.google.android.gms.tasks.Task<any>;
								public hasNext(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public next(): com.google.android.gms.tasks.Task<any>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteMongoDatabase {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getName(): string;
									getCollection(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<org.bson.Document>;
									getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
								});
								public constructor();
								public getName(): string;
								public getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
								public getCollection(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<org.bson.Document>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class RemoteMongoIterable<ResultT>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<ResultT>>;
									first(): com.google.android.gms.tasks.Task<ResultT>;
									map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								});
								public constructor();
								public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
								public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								public first(): com.google.android.gms.tasks.Task<ResultT>;
								public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<ResultT>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class Sync<DocumentT>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.Sync<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.Sync<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
									count(): com.google.android.gms.tasks.Task<java.lang.Long>;
									count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
									count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
									find(): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<DocumentT>;
									find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<DocumentT>;
									find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<DocumentT>;
									aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>;
									insertOne(param0: DocumentT): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult>;
									insertMany(param0: java.util.List<DocumentT>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult>;
									deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
									deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
									updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
								});
								public constructor();
								public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
								public aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<DocumentT>;
								public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
								public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public find(): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<DocumentT>;
								public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<DocumentT>;
								public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>;
								public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
								public getSyncedIds(): java.util.Set<org.bson.BsonValue>;
								public deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
								public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
								public desyncMany(param0: native.Array<org.bson.BsonValue>): void;
								public resumeSyncForDocument(param0: org.bson.BsonValue): boolean;
								public getPausedDocumentIds(): java.util.Set<org.bson.BsonValue>;
								public insertOne(param0: DocumentT): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult>;
								public syncMany(param0: native.Array<org.bson.BsonValue>): void;
								public deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
								public desyncOne(param0: org.bson.BsonValue): void;
								public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
								public insertMany(param0: java.util.List<DocumentT>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult>;
								public count(): com.google.android.gms.tasks.Task<java.lang.Long>;
								public syncOne(param0: org.bson.BsonValue): void;
								public configure(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<DocumentT>, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<DocumentT>, param2: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
								public count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class SyncAggregateIterable<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									first(): com.google.android.gms.tasks.Task<any>;
									map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								});
								public constructor();
								public first(): com.google.android.gms.tasks.Task<any>;
								public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
								public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export class SyncFindIterable<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									first(): com.google.android.gms.tasks.Task<any>;
									map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								});
								public constructor();
								public first(): com.google.android.gms.tasks.Task<any>;
								public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
								public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
								public limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
								public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteAggregateIterableImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl<any> implements com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteAggregateIterableImpl<any>>;
									public first(): com.google.android.gms.tasks.Task<any>;
									public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									public constructor(param0: com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteAggregateIterable<any>, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
									public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteFindIterableImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl<any> implements com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteFindIterableImpl<any>>;
									public constructor(param0: com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteFindIterable<any>, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
									public limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public first(): com.google.android.gms.tasks.Task<any>;
									public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteMongoClientImpl extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoClient {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoClientImpl>;
									public constructor(param0: com.mongodb.stitch.core.services.mongodb.remote.internal.CoreRemoteMongoClient, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
									public getDataSynchronizer(): com.mongodb.stitch.core.services.mongodb.remote.sync.internal.DataSynchronizer;
									public getDatabase(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteMongoCollectionImpl<DocumentT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any> {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoCollectionImpl<any>>;
									public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>;
									public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
									public watch(param0: native.Array<org.bson.BsonValue>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>,any>>;
									public withDocumentClass(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
									public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
									public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.RemoteCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
									public count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
									public find(): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									public count(): com.google.android.gms.tasks.Task<java.lang.Long>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									public watch(param0: native.Array<org.bson.types.ObjectId>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeStream<com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.ChangeEvent<any>>,any>>;
									public insertOne(param0: any): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertOneResult>;
									public deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteDeleteResult>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									public insertMany(param0: java.util.List<any>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteInsertManyResult>;
									public find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable<any>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.RemoteUpdateResult>;
									public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable<any>;
									public sync(): com.mongodb.stitch.android.services.mongodb.remote.Sync<any>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteMongoCursorImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any> {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoCursorImpl<any>>;
									public hasNext(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
									public next(): com.google.android.gms.tasks.Task<any>;
									public close(): void;
									public tryNext(): com.google.android.gms.tasks.Task<any>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteMongoDatabaseImpl extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoDatabase {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoDatabaseImpl>;
									public getName(): string;
									public getCollection(param0: string): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<org.bson.Document>;
									public getCollection(param0: string, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection<any>;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class RemoteMongoIterableImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any> {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl<any>>;
									public first(): com.google.android.gms.tasks.Task<any>;
									public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class SyncAggregateIterableImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl<any> implements com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.SyncAggregateIterableImpl<any>>;
									public first(): com.google.android.gms.tasks.Task<any>;
									public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class SyncFindIterableImpl<ResultT>  extends com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl<any> implements com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>  {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.SyncFindIterableImpl<any>>;
									public filter(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public first(): com.google.android.gms.tasks.Task<any>;
									public iterator(): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor<any>>;
									public limit(param0: number): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public forEach(param0: com.mongodb.Block<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
									public projection(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public map(param0: com.mongodb.Function): com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable<any>;
									public sort(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public into(param0: java.util.Collection): com.google.android.gms.tasks.Task;
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
			export module android {
				export module services {
					export module mongodb {
						export module remote {
							export module internal {
								export class SyncImpl<DocumentT>  extends com.mongodb.stitch.android.services.mongodb.remote.Sync<any> {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.remote.internal.SyncImpl<any>>;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									public configure(param0: com.mongodb.stitch.core.services.mongodb.remote.sync.ConflictHandler<any>, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.ChangeEventListener<any>, param2: com.mongodb.stitch.core.services.mongodb.remote.ExceptionListener): void;
									public deleteOne(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
									public syncMany(param0: native.Array<org.bson.BsonValue>): void;
									public desyncOne(param0: org.bson.BsonValue): void;
									public getPausedDocumentIds(): java.util.Set<org.bson.BsonValue>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson, param2: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateOptions): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									public syncOne(param0: org.bson.BsonValue): void;
									public updateMany(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									public count(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<java.lang.Long>;
									public aggregate(param0: java.util.List, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>;
									public find(param0: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public aggregate(param0: java.util.List<any>): com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable<any>;
									public count(): com.google.android.gms.tasks.Task<java.lang.Long>;
									public desyncMany(param0: native.Array<org.bson.BsonValue>): void;
									public getSyncedIds(): java.util.Set<org.bson.BsonValue>;
									public resumeSyncForDocument(param0: org.bson.BsonValue): boolean;
									public count(param0: org.bson.conversions.Bson, param1: com.mongodb.stitch.core.services.mongodb.remote.sync.SyncCountOptions): com.google.android.gms.tasks.Task<java.lang.Long>;
									public find(param0: org.bson.conversions.Bson): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public updateOne(param0: org.bson.conversions.Bson, param1: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncUpdateResult>;
									public insertOne(param0: any): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertOneResult>;
									public insertMany(param0: java.util.List<any>): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncInsertManyResult>;
									public find(param0: org.bson.conversions.Bson, param1: java.lang.Class): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public find(): com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable<any>;
									public deleteMany(param0: org.bson.conversions.Bson): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.mongodb.remote.sync.SyncDeleteResult>;
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
//com.mongodb.stitch.android.services.mongodb.remote.AsyncChangeStream:1
//com.mongodb.stitch.android.services.mongodb.remote.RemoteAggregateIterable:1
//com.mongodb.stitch.android.services.mongodb.remote.RemoteFindIterable:1
//com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCollection:1
//com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoCursor:1
//com.mongodb.stitch.android.services.mongodb.remote.RemoteMongoIterable:1
//com.mongodb.stitch.android.services.mongodb.remote.Sync:1
//com.mongodb.stitch.android.services.mongodb.remote.SyncAggregateIterable:1
//com.mongodb.stitch.android.services.mongodb.remote.SyncFindIterable:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteAggregateIterableImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteFindIterableImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoCollectionImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoCursorImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.RemoteMongoIterableImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.SyncAggregateIterableImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.SyncFindIterableImpl:1
//com.mongodb.stitch.android.services.mongodb.remote.internal.SyncImpl:1


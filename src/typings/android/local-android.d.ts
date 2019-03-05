declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module services {
					export module mongodb {
						export module local {
							export class BuildConfig {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.BuildConfig>;
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
						export module local {
							export class LocalMongoDbService {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService>;
								public static clientFactory: com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<com.mongodb.client.MongoClient>;
								public constructor();
							}
							export module LocalMongoDbService {
								export class BatteryLevelCommand {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService.BatteryLevelCommand>;
								}
								export class TrimMemoryCommand {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService.TrimMemoryCommand>;
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
						export module local {
							export module internal {
								export class AndroidEmbeddedMongoClientFactory {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.internal.AndroidEmbeddedMongoClientFactory>;
									public createClient(param0: string, param1: org.bson.codecs.configuration.CodecRegistry): com.mongodb.client.MongoClient;
									public static getInstance(): com.mongodb.stitch.android.services.mongodb.local.internal.AndroidEmbeddedMongoClientFactory;
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
						export module local {
							export module internal {
								export class MongoDbMobileProvider {
									public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.internal.MongoDbMobileProvider>;
									public onTrimMemory(param0: number): void;
									public getType(param0: globalAndroid.net.Uri): string;
									public constructor();
									public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
									public onCreate(): boolean;
									public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
									public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
									public static addEventListener(param0: com.mongodb.stitch.android.services.mongodb.local.internal.MongoDbMobileProvider.EventListener): void;
									public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
								}
								export module MongoDbMobileProvider {
									export class EventListener {
										public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.internal.MongoDbMobileProvider.EventListener>;
										/**
										 * Constructs a new instance of the com.mongodb.stitch.android.services.mongodb.local.internal.MongoDbMobileProvider$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											onLowBatteryLevel(): void;
											onOkayBatteryLevel(): void;
											onTrimMemory(param0: string): void;
										});
										public constructor();
										public onOkayBatteryLevel(): void;
										public onLowBatteryLevel(): void;
										public onTrimMemory(param0: string): void;
									}
									export class TrimMemoryCommandModes {
										public static class: java.lang.Class<com.mongodb.stitch.android.services.mongodb.local.internal.MongoDbMobileProvider.TrimMemoryCommandModes>;
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


declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module mongodb {
						export module local {
							export module internal {
								export abstract class EmbeddedMongoClientFactory {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory>;
									public getClient(param0: string, param1: string, param2: org.bson.codecs.configuration.CodecRegistry): com.mongodb.client.MongoClient;
									public constructor();
									public createClient(param0: string, param1: org.bson.codecs.configuration.CodecRegistry): com.mongodb.client.MongoClient;
									public close(): void;
									public removeClient(param0: string): void;
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
						export module local {
							export module internal {
								export abstract class LocalMongoClientFactory {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.mongodb.local.internal.LocalMongoClientFactory>;
									public constructor();
									public static getClient(param0: com.mongodb.stitch.core.StitchAppClientInfo, param1: com.mongodb.stitch.core.services.mongodb.local.internal.EmbeddedMongoClientFactory): com.mongodb.client.MongoClient;
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


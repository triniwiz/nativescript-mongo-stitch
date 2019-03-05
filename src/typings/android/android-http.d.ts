declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module services {
					export module http {
						export class BuildConfig {
							public static class: java.lang.Class<com.mongodb.stitch.android.services.http.BuildConfig>;
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

declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module services {
					export module http {
						export class HttpServiceClient {
							public static class: java.lang.Class<com.mongodb.stitch.android.services.http.HttpServiceClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.services.http.HttpServiceClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								execute(param0: com.mongodb.stitch.core.services.http.HttpRequest): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.http.HttpResponse>;
								<clinit>(): void;
							});
							public constructor();
							public static factory: com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<com.mongodb.stitch.android.services.http.HttpServiceClient>;
							public execute(param0: com.mongodb.stitch.core.services.http.HttpRequest): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.http.HttpResponse>;
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
					export module http {
						export module internal {
							export class HttpServiceClientImpl extends com.mongodb.stitch.android.services.http.HttpServiceClient {
								public static class: java.lang.Class<com.mongodb.stitch.android.services.http.internal.HttpServiceClientImpl>;
								public execute(param0: com.mongodb.stitch.core.services.http.HttpRequest): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.http.HttpResponse>;
								public constructor(param0: com.mongodb.stitch.core.services.http.internal.CoreHttpServiceClient, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:


declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module core {
					export class BuildConfig {
						public static class: java.lang.Class<com.mongodb.stitch.android.core.BuildConfig>;
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

declare module com {
	export module mongodb {
		export module stitch {
			export module android {
				export module core {
					export class Stitch {
						public static class: java.lang.Class<com.mongodb.stitch.android.core.Stitch>;
						public constructor();
						public static getDefaultAppClient(): com.mongodb.stitch.android.core.StitchAppClient;
						public static initializeDefaultAppClient(param0: string): com.mongodb.stitch.android.core.StitchAppClient;
						public static hasAppClient(param0: string): boolean;
						public static initializeAppClient(param0: string, param1: com.mongodb.stitch.core.StitchAppClientConfiguration): com.mongodb.stitch.android.core.StitchAppClient;
						public static initialize(param0: globalAndroid.content.Context): void;
						public static getAppClient(param0: string): com.mongodb.stitch.android.core.StitchAppClient;
						public static initializeDefaultAppClient(param0: string, param1: com.mongodb.stitch.core.StitchAppClientConfiguration): com.mongodb.stitch.android.core.StitchAppClient;
						public static initializeAppClient(param0: string): com.mongodb.stitch.android.core.StitchAppClient;
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
				export module core {
					export class StitchAppClient {
						public static class: java.lang.Class<com.mongodb.stitch.android.core.StitchAppClient>;
						/**
						 * Constructs a new instance of the com.mongodb.stitch.android.core.StitchAppClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAuth(): com.mongodb.stitch.android.core.auth.StitchAuth;
							getPush(): com.mongodb.stitch.android.core.push.StitchPush;
							getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<any>, param1: string): any;
							getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<any>): any;
							getServiceClient(param0: string): com.mongodb.stitch.android.core.services.StitchServiceClient;
							callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
							callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
							callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
							callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
							callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							close(): void;
						});
						public constructor();
						public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
						public close(): void;
						public getPush(): com.mongodb.stitch.android.core.push.StitchPush;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
						public getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<any>): any;
						public callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getServiceClient(param0: string): com.mongodb.stitch.android.core.services.StitchServiceClient;
						public getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<any>, param1: string): any;
						public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
						public getAuth(): com.mongodb.stitch.android.core.auth.StitchAuth;
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
				export module core {
					export module auth {
						export class StitchAuth {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.StitchAuth>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.StitchAuth interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<any>): any;
								getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory<any>, param1: string): any;
								loginWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
								logout(): com.google.android.gms.tasks.Task<java.lang.Void>;
								logoutUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								removeUser(): com.google.android.gms.tasks.Task<java.lang.Void>;
								removeUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								isLoggedIn(): boolean;
								getUser(): com.mongodb.stitch.android.core.auth.StitchUser;
								addAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
								removeAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
								listUsers(): java.util.List<com.mongodb.stitch.android.core.auth.StitchUser>;
								switchToUserWithId(param0: string): com.mongodb.stitch.android.core.auth.StitchUser;
							});
							public constructor();
							public removeAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
							public addAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
							public switchToUserWithId(param0: string): com.mongodb.stitch.android.core.auth.StitchUser;
							public getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory<any>, param1: string): any;
							public listUsers(): java.util.List<com.mongodb.stitch.android.core.auth.StitchUser>;
							public getUser(): com.mongodb.stitch.android.core.auth.StitchUser;
							public loginWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
							public removeUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
							public isLoggedIn(): boolean;
							public logoutUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
							public removeUser(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<any>): any;
							public logout(): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module auth {
						export class StitchAuthListener {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.StitchAuthListener>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.StitchAuthListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAuthEvent(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
								onUserAdded(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onUserLoggedIn(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onUserLinked(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onUserLoggedOut(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onActiveUserChanged(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser, param2: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onUserRemoved(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								onListenerRegistered(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
							});
							public constructor();
							public onUserLoggedOut(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onUserAdded(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onUserLoggedIn(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onActiveUserChanged(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser, param2: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onUserLinked(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onUserRemoved(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onAuthEvent(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
							public onListenerRegistered(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
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
				export module core {
					export module auth {
						export class StitchUser {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.StitchUser>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.StitchUser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								linkWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
							});
							public constructor();
							public linkWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
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
				export module core {
					export module auth {
						export module internal {
							export class StitchAuthImpl extends com.mongodb.stitch.core.auth.internal.CoreStitchAuth<com.mongodb.stitch.android.core.auth.StitchUser> implements com.mongodb.stitch.android.core.auth.StitchAuth  {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.internal.StitchAuthImpl>;
								public getDeviceInfo(): org.bson.Document;
								public onActiveUserChanged(param0: com.mongodb.stitch.android.core.auth.StitchUser, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public listUsers(): java.util.List<com.mongodb.stitch.android.core.auth.StitchUser>;
								public getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<any>): any;
								public getUserFactory(): com.mongodb.stitch.core.auth.internal.StitchUserFactory<com.mongodb.stitch.android.core.auth.StitchUser>;
								public removeAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
								public constructor(param0: com.mongodb.stitch.core.internal.net.StitchRequestClient, param1: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param2: com.mongodb.stitch.core.internal.common.Storage, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher, param4: com.mongodb.stitch.core.StitchAppClientInfo);
								public logoutUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								public isLoggedIn(): boolean;
								public removeUserWithId(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								public onListenerInitialized(): void;
								public getUser(): com.mongodb.stitch.android.core.auth.StitchUser;
								public addSynchronousAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
								public onUserRemoved(param0: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public onUserLinked(param0: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public onUserAdded(param0: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public onUserLoggedIn(param0: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public switchToUserWithId(param0: string): com.mongodb.stitch.android.core.auth.StitchUser;
								public getProviderClient(param0: com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory<any>, param1: string): any;
								public loginWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
								public onUserLoggedOut(param0: com.mongodb.stitch.android.core.auth.StitchUser): void;
								public addAuthListener(param0: com.mongodb.stitch.android.core.auth.StitchAuthListener): void;
								public onAuthEvent(): void;
								public removeUser(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public logout(): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module auth {
						export module internal {
							export class StitchUserFactoryImpl extends com.mongodb.stitch.core.auth.internal.StitchUserFactory<com.mongodb.stitch.android.core.auth.StitchUser> {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.internal.StitchUserFactoryImpl>;
								public makeUser(param0: string, param1: string, param2: string, param3: string, param4: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param5: boolean, param6: java.util.Date): com.mongodb.stitch.android.core.auth.StitchUser;
								public constructor(param0: com.mongodb.stitch.android.core.auth.internal.StitchAuthImpl);
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
				export module core {
					export module auth {
						export module internal {
							export class StitchUserImpl implements com.mongodb.stitch.android.core.auth.StitchUser {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.internal.StitchUserImpl>;
								public linkWithCredential(param0: com.mongodb.stitch.core.auth.StitchCredential): com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param5: com.mongodb.stitch.android.core.auth.internal.StitchAuthImpl, param6: boolean, param7: java.util.Date);
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
				export module core {
					export module auth {
						export module providers {
							export module internal {
								export class AuthProviderClientFactory<ClientT>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getClient(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): ClientT;
									});
									public constructor();
									public getClient(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): ClientT;
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
				export module core {
					export module auth {
						export module providers {
							export module internal {
								export class NamedAuthProviderClientFactory<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory<any>>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getClient(param0: string, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
									});
									public constructor();
									public getClient(param0: string, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
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
				export module core {
					export module auth {
						export module providers {
							export module userapikey {
								export class UserApiKeyAuthProviderClient {
									public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.userapikey.UserApiKeyAuthProviderClient>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.providers.userapikey.UserApiKeyAuthProviderClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										createApiKey(param0: string): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
										fetchApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
										fetchApiKeys(): com.google.android.gms.tasks.Task<java.util.List<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>>;
										deleteApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										enableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										disableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										<clinit>(): void;
									});
									public constructor();
									public static factory: com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<com.mongodb.stitch.android.core.auth.providers.userapikey.UserApiKeyAuthProviderClient>;
									public fetchApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
									public fetchApiKeys(): com.google.android.gms.tasks.Task<java.util.List<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>>;
									public enableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
									public createApiKey(param0: string): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
									public disableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
									public deleteApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module auth {
						export module providers {
							export module userapikey {
								export module internal {
									export class UserApiKeyAuthProviderClientImpl implements com.mongodb.stitch.android.core.auth.providers.userapikey.UserApiKeyAuthProviderClient {
										public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.userapikey.internal.UserApiKeyAuthProviderClientImpl>;
										public createApiKey(param0: string): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
										public enableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										public fetchApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
										public deleteApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										public fetchApiKeys(): com.google.android.gms.tasks.Task<java.util.List<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>>;
										public disableApiKey(param0: org.bson.types.ObjectId): com.google.android.gms.tasks.Task<java.lang.Void>;
										public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
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
			export module android {
				export module core {
					export module auth {
						export module providers {
							export module userpassword {
								export class UserPasswordAuthProviderClient {
									public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.userpassword.UserPasswordAuthProviderClient>;
									/**
									 * Constructs a new instance of the com.mongodb.stitch.android.core.auth.providers.userpassword.UserPasswordAuthProviderClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										registerWithEmail(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										confirmUser(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										resendConfirmationEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										resetPassword(param0: string, param1: string, param2: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										sendResetPasswordEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										<clinit>(): void;
									});
									public constructor();
									public static factory: com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory<com.mongodb.stitch.android.core.auth.providers.userpassword.UserPasswordAuthProviderClient>;
									public confirmUser(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
									public registerWithEmail(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
									public resendConfirmationEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
									public resetPassword(param0: string, param1: string, param2: string): com.google.android.gms.tasks.Task<java.lang.Void>;
									public sendResetPasswordEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module auth {
						export module providers {
							export module userpassword {
								export module internal {
									export class UserPasswordAuthProviderClientImpl implements com.mongodb.stitch.android.core.auth.providers.userpassword.UserPasswordAuthProviderClient {
										public static class: java.lang.Class<com.mongodb.stitch.android.core.auth.providers.userpassword.internal.UserPasswordAuthProviderClientImpl>;
										public confirmUser(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										public resendConfirmationEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										public registerWithEmail(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										public sendResetPasswordEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										public resetPassword(param0: string, param1: string, param2: string): com.google.android.gms.tasks.Task<java.lang.Void>;
										public constructor(param0: string, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param3: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
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
			export module android {
				export module core {
					export module internal {
						export class StitchAppClientImpl implements com.mongodb.stitch.android.core.StitchAppClient, com.mongodb.stitch.android.core.auth.StitchAuthListener {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.StitchAppClientImpl>;
							public onUserLoggedOut(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public close(): void;
							public onUserAdded(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onActiveUserChanged(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser, param2: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public getAuth(): com.mongodb.stitch.android.core.auth.StitchAuth;
							public onUserRemoved(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<any>): any;
							public getServiceClient(param0: string): com.mongodb.stitch.android.core.services.StitchServiceClient;
							public isLoggedIn(): boolean;
							public onUserLoggedIn(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public getServiceClient(param0: com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<any>, param1: string): any;
							public onListenerRegistered(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
							public getPush(): com.mongodb.stitch.android.core.push.StitchPush;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							public getActiveUserId(): string;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
							public tryIsLoggedIn(): boolean;
							public constructor(param0: string, param1: com.mongodb.stitch.core.StitchAppClientConfiguration);
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							public onUserLinked(param0: com.mongodb.stitch.android.core.auth.StitchAuth, param1: com.mongodb.stitch.android.core.auth.StitchUser): void;
							public onAuthEvent(param0: com.mongodb.stitch.android.core.auth.StitchAuth): void;
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
				export module core {
					export module internal {
						export class StitchInitProvider {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.StitchInitProvider>;
							public constructor();
							public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
							public getType(param0: globalAndroid.net.Uri): string;
							public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
							public onCreate(): boolean;
							public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
							public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						}
						export module StitchInitProvider {
							export class AppSettingsResourceNames {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.StitchInitProvider.AppSettingsResourceNames>;
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
				export module core {
					export module internal {
						export module common {
							export class MainLooperDispatcher {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.common.MainLooperDispatcher>;
								public dispatch(param0: java.util.concurrent.Callable): void;
								public constructor();
								public close(): void;
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
				export module core {
					export module internal {
						export module common {
							export class SharedPreferencesStorage {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.common.SharedPreferencesStorage>;
								public static getFileName(param0: string): string;
								public get(param0: string): string;
								public constructor(param0: globalAndroid.content.SharedPreferences);
								public remove(param0: string): void;
								public set(param0: string, param1: string): void;
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
				export module core {
					export module internal {
						export module common {
							export class TaskCallbackAdapter<T>  extends com.mongodb.stitch.core.internal.common.CallbackAsyncAdapter<any,java.lang.Exception,com.google.android.gms.tasks.Task<any>> {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.common.TaskCallbackAdapter<any>>;
								public onComplete(param0: com.mongodb.stitch.core.internal.common.OperationResult<any,java.lang.Exception>): void;
								public getAdapter(): com.google.android.gms.tasks.Task<any>;
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
				export module core {
					export module internal {
						export module common {
							export class TaskDispatcher {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.common.TaskDispatcher>;
								public dispatchTask(param0: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
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
				export module core {
					export module internal {
						export module net {
							export class AndroidNetworkMonitor {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.internal.net.AndroidNetworkMonitor>;
								public addNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public constructor(param0: globalAndroid.net.ConnectivityManager);
								public isConnected(): boolean;
								public removeNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
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
				export module core {
					export module push {
						export class StitchPush {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.push.StitchPush>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.core.push.StitchPush interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getClient(param0: com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory<any>, param1: string): any;
							});
							public constructor();
							public getClient(param0: com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory<any>, param1: string): any;
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
				export module core {
					export module push {
						export module internal {
							export class NamedPushClientFactory<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getClient(param0: com.mongodb.stitch.android.core.push.internal.StitchPushClient, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
								});
								public constructor();
								public getClient(param0: com.mongodb.stitch.android.core.push.internal.StitchPushClient, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
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
				export module core {
					export module push {
						export module internal {
							export class StitchPushClient {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.push.internal.StitchPushClient>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.core.push.internal.StitchPushClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									register(param0: org.bson.Document): com.google.android.gms.tasks.Task<java.lang.Void>;
									deregister(): com.google.android.gms.tasks.Task<java.lang.Void>;
								});
								public constructor();
								public register(param0: org.bson.Document): com.google.android.gms.tasks.Task<java.lang.Void>;
								public deregister(): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module push {
						export module internal {
							export class StitchPushClientImpl implements com.mongodb.stitch.android.core.push.internal.StitchPushClient {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.push.internal.StitchPushClientImpl>;
								public register(param0: org.bson.Document): com.google.android.gms.tasks.Task<java.lang.Void>;
								public deregister(): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module push {
						export module internal {
							export class StitchPushImpl extends com.mongodb.stitch.android.core.push.StitchPush {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.push.internal.StitchPushImpl>;
								public getClient(param0: com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory<any>, param1: string): any;
								public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.push.internal.StitchPushRoutes, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
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
				export module core {
					export module services {
						export class StitchServiceClient {
							public static class: java.lang.Class<com.mongodb.stitch.android.core.services.StitchServiceClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.android.core.services.StitchServiceClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
								callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
								getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
								withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.core.services.StitchServiceClient;
							});
							public constructor();
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
							public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.core.services.StitchServiceClient;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
							public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
							public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
							public callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
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
				export module core {
					export module services {
						export module internal {
							export class NamedServiceClientFactory<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getClient(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
								});
								public constructor();
								public getClient(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
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
				export module core {
					export module services {
						export module internal {
							export class ServiceClientFactory<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<any>>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.android.core.services.internal.ServiceClientFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getClient(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
								});
								public constructor();
								public getClient(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.core.StitchAppClientInfo, param2: com.mongodb.stitch.android.core.internal.common.TaskDispatcher): T;
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
				export module core {
					export module services {
						export module internal {
							export class StitchServiceClientImpl extends com.mongodb.stitch.android.core.services.StitchServiceClient {
								public static class: java.lang.Class<com.mongodb.stitch.android.core.services.internal.StitchServiceClientImpl>;
								public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
								public callFunction(param0: string, param1: java.util.List<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): com.google.android.gms.tasks.Task<java.lang.Void>;
								public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
								public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): com.google.android.gms.tasks.Task;
								public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): com.google.android.gms.tasks.Task;
								public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): com.google.android.gms.tasks.Task;
								public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
								public constructor(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient, param1: com.mongodb.stitch.android.core.internal.common.TaskDispatcher);
								public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): com.google.android.gms.tasks.Task;
								public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.android.core.services.StitchServiceClient;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.mongodb.stitch.android.core.auth.providers.internal.AuthProviderClientFactory:1
//com.mongodb.stitch.android.core.auth.providers.internal.NamedAuthProviderClientFactory:1
//com.mongodb.stitch.android.core.internal.common.TaskCallbackAdapter:1
//com.mongodb.stitch.android.core.push.internal.NamedPushClientFactory:1
//com.mongodb.stitch.android.core.services.internal.NamedServiceClientFactory:1
//com.mongodb.stitch.android.core.services.internal.ServiceClientFactory:1


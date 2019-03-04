declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchAppClientConfiguration extends com.mongodb.stitch.core.StitchClientConfiguration {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchAppClientConfiguration>;
					public builder(): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
					public getLocalAppVersion(): string;
					public builder(): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
					public getLocalAppName(): string;
				}
				export module StitchAppClientConfiguration {
					export class Builder extends com.mongodb.stitch.core.StitchClientConfiguration.Builder {
						public static class: java.lang.Class<com.mongodb.stitch.core.StitchAppClientConfiguration.Builder>;
						public constructor();
						public withTransport(param0: com.mongodb.stitch.core.internal.net.Transport): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public build(): com.mongodb.stitch.core.StitchClientConfiguration;
						public withDataDirectory(param0: string): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withNetworkMonitor(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withLocalAppVersion(param0: string): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withDefaultRequestTimeout(param0: java.lang.Long): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withDataDirectory(param0: string): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withNetworkMonitor(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withDefaultRequestTimeout(param0: java.lang.Long): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public getLocalAppVersion(): string;
						public withTransport(param0: com.mongodb.stitch.core.internal.net.Transport): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withLocalAppName(param0: string): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withStorage(param0: com.mongodb.stitch.core.internal.common.Storage): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public withBaseUrl(param0: string): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withStorage(param0: com.mongodb.stitch.core.internal.common.Storage): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withBaseUrl(param0: string): com.mongodb.stitch.core.StitchAppClientConfiguration.Builder;
						public build(): com.mongodb.stitch.core.StitchAppClientConfiguration;
						public getLocalAppName(): string;
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
				export class StitchAppClientInfo {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchAppClientInfo>;
					public getClientAppId(): string;
					public getDataDirectory(): string;
					public getAuthMonitor(): com.mongodb.stitch.core.internal.common.AuthMonitor;
					public getNetworkMonitor(): com.mongodb.stitch.core.internal.net.NetworkMonitor;
					public getEventDispatcher(): com.mongodb.stitch.core.internal.common.Dispatcher;
					public getLocalAppVersion(): string;
					public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: org.bson.codecs.configuration.CodecRegistry, param5: com.mongodb.stitch.core.internal.net.NetworkMonitor, param6: com.mongodb.stitch.core.internal.common.AuthMonitor, param7: com.mongodb.stitch.core.internal.common.Dispatcher);
					public getLocalAppName(): string;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchClientConfiguration {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchClientConfiguration>;
					public getTransport(): com.mongodb.stitch.core.internal.net.Transport;
					public getDataDirectory(): string;
					public getStorage(): com.mongodb.stitch.core.internal.common.Storage;
					public getDefaultRequestTimeout(): java.lang.Long;
					public builder(): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
					public getNetworkMonitor(): com.mongodb.stitch.core.internal.net.NetworkMonitor;
					public getBaseUrl(): string;
					public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
				}
				export module StitchClientConfiguration {
					export class Builder {
						public static class: java.lang.Class<com.mongodb.stitch.core.StitchClientConfiguration.Builder>;
						public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
						public getBaseUrl(): string;
						public constructor();
						public withTransport(param0: com.mongodb.stitch.core.internal.net.Transport): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public build(): com.mongodb.stitch.core.StitchClientConfiguration;
						public getStorage(): com.mongodb.stitch.core.internal.common.Storage;
						public getNetworkMonitor(): com.mongodb.stitch.core.internal.net.NetworkMonitor;
						public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withDataDirectory(param0: string): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withNetworkMonitor(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withDefaultRequestTimeout(param0: java.lang.Long): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public getDefaultRequestTimeout(): java.lang.Long;
						public getDataDirectory(): string;
						public withBaseUrl(param0: string): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public withStorage(param0: com.mongodb.stitch.core.internal.common.Storage): com.mongodb.stitch.core.StitchClientConfiguration.Builder;
						public getTransport(): com.mongodb.stitch.core.internal.net.Transport;
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
				export class StitchClientErrorCode {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchClientErrorCode>;
					public static LOGGED_OUT_DURING_REQUEST: com.mongodb.stitch.core.StitchClientErrorCode;
					public static MUST_AUTHENTICATE_FIRST: com.mongodb.stitch.core.StitchClientErrorCode;
					public static USER_NO_LONGER_VALID: com.mongodb.stitch.core.StitchClientErrorCode;
					public static USER_NOT_FOUND: com.mongodb.stitch.core.StitchClientErrorCode;
					public static USER_NOT_LOGGED_IN: com.mongodb.stitch.core.StitchClientErrorCode;
					public static COULD_NOT_LOAD_PERSISTED_AUTH_INFO: com.mongodb.stitch.core.StitchClientErrorCode;
					public static COULD_NOT_PERSIST_AUTH_INFO: com.mongodb.stitch.core.StitchClientErrorCode;
					public static COULD_NOT_LOAD_DATA_SYNCHRONIZER: com.mongodb.stitch.core.StitchClientErrorCode;
					public static valueOf(param0: string): com.mongodb.stitch.core.StitchClientErrorCode;
					public toString(): string;
					public static values(): native.Array<com.mongodb.stitch.core.StitchClientErrorCode>;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchClientException extends com.mongodb.stitch.core.StitchException {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchClientException>;
					public toString(): string;
					public constructor(param0: com.mongodb.stitch.core.StitchClientErrorCode);
					public getErrorCode(): com.mongodb.stitch.core.StitchClientErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchException {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchException>;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchRequestErrorCode {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchRequestErrorCode>;
					public static TRANSPORT_ERROR: com.mongodb.stitch.core.StitchRequestErrorCode;
					public static DECODING_ERROR: com.mongodb.stitch.core.StitchRequestErrorCode;
					public static ENCODING_ERROR: com.mongodb.stitch.core.StitchRequestErrorCode;
					public static BOOTSTRAP_ERROR: com.mongodb.stitch.core.StitchRequestErrorCode;
					public toString(): string;
					public static values(): native.Array<com.mongodb.stitch.core.StitchRequestErrorCode>;
					public static valueOf(param0: string): com.mongodb.stitch.core.StitchRequestErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchRequestException extends com.mongodb.stitch.core.StitchException {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchRequestException>;
					public toString(): string;
					public getErrorCode(): com.mongodb.stitch.core.StitchRequestErrorCode;
					public constructor(param0: java.lang.Exception, param1: com.mongodb.stitch.core.StitchRequestErrorCode);
					public constructor(param0: string, param1: com.mongodb.stitch.core.StitchRequestErrorCode);
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchServiceErrorCode {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchServiceErrorCode>;
					public static MISSING_AUTH_REQ: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INVALID_SESSION: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static USER_APP_DOMAIN_MISMATCH: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static DOMAIN_NOT_ALLOWED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static READ_SIZE_LIMIT_EXCEEDED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INVALID_PARAMETER: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static MISSING_PARAMETER: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static TWILIO_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static GCM_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static HTTP_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static AWS_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static MONGODB_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static ARGUMENTS_NOT_ALLOWED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_EXECUTION_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static NO_MATCHING_RULE_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INTERNAL_SERVER_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static AUTH_PROVIDER_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static AUTH_PROVIDER_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static SERVICE_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static SERVICE_TYPE_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static SERVICE_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static SERVICE_COMMAND_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static VALUE_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static VALUE_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static VALUE_DUPLICATE_NAME: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_DUPLICATE_NAME: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_SYNTAX_ERROR: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static FUNCTION_INVALID: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INCOMING_WEBHOOK_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INCOMING_WEBHOOK_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INCOMING_WEBHOOK_DUPLICATE_NAME: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static RULE_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static API_KEY_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static RULE_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static RULE_DUPLICATE_NAME: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static AUTH_PROVIDER_DUPLICATE_NAME: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static RESTRICTED_HOST: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static API_KEY_ALREADY_EXISTS: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static INCOMING_WEBHOOK_AUTH_FAILED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static EXECUTION_TIME_LIMIT_EXCEEDED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static NOT_CALLABLE: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static USER_ALREADY_CONFIRMED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static USER_NOT_FOUND: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static USER_DISABLED: com.mongodb.stitch.core.StitchServiceErrorCode;
					public static UNKNOWN: com.mongodb.stitch.core.StitchServiceErrorCode;
					public getCodeName(): string;
					public static values(): native.Array<com.mongodb.stitch.core.StitchServiceErrorCode>;
					public static valueOf(param0: string): com.mongodb.stitch.core.StitchServiceErrorCode;
					public static fromCodeName(param0: string): com.mongodb.stitch.core.StitchServiceErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export class StitchServiceException extends com.mongodb.stitch.core.StitchException {
					public static class: java.lang.Class<com.mongodb.stitch.core.StitchServiceException>;
					public getErrorCode(): com.mongodb.stitch.core.StitchServiceErrorCode;
					public toString(): string;
					public constructor(param0: string, param1: com.mongodb.stitch.core.StitchServiceErrorCode);
					public constructor(param0: com.mongodb.stitch.core.StitchServiceErrorCode);
				}
			}
		}
	}
}

declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module auth {
					export class ProviderCapabilities {
						public static class: java.lang.Class<com.mongodb.stitch.core.auth.ProviderCapabilities>;
						public constructor();
						public getReusesExistingSession(): boolean;
						public constructor(param0: boolean);
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
				export module auth {
					export class StitchCredential {
						public static class: java.lang.Class<com.mongodb.stitch.core.auth.StitchCredential>;
						/**
						 * Constructs a new instance of the com.mongodb.stitch.core.auth.StitchCredential interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getProviderName(): string;
							getProviderType(): string;
							getMaterial(): org.bson.Document;
							getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
						});
						public constructor();
						public getProviderType(): string;
						public getMaterial(): org.bson.Document;
						public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
						public getProviderName(): string;
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
				export module auth {
					export class StitchUserIdentity {
						public static class: java.lang.Class<com.mongodb.stitch.core.auth.StitchUserIdentity>;
						public getProviderType(): string;
						public constructor(param0: com.mongodb.stitch.core.auth.StitchUserIdentity);
						public getId(): string;
						public constructor(param0: string, param1: string);
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
				export module auth {
					export class StitchUserProfile {
						public static class: java.lang.Class<com.mongodb.stitch.core.auth.StitchUserProfile>;
						/**
						 * Constructs a new instance of the com.mongodb.stitch.core.auth.StitchUserProfile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getEmail(): string;
							getPictureUrl(): string;
							getFirstName(): string;
							getLastName(): string;
							getGender(): string;
							getBirthday(): string;
							getMinAge(): string;
							getMaxAge(): string;
						});
						public constructor();
						public getEmail(): string;
						public getLastName(): string;
						public getBirthday(): string;
						public getMaxAge(): string;
						public getFirstName(): string;
						public getMinAge(): string;
						public getPictureUrl(): string;
						public getName(): string;
						public getGender(): string;
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
				export module auth {
					export class UserType {
						public static class: java.lang.Class<com.mongodb.stitch.core.auth.UserType>;
						public static NORMAL: com.mongodb.stitch.core.auth.UserType;
						public static SERVER: com.mongodb.stitch.core.auth.UserType;
						public static UNKNOWN: com.mongodb.stitch.core.auth.UserType;
						public static fromName(param0: string): com.mongodb.stitch.core.auth.UserType;
						public getTypeName(): string;
						public static valueOf(param0: string): com.mongodb.stitch.core.auth.UserType;
						public static values(): native.Array<com.mongodb.stitch.core.auth.UserType>;
						public toString(): string;
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
				export module auth {
					export module internal {
						export class AccessTokenRefresher<T>  extends java.lang.Runnable {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.AccessTokenRefresher<any>>;
							public checkRefresh(): boolean;
							public run(): void;
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
				export module auth {
					export module internal {
						export class AuthInfo {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.AuthInfo>;
							public hashCode(): number;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param7: java.util.Date);
							public getUserId(): string;
							public getLoggedInProviderType(): string;
							public getRefreshToken(): string;
							public hasUser(): boolean;
							public getLoggedInProviderName(): string;
							public getLastAuthActivity(): java.util.Date;
							public isLoggedIn(): boolean;
							public getUserProfile(): com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl;
							public getAccessToken(): string;
							public equals(param0: any): boolean;
							public getDeviceId(): string;
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
				export module auth {
					export module internal {
						export abstract class CoreStitchAuth<StitchUserT>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.CoreStitchAuth<any>>;
							public logoutInternal(): void;
							public close(): void;
							public onUserLoggedOut(param0: StitchUserT): void;
							public logoutUserWithIdInternal(param0: string): void;
							public onUserAdded(param0: StitchUserT): void;
							public onUserLinked(param0: StitchUserT): void;
							public linkUserWithCredentialInternal(param0: com.mongodb.stitch.core.auth.internal.CoreStitchUser, param1: com.mongodb.stitch.core.auth.StitchCredential): StitchUserT;
							public getRequestClient(): com.mongodb.stitch.core.internal.net.StitchRequestClient;
							public getUser(): StitchUserT;
							public removeUserInternal(): void;
							public isLoggedIn(): boolean;
							public isLoggedInInterruptibly(): boolean;
							public constructor(param0: com.mongodb.stitch.core.internal.net.StitchRequestClient, param1: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes, param2: com.mongodb.stitch.core.internal.common.Storage, param3: boolean);
							public getDeviceInfo(): org.bson.Document;
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest): com.mongodb.stitch.core.internal.net.Response;
							public loginWithCredentialInternal(param0: com.mongodb.stitch.core.auth.StitchCredential): StitchUserT;
							public getAuthRoutes(): com.mongodb.stitch.core.auth.internal.StitchAuthRoutes;
							public onAuthEvent(): void;
							public hasDeviceId(): boolean;
							public onListenerInitialized(): void;
							public openAuthenticatedStream(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): any;
							public getUserFactory(): com.mongodb.stitch.core.auth.internal.StitchUserFactory<StitchUserT>;
							public onUserRemoved(param0: StitchUserT): void;
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): any;
							public onActiveUserChanged(param0: StitchUserT, param1: StitchUserT): void;
							public switchToUserWithId(param0: string): StitchUserT;
							public removeUserWithIdInternal(param0: string): void;
							public listUsers(): java.util.List<StitchUserT>;
							public getDeviceId(): string;
							public onUserLoggedIn(param0: StitchUserT): void;
						}
						export module CoreStitchAuth {
							export class AuthLoginFields {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.CoreStitchAuth.AuthLoginFields>;
							}
							export class AuthStreamFields {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.CoreStitchAuth.AuthStreamFields>;
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
				export module auth {
					export module internal {
						export class CoreStitchUser {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.CoreStitchUser>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.auth.internal.CoreStitchUser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(): string;
								getDeviceId(): string;
								getLoggedInProviderType(): string;
								getLoggedInProviderName(): string;
								getUserType(): com.mongodb.stitch.core.auth.UserType;
								getProfile(): com.mongodb.stitch.core.auth.StitchUserProfile;
								getIdentities(): java.util.List<any>;
								getLastAuthActivity(): java.util.Date;
								isLoggedIn(): boolean;
							});
							public constructor();
							public getLoggedInProviderName(): string;
							public getLastAuthActivity(): java.util.Date;
							public getIdentities(): java.util.List<any>;
							public isLoggedIn(): boolean;
							public getId(): string;
							public getLoggedInProviderType(): string;
							public getProfile(): com.mongodb.stitch.core.auth.StitchUserProfile;
							public getUserType(): com.mongodb.stitch.core.auth.UserType;
							public getDeviceId(): string;
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
				export module auth {
					export module internal {
						export abstract class CoreStitchUserImpl extends com.mongodb.stitch.core.auth.internal.CoreStitchUser {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.CoreStitchUserImpl>;
							public getLoggedInProviderName(): string;
							public getLastAuthActivity(): java.util.Date;
							public getIdentities(): java.util.List<any>;
							public isLoggedIn(): boolean;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param5: boolean, param6: java.util.Date);
							public hashCode(): number;
							public getId(): string;
							public getLoggedInProviderType(): string;
							public getProfile(): com.mongodb.stitch.core.auth.StitchUserProfile;
							public getUserType(): com.mongodb.stitch.core.auth.UserType;
							public equals(param0: any): boolean;
							public getDeviceId(): string;
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
				export module auth {
					export module internal {
						export class DeviceFields {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.DeviceFields>;
							public static DEVICE_ID: string;
							public static APP_ID: string;
							public static APP_VERSION: string;
							public static PLATFORM: string;
							public static PLATFORM_VERSION: string;
							public static SDK_VERSION: string;
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
				export module auth {
					export module internal {
						export class Jwt {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.Jwt>;
						}
						export module Jwt {
							export class Fields {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.Jwt.Fields>;
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
				export module auth {
					export module internal {
						export class StitchAuthRequestClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest): com.mongodb.stitch.core.internal.net.Response;
								doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): any;
								doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): any;
								openAuthenticatedStream(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
							});
							public constructor();
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest): com.mongodb.stitch.core.internal.net.Response;
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): any;
							public openAuthenticatedStream(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
							public doAuthenticatedRequest(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.codecs.Decoder): any;
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
				export module auth {
					export module internal {
						export class StitchAuthRoutes {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.StitchAuthRoutes>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.auth.internal.StitchAuthRoutes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBaseAuthRoute(): string;
								getSessionRoute(): string;
								getProfileRoute(): string;
								getAuthProviderRoute(param0: string): string;
								getAuthProviderLoginRoute(param0: string): string;
								getAuthProviderLinkRoute(param0: string): string;
								getAuthProviderExtensionRoute(param0: string, param1: string): string;
							});
							public constructor();
							public getBaseAuthRoute(): string;
							public getSessionRoute(): string;
							public getAuthProviderExtensionRoute(param0: string, param1: string): string;
							public getAuthProviderLinkRoute(param0: string): string;
							public getAuthProviderLoginRoute(param0: string): string;
							public getAuthProviderRoute(param0: string): string;
							public getProfileRoute(): string;
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
				export module auth {
					export module internal {
						export class StitchUserFactory<StitchUserT>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.StitchUserFactory<any>>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.auth.internal.StitchUserFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								makeUser(param0: string, param1: string, param2: string, param3: string, param4: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param5: boolean, param6: java.util.Date): StitchUserT;
							});
							public constructor();
							public makeUser(param0: string, param1: string, param2: string, param3: string, param4: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param5: boolean, param6: java.util.Date): StitchUserT;
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
				export module auth {
					export module internal {
						export class StitchUserProfileImpl extends com.mongodb.stitch.core.auth.StitchUserProfile {
							public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl>;
							public getGender(): string;
							public getMinAge(): string;
							public getUserType(): com.mongodb.stitch.core.auth.UserType;
							public getMaxAge(): string;
							public getIdentities(): java.util.List<any>;
							public getFirstName(): string;
							public getLastName(): string;
							public getBirthday(): string;
							public getName(): string;
							public getEmail(): string;
							public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl);
							public getData(): java.util.Map<string,string>;
							public getPictureUrl(): string;
							public constructor(param0: com.mongodb.stitch.core.auth.UserType, param1: java.util.Map<string,string>, param2: java.util.List<any>);
							public static empty(): com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl;
						}
						export module StitchUserProfileImpl {
							export class DataFields {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl.DataFields>;
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
				export module auth {
					export module internal {
						export module models {
							export class ApiAuthInfo extends com.mongodb.stitch.core.auth.internal.AuthInfo {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiAuthInfo>;
								public toString(): string;
								public getAccessToken(): string;
								public getRefreshToken(): string;
								public getUserId(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string);
								public getDeviceId(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param7: java.util.Date);
							}
							export module ApiAuthInfo {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiAuthInfo.Fields>;
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
				export module auth {
					export module internal {
						export module models {
							export class ApiCoreUserProfile extends com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiCoreUserProfile>;
								public constructor(param0: string, param1: java.util.Map<string,string>, param2: java.util.List<com.mongodb.stitch.core.auth.internal.models.ApiStitchUserIdentity>);
								public toString(): string;
								public getMaxAge(): string;
								public getName(): string;
								public getPictureUrl(): string;
								public constructor(param0: com.mongodb.stitch.core.auth.UserType, param1: java.util.Map<string,string>, param2: java.util.List<any>);
								public getFirstName(): string;
								public getEmail(): string;
								public getLastName(): string;
								public getBirthday(): string;
								public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl);
								public getGender(): string;
								public getMinAge(): string;
							}
							export module ApiCoreUserProfile {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiCoreUserProfile.Fields>;
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
				export module auth {
					export module internal {
						export module models {
							export class ApiStitchUserIdentity extends com.mongodb.stitch.core.auth.StitchUserIdentity {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiStitchUserIdentity>;
								public toString(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: com.mongodb.stitch.core.auth.StitchUserIdentity);
							}
							export module ApiStitchUserIdentity {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.ApiStitchUserIdentity.Fields>;
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
				export module auth {
					export module internal {
						export module models {
							export class StoreAuthInfo extends com.mongodb.stitch.core.auth.internal.AuthInfo {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreAuthInfo>;
								public static ALL_USERS_STORAGE_NAME: string;
								public static ACTIVE_USER_STORAGE_NAME: string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.mongodb.stitch.core.auth.internal.models.StoreCoreUserProfile, param7: java.util.Date);
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl, param7: java.util.Date);
							}
							export module StoreAuthInfo {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreAuthInfo.Fields>;
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
				export module auth {
					export module internal {
						export module models {
							export class StoreCoreUserProfile extends com.mongodb.stitch.core.auth.internal.StitchUserProfileImpl {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreCoreUserProfile>;
								public getEmail(): string;
								public getMaxAge(): string;
								public getName(): string;
								public getLastName(): string;
								public getBirthday(): string;
								public getPictureUrl(): string;
								public getGender(): string;
								public getFirstName(): string;
								public getMinAge(): string;
							}
							export module StoreCoreUserProfile {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreCoreUserProfile.Fields>;
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
				export module auth {
					export module internal {
						export module models {
							export class StoreStitchUserIdentity extends com.mongodb.stitch.core.auth.StitchUserIdentity {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreStitchUserIdentity>;
							}
							export module StoreStitchUserIdentity {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.internal.models.StoreStitchUserIdentity.Fields>;
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
				export module auth {
					export module providers {
						export module anonymous {
							export class AnonymousAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.anonymous.AnonymousAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module anonymous {
							export class AnonymousCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.anonymous.AnonymousCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor();
								public getMaterial(): org.bson.Document;
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
				export module auth {
					export module providers {
						export module custom {
							export class CustomAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.custom.CustomAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module custom {
							export class CustomCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.custom.CustomCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor(param0: string);
								public getMaterial(): org.bson.Document;
							}
							export module CustomCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.custom.CustomCredential.Fields>;
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
				export module auth {
					export module providers {
						export module facebook {
							export class FacebookAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.facebook.FacebookAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module facebook {
							export class FacebookCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.facebook.FacebookCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor(param0: string);
								public getMaterial(): org.bson.Document;
							}
							export module FacebookCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.facebook.FacebookCredential.Fields>;
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
				export module auth {
					export module providers {
						export module google {
							export class GoogleAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.google.GoogleAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module google {
							export class GoogleCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.google.GoogleCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor(param0: string);
								public getMaterial(): org.bson.Document;
							}
							export module GoogleCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.google.GoogleCredential.Fields>;
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
				export module auth {
					export module providers {
						export module internal {
							export abstract class CoreAuthProviderClient<RequestClientT>  extends java.lang.Object {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.internal.CoreAuthProviderClient<any>>;
								public getBaseRoute(): string;
								public getRequestClient(): RequestClientT;
								public constructor(param0: string, param1: RequestClientT, param2: string);
								public getProviderName(): string;
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
				export module auth {
					export module providers {
						export module serverapikey {
							export class ServerApiKeyAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.serverapikey.ServerApiKeyAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module serverapikey {
							export class ServerApiKeyCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.serverapikey.ServerApiKeyCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor(param0: string);
								public getMaterial(): org.bson.Document;
							}
							export module ServerApiKeyCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.serverapikey.ServerApiKeyCredential.Fields>;
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
				export module auth {
					export module providers {
						export module userapikey {
							export class UserApiKeyAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.UserApiKeyAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module userapikey {
							export class UserApiKeyCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.UserApiKeyCredential>;
								public getProviderType(): string;
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public constructor(param0: string);
								public getMaterial(): org.bson.Document;
							}
							export module UserApiKeyCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.UserApiKeyCredential.Fields>;
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
				export module auth {
					export module providers {
						export module userapikey {
							export module internal {
								export class CoreUserApiKeyAuthProviderClient extends com.mongodb.stitch.core.auth.providers.internal.CoreAuthProviderClient<com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient> {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.internal.CoreUserApiKeyAuthProviderClient>;
									public createApiKeyInternal(param0: string): com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey;
									public constructor(param0: string, param1: any, param2: string);
									public disableApiKeyInternal(param0: org.bson.types.ObjectId): void;
									public fetchApiKeyInternal(param0: org.bson.types.ObjectId): com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey;
									public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes);
									public deleteApiKeyInternal(param0: org.bson.types.ObjectId): void;
									public fetchApiKeysInternal(): java.util.List<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
									public enableApiKeyInternal(param0: org.bson.types.ObjectId): void;
								}
								export module CoreUserApiKeyAuthProviderClient {
									export class ApiKeyFields {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.internal.CoreUserApiKeyAuthProviderClient.ApiKeyFields>;
										public static ID: string;
										public static KEY: string;
										public static NAME: string;
										public static DISABLED: string;
										public constructor();
									}
									export class Routes {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.internal.CoreUserApiKeyAuthProviderClient.Routes>;
									}
									export class UserApiKeyDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey> {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.internal.CoreUserApiKeyAuthProviderClient.UserApiKeyDecoder>;
										public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey;
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
				export module auth {
					export module providers {
						export module userapikey {
							export module models {
								export class UserApiKey {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userapikey.models.UserApiKey>;
									public constructor(param0: string, param1: string, param2: string, param3: java.lang.Boolean);
									public getDisabled(): java.lang.Boolean;
									public getId(): org.bson.types.ObjectId;
									public getKey(): string;
									public toString(): string;
									public getName(): string;
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
				export module auth {
					export module providers {
						export module userpassword {
							export class UserPasswordAuthProvider {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.UserPasswordAuthProvider>;
								public static TYPE: string;
								public static DEFAULT_NAME: string;
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
				export module auth {
					export module providers {
						export module userpassword {
							export class UserPasswordCredential extends com.mongodb.stitch.core.auth.StitchCredential {
								public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.UserPasswordCredential>;
								public getProviderType(): string;
								public constructor(param0: string, param1: string);
								public getProviderName(): string;
								public getProviderCapabilities(): com.mongodb.stitch.core.auth.ProviderCapabilities;
								public getMaterial(): org.bson.Document;
							}
							export module UserPasswordCredential {
								export class Fields {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.UserPasswordCredential.Fields>;
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
				export module auth {
					export module providers {
						export module userpassword {
							export module internal {
								export class CoreUserPasswordAuthProviderClient extends com.mongodb.stitch.core.auth.providers.internal.CoreAuthProviderClient<com.mongodb.stitch.core.internal.net.StitchRequestClient> {
									public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.internal.CoreUserPasswordAuthProviderClient>;
									public constructor(param0: string, param1: any, param2: string);
									public sendResetPasswordEmailInternal(param0: string): void;
									public resetPasswordInternal(param0: string, param1: string, param2: string): void;
									public confirmUserInternal(param0: string, param1: string): void;
									public constructor(param0: string, param1: com.mongodb.stitch.core.internal.net.StitchRequestClient, param2: com.mongodb.stitch.core.auth.internal.StitchAuthRoutes);
									public registerWithEmailInternal(param0: string, param1: string): void;
									public resendConfirmationEmailInternal(param0: string): void;
								}
								export module CoreUserPasswordAuthProviderClient {
									export class ActionFields {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.internal.CoreUserPasswordAuthProviderClient.ActionFields>;
									}
									export class RegistrationFields {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.internal.CoreUserPasswordAuthProviderClient.RegistrationFields>;
									}
									export class Routes {
										public static class: java.lang.Class<com.mongodb.stitch.core.auth.providers.userpassword.internal.CoreUserPasswordAuthProviderClient.Routes>;
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
				export module internal {
					export class CoreStitchAppClient {
						public static class: java.lang.Class<com.mongodb.stitch.core.internal.CoreStitchAppClient>;
						public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.internal.net.StitchAppRoutes, param2: org.bson.codecs.configuration.CodecRegistry);
						public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): void;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): any;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): any;
						public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): any;
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
				export module internal {
					export module common {
						export class Assertions {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.Assertions>;
							public constructor();
							public static keyPresent(param0: string, param1: java.util.Map<string,any>): void;
							public static notNull(param0: string, param1: any): void;
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
				export module internal {
					export module common {
						export class AsyncAdapter<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.AsyncAdapter<any>>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.AsyncAdapter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAdapter(): T;
							});
							public constructor();
							public getAdapter(): T;
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
				export module internal {
					export module common {
						export class AuthMonitor {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.AuthMonitor>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.AuthMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isLoggedIn(): boolean;
								tryIsLoggedIn(): boolean;
								getActiveUserId(): string;
							});
							public constructor();
							public isLoggedIn(): boolean;
							public getActiveUserId(): string;
							public tryIsLoggedIn(): boolean;
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
				export module internal {
					export module common {
						export class BsonUtils {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.BsonUtils>;
							public static DEFAULT_CODEC_REGISTRY: org.bson.codecs.configuration.CodecRegistry;
							public constructor();
							public static copyOfDocument(param0: org.bson.BsonDocument): org.bson.BsonDocument;
							public static toBsonDocumentOrNull(param0: org.bson.conversions.Bson, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
							public static documentToBsonDocument(param0: any, param1: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
							public static toBsonDocument(param0: org.bson.conversions.Bson, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): org.bson.BsonDocument;
							public static parseValue(param0: string, param1: java.lang.Class, param2: org.bson.codecs.configuration.CodecRegistry): any;
							public static getDocumentId(param0: org.bson.BsonDocument): org.bson.BsonValue;
							public static getCodec(param0: org.bson.codecs.configuration.CodecRegistry, param1: java.lang.Class): org.bson.codecs.Codec;
							public static documentToBsonDocument(param0: any, param1: org.bson.codecs.Codec): org.bson.BsonDocument;
							public static parseValue(param0: string, param1: java.lang.Class): any;
							public static parseValue(param0: string, param1: org.bson.codecs.Decoder): any;
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
				export module internal {
					export module common {
						export class Callback<T, U>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.Callback<any,any>>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.Callback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onComplete(param0: com.mongodb.stitch.core.internal.common.OperationResult<T,U>): void;
							});
							public constructor();
							public onComplete(param0: com.mongodb.stitch.core.internal.common.OperationResult<T,U>): void;
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
				export module internal {
					export module common {
						export class CallbackAsyncAdapter<T, U, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.CallbackAsyncAdapter<any,any,any>>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.CallbackAsyncAdapter<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onComplete(param0: com.mongodb.stitch.core.internal.common.OperationResult<T,U>): void;
								getAdapter(): T;
							});
							public constructor();
							public getAdapter(): T;
							public onComplete(param0: com.mongodb.stitch.core.internal.common.OperationResult<T,U>): void;
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
				export module internal {
					export module common {
						export class CollectionDecoder<ResultT>  extends org.bson.codecs.Decoder<java.util.Collection<any>> {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.CollectionDecoder<any>>;
							public constructor(param0: org.bson.codecs.Decoder<any>);
							public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): java.util.Collection<any>;
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
				export module internal {
					export module common {
						export class Dispatcher {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.Dispatcher>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.Dispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								dispatch(param0: java.util.concurrent.Callable): void;
								close(): void;
							});
							public constructor();
							public close(): void;
							public dispatch(param0: java.util.concurrent.Callable): void;
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
				export module internal {
					export module common {
						export class IoUtils {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.IoUtils>;
							public static readAllToBytes(param0: java.io.InputStream): native.Array<number>;
							public static readAllToString(param0: java.io.InputStream): string;
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
				export module internal {
					export module common {
						export class MemoryStorage extends com.mongodb.stitch.core.internal.common.Storage {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.MemoryStorage>;
							public constructor();
							public get(param0: string): string;
							public set(param0: string, param1: string): void;
							public remove(param0: string): void;
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
				export module internal {
					export module common {
						export class OperationResult<SuccessTypeT, FailureTypeT>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.OperationResult<any,any>>;
							public isSuccessful(): boolean;
							public getFailure(): FailureTypeT;
							public geResult(): SuccessTypeT;
							public static successfulResultOf(param0: any): com.mongodb.stitch.core.internal.common.OperationResult<any,any>;
							public static failedResultOf(param0: any): com.mongodb.stitch.core.internal.common.OperationResult<any,any>;
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
				export module internal {
					export module common {
						export class StitchError {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.StitchError>;
							public static handleRequestError(param0: com.mongodb.stitch.core.internal.net.Response): void;
						}
						export module StitchError {
							export class Fields {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.StitchError.Fields>;
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
				export module internal {
					export module common {
						export class StitchObjectMapper {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.StitchObjectMapper>;
							public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.internal.common.StitchObjectMapper;
							public static getInstance(): com.mongodb.stitch.core.internal.common.StitchObjectMapper;
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
				export module internal {
					export module common {
						export class Storage {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.Storage>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.common.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: string): string;
								set(param0: string, param1: string): void;
								remove(param0: string): void;
							});
							public constructor();
							public get(param0: string): string;
							public set(param0: string, param1: string): void;
							public remove(param0: string): void;
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
				export module internal {
					export module common {
						export class ThreadDispatcher extends com.mongodb.stitch.core.internal.common.Dispatcher {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.common.ThreadDispatcher>;
							public constructor();
							public close(): void;
							public dispatch(param0: java.util.concurrent.Callable): void;
							public dispatch(param0: java.util.concurrent.Callable, param1: com.mongodb.stitch.core.internal.common.CallbackAsyncAdapter<any,any,any>): any;
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
				export module internal {
					export module net {
						export class ApiAppMetadata {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.ApiAppMetadata>;
							public constructor();
							public getHostname(): string;
							public getDeploymentModel(): string;
							public getLocation(): string;
							public setHostname(param0: string): void;
							public toString(): string;
							public setLocation(param0: string): void;
							public setDeploymentModel(param0: string): void;
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
				export module internal {
					export module net {
						export abstract class BaseStitchRequestClient extends com.mongodb.stitch.core.internal.net.StitchRequestClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.BaseStitchRequestClient>;
							public close(): void;
							public doStreamRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.EventStream;
							public doRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.Response;
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
				export module internal {
					export module net {
						export class ContentTypes {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.ContentTypes>;
							public static APPLICATION_JSON: string;
							public static TEXT_EVENT_STREAM: string;
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
				export module internal {
					export module net {
						export class Event {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Event>;
							public getData(): string;
							public getEventName(): string;
						}
						export module Event {
							export class Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Event.Builder>;
								public withData(param0: string): com.mongodb.stitch.core.internal.net.Event.Builder;
								public withEventName(param0: string): com.mongodb.stitch.core.internal.net.Event.Builder;
								public constructor();
								public build(): com.mongodb.stitch.core.internal.net.Event;
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
				export module internal {
					export module net {
						export class EventStream {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.EventStream>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.net.EventStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nextEvent(): com.mongodb.stitch.core.internal.net.Event;
								isOpen(): boolean;
								close(): void;
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
							public close(): void;
							public nextEvent(): com.mongodb.stitch.core.internal.net.Event;
							public isOpen(): boolean;
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
				export module internal {
					export module net {
						export abstract class EventStreamReader {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.EventStreamReader>;
							public readLine(): string;
							public processEvent(): com.mongodb.stitch.core.internal.net.Event;
							public isOpen(): boolean;
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
				export module internal {
					export module net {
						export class Headers {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Headers>;
							public static CONTENT_TYPE_CANON: string;
							public static CONTENT_TYPE: string;
							public static AUTHORIZATION: string;
							public static ACCEPT: string;
							public static getAuthorizationBearer(param0: string): string;
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
				export module internal {
					export module net {
						export class Method {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Method>;
							public static GET: com.mongodb.stitch.core.internal.net.Method;
							public static POST: com.mongodb.stitch.core.internal.net.Method;
							public static PUT: com.mongodb.stitch.core.internal.net.Method;
							public static DELETE: com.mongodb.stitch.core.internal.net.Method;
							public static HEAD: com.mongodb.stitch.core.internal.net.Method;
							public static OPTIONS: com.mongodb.stitch.core.internal.net.Method;
							public static TRACE: com.mongodb.stitch.core.internal.net.Method;
							public static PATCH: com.mongodb.stitch.core.internal.net.Method;
							public static values(): native.Array<com.mongodb.stitch.core.internal.net.Method>;
							public static valueOf(param0: string): com.mongodb.stitch.core.internal.net.Method;
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
				export module internal {
					export module net {
						export class NetworkMonitor {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.NetworkMonitor>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.net.NetworkMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isConnected(): boolean;
								addNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
								removeNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
							});
							public constructor();
							public removeNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
							public isConnected(): boolean;
							public addNetworkStateListener(param0: com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener): void;
						}
						export module NetworkMonitor {
							export class StateListener {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.NetworkMonitor.StateListener>;
								/**
								 * Constructs a new instance of the com.mongodb.stitch.core.internal.net.NetworkMonitor$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onNetworkStateChanged(): void;
								});
								public constructor();
								public onNetworkStateChanged(): void;
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
				export module internal {
					export module net {
						export class OkHttpEventStream extends com.mongodb.stitch.core.internal.net.EventStreamReader implements com.mongodb.stitch.core.internal.net.EventStream {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.OkHttpEventStream>;
							public cancel(): void;
							public close(): void;
							public isActive(): boolean;
							public nextEvent(): com.mongodb.stitch.core.internal.net.Event;
							public readLine(): string;
							public isOpen(): boolean;
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
				export module internal {
					export module net {
						export class OkHttpTransport extends com.mongodb.stitch.core.internal.net.Transport {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.OkHttpTransport>;
							public constructor();
							public close(): void;
							public roundTrip(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.Response;
							public stream(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.EventStream;
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
				export module internal {
					export module net {
						export class Request {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Request>;
							public getTimeout(): java.lang.Long;
							public hashCode(): number;
							public getUrl(): string;
							public getHeaders(): java.util.Map<string,string>;
							public getBody(): native.Array<number>;
							public equals(param0: any): boolean;
							public getMethod(): com.mongodb.stitch.core.internal.net.Method;
						}
						export module Request {
							export class Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Request.Builder>;
								public build(): com.mongodb.stitch.core.internal.net.Request;
								public withUrl(param0: string): com.mongodb.stitch.core.internal.net.Request.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.Request.Builder;
								public getHeaders(): java.util.Map<string,string>;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.Request.Builder;
								public getMethod(): com.mongodb.stitch.core.internal.net.Method;
								public getUrl(): string;
								public getTimeout(): java.lang.Long;
								public constructor();
								public getBody(): native.Array<number>;
								public withTimeout(param0: java.lang.Long): com.mongodb.stitch.core.internal.net.Request.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.Request.Builder;
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
				export module internal {
					export module net {
						export class Response {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Response>;
							public constructor(param0: number, param1: native.Array<number>);
							public constructor(param0: number, param1: java.util.Map<string,string>, param2: string);
							public getStatusCode(): number;
							public constructor(param0: number, param1: java.util.Map<string,string>);
							public getBody(): java.io.InputStream;
							public constructor(param0: native.Array<number>);
							public constructor(param0: string);
							public getHeaders(): java.util.Map<string,string>;
							public constructor(param0: number, param1: java.io.InputStream);
							public constructor(param0: number, param1: java.util.Map<string,string>, param2: java.io.InputStream);
							public constructor(param0: number, param1: string);
							public constructor(param0: number);
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
				export module internal {
					export module net {
						export class StitchAppAuthRoutes extends com.mongodb.stitch.core.auth.internal.StitchAuthRoutes {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAppAuthRoutes>;
							public getBaseAuthRoute(): string;
							public getSessionRoute(): string;
							public getAuthProviderExtensionRoute(param0: string, param1: string): string;
							public getAuthProviderLinkRoute(param0: string): string;
							public getAuthProviderLoginRoute(param0: string): string;
							public getAuthProviderRoute(param0: string): string;
							public getProfileRoute(): string;
						}
						export module StitchAppAuthRoutes {
							export class RouteParts {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAppAuthRoutes.RouteParts>;
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
				export module internal {
					export module net {
						export class StitchAppRequestClientImpl extends com.mongodb.stitch.core.internal.net.BaseStitchRequestClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAppRequestClientImpl>;
							public close(): void;
							public doStreamRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.EventStream;
							public constructor(param0: string, param1: string, param2: com.mongodb.stitch.core.internal.net.Transport, param3: java.lang.Long);
							public doRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.Response;
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
				export module internal {
					export module net {
						export class StitchAppRoutes {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAppRoutes>;
							public getServiceRoutes(): com.mongodb.stitch.core.services.internal.StitchServiceRoutes;
							public constructor(param0: string);
							public getPushRoutes(): com.mongodb.stitch.core.push.internal.StitchPushRoutes;
							public getAuthRoutes(): com.mongodb.stitch.core.internal.net.StitchAppAuthRoutes;
						}
						export module StitchAppRoutes {
							export class RouteParts {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAppRoutes.RouteParts>;
								public static APP_ROUTE: string;
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
				export module internal {
					export module net {
						export class StitchAuthDocRequest extends com.mongodb.stitch.core.internal.net.StitchAuthRequest {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAuthDocRequest>;
							public builder(): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
							public getDocument(): org.bson.Document;
							public hashCode(): number;
							public constructor(param0: com.mongodb.stitch.core.internal.net.StitchRequest, param1: org.bson.Document);
							public builder(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
							public equals(param0: any): boolean;
							public constructor(param0: com.mongodb.stitch.core.internal.net.StitchAuthRequest, param1: org.bson.Document);
							public builder(): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
						}
						export module StitchAuthDocRequest {
							export class Builder extends com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder>;
								public build(): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchRequest;
								public withDocument(param0: org.bson.Document): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withShouldRefreshOnFailure(param0: boolean): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withRefreshToken(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withRefreshToken(): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public constructor();
								public withAccessToken(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public getDocument(): org.bson.Document;
								public build(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest;
								public withAccessToken(): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withShouldRefreshOnFailure(param0: boolean): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchAuthDocRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchAuthRequest;
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
				export module internal {
					export module net {
						export class StitchAuthRequest extends com.mongodb.stitch.core.internal.net.StitchRequest {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAuthRequest>;
							public builder(): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
							public hashCode(): number;
							public builder(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
							public getUseRefreshToken(): boolean;
							public equals(param0: any): boolean;
							public getShouldRefreshOnFailure(): boolean;
						}
						export module StitchAuthRequest {
							export class Builder extends com.mongodb.stitch.core.internal.net.StitchRequest.Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder>;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchRequest;
								public constructor();
								public withAccessToken(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withShouldRefreshOnFailure(param0: boolean): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withRefreshToken(): com.mongodb.stitch.core.internal.net.StitchAuthRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchAuthRequest;
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
				export module internal {
					export module net {
						export class StitchDocRequest extends com.mongodb.stitch.core.internal.net.StitchRequest {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchDocRequest>;
							public builder(): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
							public hashCode(): number;
							public toDocument(): org.bson.Document;
							public equals(param0: any): boolean;
							public builder(): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
						}
						export module StitchDocRequest {
							export class Builder extends com.mongodb.stitch.core.internal.net.StitchRequest.Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder>;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchDocRequest;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
								public build(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.internal.net.StitchDocRequest;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchRequest;
								public constructor();
								public getDocument(): org.bson.Document;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
								public withDocument(param0: org.bson.Document): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchDocRequest.Builder;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
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
				export module internal {
					export module net {
						export class StitchEvent<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchEvent<any>>;
							public getEventName(): string;
							public getData(): T;
							public getError(): com.mongodb.stitch.core.StitchServiceException;
						}
						export module StitchEvent {
							export class ErrorFields {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchEvent.ErrorFields>;
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
				export module internal {
					export module net {
						export class StitchRequest {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchRequest>;
							public builder(): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
							public getPath(): string;
							public getTimeout(): java.lang.Long;
							public hashCode(): number;
							public getStartedAt(): java.lang.Long;
							public getHeaders(): java.util.Map<string,string>;
							public getBody(): native.Array<number>;
							public toString(): string;
							public equals(param0: any): boolean;
							public getMethod(): com.mongodb.stitch.core.internal.net.Method;
						}
						export module StitchRequest {
							export class Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchRequest.Builder>;
								public withTimeout(param0: java.lang.Long): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public getPath(): string;
								public getHeaders(): java.util.Map<string,string>;
								public withBody(param0: native.Array<number>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public getMethod(): com.mongodb.stitch.core.internal.net.Method;
								public getTimeout(): java.lang.Long;
								public withMethod(param0: com.mongodb.stitch.core.internal.net.Method): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public withPath(param0: string): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
								public build(): com.mongodb.stitch.core.internal.net.StitchRequest;
								public constructor();
								public getBody(): native.Array<number>;
								public withHeaders(param0: java.util.Map<string,string>): com.mongodb.stitch.core.internal.net.StitchRequest.Builder;
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
				export module internal {
					export module net {
						export class StitchRequestClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchRequestClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.net.StitchRequestClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								doRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.Response;
								doStreamRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.EventStream;
								close(): void;
							});
							public constructor();
							public close(): void;
							public doStreamRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.EventStream;
							public doRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.Response;
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
				export module internal {
					export module net {
						export class StitchRequestClientImpl extends com.mongodb.stitch.core.internal.net.BaseStitchRequestClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.StitchRequestClientImpl>;
							public close(): void;
							public doStreamRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.EventStream;
							public doRequest(param0: com.mongodb.stitch.core.internal.net.StitchRequest): com.mongodb.stitch.core.internal.net.Response;
							public constructor(param0: string, param1: com.mongodb.stitch.core.internal.net.Transport, param2: java.lang.Long);
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
				export module internal {
					export module net {
						export class Stream<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Stream<any>>;
							public cancel(): void;
							public constructor(param0: com.mongodb.stitch.core.internal.net.EventStream, param1: org.bson.codecs.Decoder<T>);
							public close(): void;
							public constructor(param0: com.mongodb.stitch.core.internal.net.EventStream, param1: java.lang.Class<T>, param2: org.bson.codecs.configuration.CodecRegistry);
							public isOpen(): boolean;
							public nextEvent(): com.mongodb.stitch.core.internal.net.StitchEvent<T>;
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
				export module internal {
					export module net {
						export class Transport {
							public static class: java.lang.Class<com.mongodb.stitch.core.internal.net.Transport>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.internal.net.Transport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								roundTrip(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.Response;
								stream(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.EventStream;
								close(): void;
							});
							public constructor();
							public close(): void;
							public roundTrip(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.Response;
							public stream(param0: com.mongodb.stitch.core.internal.net.Request): com.mongodb.stitch.core.internal.net.EventStream;
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
				export module push {
					export module internal {
						export class CoreStitchPushClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.push.internal.CoreStitchPushClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.push.internal.CoreStitchPushClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerInternal(param0: org.bson.Document): void;
								deregisterInternal(): void;
							});
							public constructor();
							public deregisterInternal(): void;
							public registerInternal(param0: org.bson.Document): void;
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
				export module push {
					export module internal {
						export class CoreStitchPushClientImpl extends com.mongodb.stitch.core.push.internal.CoreStitchPushClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.push.internal.CoreStitchPushClientImpl>;
							public deregisterInternal(): void;
							public registerInternal(param0: org.bson.Document): void;
							public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.push.internal.StitchPushRoutes, param2: string);
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
				export module push {
					export module internal {
						export class StitchPushRoutes {
							public static class: java.lang.Class<com.mongodb.stitch.core.push.internal.StitchPushRoutes>;
							public constructor(param0: string);
							public getRegistrationRoute(param0: string): string;
						}
						export module StitchPushRoutes {
							export class RouteParts {
								public static class: java.lang.Class<com.mongodb.stitch.core.push.internal.StitchPushRoutes.RouteParts>;
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
					export module internal {
						export abstract class AuthEvent extends com.mongodb.stitch.core.services.internal.RebindEvent {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent>;
							public constructor();
							public getType(): com.mongodb.stitch.core.services.internal.RebindEventType;
							public getAuthEventType(): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
						}
						export module AuthEvent {
							export class ActiveUserChanged<StitchUserT>  extends com.mongodb.stitch.core.services.internal.AuthEvent {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent.ActiveUserChanged<any>>;
								public constructor(param0: any, param1: any);
								public getPreviousActiveUser(): any;
								public getCurrentActiveUser(): any;
								public constructor();
								public getAuthEventType(): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
							}
							export class Type {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent.Type>;
								public static USER_LOGGED_IN: com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public static USER_LOGGED_OUT: com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public static ACTIVE_USER_CHANGED: com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public static USER_REMOVED: com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public static valueOf(param0: string): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public static values(): native.Array<com.mongodb.stitch.core.services.internal.AuthEvent.Type>;
							}
							export class UserLoggedIn<StitchUserT>  extends com.mongodb.stitch.core.services.internal.AuthEvent {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent.UserLoggedIn<any>>;
								public constructor(param0: any);
								public getLoggedInUser(): any;
								public constructor();
								public getAuthEventType(): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
							}
							export class UserLoggedOut<StitchUserT>  extends com.mongodb.stitch.core.services.internal.AuthEvent {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent.UserLoggedOut<any>>;
								public constructor(param0: any);
								public constructor();
								public getAuthEventType(): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
								public getLoggedOutUser(): any;
							}
							export class UserRemoved<StitchUserT>  extends com.mongodb.stitch.core.services.internal.AuthEvent {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.AuthEvent.UserRemoved<any>>;
								public constructor(param0: any);
								public getRemovedUser(): any;
								public constructor();
								public getAuthEventType(): com.mongodb.stitch.core.services.internal.AuthEvent.Type;
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
					export module internal {
						export class CoreStitchServiceClient extends com.mongodb.stitch.core.services.internal.StitchServiceBinder {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.CoreStitchServiceClient>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.services.internal.CoreStitchServiceClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getName(): string;
								callFunction(param0: string, param1: java.util.List<any>): void;
								callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): any;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): any;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): any;
								callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): void;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): any;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): any;
								callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): any;
								streamFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
								getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
								withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.internal.CoreStitchServiceClient;
								bind(param0: com.mongodb.stitch.core.services.internal.StitchServiceBinder): void;
								onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
							});
							public constructor();
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): any;
							public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.internal.CoreStitchServiceClient;
							public onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
							public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): any;
							public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): any;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): any;
							public bind(param0: com.mongodb.stitch.core.services.internal.StitchServiceBinder): void;
							public callFunction(param0: string, param1: java.util.List<any>): void;
							public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): void;
							public getName(): string;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): any;
							public streamFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): any;
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
					export module internal {
						export class CoreStitchServiceClientImpl extends com.mongodb.stitch.core.services.internal.CoreStitchServiceClient {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.CoreStitchServiceClientImpl>;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class, param4: org.bson.codecs.configuration.CodecRegistry): any;
							public withCodecRegistry(param0: org.bson.codecs.configuration.CodecRegistry): com.mongodb.stitch.core.services.internal.CoreStitchServiceClient;
							public onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
							public callFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): any;
							public getCodecRegistry(): org.bson.codecs.configuration.CodecRegistry;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: java.lang.Class): any;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class): any;
							public bind(param0: com.mongodb.stitch.core.services.internal.StitchServiceBinder): void;
							public callFunction(param0: string, param1: java.util.List<any>): void;
							public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.services.internal.StitchServiceRoutes, param2: org.bson.codecs.configuration.CodecRegistry);
							public constructor(param0: com.mongodb.stitch.core.auth.internal.StitchAuthRequestClient, param1: com.mongodb.stitch.core.services.internal.StitchServiceRoutes, param2: string, param3: org.bson.codecs.configuration.CodecRegistry);
							public callFunction(param0: string, param1: java.util.List<any>, param2: java.lang.Long): void;
							public getName(): string;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Long, param3: org.bson.codecs.Decoder): any;
							public streamFunction(param0: string, param1: java.util.List, param2: org.bson.codecs.Decoder): com.mongodb.stitch.core.internal.net.Stream<any>;
							public callFunction(param0: string, param1: java.util.List, param2: java.lang.Class, param3: org.bson.codecs.configuration.CodecRegistry): any;
						}
						export module CoreStitchServiceClientImpl {
							export class FunctionFields {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.CoreStitchServiceClientImpl.FunctionFields>;
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
					export module internal {
						export abstract class RebindEvent {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.RebindEvent>;
							public constructor();
							public getType(): com.mongodb.stitch.core.services.internal.RebindEventType;
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
					export module internal {
						export class RebindEventType {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.RebindEventType>;
							public static AUTH_EVENT: com.mongodb.stitch.core.services.internal.RebindEventType;
							public static valueOf(param0: string): com.mongodb.stitch.core.services.internal.RebindEventType;
							public static values(): native.Array<com.mongodb.stitch.core.services.internal.RebindEventType>;
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
					export module internal {
						export class StitchServiceBinder {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.StitchServiceBinder>;
							/**
							 * Constructs a new instance of the com.mongodb.stitch.core.services.internal.StitchServiceBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
							});
							public constructor();
							public onRebindEvent(param0: com.mongodb.stitch.core.services.internal.RebindEvent): void;
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
					export module internal {
						export class StitchServiceRoutes {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.StitchServiceRoutes>;
							public getLocationRoute(): string;
							public constructor(param0: string);
							public getFunctionCallRoute(): string;
						}
						export module StitchServiceRoutes {
							export class RouteParts {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.internal.StitchServiceRoutes.RouteParts>;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.mongodb.stitch.core.auth.internal.AccessTokenRefresher:1
//com.mongodb.stitch.core.auth.internal.CoreStitchAuth:1
//com.mongodb.stitch.core.auth.internal.StitchUserFactory:1
//com.mongodb.stitch.core.auth.providers.internal.CoreAuthProviderClient:1
//com.mongodb.stitch.core.internal.common.AsyncAdapter:1
//com.mongodb.stitch.core.internal.common.Callback:2
//com.mongodb.stitch.core.internal.common.CallbackAsyncAdapter:3
//com.mongodb.stitch.core.internal.common.CollectionDecoder:1
//com.mongodb.stitch.core.internal.common.OperationResult:2
//com.mongodb.stitch.core.internal.net.StitchEvent:1
//com.mongodb.stitch.core.internal.net.Stream:1
//com.mongodb.stitch.core.services.internal.AuthEvent.ActiveUserChanged:1
//com.mongodb.stitch.core.services.internal.AuthEvent.UserLoggedIn:1
//com.mongodb.stitch.core.services.internal.AuthEvent.UserLoggedOut:1
//com.mongodb.stitch.core.services.internal.AuthEvent.UserRemoved:1


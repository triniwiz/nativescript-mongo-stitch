declare module com {
	export module mongodb {
		export module stitch {
			export module core {
				export module services {
					export module http {
						export class HttpCookie {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.http.HttpCookie>;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Boolean, param7: java.lang.Boolean);
							public getPath(): string;
							public isSecure(): java.lang.Boolean;
							public isHttpOnly(): java.lang.Boolean;
							public getName(): string;
							public getMaxAge(): java.lang.Integer;
							public getDomain(): string;
							public getValue(): string;
							public getExpires(): string;
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
					export module http {
						export class HttpMethod {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.http.HttpMethod>;
							public static GET: com.mongodb.stitch.core.services.http.HttpMethod;
							public static POST: com.mongodb.stitch.core.services.http.HttpMethod;
							public static PUT: com.mongodb.stitch.core.services.http.HttpMethod;
							public static DELETE: com.mongodb.stitch.core.services.http.HttpMethod;
							public static HEAD: com.mongodb.stitch.core.services.http.HttpMethod;
							public static PATCH: com.mongodb.stitch.core.services.http.HttpMethod;
							public static valueOf(param0: string): com.mongodb.stitch.core.services.http.HttpMethod;
							public static values(): native.Array<com.mongodb.stitch.core.services.http.HttpMethod>;
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
					export module http {
						export class HttpRequest {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.http.HttpRequest>;
							public getBody(): any;
							public getUrl(): string;
							public getEncodeBodyAsJson(): java.lang.Boolean;
							public getCookies(): java.util.Map<string,string>;
							public getAuthUrl(): string;
							public getFollowRedirects(): java.lang.Boolean;
							public getMethod(): com.mongodb.stitch.core.services.http.HttpMethod;
							public getHeaders(): java.util.Map<string,java.util.Collection<string>>;
							public getForm(): java.util.Map<string,string>;
						}
						export module HttpRequest {
							export class Builder {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.http.HttpRequest.Builder>;
								public withCookies(param0: java.util.Map<string,string>): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withFollowRedirects(param0: java.lang.Boolean): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withEncodeBodyAsJson(param0: java.lang.Boolean): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withHeaders(param0: java.util.Map<string,java.util.Collection<string>>): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withForm(param0: java.util.Map<string,string>): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public build(): com.mongodb.stitch.core.services.http.HttpRequest;
								public withUrl(param0: string): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public constructor();
								public withAuthUrl(param0: string): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withBody(param0: any): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
								public withMethod(param0: com.mongodb.stitch.core.services.http.HttpMethod): com.mongodb.stitch.core.services.http.HttpRequest.Builder;
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
					export module http {
						export class HttpResponse {
							public static class: java.lang.Class<com.mongodb.stitch.core.services.http.HttpResponse>;
							public getStatusCode(): number;
							public getCookies(): java.util.Map<string,com.mongodb.stitch.core.services.http.HttpCookie>;
							public getBody(): native.Array<number>;
							public constructor(param0: string, param1: number, param2: number, param3: java.util.Map<string,java.util.Collection<string>>, param4: java.util.Map<string,com.mongodb.stitch.core.services.http.HttpCookie>, param5: native.Array<number>);
							public getStatus(): string;
							public getContentLength(): number;
							public getHeaders(): java.util.Map<string,java.util.Collection<string>>;
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
					export module http {
						export module internal {
							export class CoreHttpServiceClient {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.http.internal.CoreHttpServiceClient>;
								public execute(param0: com.mongodb.stitch.core.services.http.HttpRequest): com.mongodb.stitch.core.services.http.HttpResponse;
								public constructor(param0: com.mongodb.stitch.core.services.internal.CoreStitchServiceClient);
							}
							export module CoreHttpServiceClient {
								export class RequestAction {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.http.internal.CoreHttpServiceClient.RequestAction>;
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
					export module http {
						export module internal {
							export class ResultDecoders {
								public static class: java.lang.Class<com.mongodb.stitch.core.services.http.internal.ResultDecoders>;
							}
							export module ResultDecoders {
								export class HttpResponseDecoder extends org.bson.codecs.Decoder<com.mongodb.stitch.core.services.http.HttpResponse> {
									public static class: java.lang.Class<com.mongodb.stitch.core.services.http.internal.ResultDecoders.HttpResponseDecoder>;
									public decode(param0: org.bson.BsonReader, param1: org.bson.codecs.DecoderContext): com.mongodb.stitch.core.services.http.HttpResponse;
								}
								export module HttpResponseDecoder {
									export class Fields {
										public static class: java.lang.Class<com.mongodb.stitch.core.services.http.internal.ResultDecoders.HttpResponseDecoder.Fields>;
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


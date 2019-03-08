import { HttpMethod } from './http.base';
import { NamedServiceClientFactory } from 'nativescript-mongo-stitch-core';
export declare class HttpCookie {
    readonly name: string;
    readonly value: string;
    readonly path?: string;
    readonly domain?: string;
    readonly expires?: string;
    readonly maxAge?: number;
    readonly secure?: boolean;
    readonly httpOnly?: boolean;
    private _android;
    constructor(name: string, value: string, path?: string, domain?: string, expires?: string, maxAge?: number, secure?: boolean, httpOnly?: boolean);
    readonly instance: com.mongodb.stitch.core.services.http.HttpCookie;
    static fromNative(instance: com.mongodb.stitch.core.services.http.HttpCookie): HttpCookie;
}
export declare class Builder {
    private _android;
    private url;
    private method;
    private authUrl;
    private headers;
    private cookies;
    private body;
    private encodeBodyAsJson;
    private form;
    private followRedirects;
    constructor();
    withUrl(url: string): this;
    withMethod(method: HttpMethod): this;
    withAuthUrl(authUrl: string): this;
    withHeaders(headers: Map<string, string[]>): this;
    withCookies(cookies: Map<string, string>): this;
    withBody(body: any): this;
    withEncodeBodyAsJson(encodeBodyAsJson: boolean): this;
    withForm(form: Map<string, string>): this;
    withFollowRedirects(followRedirects: boolean): this;
    build(): HttpRequest;
}
export declare class HttpRequest {
    private _android;
    private constructor();
    static fromNative(instance: any): HttpRequest;
    static Builder(): Builder;
    readonly url: string;
    readonly method: HttpMethod;
    readonly authUrl: string;
    readonly headers: Map<string, string[]>;
    readonly cookies: Map<string, string>;
    readonly body: any;
    readonly encodeBodyAsJson: boolean;
    readonly form: Map<string, string>;
    readonly followRedirects: boolean;
    readonly instance: com.mongodb.stitch.core.services.http.HttpRequest;
}
export declare class HttpResponse {
    private _android;
    private constructor();
    readonly instance: com.mongodb.stitch.core.services.http.HttpResponse;
    static fromNative(instance: any): HttpResponse;
    readonly status: string;
    readonly statusCode: number;
    readonly contentLength: number;
    readonly headers: Map<string, string[]>;
    readonly cookies: Map<string, HttpCookie>;
    readonly body: any;
}
export declare class HttpServiceClient implements NamedServiceClientFactory {
    private _android;
    private _nativeFactory;
    static readonly factory: HttpServiceClient;
    instance: any;
    readonly nativeFactory: any;
    execute(request: HttpRequest): Promise<HttpResponse>;
    private constructor();
    static fromNative(instance: any): HttpServiceClient;
}

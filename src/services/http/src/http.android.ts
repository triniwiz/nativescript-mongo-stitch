import { HttpMethod } from './http.base';
import { NamedServiceClientFactory } from 'nativescript-mongo-stitch-core';

export class HttpCookie {
    private _android: com.mongodb.stitch.core.services.http.HttpCookie;

    public constructor(
        public readonly name: string,
        public readonly value: string,
        public readonly path?: string,
        public readonly domain?: string,
        public readonly expires?: string,
        public readonly maxAge?: number,
        public readonly secure?: boolean,
        public readonly httpOnly?: boolean
    ) {
        this._android = new com.mongodb.stitch.core.services.http.HttpCookie(
            name, value, path, domain, expires, maxAge as any, secure as any, httpOnly as any
        );
    }

    get instance() {
        return this._android;
    }

    public static fromNative(instance: com.mongodb.stitch.core.services.http.HttpCookie) {
        return new HttpCookie(
            instance.getName(),
            instance.getValue(),
            instance.getPath(),
            instance.getDomain(),
            instance.getExpires(),
            instance.getMaxAge() as any,
            instance.isSecure().booleanValue(),
            instance.isHttpOnly().booleanValue(),
        );
    }
}

const getNativeMethod = (method: HttpMethod) => {
    switch (method) {
        case HttpMethod.DELETE:
            return com.mongodb.stitch.core.services.http.HttpMethod.DELETE;
        case HttpMethod.PUT:
            return com.mongodb.stitch.core.services.http.HttpMethod.PUT;
        case HttpMethod.HEAD:
            return com.mongodb.stitch.core.services.http.HttpMethod.HEAD;
        case HttpMethod.PATCH:
            return com.mongodb.stitch.core.services.http.HttpMethod.PATCH;
        case HttpMethod.POST:
            return com.mongodb.stitch.core.services.http.HttpMethod.POST;
        default:
            return com.mongodb.stitch.core.services.http.HttpMethod.GET;
    }
};

const getNativeMap = (map: Map<string, string>) => {
    const nativeMap = new java.util.HashMap();
    map.forEach((value, key) => {
        nativeMap.put(key, value);
    });
    return nativeMap;
};

const getNativeHeaders = (map: Map<string, string[]>) => {
    const nativeMap = new java.util.HashMap();
    map.forEach((value, key) => {
        const nativeCollection = new java.util.ArrayList();
        value.forEach((item) => {
            nativeCollection.add(item);
        });
        nativeMap.put(key, value);
    });
    return nativeMap;
};

const getNativeCookies = (map: Map<string, HttpCookie>) => {
    const nativeMap = new java.util.HashMap();
    map.forEach((value, key) => {
        nativeMap.put(key, value.instance);
    });
    return nativeMap;
};

const getMethod = (method: com.mongodb.stitch.core.services.http.HttpMethod) => {
    switch (method) {
        case com.mongodb.stitch.core.services.http.HttpMethod.DELETE:
            return HttpMethod.DELETE;
        case com.mongodb.stitch.core.services.http.HttpMethod.HEAD:
            return HttpMethod.HEAD;
        case com.mongodb.stitch.core.services.http.HttpMethod.POST:
            return HttpMethod.POST;
        case com.mongodb.stitch.core.services.http.HttpMethod.PATCH:
            return HttpMethod.PATCH;
        case com.mongodb.stitch.core.services.http.HttpMethod.PUT:
            return HttpMethod.PUT;
        default:
            return HttpMethod.GET;
    }
};

const getMap = (map: java.util.HashMap<string, string>) => {
    const set = map.keySet();
    const array = set.toArray();
    const length = array.length;
    const _map = new Map<string, string>();
    for (let i = 0; i < length; i++) {
        const key = array[i];
        _map.set(key, map.get(key));
    }
    return _map;
};

const getHeaders = (map: java.util.HashMap<string, java.util.Collection<string>>) => {
    const set = map.keySet();
    const array = set.toArray();
    const length = array.length;
    const _map = new Map<string, string[]>();
    for (let i = 0; i < length; i++) {
        const key = array[i];
        const collection = map.get(key) as java.util.Collection<string>;
        _map.set(key, collection.toArray() as any);
    }
    return _map;
};

const getCookies = (map: java.util.Map<string, com.mongodb.stitch.core.services.http.HttpCookie>) => {
    const set = map.keySet();
    const array = set.toArray();
    const length = array.length;
    const _map = new Map<string, HttpCookie>();
    for (let i = 0; i < length; i++) {
        const key = array[i];
        const cookie = map.get(key);
        _map.set(key, HttpCookie.fromNative(cookie));
    }
    return _map;
};

export class HttpRequest {
    private _android: com.mongodb.stitch.core.services.http.HttpRequest;

    private constructor(
        builder: any
    ) {
        this._android = builder;
    }

    get url(): string {
        return this._android.getUrl();
    }

    get method(): HttpMethod {
        return getMethod(this._android.getMethod());
    }

    get authUrl(): string {
        return this._android.getAuthUrl();
    }

    get headers(): Map<string, string[]> {
        return getHeaders(this._android.getHeaders() as any);
    }

    get cookies(): Map<string, string> {
        return getMap(this._android.getCookies() as any);
    }

    get body(): any {
        return this._android.getBody();
    }

    get encodeBodyAsJson(): boolean {
        return this._android.getEncodeBodyAsJson().booleanValue();
    }

    get form(): Map<string, string> {
        return getMap(this._android.getForm() as any);
    }

    get followRedirects(): boolean {
        return this._android.getFollowRedirects().booleanValue();
    }

    public static Builder = new class {
        private _android: com.mongodb.stitch.core.services.http.HttpRequest.Builder;
        private url: string;
        private method: HttpMethod;
        private authUrl: string;
        private headers: Map<string, string[]>;
        private cookies: Map<string, string>;
        private body: object;
        private encodeBodyAsJson: boolean;
        private form: Map<string, string>;
        private followRedirects: boolean;

        public constructor() {
            this._android = new com.mongodb.stitch.core.services.http.HttpRequest.Builder();
        }

        public withUrl(url: string): this {
            this.url = url;
            this._android = this._android.withAuthUrl(url);
            return this;
        }

        public withMethod(method: HttpMethod): this {
            this.method = method;
            this._android = this._android.withMethod(getNativeMethod(method));
            return this;
        }


        public withAuthUrl(authUrl: string): this {
            this.authUrl = authUrl;
            this._android = this._android.withAuthUrl(authUrl);
            return this;
        }


        public withHeaders(headers: Map<string, string[]>): this {
            this.headers = headers;
            this._android = this._android.withHeaders(getNativeHeaders(headers));
            return this;
        }


        public withCookies(cookies: Map<string, string>): this {
            this.cookies = cookies;
            this._android = this._android.withCookies(getNativeMap(cookies));
            return this;
        }


        public withBody(body: any): this {
            this.body = body;
            this._android = this._android.withBody(body);
            return this;
        }


        public withEncodeBodyAsJson(encodeBodyAsJson: boolean): this {
            this.encodeBodyAsJson = encodeBodyAsJson;
            this._android = this._android.withEncodeBodyAsJson(encodeBodyAsJson as any);
            return this;
        }


        public withForm(form: Map<string, string>): this {
            this.form = form;
            this._android = this._android.withForm(getNativeMap(form));
            return this;
        }


        public withFollowRedirects(followRedirects: boolean): this {
            this.followRedirects = followRedirects;
            this._android = this._android.withFollowRedirects(followRedirects as any);
            return this;
        }


        public build(): HttpRequest {
            if (this.url === undefined || this.url === '') {
                throw new Error('must set url');
            }

            if (this.method === undefined) {
                throw new Error('must set method');
            }

            return new HttpRequest(
                this._android
            );
        }
    };

    get instance() {
        return this._android;
    }
}

export class HttpResponse {
    private _android: com.mongodb.stitch.core.services.http.HttpResponse;

    private constructor() {
    }

    get instance() {
        return this._android;
    }

    public static fromNative(instance): HttpResponse {
        const response = new HttpResponse();
        response._android = instance;
        return response;
    }

    get status(): string {
        return this._android.getStatus();
    }

    get statusCode(): number {
        return this._android.getStatusCode();
    }

    get contentLength(): number {
        return this._android.getContentLength();
    }

    get headers(): Map<string, string[]> {
        return getHeaders(this._android.getHeaders() as any);
    }

    get cookies(): Map<string, HttpCookie> {
        return getCookies(this._android.getCookies() as any);
    }

    get body(): any {
        return this._android.getBody();
    }
}

export class HttpServiceClient implements NamedServiceClientFactory {

    private _android: com.mongodb.stitch.android.services.http.HttpServiceClient;

    private _nativeFactory;

    public static get factory() {
        const client = new HttpServiceClient();
        client._nativeFactory = com.mongodb.stitch.android.services.http.HttpServiceClient.factory;
        return client;
    }

    set instance(instance) {
        this._android = instance;
    }

    get nativeFactory() {
        return this._nativeFactory;
    }

    execute(request: HttpRequest) {
        return new Promise<HttpResponse>((resolve, reject) => {
            this._android.execute(request.instance).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.core.services.http.HttpResponse>): void {
                    if (task.isSuccessful()) {
                        const response = task.getResult();
                        resolve(HttpResponse.fromNative(response));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        }) as any;
    }

    private constructor() {
    }

    public static fromNative(instance) {
        const client = new HttpServiceClient();
        client._android = instance;
        return client;
    }
}

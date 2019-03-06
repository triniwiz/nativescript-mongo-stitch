export class Stitch {

    private _android;

    static initializeDefaultAppClient(id: string) {
        return new Promise<StitchAppClient>((resolve, reject) => {
            try {
                const instance = com.mongodb.stitch.android.core.Stitch.initializeDefaultAppClient(id);
                resolve(StitchAppClient.fromNative(instance));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    static initializeAppClient(id: string) {
        return new Promise<StitchAppClient>((resolve, reject) => {
            try {
                const instance = com.mongodb.stitch.android.core.Stitch.initializeAppClient(id);
                resolve(StitchAppClient.fromNative(instance));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    static appClient(id: string): StitchAppClient | null {
        try {
            return StitchAppClient.fromNative(com.mongodb.stitch.android.core.Stitch.getAppClient(id));
        } catch (e) {
            console.error(e.message);
            return null;
        }
    }

    static defaultAppClient(): StitchAppClient | null {
        try {
            return StitchAppClient.fromNative(com.mongodb.stitch.android.core.Stitch.getDefaultAppClient());
        } catch (e) {
            console.error(e.message);
            return null;
        }
    }

    static hasAppClient(id: string): boolean {
        return com.mongodb.stitch.android.core.Stitch.hasAppClient(id);
    }

}

export interface NamedServiceClientFactory<T> {
    instance: any;
    readonly nativeFactory: any;
}

export interface ServiceClientFactory<T> {
    instance: any;
    readonly nativeClientFactory: any;
}

export class StitchAppClient {
    private _android: com.mongodb.stitch.android.core.StitchAppClient;

    private constructor() {
    }

    public static fromNative(instance) {
        const auth = new StitchAppClient();
        auth._android = instance;
        return auth;
    }

    get auth(): StitchAuth {
        return StitchAuth.fromNative(this._android.getAuth());
    }

    callFunction(name: string, args: any[]) {
        return new Promise((reject, resolve) => {
            const list = new java.util.ArrayList();
            const length = args.length;
            for (let i = 0; i < length; i++) {
                list.add(args[i]);
            }
            this._android.callFunction(name, list).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        console.log(task.getResult());
                        resolve();
                    } else {
                        reject();
                    }
                }
            }));
        });
    }

    getServiceClient<T>(
        factory: NamedServiceClientFactory<T> | ServiceClientFactory<T>,
        serviceName?: string
    ): T {
        let instance;
        if (serviceName) {
            instance = this._android.getServiceClient((factory as any).nativeFactory, serviceName);
        } else {
            instance = this._android.getServiceClient((factory as any).nativeClientFactory);
        }
        factory.instance = instance;

        return factory as any;
    }


    close() {
        this._android.close();
    }
}


export interface RemoteDeleteResult {
    deletedCount: number;
}

export interface LocalDeleteResult extends RemoteDeleteResult {
}

export interface RemoteFindOneAndModifyOptions {
    projection?: object;
    sort?: object;
    upsert?: boolean;
    returnNewDocument?: boolean;
}

export interface LocalFindOneAndModifyOptions extends RemoteFindOneAndModifyOptions {
}

export interface RemoteFindOptions {
    limit?: number;
    projection?: object;
    sort?: object;
}

export interface LocalFindOptions extends RemoteFindOptions {

}

export interface RemoteInsertOneResult {
    insertedId: any;
}

export interface LocalInsertOneResult extends RemoteInsertOneResult {
}

export class RemoteInsertManyResult {
    public readonly insertedIds: { [key: number]: string };

    constructor(arr: any[]) {
        const inserted = {};
        arr.forEach((value, index) => {
            inserted[index] = value;
        });
        this.insertedIds = inserted;
    }
}

export class LocalInsertManyResult extends RemoteInsertManyResult {
    constructor(arr: any[]) {
        super(arr);
    }
}

export interface RemoteUpdateResult {
    matchedCount: number;
    modifiedCount: number;
    upsertedId: any;
}

export interface LocalUpdateResult extends RemoteUpdateResult {

}

export interface RemoteUpdateDescription {
    readonly updatedFields: object;
    readonly removedFields: string[];
}


export interface LocalUpdateDescription extends RemoteUpdateDescription {
}


export interface RemoteUpdateOptions {
    upsert?: boolean;
}


export interface LocalUpdateOptions extends RemoteUpdateOptions {

}

export interface RemoteCountOptions {
    limit?: number;
}

export interface LocalCountOptions extends RemoteCountOptions {

}

export interface RemoteFindOptions {
    limit?: number;
    projection?: object;
    sort?: object;
}


export interface LocalFindOptions extends RemoteFindOptions {

}

export class StitchAuth {
    private _android: com.mongodb.stitch.android.core.auth.StitchAuth;

    private static listenerMap: Map<any, any> = new Map();

    private constructor() {
    }

    public static fromNative(instance) {
        const auth = new StitchAuth();
        auth._android = instance;
        return auth;
    }

    get isLoggedIn(): boolean {
        if (this._android) {
            return this._android.isLoggedIn();
        }
        return false;
    }

    get user(): StitchUser | null {
        const nativeUser = this._android.getUser();
        if (nativeUser) {
            return StitchUser.fromNative(nativeUser);
        }
        return null;
    }

    switchToUserWithId(userId: string) {
        return new Promise<StitchUser>((resolve, reject) => {
            try {
                const user = this._android.switchToUserWithId(userId);
                resolve(StitchUser.fromNative(user));
            } catch (e) {
                reject(e.getMessage());
            }
        });
    }

    listUsers(): StitchUser[] {
        const list = this._android.listUsers();
        const length = list.size();
        const users = [];
        for (let i = 0; i < length; i++) {
            users.push(StitchUser.fromNative(list.get(i)));
        }
        return users;
    }

    logout() {
        return new Promise((resolve, reject) => {
            this._android.logout().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve();
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    logoutUserWithId(userId: string) {
        return new Promise((resolve, reject) => {
            this._android.logoutUserWithId(userId).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve();
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    removeUser() {
        return new Promise((resolve, reject) => {
            this._android.removeUser().addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve();
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    removeUserWithId(userId: string) {
        return new Promise((resolve, reject) => {
            this._android.removeUserWithId(userId).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve();
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }


    loginWithCredential(credential: StitchCredential) {
        return new Promise<StitchUser>((resolve, reject) => {
            this._android.loginWithCredential(credential.instance).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<any>): void {
                    if (task.isSuccessful()) {
                        resolve(StitchUser.fromNative(task.getResult()));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

    addAuthListener(listener: StitchAuthListener) {
        const nativeListener = StitchAuth.listenerMap.get(listener);
        if (nativeListener) return;
        const _listener = new com.mongodb.stitch.android.core.auth.StitchAuthListener({
            onUserRemoved(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onUserRemoved) {
                    listener.onUserRemoved(StitchAuth.fromNative(auth), StitchUser.fromNative(user));
                }
            },
            onUserLoggedOut(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onUserLoggedOut) {
                    listener.onUserLoggedOut(StitchAuth.fromNative(auth), StitchUser.fromNative(user));
                }
            },
            onUserLoggedIn(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onUserLoggedIn) {
                    listener.onUserLoggedIn(StitchAuth.fromNative(auth), StitchUser.fromNative(user));
                }
            },
            onUserLinked(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onUserLinked) {
                    listener.onUserLinked(StitchAuth.fromNative(auth), StitchUser.fromNative(user));
                }
            },
            onUserAdded(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onUserAdded) {
                    listener.onUserAdded(StitchAuth.fromNative(auth), StitchUser.fromNative(user));
                }
            },
            onListenerRegistered(auth: com.mongodb.stitch.android.core.auth.StitchAuth): void {
                if (listener.onListenerRegistered) {
                    listener.onListenerRegistered(StitchAuth.fromNative(auth));
                }
            },
            onAuthEvent(auth: com.mongodb.stitch.android.core.auth.StitchAuth): void {
                if (listener.onAuthEvent) {
                    listener.onAuthEvent(StitchAuth.fromNative(auth));
                }
            },
            onActiveUserChanged(auth: com.mongodb.stitch.android.core.auth.StitchAuth, user1: com.mongodb.stitch.android.core.auth.StitchUser, user2: com.mongodb.stitch.android.core.auth.StitchUser): void {
                if (listener.onActiveUserChanged) {
                    listener.onActiveUserChanged(StitchAuth.fromNative(auth), StitchUser.fromNative(user1), StitchUser.fromNative(user2));
                }
            }
        });
        this._android.addAuthListener(_listener);
        StitchAuth.listenerMap.set(listener, _listener);
    }

    removeAuthListener(listener: StitchAuthListener) {
        const nativeListener = StitchAuth.listenerMap.get(listener);
        if (nativeListener) {
            StitchAuth.listenerMap.delete(nativeListener);
        }
    }

}

export class StitchCredential {
    instance;
}

export class AnonymousCredential extends StitchCredential {
    private _android: com.mongodb.stitch.core.auth.providers.anonymous.AnonymousCredential;

    constructor() {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.anonymous.AnonymousCredential();
    }

    get instance(): any {
        return this._android;
    }
}

export class UserPasswordCredential extends StitchCredential {
    private _android;

    constructor(username: string, password: string) {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.userpassword.UserPasswordCredential(username, password);
    }

    get instance() {
        return this._android;
    }
}

export class GoogleCredential extends StitchCredential {
    private _android: com.mongodb.stitch.core.auth.providers.google.GoogleCredential;

    constructor(authCode: string) {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.google.GoogleCredential(authCode);
    }

    get instance(): any {
        return this._android;
    }
}

export class FacebookCredential extends StitchCredential {

    private _android: com.mongodb.stitch.core.auth.providers.facebook.FacebookCredential;

    constructor(accessToken: string) {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.facebook.FacebookCredential(accessToken);
    }

    get instance(): any {
        return this._android;
    }
}

export class ServerApiKeyCredential extends StitchCredential {
    private _android: com.mongodb.stitch.core.auth.providers.serverapikey.ServerApiKeyCredential;

    constructor(key: string) {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.serverapikey.ServerApiKeyCredential(key);
    }

    get instance(): any {
        return this._android;
    }

}

export class UserApiKeyCredential extends StitchCredential {
    private _android: com.mongodb.stitch.core.auth.providers.userapikey.UserApiKeyCredential;

    constructor(key: string) {
        super();
        this._android = new com.mongodb.stitch.core.auth.providers.userapikey.UserApiKeyCredential(key);
    }

    get instance(): any {
        return this._android;
    }

}

export class StitchUserIdentity {
    private _android: com.mongodb.stitch.core.auth.StitchUserIdentity;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUserIdentity();
        user._android = instance;
        return user;
    }

    get id(): string {
        return this._android.getId();
    }

    get providerType(): string {
        return this._android.getProviderType();
    }
}

export class StitchUserProfile {

    private _android: com.mongodb.stitch.core.auth.StitchUserProfile;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUserProfile();
        user._android = instance;
        return user;
    }

    get name(): string {
        return this._android.getName();
    }

    get email(): string {
        return this._android.getEmail();
    }

    get birthday(): string {
        return this._android.getBirthday();
    }

    get firstName(): string {
        return this._android.getFirstName();
    }

    get gender(): string {
        return this._android.getGender();
    }


    get lastName(): string {
        return this._android.getLastName();
    }


    get maxAge(): string {
        return this._android.getMaxAge();
    }

    get minAge(): string {
        return this._android.getMinAge();
    }

    get pictureUrl(): string {
        return this._android.getPictureUrl();
    }


}

export enum UserType {
    Normal = 'normal',
    Server = 'server',
    Unknown = 'unknown'
}

export class StitchUser {
    private _android: any;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUser();
        user._android = instance;
        return user;
    }

    get isLoggedIn(): boolean {
        return this._android.isLoggedIn();
    }

    get id(): string {
        this._android.getIdentities();
        return this._android.getId();
    }


    get identities(): StitchUserIdentity[] {
        const identities = [];
        const nativeIdentities = this._android.getIdentities();
        const length = nativeIdentities.size();
        for (let i = 0; i < length; i++) {
            identities.push(StitchUserIdentity.fromNative(nativeIdentities.get(i)));
        }
        return identities;
    }

    get profile(): StitchUserProfile {
        return StitchUserProfile.fromNative(this._android.getProfile());
    }

    get userType(): string | null {
        const type = this._android.getUserType();
        switch (type) {
            case com.mongodb.stitch.core.auth.UserType.NORMAL:
                return UserType.Normal;
            case com.mongodb.stitch.core.auth.UserType.SERVER:
                return UserType.Server;
            default:
                return null;
        }
    }

    get lastAuthActivity(): Date {
        const date = this._android.getLastAuthActivity();
        return new Date(date.toGMTString());
    }

    get loggedInProviderType(): string {
        return this._android.getLoggedInProviderType();
    }

    get loggedInProviderName(): string {
        return this._android.getLoggedInProviderName();
    }

    get deviceId(): string {
        return this._android.getDeviceId();
    }

    linkWithCredential(credential: StitchCredential) {
        return new Promise<StitchUser>((resolve, reject) => {
            this._android.linkWithCredential(credential.instance).addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete(task: com.google.android.gms.tasks.Task<com.mongodb.stitch.android.core.auth.StitchUser>): void {
                    if (task.isSuccessful()) {
                        resolve(StitchUser.fromNative(task.getResult()));
                    } else {
                        reject(task.getException().getMessage());
                    }
                }
            }));
        });
    }

}

export interface StitchAuthListener {

    onAuthEvent?(auth: StitchAuth);

    onUserAdded?(auth: StitchAuth, addedUser: StitchUser);

    onUserLinked?(auth: StitchAuth, linkedUser: StitchUser);

    onUserLoggedIn?(auth: StitchAuth, loggedInUser: StitchUser);

    onUserLoggedOut?(auth: StitchAuth, loggedOutUser: StitchUser);

    onActiveUserChanged?(
        auth: StitchAuth,
        currentActiveUser: StitchUser | undefined,
        previousActiveUser: StitchUser | undefined
    );


    onUserRemoved?(auth: StitchAuth, removedUser: StitchUser);

    onListenerRegistered?(auth: StitchAuth);
}


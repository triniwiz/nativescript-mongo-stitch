export class Stitch {

    static initializeDefaultAppClient(id: string) {
        return new Promise<StitchAppClient>((resolve, reject) => {
            try {
                resolve(StitchAppClient.fromNative(TNSStitch.initializeDefaultAppClientError(id)));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    static initializeAppClient(id: string) {
        return new Promise<StitchAppClient>((resolve, reject) => {
            try {
                resolve(StitchAppClient.fromNative(TNSStitch.initializeAppClientWithIdError(id)));
            } catch (e) {
                reject(e.message);
            }
        });
    }

    static appClient(id: string): StitchAppClient | null {
        const client = TNSStitch.appClientWithId(id);
        if (client) {
            return StitchAppClient.fromNative(client);
        }
        return null;
    }

    static defaultAppClient(): StitchAppClient | null {
        const client = TNSStitch.defaultAppClient;
        if (client) {
            return StitchAppClient.fromNative(client);
        }
        return null;
    }

    static hasAppClient(id: string): boolean {
        return TNSStitch.hasAppClientWithId(id);
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
    private _ios: TNSStitchAppClient;

    private constructor() {
    }

    public static fromNative(instance) {
        const auth = new StitchAppClient();
        auth._ios = instance;
        return auth;
    }

    get auth(): StitchAuth {
        return StitchAuth.fromNative(this._ios.auth);
    }

    callFunction(name: string, args: any[]) {
        return new Promise((reject, resolve) => {
            this._ios.callFunctionArgsListener(name, args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    getServiceClient<T>(
        factory: NamedServiceClientFactory<T> | ServiceClientFactory<T>,
        serviceName?: string
    ): T {
        try {
            let instance;
            if (serviceName) {
                instance = this._ios.getServiceClientWithFactoryServiceNameError((factory as any).nativeFactory, serviceName);
            } else {
                instance = this._ios.getServiceClientWithFactoryError((factory as any).nativeClientFactory);
            }
            factory.instance = instance;

            return factory as any;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    }


    close() {
        this._ios.close();
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
    private _ios: TNSStitchAuth;

    private static listenerMap: Map<any, any> = new Map();

    private constructor() {
    }

    public static fromNative(instance) {
        const auth = new StitchAuth();
        auth._ios = instance;
        return auth;
    }

    get isLoggedIn(): boolean {
        return this._ios.isLoggedIn;
    }

    get user(): StitchUser | null {
        const nativeUser = this._ios.user;
        if (nativeUser) {
            return StitchUser.fromNative(nativeUser);
        }
        return null;
    }

    switchToUserWithId(userId: string) {
        return new Promise<StitchUser>((resolve, reject) => {
            this._ios.switchToUserWithIdWithUserIdListener(userId, (error, user) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(StitchUser.fromNative(user));
                }
            });
        });
    }

    listUsers(): StitchUser[] {
        const nativeUsers = this._ios.listUsers;
        const users = [];
        for (let user of nativeUsers) {
            users.push(StitchUser.fromNative(user));
        }
        return users;
    }

    logout() {
        return new Promise((resolve, reject) => {
            this._ios.logoutWithListener((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    logoutUserWithId(userId: string) {
        return new Promise((resolve, reject) => {
            this._ios.logoutUserWithIdWithUserIdListener(userId, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    removeUser() {
        return new Promise((resolve, reject) => {
            this._ios.removeUserWithListener((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    removeUserWithId(userId: string) {
        return new Promise((resolve, reject) => {
            this._ios.removeUserWithIdWithUserIdListener(userId, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }


    loginWithCredential(credential: StitchCredential) {
        return new Promise<StitchUser>((resolve, reject) => {
            this._ios.loginWithCredentialWithCredentialListener(credential.instance, (error, user) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(StitchUser.fromNative(user));
                }
            });
        });
    }

    addAuthListener(listener: StitchAuthListener) {

    }

    removeAuthListener(listener: StitchAuthListener) {

    }

}

export class StitchCredential {
    instance;
}

export class AnonymousCredential extends StitchCredential {
    private _ios: TNSAnonymousCredential;

    constructor() {
        super();
        this._ios = TNSAnonymousCredential.new();
    }

    get instance(): any {
        return this._ios;
    }
}

export class UserPasswordCredential extends StitchCredential {
    private _ios: TNSUserPasswordCredential;

    constructor(username: string, password: string) {
        super();
        this._ios = TNSUserPasswordCredential.alloc().initWithUsernamePassword(username, password);
    }

    get instance() {
        return this._ios;
    }
}

export class GoogleCredential extends StitchCredential {
    private _ios: TNSGoogleCredential;

    constructor(authCode: string) {
        super();
        this._ios = TNSGoogleCredential.alloc().initWithAuthCode(authCode);
    }

    get instance(): any {
        return this._ios;
    }
}

export class FacebookCredential extends StitchCredential {

    private _ios: TNSFacebookCredential;

    constructor(accessToken: string) {
        super();
        this._ios = TNSFacebookCredential.alloc().initWithAccessToken(accessToken);
    }

    get instance(): any {
        return this._ios;
    }
}

export class ServerApiKeyCredential extends StitchCredential {
    private _ios: TNSServerApiKeyCredential;

    constructor(key: string) {
        super();
        this._ios = TNSServerApiKeyCredential.alloc().initWithKey(key);
    }

    get instance(): any {
        return this._ios;
    }

}

export class UserApiKeyCredential extends StitchCredential {
    private _ios: TNSUserApiKeyCredential;

    constructor(key: string) {
        super();
        this._ios = TNSUserApiKeyCredential.alloc().initWithKey(key);
    }

    get instance(): any {
        return this._ios;
    }

}

export class StitchUserIdentity {
    private _ios;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUserIdentity();
        user._ios = instance;
        return user;
    }

    get id(): string {
        return this._ios.getId();
    }

    get providerType(): string {
        return this._ios.getProviderType();
    }
}

export class StitchUserProfile {

    private _ios;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUserProfile();
        user._ios = instance;
        return user;
    }

    get name(): string {
        return this._ios.getName();
    }

    get email(): string {
        return this._ios.getEmail();
    }

    get birthday(): string {
        return this._ios.getBirthday();
    }

    get firstName(): string {
        return this._ios.getFirstName();
    }

    get gender(): string {
        return this._ios.getGender();
    }


    get lastName(): string {
        return this._ios.getLastName();
    }


    get maxAge(): string {
        return this._ios.getMaxAge();
    }

    get minAge(): string {
        return this._ios.getMinAge();
    }

    get pictureUrl(): string {
        return this._ios.getPictureUrl();
    }


}

export enum UserType {
    Normal = 'normal',
    Server = 'server',
    Unknown = 'unknown'
}

export class StitchUser {
    private _ios: TNSStitchUser;

    private constructor() {
    }

    public static fromNative(instance) {
        const user = new StitchUser();
        user._ios = instance;
        return user;
    }

    get isLoggedIn(): boolean {
        return this._ios.isLoggedIn;
    }

    get id(): string {
        return this._ios.id;
    }


    get identities(): StitchUserIdentity[] {
        const nativeIdentities = this._ios.identities;
        const array = [];
        for (let identity of  nativeIdentities) {
            array.push(StitchUserIdentity.fromNative(identity));
        }
        return [];
    }

    get profile(): StitchUserProfile {
        return StitchUserProfile.fromNative(this._ios.profile);
    }

    get userType(): string | null {
        return this._ios.userType;
    }

    get lastAuthActivity(): Date {
        return this._ios.lastAuthActivity;
    }

    get loggedInProviderType(): string {
        return this._ios.loggedInProviderType;
    }

    get loggedInProviderName(): string {
        return this._ios.loggedInProviderName;
    }

    get deviceId(): string {
        return this._ios.deviceId;
    }

    linkWithCredential(credential: StitchCredential) {
        return new Promise<StitchUser>((resolve, reject) => {
            this._ios.linkWithCredentialWithCredentialListener(credential.instance, (error, user) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(StitchUser.fromNative(user));
                }
            });
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


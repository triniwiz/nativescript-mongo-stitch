export declare class Stitch {
    private _android;

    static initializeDefaultAppClient(id: string): Promise<StitchAppClient>;

    static initializeAppClient(id: string): Promise<StitchAppClient>;

    static getAppClient(id: string): StitchAppClient | null;

    static getDefaultAppClient(): StitchAppClient | null;

    static hasAppClient(id: string): boolean;
}

export interface NamedServiceClientFactory<T> {
}

export default interface ServiceClientFactory<T> {
}

export declare class StitchAppClient {
    private _android;

    private constructor();

    static fromNative(instance: any): StitchAppClient;

    readonly auth: StitchAuth;

    callFunction(name: string, args: any[]): Promise<{}>;

    getServiceClient<T>(factory: NamedServiceClientFactory<T> | ServiceClientFactory<T>, serviceName?: string): T;

    close(): void;
}

export interface RemoteDeleteResult {
    deletedCount: number;
}

export interface RemoteFindOneAndModifyOptions {
    projection?: object;
    sort?: object;
    upsert?: boolean;
    returnNewDocument?: boolean;
}

export interface RemoteFindOptions {
    limit?: number;
    projection?: object;
    sort?: object;
}

export interface RemoteInsertOneResult {
    insertedId: any;
}

export declare class RemoteInsertManyResult {
    readonly insertedIds: {
        [key: number]: string;
    };

    constructor(arr: any[]);
}

export interface RemoteUpdateResult {
    matchedCount: number;
    modifiedCount: number;
    upsertedId: any;
}

export interface UpdateDescription {
    readonly updatedFields: object;
    readonly removedFields: string[];
}

export interface RemoteUpdateOptions {
    upsert?: boolean;
}

export interface RemoteCountOptions {
    limit?: number;
}

export interface RemoteFindOptions {
    limit?: number;
    projection?: object;
    sort?: object;
}

export interface RemoteFindOptions {
    limit?: number;
    projection?: object;
    sort?: object;
}

export declare class StitchAuth {
    private _android;
    private static listenerMap;

    private constructor();

    static fromNative(instance: any): StitchAuth;

    readonly isLoggedIn: boolean;
    readonly user: StitchUser | null;

    switchToUserWithId(userId: string): Promise<StitchUser>;

    listUsers(): StitchUser[];

    logout(): Promise<{}>;

    logoutUserWithId(userId: string): Promise<{}>;

    removeUser(): Promise<{}>;

    removeUserWithId(userId: string): Promise<{}>;

    loginWithCredential(credential: StitchCredential): Promise<StitchUser>;

    addAuthListener(listener: StitchAuthListener): void;

    removeAuthListener(listener: StitchAuthListener): void;
}

export declare class StitchCredential {
    instance: any;
}

export declare class AnonymousCredential extends StitchCredential {
    private _android;

    constructor();

    readonly instance: any;
}

export declare class UserPasswordCredential extends StitchCredential {
    private _android;

    constructor(username: string, password: string);

    readonly instance: any;
}

export declare class GoogleCredential extends StitchCredential {
    private _android;

    constructor(authCode: string);

    readonly instance: any;
}

export declare class FacebookCredential extends StitchCredential {
    private _android;

    constructor(accessToken: string);

    readonly instance: any;
}

export declare class ServerApiKeyCredential extends StitchCredential {
    private _android;

    constructor(key: string);

    readonly instance: any;
}

export declare class UserApiKeyCredential extends StitchCredential {
    private _android;

    constructor(key: string);

    readonly instance: any;
}

export declare class StitchUserIdentity {
    private _android;

    private constructor();

    static fromNative(instance: any): StitchUserIdentity;

    readonly id: string;
    readonly providerType: string;
}

export declare class StitchUserProfile {
    private _android;

    private constructor();

    static fromNative(instance: any): StitchUserProfile;

    readonly name: string;
    readonly email: string;
    readonly birthday: string;
    readonly firstName: string;
    readonly gender: string;
    readonly lastName: string;
    readonly maxAge: string;
    readonly minAge: string;
    readonly pictureUrl: string;
}

export declare enum UserType {
    Normal = 'normal',
    Server = 'server',
    Unknown = 'unknown'
}

export declare class StitchUser {
    private _android;

    private constructor();

    static fromNative(instance: any): StitchUser;

    readonly isLoggedIn: boolean;
    readonly id: string;
    readonly identities: StitchUserIdentity[];
    readonly profile: StitchUserProfile;
    readonly userType: string | null;
    readonly lastAuthActivity: Date;
    readonly loggedInProviderType: string;
    readonly loggedInProviderName: string;
    readonly deviceId: string;

    linkWithCredential(credential: StitchCredential): Promise<StitchUser>;
}

export interface StitchAuthListener {
    onAuthEvent?(auth: StitchAuth): any;

    onUserAdded?(auth: StitchAuth, addedUser: StitchUser): any;

    onUserLinked?(auth: StitchAuth, linkedUser: StitchUser): any;

    onUserLoggedIn?(auth: StitchAuth, loggedInUser: StitchUser): any;

    onUserLoggedOut?(auth: StitchAuth, loggedOutUser: StitchUser): any;

    onActiveUserChanged?(auth: StitchAuth, currentActiveUser: StitchUser | undefined, previousActiveUser: StitchUser | undefined): any;

    onUserRemoved?(auth: StitchAuth, removedUser: StitchUser): any;

    onListenerRegistered?(auth: StitchAuth): any;
}

import { StitchBase } from './core.base';
export declare class Stitch extends StitchBase {
    private _android;
    private constructor();
    protected static initializeDefaultAppClient(id: string): Promise<StitchAppClient>;
    protected static initializeAppClient(id: string): Promise<StitchAppClient>;
    protected static getAppClient(id: string): StitchAppClient | null;
    protected static getDefaultAppClient(): StitchAppClient | null;
    protected static hasAppClient(id: string): boolean;
}
export declare class StitchAppClient {
    private _android;
    private constructor();
    static fromNative(instance: any): StitchAppClient;
    readonly auth: StitchAuth;
    callFunction(name: string, args: any[]): Promise<{}>;
    serviceClient(): void;
    close(): void;
}
export interface RemoteCountOptions {
    limit?: number;
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
    switchToUserWithId(userId: string): StitchUser;
    listUsers(): StitchUser[];
    logout(): Promise<any>;
    logoutUserWithId(userId: string): Promise<void>;
    removeUser(): Promise<void>;
    removeUserWithId(userId: string): Promise<void>;
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
    Normal = "normal",
    Server = "server",
    Unknown = "unknown"
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
export declare class Bson {
}

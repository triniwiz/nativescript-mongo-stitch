
declare class TNSAnonymousCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSAnonymousCredential; // inherited from NSObject

	static new(): TNSAnonymousCredential; // inherited from NSObject

	instance: any;
}

declare class TNSFacebookCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSFacebookCredential; // inherited from NSObject

	static new(): TNSFacebookCredential; // inherited from NSObject

	instance: any;

	constructor(o: { accessToken: string; });

	initWithAccessToken(accessToken: string): this;
}

declare class TNSGoogleCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSGoogleCredential; // inherited from NSObject

	static new(): TNSGoogleCredential; // inherited from NSObject

	instance: any;

	constructor(o: { authCode: string; });

	initWithAuthCode(authCode: string): this;
}

declare class TNSLocalCountOptions extends NSObject {

	static alloc(): TNSLocalCountOptions; // inherited from NSObject

	static new(): TNSLocalCountOptions; // inherited from NSObject

	constructor(o: { limit: number; });

	initWithLimit(limit: number): this;
}

declare class TNSLocalDeleteResult extends NSObject {

	static alloc(): TNSLocalDeleteResult; // inherited from NSObject

	static new(): TNSLocalDeleteResult; // inherited from NSObject

	readonly deletedCount: number;

	constructor(o: { deletedCount: number; });

	initWithDeletedCount(deletedCount: number): this;
}

declare class TNSLocalFindOptions extends NSObject {

	static alloc(): TNSLocalFindOptions; // inherited from NSObject

	static new(): TNSLocalFindOptions; // inherited from NSObject

	readonly limit: any;

	readonly projection: NSDictionary<any, any>;

	readonly sort: NSDictionary<any, any>;

	constructor(o: { limit: any; projection: NSDictionary<any, any>; sort: NSDictionary<any, any>; });

	initWithLimitProjectionSort(limit: any, projection: NSDictionary<any, any>, sort: NSDictionary<any, any>): this;
}

declare class TNSLocalInsertManyResult extends NSObject {

	static alloc(): TNSLocalInsertManyResult; // inherited from NSObject

	static new(): TNSLocalInsertManyResult; // inherited from NSObject

	readonly insertedIds: NSArray<any>;

	constructor(o: { insertedIds: NSArray<any> | any[]; });

	initWithInsertedIds(insertedIds: NSArray<any> | any[]): this;
}

declare class TNSLocalInsertOneResult extends NSObject {

	static alloc(): TNSLocalInsertOneResult; // inherited from NSObject

	static new(): TNSLocalInsertOneResult; // inherited from NSObject

	readonly insertedId: any;

	constructor(o: { insertedId: any; });

	initWithInsertedId(insertedId: any): this;
}

declare class TNSLocalMongoClient extends TNSServiceClientFactory {

	static alloc(): TNSLocalMongoClient; // inherited from NSObject

	static getfactory(): any;

	static new(): TNSLocalMongoClient; // inherited from NSObject

	dbWithName(name: string): TNSLocalMongoDatabase;
}

declare class TNSLocalMongoCollection extends NSObject {

	static alloc(): TNSLocalMongoCollection; // inherited from NSObject

	static new(): TNSLocalMongoCollection; // inherited from NSObject

	readonly namespace_: string;

	aggregateWithPipeline(pipeline: NSArray<string> | string[]): TNSLocalMongoReadOperation;

	countWithFilterOptions(filter: string, options: TNSLocalCountOptions): any;

	deleteManyWithFilter(filter: string): TNSRemoteDeleteResult;

	deleteOneWithFilter(filter: string): TNSRemoteDeleteResult;

	findOneWithFilterOptions(filter: string, options: TNSLocalFindOptions): string;

	findWithFilterOptions(filter: string, options: TNSLocalFindOptions): TNSLocalMongoReadOperation;

	insertManyWithDocuments(documents: NSArray<string> | string[]): TNSRemoteInsertManyResult;

	insertOneWithDocument(document: string): TNSRemoteInsertOneResult;

	updateManyWithFilterUpdateUpdateOptions(filter: string, update: string, updateOptions: TNSRemoteUpdateOptions): TNSRemoteUpdateResult;

	updateOneWithFilterUpdateUpdateOptions(filter: string, update: string, updateOptions: TNSRemoteUpdateOptions): TNSRemoteUpdateResult;
}

declare class TNSLocalMongoCursor extends NSObject {

	static alloc(): TNSLocalMongoCursor; // inherited from NSObject

	static new(): TNSLocalMongoCursor; // inherited from NSObject

	hasNext(): boolean;

	next(): string;
}

declare class TNSLocalMongoDatabase extends NSObject {

	static alloc(): TNSLocalMongoDatabase; // inherited from NSObject

	static new(): TNSLocalMongoDatabase; // inherited from NSObject

	readonly name: string;

	collectionWithName(name: string): TNSLocalMongoCollection;
}

declare class TNSLocalMongoReadOperation extends NSObject {

	static alloc(): TNSLocalMongoReadOperation; // inherited from NSObject

	static new(): TNSLocalMongoReadOperation; // inherited from NSObject

	first(): string;

	iterator(): TNSLocalMongoCursor;

	toArray(): NSArray<string>;
}

declare class TNSLocalUpdateOptions extends NSObject {

	static alloc(): TNSLocalUpdateOptions; // inherited from NSObject

	static new(): TNSLocalUpdateOptions; // inherited from NSObject

	upsert: boolean;

	constructor(o: { upsert: boolean; });

	initWithUpsert(upsert: boolean): this;
}

declare class TNSLocalUpdateResult extends NSObject {

	static alloc(): TNSLocalUpdateResult; // inherited from NSObject

	static new(): TNSLocalUpdateResult; // inherited from NSObject

	matchedCount: number;

	modifiedCount: number;

	upsertedId: any;
}

declare class TNSNamedServiceClientFactory extends NSObject {

	static alloc(): TNSNamedServiceClientFactory; // inherited from NSObject

	static new(): TNSNamedServiceClientFactory; // inherited from NSObject
}

declare class TNSRemoteCountOptions extends NSObject {

	static alloc(): TNSRemoteCountOptions; // inherited from NSObject

	static new(): TNSRemoteCountOptions; // inherited from NSObject

	constructor(o: { limit: number; });

	initWithLimit(limit: number): this;
}

declare class TNSRemoteDeleteResult extends NSObject {

	static alloc(): TNSRemoteDeleteResult; // inherited from NSObject

	static new(): TNSRemoteDeleteResult; // inherited from NSObject

	readonly deletedCount: number;

	constructor(o: { deletedCount: number; });

	initWithDeletedCount(deletedCount: number): this;
}

declare class TNSRemoteFindOptions extends NSObject {

	static alloc(): TNSRemoteFindOptions; // inherited from NSObject

	static new(): TNSRemoteFindOptions; // inherited from NSObject

	readonly limit: any;

	readonly projection: NSDictionary<any, any>;

	readonly sort: NSDictionary<any, any>;

	constructor(o: { limit: any; projection: NSDictionary<any, any>; sort: NSDictionary<any, any>; });

	initWithLimitProjectionSort(limit: any, projection: NSDictionary<any, any>, sort: NSDictionary<any, any>): this;
}

declare class TNSRemoteInsertManyResult extends NSObject {

	static alloc(): TNSRemoteInsertManyResult; // inherited from NSObject

	static new(): TNSRemoteInsertManyResult; // inherited from NSObject

	readonly insertedIds: NSArray<any>;

	constructor(o: { insertedIds: NSArray<any> | any[]; });

	initWithInsertedIds(insertedIds: NSArray<any> | any[]): this;
}

declare class TNSRemoteInsertOneResult extends NSObject {

	static alloc(): TNSRemoteInsertOneResult; // inherited from NSObject

	static new(): TNSRemoteInsertOneResult; // inherited from NSObject

	readonly insertedId: any;

	constructor(o: { insertedId: any; });

	initWithInsertedId(insertedId: any): this;
}

declare class TNSRemoteMongoClient extends TNSNamedServiceClientFactory {

	static alloc(): TNSRemoteMongoClient; // inherited from NSObject

	static getfactory(): any;

	static new(): TNSRemoteMongoClient; // inherited from NSObject

	dbWithName(name: string): TNSRemoteMongoDatabase;
}

declare class TNSRemoteMongoCollection extends NSObject {

	static alloc(): TNSRemoteMongoCollection; // inherited from NSObject

	static new(): TNSRemoteMongoCollection; // inherited from NSObject

	readonly namespace_: string;

	aggregateWithPipeline(pipeline: NSArray<string> | string[]): TNSRemoteMongoReadOperation;

	countWithFilterOptionsListener(filter: string, options: TNSRemoteCountOptions, listener: (p1: string, p2: any) => void): void;

	deleteManyWithFilterListener(filter: string, listener: (p1: string, p2: TNSRemoteDeleteResult) => void): void;

	deleteOneWithFilterListener(filter: string, listener: (p1: string, p2: TNSRemoteDeleteResult) => void): void;

	findOneWithFilterOptionsListener(filter: string, options: TNSRemoteFindOptions, listener: (p1: string, p2: string) => void): void;

	findWithFilterOptions(filter: string, options: TNSRemoteFindOptions): TNSRemoteMongoReadOperation;

	insertManyWithDocumentsListener(documents: NSArray<string> | string[], listener: (p1: string, p2: TNSRemoteInsertManyResult) => void): void;

	insertOneWithDocumentListener(document: string, listener: (p1: string, p2: TNSRemoteInsertOneResult) => void): void;

	updateManyWithFilterUpdateUpdateOptionsListener(filter: string, update: string, updateOptions: TNSRemoteUpdateOptions, listener: (p1: string, p2: TNSRemoteUpdateResult) => void): void;

	updateOneWithFilterUpdateUpdateOptionsListener(filter: string, update: string, updateOptions: TNSRemoteUpdateOptions, listener: (p1: string, p2: TNSRemoteUpdateResult) => void): void;
}

declare class TNSRemoteMongoCursor extends NSObject {

	static alloc(): TNSRemoteMongoCursor; // inherited from NSObject

	static new(): TNSRemoteMongoCursor; // inherited from NSObject

	nextWithListener(listener: (p1: string, p2: string) => void): void;
}

declare class TNSRemoteMongoDatabase extends NSObject {

	static alloc(): TNSRemoteMongoDatabase; // inherited from NSObject

	static new(): TNSRemoteMongoDatabase; // inherited from NSObject

	readonly name: string;

	collectionWithName(name: string): TNSRemoteMongoCollection;
}

declare class TNSRemoteMongoReadOperation extends NSObject {

	static alloc(): TNSRemoteMongoReadOperation; // inherited from NSObject

	static new(): TNSRemoteMongoReadOperation; // inherited from NSObject

	firstWithListener(listener: (p1: string, p2: string) => void): void;

	iteratorWithListener(listener: (p1: string, p2: TNSRemoteMongoCursor) => void): void;

	toArrayWithListener(listener: (p1: string, p2: NSArray<string>) => void): void;
}

declare class TNSRemoteUpdateOptions extends NSObject {

	static alloc(): TNSRemoteUpdateOptions; // inherited from NSObject

	static new(): TNSRemoteUpdateOptions; // inherited from NSObject

	upsert: boolean;

	constructor(o: { upsert: boolean; });

	initWithUpsert(upsert: boolean): this;
}

declare class TNSRemoteUpdateResult extends NSObject {

	static alloc(): TNSRemoteUpdateResult; // inherited from NSObject

	static new(): TNSRemoteUpdateResult; // inherited from NSObject

	matchedCount: number;

	modifiedCount: number;

	upsertedId: any;
}

declare class TNSServerApiKeyCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSServerApiKeyCredential; // inherited from NSObject

	static new(): TNSServerApiKeyCredential; // inherited from NSObject

	instance: any;

	constructor(o: { key: string; });

	initWithKey(key: string): this;
}

declare class TNSServiceClientFactory extends NSObject {

	static alloc(): TNSServiceClientFactory; // inherited from NSObject

	static new(): TNSServiceClientFactory; // inherited from NSObject
}

declare class TNSStitch extends NSObject {

	static alloc(): TNSStitch; // inherited from NSObject

	static appClientWithId(id: string): TNSStitchAppClient;

	static hasAppClientWithId(id: string): boolean;

	static initializeAppClientWithIdError(id: string): TNSStitchAppClient;

	static initializeDefaultAppClientError(id: string): TNSStitchAppClient;

	static new(): TNSStitch; // inherited from NSObject

	static readonly defaultAppClient: TNSStitchAppClient;
}

declare class TNSStitchAppClient extends NSObject {

	static alloc(): TNSStitchAppClient; // inherited from NSObject

	static new(): TNSStitchAppClient; // inherited from NSObject

	readonly auth: TNSStitchAuth;

	callFunctionArgsListener(name: string, args: NSArray<string> | string[], listener: (p1: string, p2: string) => void): void;

	close(): void;

	getServiceClientWithFactoryError(factory: any): any;

	getServiceClientWithFactoryServiceNameError(factory: any, serviceName: string): any;
}

declare class TNSStitchAuth extends NSObject {

	static alloc(): TNSStitchAuth; // inherited from NSObject

	static new(): TNSStitchAuth; // inherited from NSObject

	readonly isLoggedIn: boolean;

	readonly listUsers: NSArray<TNSStitchUser>;

	readonly user: TNSStitchUser;

	addAuthListenerWithListener(listener: () => void): void;

	loginWithCredentialWithCredentialListener(credential: TNSStitchCredential, listener: (p1: string, p2: TNSStitchUser) => void): void;

	logoutUserWithIdWithUserIdListener(userId: string, listener: (p1: string) => void): void;

	logoutWithListener(listener: (p1: string) => void): void;

	removeAuthListenerWithListener(listener: () => void): void;

	removeUserWithIdWithUserIdListener(userId: string, listener: (p1: string) => void): void;

	removeUserWithListener(listener: (p1: string) => void): void;

	switchToUserWithIdWithUserIdListener(userId: string, listener: (p1: string, p2: TNSStitchUser) => void): void;
}

interface TNSStitchCredential {

	instance: any;
}
declare var TNSStitchCredential: {

	prototype: TNSStitchCredential;
};

declare class TNSStitchUser extends NSObject {

	static alloc(): TNSStitchUser; // inherited from NSObject

	static new(): TNSStitchUser; // inherited from NSObject

	readonly deviceId: string;

	readonly id: string;

	readonly identities: NSArray<TNSStitchUserIdentity>;

	readonly isLoggedIn: boolean;

	readonly lastAuthActivity: Date;

	readonly loggedInProviderName: string;

	readonly loggedInProviderType: string;

	readonly profile: TNSStitchUserProfile;

	readonly userType: string;

	linkWithCredentialWithCredentialListener(credential: TNSStitchCredential, listener: (p1: string, p2: TNSStitchUser) => void): void;
}

declare class TNSStitchUserIdentity extends NSObject {

	static alloc(): TNSStitchUserIdentity; // inherited from NSObject

	static new(): TNSStitchUserIdentity; // inherited from NSObject

	readonly id: string;

	readonly providerType: string;
}

declare class TNSStitchUserProfile extends NSObject {

	static alloc(): TNSStitchUserProfile; // inherited from NSObject

	static new(): TNSStitchUserProfile; // inherited from NSObject

	readonly birthday: string;

	readonly email: string;

	readonly firstName: string;

	readonly gender: string;

	readonly lastName: string;

	readonly maxAge: string;

	readonly minAge: string;

	readonly name: string;

	readonly pictureUrl: string;
}

declare var TNSStitchVersionNumber: number;

declare var TNSStitchVersionString: interop.Reference<number>;

declare class TNSUserApiKeyCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSUserApiKeyCredential; // inherited from NSObject

	static new(): TNSUserApiKeyCredential; // inherited from NSObject

	instance: any;

	constructor(o: { key: string; });

	initWithKey(key: string): this;
}

declare class TNSUserPasswordCredential extends NSObject implements TNSStitchCredential {

	static alloc(): TNSUserPasswordCredential; // inherited from NSObject

	static new(): TNSUserPasswordCredential; // inherited from NSObject

	instance: any;

	constructor(o: { username: string; password: string; });

	initWithUsernamePassword(username: string, password: string): this;
}

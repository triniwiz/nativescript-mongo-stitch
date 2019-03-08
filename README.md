# NativeScript Mongo Stitch

`nativescript-mongo-stitch-core`

[![npm](https://img.shields.io/npm/v/nativescript-mongo-stitch-core.svg)](https://www.npmjs.com/package/nativescript-mongo-stitch-core)
[![npm](https://img.shields.io/npm/dt/nativescript-mongo-stitch-core.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-mongo-stitch-core)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-core.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-core)


`nativescript-mongo-stitch-sdk`

[![npm](https://img.shields.io/npm/v/nativescript-mongo-stitch-sdk.svg)](https://www.npmjs.com/package/nativescript-mongo-stitch-sdk)
[![npm](https://img.shields.io/npm/dt/nativescript-mongo-stitch-sdk.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-mongo-stitch-sdk)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-sdk.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-sdk)


`nativescript-mongo-stitch-services-mongodb-remote`

[![npm](https://img.shields.io/npm/v/nativescript-mongo-stitch-services-mongodb-remote.svg)](https://www.npmjs.com/package/nativescript-mongo-stitch-services-mongodb-remote)
[![npm](https://img.shields.io/npm/dt/nativescript-mongo-stitch-services-mongodb-remote.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-mongo-stitch-services-mongodb-remote)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-services-mongodb-remote.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-mongo-stitch-services-mongodb-remote)





## (Optional) Prerequisites / Requirements


**Note Android min-sdk is 21** & **Note IOS min platform is 11** 

## Installation


```javascript
tns plugin add nativescript-mongo-stitch-sdk
```

## Usage 

### Initialize the SDK
```js
import {
    Stitch
} from 'nativescript-mongo-stitch-sdk';
Stitch.initializeDefaultAppClient('<your-client-app-id>').then(client => {
    // use the client
});

```

### Logging In
```js
import {
    AnonymousCredential,
    Stitch
} from 'nativescript-mongo-stitch-sdk';

const client = Stitch.defaultAppClient;

console.log("logging in anonymously");
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
  console.log(`logged in anonymously as user ${user.id}`)
});
```

### Initialize & update remote

```typescript
import {
    Stitch,
    RemoteInsertOneResult,
    RemoteMongoClient,
    AnonymousCredential,
    Bson
} from 'nativescript-mongo-stitch-sdk';
let remoteClient;


Stitch.initializeAppClient('<your-client-app-id>').then(client => {
    console.log(client.auth.isLoggedIn);
    this.client = client;
    return this.client.auth.loginWithCredential(new AnonymousCredential());
}).then(user => {
    this.user = user;
    console.log('loggedIn as', user.id);
    remoteClient = this.client.getServiceClient(RemoteMongoClient.factory, 'mongo-atlas-test');

    remoteClient
        .db('tns-test')
        .collection('mobile-test')
        .insertOne({
            'first': 'Osei', 'last': 'Fortune', 'owner_id': this.user.id,
            'rand_id': Bson.ObjectId(this.user.id),
            'ts': Date.now(),
        })
        .then((result: RemoteInsertOneResult) => {
            console.log(result.insertedId);
        }).catch(error => {
        console.error('insert error', error);
    });

}).catch(error => {
    console.log(error);
});
```

### Initialize & update local
import {
    Stitch,
    LocalInsertOneResult
} from 'nativescript-mongo-stitch-sdk';

```typescript
import {
    Stitch,
    LocalInsertOneResult,
    LocalMongoClient,
    AnonymousCredential,
    Bson
} from 'nativescript-mongo-stitch-sdk';
let remoteClient;


Stitch.initializeAppClient('<your-client-app-id>').then(client => {
    console.log(client.auth.isLoggedIn);
    this.client = client;
    return this.client.auth.loginWithCredential(new AnonymousCredential());
}).then(user => {
    this.user = user;
    console.log('loggedIn as', user.id);
    remoteClient = this.client.getServiceClient(LocalMongoClient.factory);

    remoteClient
        .db('tns-test')
        .collection('mobile-test')
        .insertOne({
            'first': 'Osei', 'last': 'Fortune', 'owner_id': this.user.id,
            'rand_id': Bson.ObjectId(this.user.id),
            'ts': Date.now(),
        })
        .then((result: LocalInsertOneResult) => {
            console.log(result.insertedId);
        }).catch(error => {
        console.error('insert error', error);
    });

}).catch(error => {
    console.log(error);
});

```



## API

## License

Apache License Version 2.0, January 2004

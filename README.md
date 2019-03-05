# NativeScript Mongo Stitch (WIP)


## (Optional) Prerequisites / Requirements


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

## API

## License

Apache License Version 2.0, January 2004

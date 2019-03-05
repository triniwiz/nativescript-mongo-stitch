import { Observable } from 'tns-core-modules/data/observable';
import {
    AnonymousCredential,
    LocalMongoClient,
    RemoteMongoClient,
    Stitch,
    StitchAppClient,
    StitchUser,
    UserPasswordCredential
} from 'nativescript-mongo-stitch-sdk';
import { APP_ID } from '../config';

export class HelloWorldModel extends Observable {
    client: StitchAppClient;
    user: StitchUser;
    remoteClient: RemoteMongoClient;
    localClient: LocalMongoClient;

    constructor() {
        super();
    }

    initClient() {
        Stitch.initializeAppClient(APP_ID).then(client => {
            console.log(client.auth.isLoggedIn);
            this.client = client;
            return this.client.auth.loginWithCredential(new AnonymousCredential());
        }).then(user => {
            this.user = user;
            console.log('loggedIn', user.id);
        }).catch(error => {
            console.log(error);
        });
    }

    switchToAccount() {
        this.client.auth.loginWithCredential(new UserPasswordCredential('fortune.osei@yahoo.com', 'password')).then(user => {
            this.user = user;
            console.log('loggedIn', user.id);
            // this.localClient = this.client.getServiceClient(LocalMongoClient.factory);
            this.remoteClient = RemoteMongoClient.fromNative(this.client.getServiceClient(RemoteMongoClient.factory, 'mongo-atlas-test'));
        }).catch(error => {
            console.log(error);
        });
    }

    testLocalInsert() {

        /*
        this.localClient
            .db('tns-test')
            .collection('mobile-test')
            .insertOne({'first': 'Osei', 'last': 'Fortune'})
            .then(result => {
                console.log(result);
            }).catch(error => {
            console.log('insert error', error);
        });
        */
    }

    testInsert() {
        this.remoteClient
            .db('tns-test')
            .collection('mobile-test')
            .insertOne({'first': 'Osei', 'last': 'Fortune', 'owner_id': this.user.id})
            .then(result => {
                console.log(result);
            }).catch(error => {
            console.log('insert error', error);
        });
    }


}

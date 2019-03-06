import { Observable } from 'tns-core-modules/data/observable';
import {
    AnonymousCredential,
    ConflictResolvers,
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
            this.remoteClient = this.client.getServiceClient(RemoteMongoClient.factory, 'mongo-atlas-test');
            this.remoteClient
                .db('tns-test')
                .collection('mobile-test')
                .sync().configure(ConflictResolvers.remoteWins, (error) => {
                console.log('syncError', 'id', error.id, 'message', error.message);
            });
        }).catch(error => {
            console.log(error);
        });
    }

    testLocalInsert() {
        if (!this.localClient) {
            this.localClient = this.client.getServiceClient(LocalMongoClient.factory);
        }
        this.localClient
            .db('tns-test')
            .collection('mobile-test')
            .insertOne({'first': 'Osei', 'last': 'Fortune', 'owner_id': this.user.id})
            .then(result => {
                console.log(result);
            }).catch(error => {
            console.error('insert error', error);
        });
    }

    testFindOneUpdate() {
        this.remoteClient
            .db('tns-test')
            .collection('mobile-test')
            .findOneAndUpdate({'owner_id': this.user.id}, {
                'middle': 'Atiba',
                'ts': Date.now(),
                'owner_id': this.user.id
            }, {returnNewDocument: true, upsert: true})
            .then(result => {
                console.log(result);
            }).catch(error => {
            console.error('insert error', error);
        });
    }

    testInsert() {
        if (!this.remoteClient) return;
        this.remoteClient
            .db('tns-test')
            .collection('mobile-test')
            .insertOne({'first': 'Osei', 'last': 'Fortune', 'owner_id': this.user.id})
            .then(result => {
                console.log(result);
            }).catch(error => {
            console.error('insert error', error);
        });
    }

    testLocalFind() {
        if (!this.localClient) {
            this.localClient = this.client.getServiceClient(LocalMongoClient.factory);
        }
        this.localClient
            .db('tns-test')
            .collection('mobile-test')
            .findOne({'owner_id': this.user.id}).then((doc) => {
            if (doc) {
                console.log('Found', doc['_id'].toHexString());
            } else {
                console.log('Not found');
            }
        }).catch(e => {
            console.error('find Error ', e);
        });
    }

    testLocalFindAll() {
        if (!this.localClient) {
            this.localClient = this.client.getServiceClient(LocalMongoClient.factory);
        }
        const query = this.localClient
            .db('tns-test')
            .collection('mobile-test')
            .find();
        const results = [];
        const iterator = query.iterator();
        while (iterator.hasNext()) {
            const item = iterator.next();
            console.log(item['_id'].toHexString());
            results.push(item);
        }
        console.log(results);
    }

    testLocalDeleteAll() {
        if (!this.localClient) {
            this.localClient = this.client.getServiceClient(LocalMongoClient.factory);
        }
        const query = this.localClient
            .db('tns-test')
            .collection('mobile-test')
            .deleteMany({});
        query.then(result => {
            console.log(result);
        });
    }

}

import { Observable } from 'tns-core-modules/data/observable';
import { MongoStitch } from 'nativescript-mongo-stitch';

export class HelloWorldModel extends Observable {
  public message: string;
  private mongoStitch: MongoStitch;

  constructor() {
    super();

    this.mongoStitch = new MongoStitch();
    this.message = this.mongoStitch.message;
  }
}

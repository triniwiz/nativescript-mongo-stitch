import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

let vm: HelloWorldModel;

export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    vm = new HelloWorldModel();
    page.bindingContext = vm;
    vm.initClient();
}

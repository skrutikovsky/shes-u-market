import {makeAutoObservable} from "mobx";

class Store {
    constructor() {
        makeAutoObservable(this);
    }
}
const store = new Store()

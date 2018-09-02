import { observable } from "mobx";

class AppState {
    @observable user = undefined;
}


// Singleton store, to be used globally
export default new AppState();
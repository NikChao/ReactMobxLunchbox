import { observable } from "mobx";

class AppState {
    @observable user = undefined;
}

export default AppState;
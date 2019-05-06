
import { Action, action } from "easy-peasy";

export interface AppModel {
  modal: Boolean
  setModal: Action<AppModel, Boolean>;
}

const app: AppModel = {
  modal: false,
  setModal: action((state, payload) => {
    state.modal = payload;
  })
};

export default app;
import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";
import Store from "../store/store.namespace";
import documentosReducer from "./Documentos.Reducer";

const rootReducer: Reducer<Store.Types.Documentos> = combineReducers({
   Documentos: documentosReducer
});

export default rootReducer;
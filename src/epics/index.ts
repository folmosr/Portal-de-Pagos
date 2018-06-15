import { combineEpics, Epic } from "redux-observable";

import {
    loadDocumentsEpic,
    doPaymentEpic
} from "./documentos.epic";

export default combineEpics(loadDocumentsEpic, doPaymentEpic);
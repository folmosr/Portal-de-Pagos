import { Observable } from "rxjs";
import "rxjs/operators/switchMap";
import { ofType, ActionsObservable } from "redux-observable";
import { Action } from "redux";

import { loadDocumentos, loadedDocuments, loadPayments } from "../actions/documentos.actions";
import { LoadDocumentosAction, SendPaymentAction, LoadPaymentAction } from "../types/documentos.actions.type";
import ActionsTypesEnum from "../enums/actionstypes.enum";
import { isNullOrUndefined } from "util";
import { Body } from "../components/layouts";


const url: string = `http://vesta/PortalPagos.Api/Documentos/`;
const pagosUrl: string = `http://vesta/PortalPagos.Api/Pagos/Crear`;
const requestSettings: any = {
    url,
    body: {
        "EmisorId": 776,
        "ReceptorId": 65778,
        "DocumentosId": []
    }
};

function loadDocumentsEpic(actions$: ActionsObservable<Action>): Observable<Action> {
    return actions$.ofType<LoadDocumentosAction>(ActionsTypesEnum.LOAD_DOCUMENTOS)
        .switchMap(() => {
            return Observable.ajax.post(requestSettings.url, requestSettings.body)
                .map(q => loadedDocuments(q.response.slice(0, 5)));
        });
}

function doPaymentEpic(actions$: ActionsObservable<Action>): Observable<Action> {
    return actions$.ofType<SendPaymentAction>(ActionsTypesEnum.SEND_PAYMENT)
        .switchMap((action: SendPaymentAction) => {
            return Observable.ajax.post(pagosUrl, action.payments[0])
            .map(q => loadPayments(q.response.payment_url));
        });
}
export { loadDocumentsEpic, doPaymentEpic };
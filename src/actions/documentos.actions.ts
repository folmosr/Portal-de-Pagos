import {
    LoadDocumentosAction,
    FulfilledDocumentsAction,
    SendPaymentAction,
    LoadPaymentAction
} from "../types/documentos.actions.type";
import { IDocumento, IPayment } from "../interfaces/Documento.Interfaces";
import ActionsTypesEnum from "../enums/actionstypes.enum";

function loadDocumentos(): LoadDocumentosAction {
    return {
        type: ActionsTypesEnum.LOAD_DOCUMENTOS,
        loading: true
    };
}

function loadedDocuments(documentos: Array<IDocumento>): FulfilledDocumentsAction {
    return {
        type: ActionsTypesEnum.FULFILLED_DOCUMENTS,
        documentos,
        loading: false
    };
}

function sendPayment(payments: Array<IPayment>): SendPaymentAction {
    return {
        type: ActionsTypesEnum.SEND_PAYMENT,
        payments
    };
}

function loadPayments(payment_url:string): LoadPaymentAction {
    return {
        type: ActionsTypesEnum.LOAD_PAYMENT,
        payment_url
    };
}

export {
    loadDocumentos,
    loadedDocuments,
    sendPayment,
    loadPayments
};
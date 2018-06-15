import ActionsTypesEnum from "../enums/actionstypes.enum";
import { IDocumento, IPayment } from "../interfaces/Documento.Interfaces";

export type LoadDocumentosAction = {
    type: ActionsTypesEnum.LOAD_DOCUMENTOS,
    error?: any,
    loading: boolean
};

export type FulfilledDocumentsAction = {
    type: ActionsTypesEnum.FULFILLED_DOCUMENTS,
    documentos: Array<IDocumento>,
    error?: any,
    loading: boolean
};

export type SendPaymentAction = {
    type: ActionsTypesEnum.SEND_PAYMENT,
    payments: Array<IPayment>,
    error?: any,
};

export type LoadPaymentAction = {
    type: ActionsTypesEnum.LOAD_PAYMENT,
    payment_url:string;
    error?: any,
};
import Store from "../store/store.namespace";
import ActionsTypesEnum from "../enums/actionstypes.enum";
import { IDocumento, IDocumentoComponent, IPayment, INotification } from "../interfaces/Documento.Interfaces";
import {
    LoadDocumentosAction,
    FulfilledDocumentsAction,
    SendPaymentAction,
    LoadPaymentAction
} from "../types/documentos.actions.type";

type Actions = (LoadDocumentosAction | FulfilledDocumentsAction | SendPaymentAction | LoadPaymentAction);

type Payments = { payments: Partial<Array<IPayment>>; payment_url: Partial<INotification> };
const initialState: IDocumentoComponent = Store.InitialState.Documentos;

function documentosReducer(state: IDocumentoComponent = initialState, action: Actions): IDocumentoComponent | Payments {
    switch (action.type) {
        case ActionsTypesEnum.LOAD_DOCUMENTOS:
            return { loading: action.loading, documentos: state.documentos };
        case ActionsTypesEnum.FULFILLED_DOCUMENTS:
            return { loading: action.loading, documentos: action.documentos };
        case ActionsTypesEnum.SEND_PAYMENT:
            return { loading: true, documentos: state.documentos, payments: action.payments };
        case ActionsTypesEnum.LOAD_PAYMENT:
            return { loading: state.loading, documentos: state.documentos, payment_url: action.payment_url };
        default:
            return state;
    }
}


export default documentosReducer;
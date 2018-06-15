import { IDocumento, IDocumentoComponent, IPayment, INotification } from "../interfaces/Documento.Interfaces";

namespace Store {

    export namespace InitialState {

        export const Documentos: IDocumentoComponent = {
                documentos: [],
                loading: false
        };
    }

    export namespace Types {
        type Payments = { payments: Partial<Array<IPayment>>; payment_url: Partial<INotification> };
        export type Documentos = {
            Documentos:IDocumentoComponent | Payments
        };
    }
}
export default Store;
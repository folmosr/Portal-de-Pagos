import IReceptor from "./Receptor.Interface";

export interface IDocumento {
    Id?: number;
    Folio: number;
    FechaEmision: Date;
    FechaVencimiento: Date;
    FechaEmisionFormateada: string;
    FechaVencimientoFormateada: string;
    MontoNeto: number;
    MontoIva: number;
    MontoTotal: number;
    Receptor: IReceptor;
    Selected: boolean;
}

export interface IDocumentoComponent {
    documentos: Array<IDocumento>;
    loading: boolean;
}

export interface IPayment {
    Monto: number;
    Asunto: string;
    Descripcion: string;
    TransactionId: string;
}

export interface INotification {
    url_payment: string;
}
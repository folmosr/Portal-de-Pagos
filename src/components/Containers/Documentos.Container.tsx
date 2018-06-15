import * as React from "React";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Store from "../../store/store.namespace";
import {
    loadDocumentos,
    sendPayment
} from "../../actions/documentos.actions";
import { IDocumento, IDocumentoComponent, IPayment, INotification } from "../../interfaces/Documento.Interfaces";

import Grid from "../Grid.Component";
import MediosPagos from "../MediosPagos.Component";

type DispatchProps = {
    loadDocumentos: typeof loadDocumentos,
    sendPayment: typeof sendPayment
};

type Payments = { payments: Partial<Array<IPayment>>; payment_url: string };

type DocumentosProps = IDocumentoComponent & Payments & DispatchProps;

const actions: DispatchProps = {
    loadDocumentos,
    sendPayment
};

type State = { selected: Array<number> };

class DocumentosContainer extends React.Component<DocumentosProps, State> {

    state: State = {
        selected: []
    };

    componentDidMount(): void {
        if (this.props.loadDocumentos) {
            this.props.loadDocumentos();
        }
    }

    componentWillReceiveProps(nextProps: DocumentosProps):void {
        if (nextProps.payment_url && nextProps.payment_url !== "") {
            window.open(nextProps.payment_url);
        }
    }

    handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        const { selected } = this.state;
        const selectedIndex: number = selected.indexOf(id);
        let newSelected: Array<number> = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    }

    isSelected = (id: number) => this.state.selected.indexOf(id) !== -1;

    payment = () => {
        const selecteds: number[] = this.state.selected;
        const services: Array<IPayment> = [];
        let selected: IDocumento;
        selecteds.forEach(Id => {
            selected = this.props.documentos.find((element: IDocumento) => element.Id === Id);
            if (selected !== undefined) {
                services.push({
                    Monto: selected.MontoTotal,
                    Asunto: "Pago de Documento",
                    Descripcion: `Pago de Documento Factura N° ${selected.Folio}`,
                    TransactionId: selected.Id.toString()
                });
            }
        });
        this.props.sendPayment(services);
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                {(this.props.loading) && <span>...Cargando</span>}
                {(this.props.documentos.length > 0) &&
                    <React.Fragment>
                        <Grid documentos={this.props.documentos} handleClick={this.handleClick} isSelected={this.isSelected} />
                        <MediosPagos onClick={this.payment} />
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default connect(
    (state: Store.Types.Documentos) => {
        return state.Documentos;
    },
    (dispatch: Dispatch<DispatchProps>) => {
        return bindActionCreators(actions, dispatch);
    }
)(DocumentosContainer);
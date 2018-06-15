import * as React from "React";

import { IDocumento } from "../interfaces/Documento.Interfaces";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";

type Props = {
    documentos: Array<IDocumento>,
    isSelected: (id: number) => boolean,
    handleClick: (event: React.MouseEvent<HTMLElement>, id: number) => void,
    children?: React.ReactNode
};
type PropsWithStyles = Props & WithStyles<"root" | "table">;

const styles: any = (theme: Theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
    },
    table: {
        minWidth: 700,
    },
});
let elementSelected: boolean;
const Grid: React.SFC<PropsWithStyles> = ({ documentos, classes, handleClick, isSelected }): JSX.Element => {
    return (
        <Paper className={classes.root}>
            <div>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell numeric>#Folio</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Fecha de Vencimiento</TableCell>
                            <TableCell>$Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documentos.map((item: IDocumento) => {
                            elementSelected = isSelected(item.Id);
                            return (<TableRow
                                hover
                                role="checkbox"
                                aria-checked={item.Selected}
                                tabIndex={-1}
                                key={item.Id.toString()}
                                onClick={event => handleClick(event, item.Id)}
                                selected={elementSelected}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox checked={elementSelected} />
                                </TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                    {item.FechaEmision.toLocaleString()}
                                </TableCell>
                                <TableCell numeric>{item.Folio}</TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                    25.387.995-k Jose Miguel
                                </TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                    {item.FechaVencimiento.toLocaleString()}
                                </TableCell>
                                <TableCell numeric>{item.MontoTotal.toLocaleString("es-CL", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</TableCell>
                            </TableRow>);
                        })}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
};

export default withStyles(styles)<Props>(Grid);
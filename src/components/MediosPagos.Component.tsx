import * as React from "React";

import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Payment from "@material-ui/icons/Payment";

type Props = {
    onClick: () => void
};
type PropsWithStyles = Props & WithStyles<"card" | "details" | "content" | "cover" | "controls" | "button">;

const styles: any = (theme: Theme) => ({
    card: {
        display: "flex",
        width: 320
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

const divStyle: any = {
    marginTop: 25
};

const MediosPagos: React.SFC<PropsWithStyles> = ({ onClick, classes }): JSX.Element => {
    return (
        <div style={divStyle}>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">Pagar con</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Khipu
            </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Button variant="fab" aria-label="payment" onClick={() => onClick() } className={classes.button}>
                            <Payment />
                        </Button>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/image/khipu.jpg"
                    title="Pagar con Khipu"
                />
            </Card>
        </div >
    );
};

export default withStyles(styles)<Props>(MediosPagos);
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Typography, withStyles } from "@material-ui/core";

import HomeComponent from "../Containers/Home.Component";
import DocumentosComponent from "../Containers/Documentos.Container";

const styles: any = (theme: any) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

const BodyComponent: React.SFC<any> = (props: any): JSX.Element => {
    const { classes } = props;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/documentos" component={DocumentosComponent} />
            </Switch>
        </main>
    );
};

export default withStyles(styles)(BodyComponent);

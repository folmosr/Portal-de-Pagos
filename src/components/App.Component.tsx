import * as React from "React";
import { Grid, withStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header, SideBar, Body } from "./layouts/";

const styles: any = {
    root: {
        flexGrow: 1,
        height: 585,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
    appFrame: {
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
    }
};

const AppComponent: React.SFC<any> = (props: any): JSX.Element => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Grid container className={classes.root}>
                <CssBaseline />
                <Header />
                <SideBar />
                <Body />
            </Grid>
        </React.Fragment >
    );
};

export default withStyles(styles)(AppComponent);

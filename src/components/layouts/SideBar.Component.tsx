import * as React from "react";
import { Grid, Typography, Divider, Drawer, withStyles } from "@material-ui/core";

import MenuList from "./MenuList.Component";

const drawerWidth: Number = 240;

const styles: any = (theme: any) => ({
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
});

const SideBarComponent: React.SFC<any> = (props: any): JSX.Element => {
    const { classes } = props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <MenuList />
        </Drawer >
    );
};

export default withStyles(styles)(SideBarComponent);
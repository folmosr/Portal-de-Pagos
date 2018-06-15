import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LanguageIcon from "@material-ui/icons/Language";
import { Divider } from "@material-ui/core";

const drawerWidth: number = 240;

const styles: any = (theme: any) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  a: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"`,
    lineHeight: "1.5em",
    textDecoration: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
});

const MenuListComponent: React.SFC<any> = (props: any) => {
  const { classes } = props;
  return (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary={<Link to="/" className={classes.a} > Home </Link>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary={<Link to="/documentos" className={classes.a} > Por Pagar </Link>} />
      </ListItem>
      <Divider />
    </List>
  );
};
export default withStyles(styles)(MenuListComponent);
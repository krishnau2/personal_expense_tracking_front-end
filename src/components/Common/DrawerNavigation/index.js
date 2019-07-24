import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

import { NavigationList } from "./navigationList";

const _renderNavigationIcon = item => {
  const Icon = item.icon;
  return <Icon />;
};

const _renderNavigationItems = classes => {
  return NavigationList.map(item => {
    return (
      <ListItem
        button
        classes={{ root: classes.item }}
        component="a"
        href={item.url}
      >
        <ListItemIcon
          classes={{
            root: classes.listItemIconRoot
          }}
        >
          {_renderNavigationIcon(item)}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  });
};

export default function DrawerNavigation() {
  const drawerWidth = 240;

  const useStyles = makeStyles(theme => ({
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },

    paper: {
      background: "#2757ae",
      color: "#fff",
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    },

    listItemIconRoot: {
      color: "#fff"
    },
    item: {
      background: "#2757ae",
      "&:hover": {
        background: "rgb(210, 112, 175)"
      }
    }
  }));

  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.paper }}
      className={`${classes.drawerPaper}`}
    >
      <Divider />
      <List>{_renderNavigationItems(classes)}</List>
      <Divider />
      <Avatar>KK</Avatar>
    </Drawer>
  );
}

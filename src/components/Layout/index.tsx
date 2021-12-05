import { makeStyles } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { SubjectOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";

type LayoutProps = {
  children: ReactNode;
};

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
  };
});

export const Layout = (props: LayoutProps) => {
  const classes = useStyles();
  const location = useRouter();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/Notes",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/Create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* App Bar */}
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            David Notes
          </Typography>
        </div>
        {/* List / links */}
        <List>
          {menuItems.map((item) => (
            <Link href={item.path}>
              <ListItem
                button
                key={item.text}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}></ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{props.children}</div>;
    </div>
  );
};

export default Layout;

import { ChevronLeftTwoTone, MenuTwoTone } from "@mui/icons-material";
import { Box, Divider, IconButton, List, Toolbar } from "@mui/material";
import { Component, ReactNode } from "react";
import {Outlet, Link} from "react-router-dom";
import CustomAppBar from "../../components/CustomAppBar";
import WrappedDrawer from "../../components/WrappedDrawer";
import { mainListItems } from "./listItems";

type DrawerState = {
  drawerOpen: boolean;
};

class DashLayout extends Component{

  state: DrawerState = {
    drawerOpen: false,
  };

  toggleDrawer = () => {
    let stateCopy = { ...this.state };
    stateCopy.drawerOpen = !stateCopy.drawerOpen;
    this.setState(stateCopy);
  };

    render(): ReactNode {
        return (
            <>
              <Box
            sx={{
              display: "flex",
              height: "100vh",
              backgroundColor: "#DADADA",
            }}
          >
            <CustomAppBar title="Admin Dashboard" />

            <WrappedDrawer variant="permanent" open={this.state.drawerOpen}>
              <Toolbar variant="dense"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: this.state.drawerOpen?"flex-end":"center",
                  px: [1],
                }}
              >
                <IconButton onClick={this.toggleDrawer}>
                  {this.state.drawerOpen ? (
                    <ChevronLeftTwoTone />
                  ) : (
                    <MenuTwoTone />
                  )}
                </IconButton>
              </Toolbar>

              <Divider />

              <List
              sx={{
                align: "center"
              }} 
              component="nav">{mainListItems}</List>
            </WrappedDrawer>
            <Box component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}><Toolbar variant="dense"/>
          <Outlet/>
            </Box>
          </Box>
        
              
            </>
          );
    }
}

export default DashLayout;

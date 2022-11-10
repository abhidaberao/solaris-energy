import { ChevronLeftTwoTone, MenuTwoTone } from "@mui/icons-material";
import { Backdrop, Box, Divider, IconButton, List, Toolbar } from "@mui/material";
import { Component, ReactNode } from "react";
import {Outlet, Link} from "react-router-dom";
import { backDrop } from "../../assets/Theme";
import CustomAppBar from "../../components/CustomAppBar";
import WrappedDrawer from "../../components/WrappedDrawer";
import { mainListItems } from "./listItems";

type DrawerState = {
  drawerOpen: boolean;
  pageIndex : number;
};

const pageTitles = [
  "Reports",
  "Field Workers",
  "Customers",
  "Meters",
  "Bills"
];

class DashLayout extends Component{

  state: DrawerState = {
    drawerOpen: false,
    pageIndex: 0
  };

  toggleDrawer = () => {
    this.setState({drawerOpen : !this.state.drawerOpen});
  };

    render(): ReactNode {
        return (
            <>
              <Box
            sx={{
              display: "flex",
              height: "100vh",
              backgroundColor: backDrop,
            }}
          >
            <CustomAppBar title={"User Dash"/*pageTitles[this.state.pageIndex]*/} />

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

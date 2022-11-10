import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import {
  AccountCircle,
  AccountCircleTwoTone,
  ChevronLeftTwoTone,
  ChevronRightTwoTone,
  MenuTwoTone,
} from "@mui/icons-material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import CssBaseline from "@mui/material/CssBaseline";
import { Component } from "react";
import WrappedDrawer from "../../components/WrappedDrawer";
import CustomAppBar from "../../components/CustomAppBar";
import {solarisTheme} from "../../assets/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashLayout from "./DashLayout";
import Readings from "./subpages/Reading";
import Customers from "./subpages/Customers";



class FieldWorkerDash extends Component {


  render() {
    return (
      <ThemeProvider theme={solarisTheme}>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashLayout/>}>
              <Route index element={<Readings/>}/>
              <Route path="customers" element={<Customers/>}/>
            </Route>
          </Routes>
          </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default FieldWorkerDash;

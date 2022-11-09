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
import solarisTheme from "../../assets/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashLayout from "./DashLayout";
import Reports from "./subpages/Reports";
import FieldWorkers from "./subpages/FieldWorkers";
import Customers from "./subpages/Customers";
import Meters from "./subpages/Meters";
import Bills from "./subpages/Bills";



class AdminDash extends Component {


  render() {
    return (
      <ThemeProvider theme={solarisTheme}>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashLayout/>}>
              <Route index element={<Reports/>}/>
              <Route path="field-workers" element={<FieldWorkers/>}/>
              <Route path="customers" element={<Customers/>}/>
              <Route path="meters" element={<Meters/>}/>
              <Route path="bills" element={<Bills/>}/>
            </Route>
          </Routes>
          </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default AdminDash;

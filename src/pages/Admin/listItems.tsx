import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  AssessmentOutlined,
  AssessmentTwoTone,
  BadgeTwoTone,
  ElectricMeter,
  ElectricMeterTwoTone,
  LocalAtmTwoTone,
  PeopleTwoTone,
  Receipt,
  ReceiptTwoTone,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import style from "./AdminDash.module.scss";

export const mainListItems = (
  <React.Fragment>
    <Link to="/" className={style['nav-link']}>
      <ListItemButton sx={{alignContent:"center"}}>
        <ListItemIcon>
          <AssessmentTwoTone />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </Link>

    <Link to="/field-workers" className={style['nav-link']}>
      <ListItemButton>
        <ListItemIcon>
          <BadgeTwoTone />
        </ListItemIcon>
        <ListItemText primary="Field Workers" />
      </ListItemButton>
    </Link>

    <Link to="/customers" className={style['nav-link']}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleTwoTone />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link>

    <Link to="/meters" className={style['nav-link']}>
      <ListItemButton>
        <ListItemIcon>
          <ElectricMeterTwoTone />
        </ListItemIcon>
        <ListItemText primary="Meters" />
      </ListItemButton>
    </Link>

    <Link to="/bills" className={style['nav-link']}>
      <ListItemButton>
        <ListItemIcon>
          <LocalAtmTwoTone />
        </ListItemIcon>
        <ListItemText primary="Bills" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

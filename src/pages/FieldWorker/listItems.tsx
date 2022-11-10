import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DocumentScannerTwoTone, PeopleTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import style from "./FieldWorkerDash.module.scss";

export const mainListItems = (
  <React.Fragment>
    <Link to="/" className={style["nav-link"]}>
      <ListItemButton sx={{ alignContent: "center" }}>
        <ListItemIcon>
          <DocumentScannerTwoTone />
        </ListItemIcon>
        <ListItemText primary="Readings" />
      </ListItemButton>
    </Link>

    <Link to="/customers" className={style["nav-link"]}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleTwoTone />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

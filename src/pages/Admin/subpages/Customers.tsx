import {
  CloseTwoTone,
  Filter1TwoTone,
  SearchTwoTone,
  TuneTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Component, ReactNode } from "react";
import CustomModal from "../../../components/CustomModal";
import ExpandCard from "../../../components/ExpandCard";
import PaginatedTable from "../../../components/PaginatedTable";
import { customers, fieldworkers } from "../../../test/testdata";
import CustomerForm from "./forms/CustomerForm";
import FieldWorkerForm from "./forms/FieldWorkerForm";
import Meters from "./Meters";

const fields = ["CustomerId", "Name", "Email", "Address"]; //Only the once to show in header

const rows = customers.map((item) => {
  return {
    CustomerId: item.id,
    Name: item.name,
    Email: item.email,
    Address : item.address,
    Meters: item.meters,
  };
});

class Customers extends Component {
  state = {
    formOpen: false,
    editMode: false,
    editId: null,
    snackbarOpen: false,
    SnackbarMessage: "",
  };

  handleOpen = (mode: string, id: any) =>
    this.setState({
      formOpen: true,
      editMode: mode == "edit" ? true : false,
      editId: id,
    });

  handleClose = () => this.setState({ formOpen: false });

  toggleSnackbar = (show: boolean, message: string) => {
    this.setState({
      snackbarOpen: show,
      SnackbarMessage: message,
    });
  };

  snackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    this.toggleSnackbar(false, "");
  };

  render(): ReactNode {
    let id = this.state.editId;

    return (
      <div>
        <CustomModal
          open={this.state.formOpen}
          title={(this.state.editMode ? "Edit" : "Create") + " Customer"}
          closeCallback={this.handleClose}
          content={
            <CustomerForm
              editMode={this.state.editMode}
              cst={id != null ? customers.find((c) => c.id === id) : null}
              snackbarCallback = {this.toggleSnackbar}
            />
          }
        />

        <Box overflow="hidden">
          <Stack direction="row" spacing={4} padding={5}>
            <TextField
              fullWidth
              size="medium"
              id="outlined-basic"
              variant="outlined"
              placeholder="Search Customers"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoTone />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="outlined">
              <TuneTwoTone />
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                this.handleOpen("create", null);
              }}
            >
              New
            </Button>
          </Stack>

          <Box pl={5} pr={5} pb={5}>
            <PaginatedTable
              fields={fields}
              rows={rows}
              idKey={fields[0]}
              editModalToggle={this.handleOpen}
            />
          </Box>
        </Box>

        <Snackbar
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.snackbarClose}
          message={this.state.SnackbarMessage}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              <CloseTwoTone fontSize="small" />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default Customers;

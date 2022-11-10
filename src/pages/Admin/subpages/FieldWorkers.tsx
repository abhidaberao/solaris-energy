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
import { fieldworkers } from "../../../test/testdata";
import FieldWorkerForm from "./forms/FieldWorkerForm";

const fields = ["WorkerId", "Name", "Email"];

const rows = fieldworkers.map((fw) => {
  return {
    WorkerId: fw.id,
    Name: fw.name,
    Email: fw.email,
    Customers: fw.customers,
  };
});

class FieldWorkers extends Component {
  state = {
    isFormModalOpen: false,
    isDeleteModalOpen : false,
    editMode: false,
    editId: null,
    snackbarOpen: false,
    SnackbarMessage: "",
  };

  openFormModal = (mode: string, id: any) =>
    this.setState({
      isFormModalOpen: true,
      editMode: mode == "edit" ? true : false,
      editId: id,
    });

  openDeleteModal = (id: any) =>
  this.setState({
    isDeleteModalOpen: true,
    editId: id,
  });

  closeFormModal = () => this.setState({ isFormModalOpen: false });
  closeDeleteModal = () => this.setState({ isDeleteModalOpen: false });


  toggleSnackbar = (show: boolean, message: string) => {
    this.setState({
      snackbarOpen: show,
      SnackbarMessage: message,
    });
  };

  snackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {

    this.toggleSnackbar(false, "");
  };

  handleDelete = (id : number) => {
    this.toggleSnackbar(true,"Deleted");
    this.closeDeleteModal();
  }

  render(): ReactNode {
    let id = this.state.editId;

    return (
      <div>
        <CustomModal
          open={this.state.isFormModalOpen}
          title={(this.state.editMode ? "Edit" : "Create") + " Field Worker"}
          closeCallback={this.closeFormModal}
          content={
            <FieldWorkerForm
              editMode={this.state.editMode}
              fw={id != null ? fieldworkers.find((fw) => fw.id === id) : null}
              snackbarCallback = {this.toggleSnackbar}
              closeModalCallback = {this.closeFormModal}
            />
          }
        />
        <CustomModal
          open={this.state.isDeleteModalOpen}
          title={`Delete ${id != null ? fieldworkers.find((fw) => fw.id === id)?.name : ""} ?`}
          closeCallback={this.closeDeleteModal}
          content={
            <Stack spacing={4} pt={5} pb={5} direction="row" justifyContent="space-between">
              <Button variant="outlined" onClick={()=>{this.closeDeleteModal()}}>
                No
              </Button>
              <Button color='error' variant="outlined" onClick={()=>{this.handleDelete(id!=null?id:0)}}>
                Yes
              </Button>
            </Stack>
          }
        />

        <Box overflow="hidden">
          <Stack direction="row" spacing={4} padding={5}>
            <TextField
              fullWidth
              size="medium"
              id="outlined-basic"
              variant="outlined"
              placeholder="Search Field Workers"
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
                this.openFormModal("create", null);
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
              openFormModal={this.openFormModal}
              openDeleteModal={this.openDeleteModal}
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

export default FieldWorkers;

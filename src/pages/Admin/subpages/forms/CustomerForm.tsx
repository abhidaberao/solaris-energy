import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Component, ReactNode } from "react";
import * as React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { customers, meterTypes } from "../../../../test/testdata";

type CustomerFormProps = {
  editMode: boolean;
  cst : any ;
  snackbarCallback : Function;
};
type CustomerFormState = {
  name : string;
  email : string;
  address : string;
  meters : any
};

class CustomerForm extends Component<CustomerFormProps,CustomerFormState> {
  constructor(props: CustomerFormProps) {
    super(props);
    this.state = this.props.cst===null?{
      name : '',
      email : '',
      address : '',
      meters : []
    }: {
      name : this.props.cst.name,
      email : this.props.cst.email,
      address : this.props.cst.address,
      meters : meterTypes.filter((m)=>{return this.props.cst.meters.includes(m.id)})
    }
    this.onCustomersChange = this.onCustomersChange.bind(this);
  }



  handleSubmit = (event : any) => {
    event.preventDefault();
    this.props.snackbarCallback(true,'Saved Customer')
  }

  onCustomersChange = (event : any, values : any) => {
    //let customers = values.map((value : any) => {return value.id});
    this.setState({meters : values});
  }

  render(): ReactNode {
    return (
      <Box sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            size="small"
            value={this.state.name}
            onChange={ e => this.setState({name : e.target.value})}
          />

          <TextField
            id="filled-basic"
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            value={this.state.email}
            onChange={ e => this.setState({email : e.target.value})}
          />

          <TextField
            id="filled-basic"
            label="Address"
            variant="outlined"
            size="small"
            value={this.state.address}
            onChange={ e => this.setState({address : e.target.value})}
          />

          <Autocomplete
            multiple
            limitTags={2}
            size="small"
            id="customer-selector"
            options={meterTypes}
            defaultValue={this.state.meters}
            disableCloseOnSelect
            getOptionLabel={(option) => option['type']}
            onChange = {(e,v)=>{this.onCustomersChange(e,v)}}

            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.type}

              </li>
            )}

            renderInput={(params) => (
              <TextField
                {...params}
                label="Assigned Meters"
                placeholder="Search"
              />
            )}
          />


          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={this.handleSubmit}>
              {this.props.editMode?'Save':'Create'}
            </Button>
          </Box>
        </Stack>
      </Box>
    );
  }
}


export default CustomerForm;

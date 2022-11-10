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
import { customers } from "../../../../test/testdata";

type FieldWorkerFormProps = {
  editMode: boolean;
  fw : any ;
  snackbarCallback : Function;
  closeModalCallback : Function;
};
type FieldWorkerFormState = {
  name : string;
  email : string;
  customers : any
};

class FieldWorkerForm extends Component<FieldWorkerFormProps,FieldWorkerFormState> {
  constructor(props: FieldWorkerFormProps) {
    super(props);
    this.state = this.props.fw===null?{
      name : '',
      email : '',
      customers : []
    }: {
      name : this.props.fw.name,
      email : this.props.fw.email,
      customers : customers.filter((c)=>{return this.props.fw.customers.includes(c.id)})
    }
    this.onCustomersChange = this.onCustomersChange.bind(this);
  }



  handleSubmit = (event : any) => {
    event.preventDefault();
    this.props.snackbarCallback(true,'Saved Field Worker');
    this.props.closeModalCallback();
    let values = {
      name : this.state.name,
      email : this.state.email,
      customers : this.state.customers.map((c:any)=>{return c.id})
    }
    console.log(values);
  }

  onCustomersChange = (event : any, values : any) => {
    //let customers = values.map((value : any) => {return value.id});
    this.setState({customers : values});
  }

  render(): ReactNode {
    return (
      <Box sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            value={this.state.name}
            onChange={ e => this.setState({name : e.target.value})}
          />

          <TextField
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            value={this.state.email}
            onChange={ e => this.setState({email : e.target.value})}
          />

          <Autocomplete
            multiple
            limitTags={2}
            size="small"
            id="customer-selector"
            options={customers}
            defaultValue={this.state.customers}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            onChange = {(e,v)=>{this.onCustomersChange(e,v)}}

            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}

              </li>
            )}

            renderInput={(params) => (
              <TextField
                {...params}
                label="Assigned Customers"
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


export default FieldWorkerForm;

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
import { meterTypes } from "../../../../test/testdata";

type MeterFormProps = {
  editMode: boolean;
  mt : any ;
  snackbarCallback : Function;
};
type MeterFormState = {
  type : string;
  noOfReadings : number;
  faultTolerance : number;
  ratePerUnit : number
};

class MeterForm extends Component<MeterFormProps,MeterFormState> {
  constructor(props: MeterFormProps) {
    super(props);
    this.state = this.props.mt===null?{
      type : '',
      noOfReadings : 0,
      faultTolerance : 0,
      ratePerUnit : 0
    }: {
      type : this.props.mt.type,
      noOfReadings : this.props.mt.noOfReadings,
      faultTolerance : this.props.mt.faultTolerance,
      ratePerUnit : this.props.mt.ratePerUnit,
    }
  }



  handleSubmit = (event : any) => {
    event.preventDefault();
    this.props.snackbarCallback(true,'Saved Meter')
  }


  render(): ReactNode {
    return (
      <Box sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField
            id="filled-basic"
            label="Type"
            variant="outlined"
            size="small"
            value={this.state.type}
            onChange={ e => this.setState({type : e.target.value})}
          />

          <TextField
            id="filled-basic"
            label="No of Readings"
            type='number'
            variant="outlined"
            size="small"
            value={this.state.noOfReadings}
            onChange={ e => this.setState({noOfReadings : Number(e.target.value)})}
          />

          <TextField
            id="filled-basic"
            label="Fault Tolerance"
            type='number'
            variant="outlined"
            size="small"
            value={this.state.faultTolerance}
            onChange={ e => this.setState({faultTolerance : Number(e.target.value)})}
          />

<TextField
            id="filled-basic"
            label="Rate / Unit"
            type='number'
            variant="outlined"
            size="small"
            value={this.state.ratePerUnit}
            onChange={ e => this.setState({ratePerUnit : Number(e.target.value)})}
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


export default MeterForm;

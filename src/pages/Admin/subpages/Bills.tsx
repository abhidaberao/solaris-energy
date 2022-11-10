import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Component, ReactNode } from "react";
import { primaryLight } from "../../../assets/Theme";
import ExpandCard from "../../../components/ExpandCard";
import { bills } from "../../../test/testdata";

const Bills = () => {
  return (
    <Box sx={{padding : 5}}>
      <Container>
        <StatusSelector/>
      </Container>
      <Stack spacing={2} pt={2} pb={2}>
        {
          bills.map((b) => {
            return (
              <ExpandCard/>
            );
          })
        }
      </Stack>
    </Box>
  );
};

class StatusSelector extends Component {

  statusValues = ['Pending', 'Completed', 'All']

  state = {
    selected : this.statusValues[0]
  }

  handleChange = (
    event: React.MouseEvent<HTMLElement>,
    status: string | null,
  ) => {
    this.setState({selected : status});
  };


  render(): ReactNode {
    return (
      <ToggleButtonGroup
       color='secondary'
        value={this.state.selected}
        exclusive
        onChange={this.handleChange}
      >
        <ToggleButton value={this.statusValues[0]} >{this.statusValues[0]}</ToggleButton>

        <ToggleButton value={this.statusValues[1]} >{this.statusValues[1]}</ToggleButton>

        <ToggleButton value={this.statusValues[2]} >{this.statusValues[2]}</ToggleButton>

      </ToggleButtonGroup>
    );
  }
}

export default Bills;

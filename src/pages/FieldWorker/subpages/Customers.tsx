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

  };


  render(): ReactNode {

    return (
      <div>


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
          </Stack>

          <Stack pl={5} pr={5} pb={5} spacing={2}>
            {
              customers.map((c)=>{return <CustomerCard customer={c}/>})
            }
          </Stack>
        </Box>
      </div>
    );
  }
}

type CustomerCardProps = {
  customer : any
}

class CustomerCard extends Component<CustomerCardProps>{

  constructor(props : CustomerCardProps){
    super(props);
  }

  render(): ReactNode {
    return (
      <Card sx={{padding : 2}}>
        <Stack direction="row" justifyContent="start" spacing={5} pl={5}>
          <Typography>
            {`#${this.props.customer.id}`}
          </Typography>
          <Typography>
          {`Name : ${this.props.customer.name}`}
          </Typography>
          <Typography>
          {`Email : ${this.props.customer.email}`}
          </Typography>
        </Stack>
      </Card>
    );
  }
}

export default Customers;

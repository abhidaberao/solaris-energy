import { AddPhotoAlternateTwoTone } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Component, ReactNode } from "react";
import { customers, meterTypes } from "../../../test/testdata";

class Readings extends Component {
  numImages = 5;

  render(): ReactNode {
    return (
      <div>
        <Box padding={5}>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <Autocomplete
              freeSolo
              options={customers.map((c) => {
                return c.name;
              })}
              renderInput={(params) => (
                <TextField {...params} label="Customer" />
              )}
            />

            <Card sx={{ padding: 2 }}>
              <Stack>
                <Typography>Add {this.numImages} Images</Typography>

                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 200,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {Array.from({ length: this.numImages }, (v, i) => i).map(
                    (sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ListItem key={`item`}>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                type="number"
                                variant="outlined"
                                size="small"
                                label={`Reading ${sectionId + 1}`}
                                />
                                <Button variant="outlined">
                                    <AddPhotoAlternateTwoTone/>
                                    <input type="file" hidden/>
                                </Button>
                            </Stack>
                        </ListItem>
                      </li>
                    )
                  )}
                </List>
              </Stack>
            </Card>
          </Stack>
        </Box>
      </div>
    );
  }
}

export default Readings;

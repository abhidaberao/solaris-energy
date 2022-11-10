import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Stack } from "@mui/material";
import { render } from "@testing-library/react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

class ExpandCard extends React.Component {


  state = {
    expanded : false
  }

  handleExpandClick = () => {
    this.setState({expanded : !this.state.expanded});
  };

  render(): React.ReactNode {
    return (
      <Card variant="outlined">
        <CardContent sx={{}}>
          <Stack direction="row" spacing={4}>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Id #1373110
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} component="div">
              Bill
            </Typography>
            <Box>
            <ExpandMore
              expand={this.state.expanded}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            </Box>
          </Stack>
        </CardContent>
  
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>content</CardContent>
        </Collapse>
      </Card>
    );
  }
  
}

export default ExpandCard;

import { AccountCircleTwoTone } from "@mui/icons-material";
import { AppBar, Button, IconButton, Menu, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomModal from "./CustomModal";

interface Props {
  title: string;
}

class CustomAppBar extends Component<Props> {
  state = {
    anchor: null,
    isProfileModalVisible : false
  };

  openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchor: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchor: null });
  };

  render(): ReactNode {
    return (
      <AppBar>
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography fontSize={16} component="div" sx={{ flexGrow: 1 }}>
            {this.props.title}
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.openMenu}
              color="inherit"
            >
              <AccountCircleTwoTone />
            </IconButton>
            <Menu
              anchorEl={this.state.anchor}
              open={Boolean(this.state.anchor)}
              onClose={this.closeMenu}
            >
              <MenuItem onClick={()=>{this.setState({isProfileModalVisible : true})}}>Change Password</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
        <CustomModal
          open={this.state.isProfileModalVisible}
          title={"Change Password"}
          closeCallback={() => {this.setState({isProfileModalVisible : false})}}
          content={<ChangePasswordForm closeModalCallback={()=>{this.setState({isProfileModalVisible : false})}}/>}
        />
      </AppBar>
    );
  }
}

type ChangePasswordFormProps = {
    closeModalCallback : Function;
}

class ChangePasswordForm extends Component<ChangePasswordFormProps>{

    constructor(props : ChangePasswordFormProps){
        super(props);
    }

    state = {
        old : '',
        new : '',
        newC : ''
    }

    handleSubmit = () => {
        this.props.closeModalCallback();
    }

    render(): ReactNode {
        return (
            <Stack spacing={2} pt={2}>
                <TextField
                    label="Enter Current"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.old}
                    onChange={(e)=>{this.setState({old : e.target.value})}}
                />
                <TextField
                    label="Enter New"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.new}
                    onChange={(e)=>{this.setState({new : e.target.value})}}
                />
                <TextField
                    label="Confirm New"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.newC}
                    onChange={(e)=>{this.setState({newC : e.target.value})}}
                />
                <Button variant="contained" onClick={this.handleSubmit}>
                    Change
                </Button>
            </Stack>
        );
    }
}

export default CustomAppBar;

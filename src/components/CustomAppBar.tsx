import { AccountCircleTwoTone } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    title : string;
}


class CustomAppBar extends Component<Props>{



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
                //onClick={}
                color="inherit"
                >
                <AccountCircleTwoTone />
                </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CustomAppBar;
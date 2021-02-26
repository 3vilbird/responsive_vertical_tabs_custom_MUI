import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Routes from "./routes/componentroutes";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import { Link } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles'
import FooterPage from "./Pages/FooterPage"



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
}));






function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Layout = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Lets OverRide.....</Typography>
                        <div className={classes.grow} />

                        <IconButton color="inherit" onClick={() => (<Redirect to="/home" />)}>
                            <HomeRoundedIcon />
                        </IconButton>


                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box my={2}>
                    <Router>
                        <Redirect from="/" to="/home" />
                        <Switch>
                            {Routes.map((item, index) => (<Route key={index} exact path={item.path} component={item.component} />))}
                        </Switch>
                    </Router>
                </Box>
            </Container>
        </React.Fragment>
    );
}



export default Layout;
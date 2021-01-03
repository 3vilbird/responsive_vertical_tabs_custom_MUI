import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomVerticalTabsStyles from "../../styles/CustomVerticalTabsStyles";
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Container>{children}</Container>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 900,
        minWidht: '100%'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    ...CustomVerticalTabsStyles,
}));

export default function CustomVerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{
                    style: {
                        height: '0px',
                    },
                }}

                classes={{
                    root: classes.tabsRoot,
                    wrapper: classes.tabWrapper
                }}


            >
                {props.tabs.map((item, idx) => <Tab

                    classes={{
                        root: classes.tabRootButton,
                        selected: classes.tabSelected,
                    }}

                    label={<span className={(value === idx) ? classes.tabText : classes.selectedTabText}  > {item.tabName} </span>}

                    {...a11yProps(idx)}

                />)}
            </Tabs>
            {

                props.tabs.map((item, idx) => (
                    //shoot grid container and item here

                    <Grid item xs={12}>
                        <TabPanel value={value} index={idx}>
                            {item.tabContent}
                        </TabPanel>
                    </Grid>



                ))


            }


        </div>
    );
}

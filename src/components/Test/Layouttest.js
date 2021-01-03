import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomVerticalTabsStyles from "../../styles/CustomVerticalTabsStyles";
import Container from '@material-ui/core/Container';
import "./layout.css";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxHeight: 300,

    },

    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    paper: {
        height: 140,
        width: 100,
        background: 'red',
    },
    control: {
        padding: theme.spacing(2),
    },

    ...CustomVerticalTabsStyles,
}));

// =========== TAB PANAL FUNCTION =================

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
                    <Typography>{children}</Typography>
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
// ================== TAB FUNC OVER============ 

// ================== change tabs =============


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}







const Layouttest = (props) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };







    return (
        <Grid container spacing={2}
        >
            <Grid item
                xs={2}
                sm={5}
                md={3}
                lg={2}
                xl={2}
            >
                <Grid container spacing={spacing} >
                    <Tabs
                        style={{ height: '100vh' }}
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        className={classes.tabs}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
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
                </Grid>
            </Grid>

            <Grid item xs={10} sm={7} md={9} lg={10} xl={10} className="bg-success" >
                <Grid container justify="center" spacing={spacing} className="">
                    <TabPanel value={value} index={0}>
                        Item One
              </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
              </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
              </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
              </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
              </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
              </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
              </TabPanel>
                </Grid>
            </Grid>


        </Grid>
    );
}

export default Layouttest;
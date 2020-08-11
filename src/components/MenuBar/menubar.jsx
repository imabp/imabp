import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core/';


import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import About from '../AboutME/main';
import Project from '../Projects/main'
function TabPanel(props) {
                                    const { children, value, index, ...other } = props;

                                    return (
                                      <div
                                        role="tabpanel"
                                        hidden={value !== index}
                                        id={`scrollable-force-tabpanel-${index}`}
                                        aria-labelledby={`scrollable-force-tab-${index}`}
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

  function a11yProps(index) {
                                    return {
                                      id: `scrollable-force-tab-${index}`,
                                      'aria-controls': `scrollable-force-tabpanel-${index}`,
                                    };
                             }

 const useStyles = makeStyles((theme) => ({
                                              root: {
                                                    flexGrow: 1,
                                                    width: '100%',
                                                    backgroundColor: 'black',
                                                    color:'white'
                                              },
                                            }
                                  ));

export default function ScrollableTabsButtonForce() {
                                                        const classes = useStyles();
                                                        const [value, setValue] = React.useState(0);

                                                        const handleChange = (event, newValue) => {
                                                            setValue(newValue);
                                                        };
                                                      
                                                        return (
                                                                  <div >
                                                                  <AppBar className={classes.root} position="static" color='default'>
                                                                      <Tabs
                                                                      value={value}
                                                                      onChange={handleChange}
                                                                      variant="scrollable"
                                                                      scrollButtons="on"
                                                                      indicatorColor="inherit"
                                                                      textColor="inherit"
                                                                      aria-label="scrollable force tabs example"
                                                                      color="white"
                                                                      style={{background:'black', color:'white'}}
                                                                      >
                                                                      <Tab  label="About Me"  style={{color:'#40E0D0'}} icon={<PersonPinIcon />} {...a11yProps(0)} />
                                                                      <Tab label="My Projects" style={{color:'red'}} icon={<FavoriteIcon />} {...a11yProps(1)} />
                                                                      <Tab label="Blogs" style={{color:'yellow'}} icon={<ShoppingBasket />} {...a11yProps(2)} />
                                                                      <Tab label="Communities" icon={<HelpIcon />} {...a11yProps(3)} />
                                                                      <Tab label="Talks" icon={<ShoppingBasket />} {...a11yProps(4)} />
                                                                      <Tab label="MagicZone" icon={<ThumbDown />} {...a11yProps(5)} />
                                                                      <Tab label="Contact Me" icon={<ThumbUp />} {...a11yProps(6)} />
                                                                      </Tabs>
                                                                  </AppBar>
                                                                  <TabPanel className={classes.root}   value={value} index={0}>
                                                                      <About className={classes.root}/>
                                                                  </TabPanel>
                                                                  <TabPanel value={value} index={1}>
                                                                      <Project/>
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
                                                                  </div>
                                                        );
                                                      }   
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Button, Grid, TextField } from "@mui/material";
import TabContainer from "./TabContainer";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={{ bgcolor: "background.paper", display: "flex" }}>
      <Grid item sm={3}>
        <Tabs
          sm={3}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label="My details"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#f4f6f8",
              borderBottom: 2,
              borderColor: "divider",
            }}
            icon={<AccountCircleOutlinedIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label="My address book"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#f4f6f8",
              borderBottom: 2,
              borderColor: "divider",
            }}
            icon={<LocationOnOutlinedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="My orders"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#f4f6f8",
              borderBottom: 2,
              borderColor: "divider",
            }}
            icon={<LocalMallOutlinedIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Grid>
      <Grid item sm={9} sx={{ backgroundColor: "#f4f6f8" }}>
        <TabPanel sm={9} value={value} index={0}>
          <Grid
            container
            sx={{
              margin: "1rem",
              padding: "1rem",
              borderRadius: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <Grid item xs={12} sx={{ textAlign: "left" }}>
              <h1>My details</h1>
            </Grid>
            <Grid container sx={{ textAlign: "left" }}>
              <Grid item xs={12}>
                <h2>Personal Information</h2>
                <hr />
              </Grid>
              <Grid container>
                <Grid item xs={4}>
                  <Typography variant="body2">First Name</Typography>
                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="First name"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">Last Name</Typography>

                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Last name"
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2">Birth Date</Typography>

                  <TextField
                    fullWidth
                    type="date"
                    id="outlined-basic"
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Phone number</Typography>

                  <TextField
                    type="tel"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="9999999999"
                    helperText="Keep a 10-digit format with no spaces and dashes."
                  ></TextField>
                </Grid>
                <Grid item>
                  <Button sx={{ px: 4, py: 1 }} variant="contained">
                    Save
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <h2>E-mail address</h2>
                <hr />
              </Grid>
              <Grid container>
                <Grid item xs={5}>
                  <Typography variant="body2">E-mail</Typography>

                  <TextField
                    fullWidth
                    type="email"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="john@example.com"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Password</Typography>

                  <TextField
                    type="password"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Password123"
                  ></TextField>
                </Grid>
                <Grid item>
                  <Button sx={{ px: 4, py: 1 }} variant="contained">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid
            container
            sx={{
              margin: "1rem",
              padding: "1rem",
              borderRadius: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <Grid item xs={12} sx={{ textAlign: "left" }}>
              <h1>My address book</h1>
            </Grid>
            <Grid container sx={{ textAlign: "left" }}>
              <Grid item xs={12}>
                <h2>Address details</h2>
                <hr />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="body2">Address Line 1</Typography>
                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Address line-1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Address Line 2</Typography>

                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Address line-2"
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2">City</Typography>

                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="City name"
                  ></TextField>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2">State</Typography>

                  <TextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="State name"
                  ></TextField>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2">Country</Typography>

                  <TextField
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Country name"
                  ></TextField>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2">Postal Code</Typography>

                  <TextField
                    fullWidth
                    type="number"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="333333"
                  ></TextField>
                </Grid>

                <Grid item xs={12}>
                  <Button sx={{ px: 4, py: 1 }} variant="contained">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid
            container
            sx={{
              margin: "1rem",
              padding: "1rem",
              borderRadius: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <Grid item xs={12} sx={{ textAlign: "left" }}>
              <h1>My orders</h1>
            </Grid>
            <Grid container sx={{ textAlign: "left" }}>
              <Grid item xs={12}>
                <h2>Past orders</h2>
                <hr />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  order details here..
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
}

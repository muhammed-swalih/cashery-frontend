import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/casherylogo.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate} from 'react-router-dom'
function Profile() {
  const [compName, setCompName] = useState();
  const [compAddress, setCompAddress] = useState();
  const [phone, setPhone] = useState();
  const [Business, setBusiness] = useState();

  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate('/sales')
  }
  return (
    <div className=" w-full min-h-screen bg-white">
      <div className=" w-full h-auto">
        <div className=" w-full h-24 flex items-center px-10">
          <img src={logo} alt="" />
        </div>
        <div className=" w-full flex h-[80vh] justify-center items-center">
          <div className=" w-1/2 flex items-center px-5 justify-center ">
            <div className=" w-4/5 h-full  flex items-center justify-center">
              <Grid spacing={3} container>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={12}>
                      <Typography
                        sx={{ fontWeight: "500" }}
                        variant="h4"
                        gutterBottom
                      >
                        Hello, User
                      </Typography>
                    </Grid>
                    <Grid item sm={12}>
                      <Typography variant="body2" color={"gray"} gutterBottom>
                        Please enter your details
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    onChange={(e) => setCompName(e.target.value)}
                    type="text"
                    size="small"
                    required
                    label="Company name"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    onChange={(e) => setCompAddress(e.target.value)}
                    type="text"
                    size="small"
                    required
                    label="Company address"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    size="small"
                    required
                    label="phone"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    onChange={(e) => setBusiness(e.target.value)}
                    type="text"
                    size="small"
                    required
                    label="Business Type"
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ marginTop: "20px" }} item sm={6}>
                  {compName && compAddress && phone && Business ?<Button onClick={handleNavigate} variant="contained" endIcon={<ArrowForwardIcon />}>
                    Register
                  </Button> : ""}
                </Grid>
                <Grid sx={{ marginTop: "20px" }} item sm={12}>
                  <Typography
                    variant="body2"
                    color={"gray"}
                    sx={{ fontWeight: "100 " }}
                  >
                    Contact Terms & Service Privacy Policy
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
          {/* <div className=" w-[600px] h-[750px] bg-cover rounded-l-3xl" style={{backgroundImage : `url(${sidebg})`}}></div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;

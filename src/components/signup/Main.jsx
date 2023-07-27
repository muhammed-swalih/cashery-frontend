import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sidebg from "../../assets/sidebg.webp";
import logo from "../../assets/casherylogo.webp";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div>
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
                          Create Your Account
                        </Typography>
                      </Grid>
                      <Grid item sm={12}>
                        <Typography variant="body2" color={"gray"} gutterBottom>
                          Please enter your details
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      size="small"
                      required
                      label="first name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      size="small"
                      required
                      label="last name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      size="small"
                      required
                      label="email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      size="small"
                      required
                      label="password"
                      fullWidth
                    />
                  </Grid>
                  <div className=" w-full h-auto pl-7 flex  justify-between items-center mt-10">
                    <div className="">
                      <Typography variant="body1">
                        Have an account?{" "}
                        <span className=" text-blue-500">sign in</span>
                      </Typography>
                    </div>
                    <div className=" mt-3">
                      {firstName && lastName && email && password ? (
                        <Button
                          onClick={handleProfile}
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                        >
                          Create account
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
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
      <Grid container spacing={3}></Grid>
    </div>
  );
}

export default Main;

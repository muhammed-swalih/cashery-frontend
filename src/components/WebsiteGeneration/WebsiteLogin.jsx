import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import girl from "../../assets/website assets/girl.png";
import { BsMagic } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function WebsiteLogin() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/generatingwebsite");
  };
  const [website, setWebsite] = useState();
  const [domain, setDomain] = useState();
  const [business, setBusiness] = useState();
  return (
    <div className=" flex h-screen w-full justify-center items-center px-40 ">
      <div className=" flex flex-col gap-10">
        <h1 className=" text-3xl">Generate a Ecommerce website</h1>
        <div>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                onChange={(e) => setWebsite(e.target.value)}
                size="small"
                label="website name"
                required
                InputProps={{ sx: { borderRadius: "10px", width: "400px" } }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                onChange={(e) => setDomain(e.target.value)}
                size="small"
                label="Domain name"
                required
                InputProps={{ sx: { borderRadius: "10px", width: "400px" } }}
              />
            </Grid>
            <Grid item sm={12}>
              {/* <TextField onChange={(e)=> setBusiness(e.target.value)}
                size="small"
                label="Business type"
                required
                InputProps={{ sx: { borderRadius: "10px", width: "400px" } }}
              /> */}
              <FormControl sx={{ width: "400px" }}>
                <InputLabel size="small" id="demo-simple-select-label">
                  Business
                </InputLabel>
                <Select
                  sx={{ borderRadius: "10px" }}
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={business}
                  label="Business"
                  onChange={(e) => setBusiness(e.target.value)}
                >
                  <MenuItem value={"Restaurant "}>Restaurant</MenuItem>
                  <MenuItem value={"Textiles"}>Textiles</MenuItem>
                  <MenuItem value={"Gourmet Store"}>Gourmet Store</MenuItem>
                  <MenuItem value={"Abaya"}>Abaya</MenuItem>
                  <MenuItem value={"supermarket"}>Supermarket</MenuItem>
                  <MenuItem value={"Hypermarket"}>Hypermarket</MenuItem>
                  <MenuItem value={"Furniture"}>Furniture</MenuItem>
                  <MenuItem value={"Cafe"}>Cafe</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Grid item sm={12}>
                <h1 className=" text-xs">
                  The content will be generated from Artificial Intelligence
                </h1>
              </Grid>
              <Grid item sm={12}>
                <Grid item sm={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label="SEO"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label="Content"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item sm={8}>
                <h1>
                  The most used e-commerce logistics and shipping software
                  solution for the best courior for your shipping
                </h1>
              </Grid>
              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label="Shiprocket"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              {website && domain && business ? (
                <Button onClick={handleNavigate} endIcon={<BsMagic />} variant="contained" size="small">
                  Show the magic
                </Button>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <img src={girl} alt="" width={1500} />
      </div>
    </div>
  );
}

export default WebsiteLogin;

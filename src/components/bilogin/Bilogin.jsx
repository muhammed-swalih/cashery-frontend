import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import sidebg from "../../assets/website assets/man.png";
import {useNavigate} from 'react-router-dom'
function Bilogin() {
  const [business, setBusiness] = useState();
  const navigate = useNavigate()
  return (
    <div className=" w-full h-screen flex items-center justify-center px-20 ">
      <div className=" flex justify-between w-full items-center">
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-4xl">Business Intelligence</h1>
            <h1 className=" text-sm w-96">
              The business intelligences helps to you in find your Competitor
              ,Analyze the trends, will generate Offers , and you will get an AI
              coaching for more improvement in business
            </h1>
          </div>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <TextField
                InputProps={{ sx: { width: "400px", borderRadius: "10px" } }}
                fullWidth
                label="product/service"
                required
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
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
            <Grid item sm={12}>
              <TextField
                InputProps={{ sx: { width: "400px", borderRadius: "10px" } }}
                fullWidth
                label="Business location"
                required
                size="small"
              />
            </Grid>
            <Grid item sm={6}>
              <Button onClick={()=>navigate('/ai')} variant="contained">submit</Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <img className=" " src={sidebg} alt="" width={900} />
      </div>
    </div>
  );
}

export default Bilogin;

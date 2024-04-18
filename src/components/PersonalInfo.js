import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
} from "@mui/material";

export default function PersonalInfo({ userData, collectData }) {
  //   const [userData, setuserData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     gender: "",
  //     active: false,
  //   });
  //   const handleChange = (event) => {
  //     const { name, value, type, checked } = event.target;
  //     const newValue = type === "checkbox" ? checked : value;

  //     setuserData({
  //       ...userData,
  //       [name]: newValue,
  //     });
  //   };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(userData);
  //   };
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            label="First Name"
            value={userData.firstName}
            onChange={(e) => collectData(e)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            label="Last Name"
            value={userData.lastName}
            onChange={(e) => collectData(e)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            type="email"
            value={userData.email}
            onChange={(e) => collectData(e)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={userData.gender}
              onChange={(e) => collectData(e)}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="active"
                checked={userData.active}
                onChange={(e) => collectData(e)}
              />
            }
            label="Active"
            labelPlacement="end"
          />
        </Grid>
        {/* <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Grid> */}
      </Grid>
    </form>
  );
}

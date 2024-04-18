import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

export default function SalaryInfo({ userData, collectData }) {
  //   const [formData, setFormData] = useState({
  //     salary: 0,
  //   });

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formData);
  //   };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="salary"
            label="Salary"
            type="number"
            value={userData.salary}
            onChange={(e) => collectData(e)}
            fullWidth
            margin="normal"
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

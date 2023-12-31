import React from "react";
import { Grid, TextField } from "@mui/material";
/* -------------------------------------------------------------------------- */

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth={true}
        label={label}
        autoFocus={autoFocus}
        type={type}
      />
    </Grid>
  );
};

export default Input;

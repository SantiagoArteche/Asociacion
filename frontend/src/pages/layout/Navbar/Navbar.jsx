import { Box, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <Typography
      sx={{
        fontSize: 36,
      }}
      component="h1"
      gutterBottom
      align="center"
      color="white"
      bgcolor="#185457"
      m={0}
      py={1}
    >
      Asociación
    </Typography>
  );
};

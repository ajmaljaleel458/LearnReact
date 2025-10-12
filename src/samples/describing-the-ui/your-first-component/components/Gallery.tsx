import { Grid } from "@mui/material";
import Profile from "./Profile";

type Props = {};

function Gallery({}: Props) {
  return (
    <Grid container spacing={2}>
      <Profile />
      <Profile />
      <Profile />
    </Grid>
  );
}

export default Gallery;

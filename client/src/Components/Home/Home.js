import React, { useEffect, useState } from "react";
import { AppBar, Container, Typography, Grow, Grid } from "@mui/material";
import Posts from "../../Components/Posts/Posts.js";
import Form from "../../Components/Form/Form.js";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
/* -------------------------------------------------------------------------- */

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          display="flex"
          justifyContent="space-around"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={13} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

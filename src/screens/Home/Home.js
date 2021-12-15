import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { GetProposals } from "../../api";
import { Lcard } from "../../components/Lcard/Lcard";
import { Ncard } from "../../components/Ncard/Ncard";

import { useState as hookState } from "@hookstate/core";
import "./home.css";
import { proposalsState } from "../../states";
GetProposals();
const useStyles = makeStyles({});
function Home() {
  const proposals = hookState(proposalsState);
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={4.5}
          md={4}
          xs={12}
          sx={{
            backgroundColor: "transparent",
            padding: "10px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
        >
          <Ncard />
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "valo",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            Proposals
          </Typography>
          <Container
            sx={{
              width: "100%",
              padding: "0 !important",
              margin: 0,
              maxHeight: "60vh",
              backgroundColor: "black",
              borderRadius: "10px",
              overflowY: "scroll",
            }}
            className="scrollbar"
          >
            {proposals.get().map((v) => {
              return (
                <Lcard
                  id={v.id}
                  p1={v.p1}
                  p2={v.p2}
                  entry_fee={v.entry_fee}
                  operator_address={v.operator_address}
                  operators_share={v.operators_share}
                  expire_at={v.expire_at}
                  pool={v.pool}
                  players={v.players}
                />
              );
            })}
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;

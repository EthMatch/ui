import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Lobbycard } from "../../components/Lobbycard/Lobbycard";
import { useState as hookState } from "@hookstate/core";
import "./lobbies.css";
import {   playerSessionState } from "../../states";
import { GetPlayerSessions } from "../../api";
const info = {
  statusCode: 200,
  message: "fetched gameSessions",
  data: {
    lobby_id:
      "0x54dcfb0f312ab463668d82554ca8b3bc91b77c8d8d22ca16759dedc56ed7559b",
    max_players: 2,
    lobby_ready: false,
    timeout: "1970-01-20T04:53:58.000000253+05:30",
    game_log: "",
    allowed_players: [
      "0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f",
      "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    ],
    completed: true,
  },
};
export const Lobbies = () => {
  const lobbies = hookState(playerSessionState);
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
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontFamily: "valo",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            Game Sessions
          </Typography>
          <Container
            sx={{
              width: "100%",
              padding: "0 !important",
              margin: 0,
              maxHeight: "70vh",
              backgroundColor: "black",
              borderRadius: "10px",
              overflowY: "scroll",
            }}
            className="scrollbar"
          >
            {lobbies.get().map((v) => {
              return <Lobbycard
                id={v.lobby_id.slice(0, 30) + "..."}
                status={!v.completed}
                d={v}
              />;
            })}
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

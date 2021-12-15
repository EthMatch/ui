import {
  Button,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ClaimWinnings, GetGameSignature } from "../../api/eth";
import { GAME_URL } from "../../config/config";
import { accountState } from "../../states";

export const Lobbycard = ({ id, status, d }) => {
  const JoinGame = () => {
    GetGameSignature({
      id: d.lobby_id,
    }).then((sig) => {
      window.open(GAME_URL(accountState.get(), d.lobby_id, sig));
    });
  };
  const claim = () => {
    ClaimWinnings({
      id: d.lobby_id,
    });
  };
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "15vh",
          background: "#212121",
          borderLeft: "5px solid #F999B7",
          borderRight: "5px solid #F999B7",
          borderRadius: "20px",
          marginBottom: "40px",
          webkitBoxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          mozBoxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          boxShadow: `0px 0px 15px 0px rgba(249,153,184,0.9)`,
          marginTop: "20px",
          padding: 0,
        }}
      >
        {/* Main Wrapper */}

        <Container maxWidth sx={{ color: "white", padding: "5!important" }}>
          <Container sx={{ padding: "8px !important" }}>
            <Typography
              sx={{ width: "100%", fontSize: "15px", fontFamily: "valo" }}
            >
              LobyId : {id}
            </Typography>

            <Container
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontFamily: "Valo",
                  color: "white",
                  marginTop: "10px",
                  height: "40px",
                  margin: "20px",
                  background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                  fontSize: "12px",
                  marginTop: "10px",
                }}
                onClick={JoinGame}
              >
                Join game
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontFamily: "Valo",
                  color: "white",
                  background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                  fontSize: "12px",
                  marginTop: "10px",
                  height: "40px",
                  margin: "20px",
                }}
                onClick={claim}
              >
                Claim Winnings
              </Button>
            </Container>
          </Container>
        </Container>
      </Card>
    </>
  );
};

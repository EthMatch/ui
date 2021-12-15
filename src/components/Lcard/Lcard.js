import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { BsFillTrophyFill } from "react-icons/all";
import Web3 from "web3";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ApproveProposal } from "../../api/eth";
import "./lcard.css";
import { SignLobby } from "../../api";
const Avatar = (addr) => {
  return `https://avatars.dicebear.com/api/pixel-art/${addr}.svg`;
};
const newNotifier = ({ variant = "success", message = "" }) => {
  return { variant, message };
};
export const Lcard = ({
  id,
  p1,
  entry_fee,
  p2 = null,
  pool,
  players,
  operators_share,
  expire_at,
  operator_address,
}) => {
  const [apiNotifier, setApiNotifier] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState(newNotifier({}));
  const closeAlert = () => {
    setApiNotifier(false);
  };
  const approveProposal = () => {
    ApproveProposal({
      id,
      entry_fee,
      operator_address,
      operators_share,
      players,
    }).then((data) => {
      if (data) {
        SignLobby({
          id,
          signature: data,
        }).then((responses) => {
          if (responses.status == 200) {
            setApiResponse(
              newNotifier({
                variant: "success",
                message: responses.data,
              })
            );
            setApiNotifier(true);
          } else {
            setApiResponse(
              newNotifier({
                variant: "error",
                message: responses.data,
              })
            );
            setApiNotifier(true);
          }
        });
      }
    });
  };

  return (
    <>
      {/* Main card Container */}
      <Card
        sx={{
          display: "flex",
          minHeight: "175px",
          background: "#212121",
          borderLeft: "4px solid #FBFF00",
          borderRight: "4px solid #FBFF00",
          borderRadius: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "25px",
          marginTop: "15px",
          flexDirection: "column",
          webkitBoxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          mozBoxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          boxShadow: `0px 0px 10px 0px rgba(251,255,0,0.9)`,
          fontFamily: "Valo !important",
        }}
      >
        <Snackbar
          open={apiNotifier}
          autoHideDuration={5000}
          onClose={closeAlert}
        >
          <Alert severity={apiResponse.variant} sx={{ width: "100%" }}>
            {apiResponse.message}
          </Alert>
        </Snackbar>
        {/* Player Wrapper */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          {/* Player 1 */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                margin: "5px",
              }}
            >
              <img
                src={Avatar(p1)}
                style={{ width: "25px", height: "25px", borderRadius: "50%" }}
              />
              <Typography
                noWrap="true"
                sx={{
                  color: "white",
                  fontSize: "0.8rem",
                  marginLeft: "3px",
                  fontFamily: "Valo",
                }}
              >
                {p1.slice(0, 12)}
              </Typography>
            </div>

            {/* Player 2 */}

            <div style={{ display: "flex", margin: "5px" }}>
              <img
                src={Avatar(p2)}
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.8rem",
                  marginLeft: "3px",
                  fontFamily: "Valo",
                }}
                noWrap="true"
              >
                {p2.slice(0, 12)}
              </Typography>
            </div>
          </div>

          {/* Operator */}

          <div style={{ float: "right" }}>
            <img
              src={Avatar(operator_address)}
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
            />
          </div>
        </Container>

        {/* Break Line */}

        <hr className="hrtag"></hr>

        {/* Match Details Main Wrapper */}

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Prize Pool Container */}

          <div
            style={{
              width: "33%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "yellow",
                fontWeight: "100",
                fontFamily: "Valo",
              }}
            >
              Prize Pool
            </Typography>

            {/* Sub div In Prize Pool */}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
                border: "2px solid yellow",
                padding: "6px 12px",
                borderRadius: "10px",
              }}
            >
              <BsFillTrophyFill style={{ color: "yellow" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  color: "white",
                }}
              >
                {Web3.utils.fromWei(`${pool}`)}/
                {Web3.utils.fromWei(`${operators_share}`)}
              </Typography>
            </div>
            <Typography
              sx={{ fontSize: "12px", color: "lightgray", marginTop: "10px" }}
            >
              Pool/Operator Share
            </Typography>
          </div>

          {/* Timer */}
          <div
            style={{
              width: "33%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", color: "white", fontFamily: "Valo" }}
            >
              Expiring In
            </Typography>
            <p style={{ fontFamily: "Valo", color: "white" }}>
              {Math.floor((expire_at * 1000 - new Date().getTime()) / 1000)}S
            </p>
          </div>

          {/* Approval Div */}

          <div
            style={{
              width: "33%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="Contained"
              sx={{
                fontFamily: "Valo",
                color: "white",
                background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
                fontSize: "12px",
              }}
              onClick={approveProposal}
            >
              Approve
            </Button>
          </div>
        </Container>
      </Card>
    </>
  );
};

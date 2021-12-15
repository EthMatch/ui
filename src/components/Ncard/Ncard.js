import {
  Button,
  Card,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Snackbar,
  Select,
  TextField,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Web3 from "web3";
import { ENTRY_FEE } from "../../config/config";
import { EnterMatchMaking } from "../../api";
const useStyles = makeStyles({
  inputw: {},
});
const newNotifier = ({ variant = "success", message = "" }) => {
  return { variant, message };
};
export const Ncard = () => {
  const classes = useStyles();
  const [apiNotifier, setApiNotifier] = useState(false);
  const [apiResponse, setApiResponse] = useState(newNotifier({}));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const enterMatchMaking = () => {
    EnterMatchMaking().then((data) => {
      console.log(data)
      if (data.status == 200) {
        setApiResponse(
          newNotifier({
            variant: "success",
            message: JSON.stringify(data.data),
          })
        );
        setApiNotifier(true);
      } else {
        setApiResponse(
          newNotifier({
            variant: "error",
            message: data.data,
          })
        );
        setApiNotifier(true);
      }
    });
  };
  const [age, setAge] = useState("");
  const closeAlert = () => {
    setApiNotifier(false);
  };
  const handlechange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Card
        fluid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "15vh",
          background: "#212121",
          borderLeft: "5px solid #ff4655",
          borderRight: "5px solid #ff4655",
          borderRadius: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginBottom: "40px",
          webkitBoxShadow: `0px 0px 15px 0px rgba(255,70,85,0.9)`,
          mozBoxShadow: `0px 0px 15px 0px rgba(255,70,85,0.9)`,
          boxShadow: `0px 0px 15px 0px rgba(255,70,85,0.9)`,
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
        <FormControl
          sx={{ width: "100px", marginRight: "20px" }}
          variant="standard"
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: "white", fontFamily: "Valo" }}
          >
            Entry Fee
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Emtry Fee"
            onChange={handlechange}
            sx={{ color: "white" }}
          >
            <MenuItem value={Web3.utils.fromWei(ENTRY_FEE)}>
              {Web3.utils.fromWei(ENTRY_FEE)}
            </MenuItem>
          </Select>
        </FormControl>

        <Button
          size="small"
          onClick={enterMatchMaking}
          sx={{
            fontSize: "15px",
            background: `linear-gradient(
135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)`,
            lineHeight: `16px`,
            fontFamily: "valo",
            textOverflow: `ellipsis`,
            height: `32px`,
            borderRadius: `12px`,
            padding: `8px 16px`,
            color: `white`,
          }}
        >
          Enter MatchMaking
        </Button>
      </Card>
    </>
  );
};

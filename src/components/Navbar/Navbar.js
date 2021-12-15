import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/images/ethlogo.webp";
import meta from "../../assets/images/meta.svg";
import { useNavigate } from "react-router-dom";
import { useState as hookState } from "@hookstate/core";
import {
  accountState,
  providerState,
  setWeb3Client,
  balanceState,
} from "../../states";
import Web3 from "web3";
import {
  GetPlayerBalance,
  InitContract,
  CreateAccount,
  AddBalance,
  GetPlayerSessions,
} from "../../api";
import { WithdrawAmount } from "../../api/eth";
const useStyles = makeStyles({
  headBtn: {
    padding: "7.5px 16px !important",
    marginRight: "4px",
    color: "white !important",
    fontSize: "15px !important",
    fontFamily: "Valo !important",
    // '&:hover': { borderBottom: '2px solid red' },
  },
  activeHead: {
    padding: "7.5px 16px !important",
    marginRight: "4px",
    color: "white !important",
    fontSize: "15px !important",
    fontFamily: "Valo !important",
    borderBottom: "2px solid #ff4655 !important",
  },
  metz: {
    width: "50px",
    height: "30px",
    verticalAlign: "middle",
  },
  walletBtn: {
    lineHeight: "16px",
    float: "right !important",
    color: "white !important",
    fontSize: "14px !important",
    background: `transparent !important`,
    borderRadius: "12px !important",
    padding: "8px 16px",
    fontFamily: "Valo !important",
    border: "2px solid #ff4655 !important",
    "&:hover": {
      border: "2px solid blue !important",
    },
  },
  logo: {
    width: "20px",
    marginRight: "6px",
    height: "25px",
    verticalAlign: "middle",
  },
});

const ResponsiveAppBar = ({ active, setActive }) => {
  const classes = useStyles();
  const account = hookState(accountState);
  const provider = hookState(providerState);
  const balance = hookState(balanceState);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [playerNotFound, setPlayerNotFound] = React.useState(false);
  const [alertText, setAlertText] = React.useState("");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    event.preventDefault();
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    event.preventDefault();
  };
  const connectTowallet = async () => {
    if (window.ethereum) {
      let _provider = null;

      _provider = window.web3.currentProvider;
      if (_provider) {
        provider.set(_provider);
        const addressArray = await provider.get().request({
          method: "eth_requestAccounts",
        });
        setWeb3Client(window.web3.currentProvider);
        provider.set(_provider);
        if (addressArray.length > 0) {
          //walletListener(_provider);
          account.set(addressArray[0]);
          console.log("here");
          InitContract();
          GetPlayerBalance().then((data) => {
            console.log(data);
            if (data.err && data.NOTFOUND) {
              setAlertText(
                "Player Not Found! ... Prompting to create a new account"
              );
              setPlayerNotFound(true);
              CreateAccount();
            } else if (data.err) {
              alert("something went wrong");
            } else {
              GetPlayerSessions();
              balance.set(Web3.utils.fromWei(data.balance));
            }
          });
        } else {
        }
      }
    } else {
      alert("NO WALLET FOUND");
    }
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const walletListener = (_provider) => {
    if (window.ethereum) {
      console.log("added listener");
      window.ethereum.on("message", (value) => {
        console.log(value);
      });
      _provider.on("accountsChanged", (accounts) => {
        account.set(accounts[0]);
      });
    }
  };
  const closeAlert = () => {
    setPlayerNotFound(false);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(() => {
    GetPlayerBalance();
  });
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Snackbar
            open={playerNotFound}
            autoHideDuration={5000}
            onClose={closeAlert}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              {alertText}
            </Alert>
          </Snackbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "500",
              fontSize: "16px",
              letterSpacing: "4px",
              alignItems: "center",
              fontFamily: "Valo",
            }}
          >
            <img src={Logo} className={classes.logo} alt="logo " />
            eThmatch
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Button>Home</Button>
              </MenuItem>
              <MenuItem>
                <Button>Lobbies</Button>
              </MenuItem>
              <MenuItem>
                <Button>{balance.get()} MATIC</Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: "500",
              fontSize: "16px",
              letterSpacing: "4px",
              alignItems: "center",
              fontFamily: "Valo",
            }}
          >
            <img src={Logo} className={classes.logo} style={{}} alt="logo " />
            eThmatch
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className={
                active === "Home" ? classes.activeHead : classes.headBtn
              }
              onClick={() => {
                setActive("Home");
                navigate("../", { replace: true });
              }}
            >
              Home
            </Button>

            <Button
              className={
                active === "Lobbies" ? classes.activeHead : classes.headBtn
              }
              onClick={() => {
                setActive("Lobbies");
                GetPlayerSessions();
                navigate("../lobbies", { replace: true });
              }}
            >
              Lobbies
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              className={classes.headBtn}
              onClick={() => {
                AddBalance();
              }}
            >
              {balance.get()} MATIC
            </Button>
            <Button
              className={classes.headBtn}
              onClick={() => {
                WithdrawAmount();
              }}
            >
              Withdraw
            </Button>
            <Button className={classes.walletBtn} onClick={connectTowallet}>
              {account.get() == null ? (
                <img src={meta} className={classes.metz}></img>
              ) : (
                ""
              )}
              <Typography
                variant="p"
                sx={{
                  fontSize: "0.7rem",
                  display: { xs: "none", md: "block" },
                }}
              >
                {account.get() != null
                  ? "Connected: " +
                    String(account.get()).substring(0, 12) +
                    "..." +
                    String(account.get()).substring(38)
                  : `Connect To Wallet`}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

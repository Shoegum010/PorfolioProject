import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import userImage from "../resources/images/dpImage.JPG";
import "../resources/css/dashboard.css";
// import userName from
import {
  DEFAULT_ACTIVE_PAGE,
  DEFAULT_DRAWER_FLAG,
  DEFAULT_SIDE_MENU,
  IconTitleMap,
  SECOND_SIDE_MENU,
  userProfileDefaultData,
} from "../Utils/Constants";
import {
  Avatar,
  Menu,
  MenuItem,
  Skeleton,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Academics from "./Academics";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Resume from "./Resume";
import SocialProfiles from "./SocialProfiles";
import BreadCrumbComponent from "./BreadCrumbComponent";
import { setDrawerOpen, setSnackbarOpen } from "../redux/slices/systemSlice";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setActiveSideMenu } from "../redux/slices/navSlice";
import { CloseRounded } from "@mui/icons-material";
import Home from "./Home";
import Profile from "./Profile";


const drawerWidth = 240;

const openedMixin = (theme) => ({ 
  background:'#C4E1F6',
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background:'#C4E1F6',
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
 
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor:"#C0EBA6",
  alignItems: "center",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
 
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  // const [drawerOpen, setDrawerOpen] = React.useState(DEFAULT_DRAWER_FLAG);
  // const [ActivePage, setActivePage] = React.useState(DEFAULT_ACTIVE_PAGE);
  const [dataStatus, setDataStatus] = React.useState(false);
  // const [activeSideMenu, setactiveSideMenu] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = userProfileDefaultData.Name;
  const openAvatarMenu = Boolean(anchorEl);

  const dispatch = useDispatch();
  const ActivePage = useSelector((state) => state.navigation.ActivePage);
  const activeSideMenu = useSelector(
    (state) => state.navigation.activeSideMenu
  );
  const drawerOpen = useSelector((state) => state.system.drawerOpen);
  const openSnackbar = useSelector((state) => state.system.snackbarOpen);
  const snackbarMessage = useSelector((state) => state.system.snackbarMessage);
  const handleDrawerOpen = () => {
    dispatch(setDrawerOpen({ drawerOpen: true }));
  };
  const handleDrawerClose = () => {
    dispatch(setDrawerOpen({ drawerOpen: false }));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };

  const AvatarMenuClickHandler = (index) => {
    setAnchorEl(null);
    if (index === 0) {
      return;
    }
    let message = "";
    if (index === 1) message = "Resume Download Started";
    else if (index === 2) message = "Dark Mode is On";
    dispatch(setSnackbarOpen({ snackbarOpen: true, snackbarMessage: message }));
  };

  const activeBtnChange = (index) => {
    setDataStatus(true);
    dispatch(setActivePage({ activePage: DEFAULT_SIDE_MENU[index].title }));
    dispatch(setActiveSideMenu({ activeSideMenu: index }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbarOpen({ snackbarOpen: false, snackbarMessage: null }));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseRounded fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ display: "flex" }} className="MainContainer">
      <CssBaseline />
      <AppBar position="fixed" open={drawerOpen} className="AppBar" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
           
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(drawerOpen && { display: "none" }), 
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {IconTitleMap[ActivePage]} {ActivePage}
          </Typography>
        </Toolbar>
        <Box className="profile">
          <Avatar
            alt={userName}
            src={userImage}
            sx={{ mr: 2, border: "3px solid white", cursor: "pointer" }}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openAvatarMenu}
            onClose={handleCloseAvatarMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* Todo: Extract out in a list in constants file also add resume */}
            <MenuItem  onClick={() => AvatarMenuClickHandler(0)}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => AvatarMenuClickHandler(1)}>
              Download Resume
            </MenuItem>
            <MenuItem onClick={() => AvatarMenuClickHandler(2)}>
              Dark Mode
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>

      <Drawer  variant="permanent" open={drawerOpen} className="Drawer" sx={{background:"transparent"}}>
        <DrawerHeader>
          <Avatar
            alt="User Image"
            src={userImage}
            sx={{ border: "3px solid white" }}
          />
          <h1
            style={{ marginRight: "auto", marginLeft: "2%", fontSize: "20px" }}
          >
            {userName}
          </h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        
        <List className="sideMenuContainer" >
          {DEFAULT_SIDE_MENU.map((data, index) => (
            <div
              key={index}
              className={drawerOpen ? "sideFloatClass" : ""}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Link className="sideMenuLinks"  to={data.link}>
                <ListItem
               
                  key={index}
                  disablePadding
                  sx={{ display: "block"  }}
                  className={
                    index === activeSideMenu
                      ? drawerOpen
                        ? "activeOpenBtn"
                        : "activeCloseBtn"
                      : "sideMenuItem"
                  }
                  onClick={() => activeBtnChange(index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: drawerOpen ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <Tooltip title={data.title} placement="right">
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: drawerOpen ? 3 : "auto",
                          justifyContent: "center",
                          color: index === activeSideMenu ? "white" : "gray",
                        }}
                      >
                        {data.icon}
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={data.title}
                      sx={{ opacity: drawerOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
     
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <BreadCrumbComponent data={["Portfolio", ActivePage]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/social-profile" element={<SocialProfiles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="*" element={<h1>Jai sairam! Page not found</h1>} />
        </Routes>
        {dataStatus ? (
          <div>
            
          </div>
        ) : (
          <div style={{ padding: "1%" }}>
            <Skeleton
              sx={{ mb: 1, width: "98%" }}
              variant="rectangular"
              height={80}
            />
            <Skeleton
              sx={{ mb: 1, width: "90%" }}
              variant="rectangular"
              height={100}
            />
            <Skeleton
              sx={{ mb: 1, width: "100%" }}
              variant="rectangular"
              height={210}
            />
          </div>
        )}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
    </Box>
  );
}

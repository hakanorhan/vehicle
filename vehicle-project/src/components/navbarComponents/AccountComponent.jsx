import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

/* Import for initialization  */
import { GetI18 } from "../../functions/GetI18";

import { lime, grey } from '@mui/material/colors';

export default function AccountComponent() {
  const [t, i18n] = GetI18();
  const header = t("header", { returnObjects: true });

  /* Handling open and close. Account menu */
  const [userAccount, setUserAccount] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setUserAccount(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserAccount(null);
  };

  const colorLime = lime[500]
  const greyColor = grey[900]

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Account">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{bgcolor:colorLime, color: greyColor}}> H </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={userAccount}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(userAccount)}
        onClose={handleCloseUserMenu}
      >
        {header.account.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

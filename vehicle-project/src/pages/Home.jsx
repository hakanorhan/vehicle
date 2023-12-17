import { Box, Typography } from "@mui/material";
import React from "react";

import Search from "../components/homeComponents/Search";
import Services from "../components/homeComponents/Services";
import News from "../components/homeComponents/News";

/**
 * Includes search, services and news components.
 * @returns page home
 */
export default function Home() {
  return (
    <Box>
      <Search />
      <Services />
      <News />
    </Box>
  );
}

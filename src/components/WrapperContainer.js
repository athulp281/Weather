import { Container } from "@mui/material";
import React from "react";

function WrapperContainer({ children }) {
    return <Container sx={{ marginTop: 20 }}>{children}</Container>;
}

export default WrapperContainer;

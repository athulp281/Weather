"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "@fontsource/open-sans";
import logo from "../../assets/Logo.png";
import Image from "next/image";
import { MenuItems } from "./NavConfig";

const Navbar = () => {
    const pathname = usePathname();

    // const menuItems = [
    //     { text: "Home", href: "/" },
    //     { text: "About", href: "/about" },
    //     { text: "Contact", href: "/contact" },
    // ];

    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: "white", zIndex: 1100 }} // Changed position to "fixed" and adjusted zIndex
        >
            <Toolbar>
                <Box
                    edge="start"
                    color="inherit"
                    // aria-label="home"
                    component={Link}
                    href="/"
                    sx={{ pt: 1 }}
                >
                    <Image src={logo} alt="logo" height={60} width={60} />

                    {/* <AcUnitIcon sx={{ height: 40, width: 40 }} /> */}
                </Box>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: "Poppins ",
                        flexGrow: 1,
                        color: "black",
                        fontWeight: "bolder",
                        // fontFamily: "Open Sans",
                        fontStyle: "normal",
                    }}
                >
                    Weather
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    {MenuItems.map((item) => (
                        <MenuItem
                            key={item.text}
                            component={Link}
                            href={item.href}
                            sx={{
                                wordSpacing: 3,
                                color:
                                    pathname === item.href
                                        ? "white"
                                        : "#9e9e9e",
                                borderRadius: 5,
                                backgroundColor:
                                    pathname === item.href
                                        ? "#1f1f1f"
                                        : "inherit",
                            }}
                        >
                            {item.text}
                        </MenuItem>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

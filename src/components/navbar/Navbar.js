"use client";
import React, { useEffect, useState } from "react";
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
import useResponsive from "@/Hooks/useResponsive";
import MobileNavBar from "./MobileNavBar";
import ChildrenNav from "./ChildrenNav";

const Navbar = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const pathname = usePathname();
    console.log(pathname);
    const [navItem, setNavItem] = useState(null);
    console.log(navItem);
    // useEffect(() => {
    //     if (navItem?.children) {
    //     } else {
    //         setNavItem(null);
    //     }
    // }, [pathname]);

    return (
        <>
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
                        onClick={() => setNavItem(null)}
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
                    {smUp ? (
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {MenuItems.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.id}
                                        component={Link}
                                        href={item.href}
                                        onClick={() => {
                                            setNavItem(item);
                                        }}
                                        sx={{
                                            wordSpacing: 3,
                                            color:
                                                pathname === item.href ||
                                                pathname.startsWith(item.href)
                                                    ? "white"
                                                    : "#9e9e9e",
                                            borderRadius: 5,
                                            backgroundColor:
                                                pathname === item.href ||
                                                pathname.startsWith(item.href)
                                                    ? "#1f1f1f"
                                                    : "inherit",
                                        }}
                                    >
                                        {item.text}
                                    </MenuItem>
                                );
                            })}
                        </Box>
                    ) : (
                        <MobileNavBar setNavItem={setNavItem} />
                    )}
                </Toolbar>
            </AppBar>

            {navItem ? (
                <Box
                    sx={{
                        mt: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {" "}
                    <ChildrenNav navItem={navItem} />{" "}
                </Box>
            ) : null}
        </>
    );
};

export default Navbar;

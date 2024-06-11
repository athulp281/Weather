"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "@fontsource/open-sans";
import { MenuItems } from "./NavConfig";
import useResponsive from "@/Hooks/useResponsive";
import MobileNavBar from "./MobileNavBar";
import ChildrenNav from "./ChildrenNav";
import CompanyIcon from "../CompanyIcon";

const Navbar = () => {
    const router = useRouter();
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const pathname = usePathname();
    const [navItem, setNavItem] = useState(null);
    // useEffect(() => {
    //     // Retrieve the navItem from local storage when the component mounts
    //     const savedNavItem = localStorage.getItem("navItem");
    //     if (savedNavItem) {
    //         setNavItem(JSON.parse(savedNavItem));
    //     }
    // }, []);

    // useEffect(() => {
    //     // Save the navItem to local storage whenever it changes
    //     if (navItem) {
    //         localStorage.setItem("navItem", JSON.stringify(navItem));
    //     }
    // }, [navItem]);
    // -----------------------------------------------------------------------------------
    const findItemByPath = (MenuItems, pathname) => {
        for (const item of MenuItems) {
            if (item.href.startsWith(pathname)) {
                return item;
            }
            if (item.children) {
                const found = findItemByPath(item.children, pathname);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };
    function getFirstPathSegment(path) {
        const segments = path.split("/").filter(Boolean);
        return segments.length > 0 ? `/${segments[0]}` : "/";
    }

    useEffect(() => {
        const paths = MenuItems.find((item) => {
            return item.href === getFirstPathSegment(pathname);
        });
        router.push(pathname);
        setNavItem(paths);
    }, []);

    useEffect(() => {
        const item = findItemByPath(MenuItems, pathname);
        if (item) {
            if (item.children) {
                setNavItem(item);
            } else if (item.text === "Home") {
                setNavItem(null);
            }
        }
    }, [pathname]);

    return (
        <>
            <AppBar
                position="fixed"
                sx={{ backgroundColor: "white", zIndex: 1100 }} // Changed position to "fixed" and adjusted zIndex
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <CompanyIcon setNavItem={setNavItem} />
                    </Box>

                    {smUp ? (
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {MenuItems.map((item) => {
                                return (
                                    <>
                                        {item.text === "Home" ? null : (
                                            <MenuItem
                                                key={item.id}
                                                component={Link}
                                                href={item.href}
                                                // onClick={() => {
                                                //     setNavItem(item);
                                                // }}
                                                sx={{
                                                    wordSpacing: 3,
                                                    color:
                                                        pathname ===
                                                            item.href ||
                                                        pathname.startsWith(
                                                            item.href
                                                        )
                                                            ? "white"
                                                            : "#9e9e9e",
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        pathname ===
                                                            item.href ||
                                                        pathname.startsWith(
                                                            item.href
                                                        )
                                                            ? "#1f1f1f"
                                                            : "inherit",
                                                }}
                                            >
                                                {item.text}
                                            </MenuItem>
                                        )}
                                    </>
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
                        mt: 8,
                        display: "flex",
                        justifyContent: "center",
                        bgcolor: "black",
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

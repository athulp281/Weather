"use client";
import { Box, Divider, MenuItem, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import useResponsive from "@/Hooks/useResponsive";

function ChildrenNav({ navItem }) {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const pathname = usePathname();
    return (
        <div>
            <Box>
                <Stack direction={"row"} spacing={2}>
                    {navItem.children?.map((item) => {
                        return (
                            <Box key={item.id}>
                                <MenuItem
                                    key={item.id}
                                    component={Link}
                                    href={item.href}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        textAlign: "center",

                                        fontSize: smUp ? "" : 6,
                                        color:
                                            pathname === item.href
                                                ? "black"
                                                : "#9e9e9e",
                                        borderRadius: 5,
                                        border: 2,
                                        borderColor:
                                            pathname === item.href
                                                ? "black"
                                                : "inherit",
                                        // backgroundColor:
                                        //     pathname === item.href
                                        //         ? "#1f1f1f"
                                        //         : "inherit",
                                    }}
                                >
                                    {item.name}
                                </MenuItem>
                                <Box mt={1}>
                                    <Divider
                                        sx={{
                                            borderBottomWidth: 3,
                                            backgroundColor:
                                                pathname === item.href
                                                    ? "black"
                                                    : "",
                                        }}
                                    />
                                </Box>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
        </div>
    );
}

export default ChildrenNav;

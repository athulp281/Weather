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
            <Box mt={2}>
                <Stack direction={"row"} spacing={smUp ? 2 : 1}>
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
                                        fontWeight:
                                            pathname === item.href
                                                ? "bolder"
                                                : "",

                                        fontSize: smUp ? "" : 7,
                                        color:
                                            pathname === item.href
                                                ? "white"
                                                : "#9e9e9e",
                                        borderRadius: 5,
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
                                                    ? "white"
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

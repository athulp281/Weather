import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import useResponsive from "@/Hooks/useResponsive";
import Image from "next/image";
import logo from "../assets/Logo.png";
function Footer() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    minHeight: 200,
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    alignItems: "center",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    <Divider sx={{ bgcolor: "#797979" }} />
                    <Stack direction={smUp ? "row" : "column"} spacing={2}>
                        <Stack direction={mdUp ? "row" : "column"} spacing={2}>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: smUp ? "50%" : "100%",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: 4,
                                    }}
                                >
                                    <Stack direction={"row"}>
                                        <Box
                                            edge="start"
                                            color="inherit"
                                            aria-label="home"
                                        >
                                            <Image
                                                src={logo}
                                                alt="logo"
                                                height={50}
                                                width={50}
                                            />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                mt: 1,
                                                flexGrow: 1,
                                                fontWeight: "bolder",
                                                fontFamily: "Open Sans",
                                                fontStyle: "normal",
                                            }}
                                        >
                                            Weather
                                        </Typography>
                                    </Stack>
                                    <Box>
                                        <Typography
                                            variant="para"
                                            sx={{ color: "#797979" }}
                                        >
                                            Stay updated with the latest weather
                                            forecasts and alerts for your area.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: smUp ? "50%" : "100%",
                                    padding: 4,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle"
                                        sx={{ fontWeight: "bolder" }}
                                    >
                                        Services
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Current Weather
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Weather forcasting
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Weather News
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Weather Map
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        <Stack direction={mdUp ? "row" : "column"} spacing={2}>
                            <Box
                                sx={{
                                    width: smUp ? "50%" : "100%",
                                    padding: 4,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle"
                                        sx={{ fontWeight: "bolder" }}
                                    >
                                        Company
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Terms & Conditions
                                    </Typography>
                                    <Typography sx={{ color: "#797979" }}>
                                        Privacy Policy
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: smUp ? "50%" : "100%",
                                    padding: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle"
                                        sx={{ fontWeight: "bolder" }}
                                    >
                                        Subscribe
                                    </Typography>
                                    <Box
                                        pt={1}
                                        width={smUp ? 300 : "100%"}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <TextField
                                            label="Email"
                                            placeholder="Enter your email"
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    borderRadius: 8, // Adjust the border radius as needed
                                                    color: "white", // Placeholder text color
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "#9e9e9e", // Label text color
                                                },
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": {
                                                        borderColor: "#9e9e9e", // Outline border color
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "white", // Outline border color on hover
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "white", // Outline border color when focused
                                                    },
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: smUp
                                            ? "flex-end"
                                            : "center",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            color: "white",
                                            borderRadius: 6,
                                            bgcolor: "#797979",
                                            mt: 2,
                                            // mr: 8,
                                        }}
                                    >
                                        Sub
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"}></Stack>
                    <Divider sx={{ bgcolor: "#797979" }} />
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="caption" sx={{ color: "#797979" }}>
                    Copyright © 2024 Weather .
                </Typography>
            </Box>
        </div>
    );
}

export default Footer;

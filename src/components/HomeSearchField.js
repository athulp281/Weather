import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useResponsive from "@/Hooks/useResponsive";

function HomeSearchField() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                    width: "100%",
                }}
            >
                <Stack direction={"row"} spacing={2}>
                    <TextField
                        label="Enter your location"
                        placeholder="Enter your place"
                        fullWidth
                        sx={{
                            width: smUp ? 500 : "100%",
                            borderRadius: 10,
                            backgroundColor: "white",
                            "& .MuiInputBase-root": {
                                borderRadius: 8, // Adjust the border radius as needed
                                color: "black", // Placeholder text color
                            },
                            "& .MuiInputLabel-root": {
                                color: "#9e9e9e", // Label text color
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#9e9e9e", // Outline border color
                                },
                                "&:hover fieldset": {
                                    borderColor: "black", // Outline border color on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white", // Outline border color when focused
                                },
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                color: "white",
                                backgroundColor: "#1f1f1f",
                                borderRadius: 15,
                            }}
                        >
                            <SearchIcon />
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}

export default HomeSearchField;

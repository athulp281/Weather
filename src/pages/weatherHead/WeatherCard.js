import {
    Box,
    Button,
    Card,
    Stack,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import useResponsive from "@/Hooks/useResponsive";
import axios from "axios";

function WeatherCard() {
    const GlassCard = styled(Card)(({ theme }) => ({
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        color: "white",
        height: 500,
        width: smUp ? 400 : mdUp ? "100%" : "100%",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: ".1px solid rgba(255, 255, 255, 0.1)",
    }));
    // ---------------------------------------------------------------------
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not available");
        }
    }, []);
    useEffect(() => {
        const fetchWeather = async () => {
            if (location.longitude && location.latitude) {
                try {
                    const response = await axios.get(
                        `api.openweathermap.org/data/2.5/forecast?lat=11.050976&lon=76.071098&appid=24324da55952f125184674baf44cb048&units=metric&q=malappuram`,
                        {
                            params: {
                                lat: location.latitude,
                                lon: location.longitude,
                                appid: "24324da55952f125184674baf44cb048",
                                units: "metric",
                            },
                        }
                    );
                    setWeatherData(response.data);
                    console.log("response.data", response.data);
                } catch (error) {
                    console.log("error", error);
                    console.error("Error fetching weather data", error);
                }
            }
        };

        fetchWeather();
    }, []);

    return (
        <div>
            <GlassCard>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Stack
                        sx={{ padding: smUp ? null : 2 }}
                        direction={"row"}
                        spacing={2}
                    >
                        <TextField
                            label="location"
                            placeholder="Enter your place"
                            sx={{
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
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <Stack direction={"column"} spacing={2}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                            }}
                        >
                            <ThunderstormIcon sx={{ height: 60, width: 60 }} />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 40,
                                    fontFamily: "Forum",
                                    color: "black",
                                }}
                            >
                                22°C
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 20,
                                    fontFamily: "Forum",
                                    color: "black",
                                }}
                            >
                                MALAPPURAM
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 4,
                        mt: 5,
                    }}
                >
                    <Box>
                        <Stack direction={"row"}>
                            <Box>
                                <WaterIcon
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        color: "black",
                                    }}
                                />
                            </Box>
                            <Box>
                                <Box sx={{ mt: 1, color: "black" }}>
                                    <Typography>22%</Typography>
                                    <Typography>Humidity</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={"row"}>
                            <Box>
                                <AirIcon
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        color: "black",
                                    }}
                                />
                            </Box>
                            <Box>
                                <Box sx={{ mt: 1, color: "black" }}>
                                    <Typography>18 km/h</Typography>
                                    <Typography>Wind Speed</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </GlassCard>
        </div>
    );
}

export default WeatherCard;

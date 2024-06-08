"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../weatherHead/WeatherCard";
import { Box, Stack, Typography } from "@mui/material";
import { AnimatedComponent } from "../../components/timeStatus";
import Content from "./Content";
import useResponsive from "@/Hooks/useResponsive";
import Footer from "@/components/Footer";
import morningImg from "../../assets/Banner/morning.jpg";

function HomePage() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const styles = {
        fontFamily: "Poppins ", // Change to your preferred font family
        fontWeight: "bold",
        fontSize: mdUp ? "4rem" : "2rem", // Adjust as needed
        lineHeight: "1.5", // Adjust as needed
        marginBottom: "1.5rem", // Add space between lines
    };
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BASE_URL =
        "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}";
    const lat = 37.7749;
    const lon = -122.4194;
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    "api.openweathermap.org/data/2.5/forecast",
                    {
                        params: {
                            lat: lat,
                            lon: lon,
                            exclude: "minutely,hourly",
                            appid: "24324da55952f125184674baf44cb048",
                        },
                    }
                );
                setWeatherData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [lat, lon]);

    useEffect(() => {
        localStorage.removeItem("navItem");
    }, []);

    const Card = () => {
        return (
            <Box
                sx={{
                    width: mdUp ? "60%" : "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {/* <script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core
                    defer
                ></script>
                <div
                    class="elfsight-app-4695db70-b779-49d1-8d27-60fa9cf42f90"
                    data-elfsight-app-lazy
                ></div> */}
                <WeatherCard />
            </Box>
        );
    };
    const Title = () => {
        return (
            <Box sx={{ width: mdUp ? "60%" : "100%" }}>
                <Box>
                    <AnimatedComponent />
                    <Typography variant="h4" style={styles}>
                        Stay updated with the latest weather <br /> forecasts
                        and alerts for your area.
                    </Typography>
                </Box>
            </Box>
        );
    };

    return (
        <div>
            <Box
                sx={{
                    backgroundImage: `url(${morningImg.src})`,
                    backgroundSize: "cover",
                    mt: 8,
                    p: 4,
                }}
            >
                <Stack direction={mdUp ? "row" : "column"} spacing={2}>
                    {mdUp ? (
                        <>
                            <Card />
                            <Title />
                        </>
                    ) : (
                        <>
                            <Title />
                            <Card />
                        </>
                    )}
                </Stack>
            </Box>
            <Box sx={{ padding: smUp ? 4 : 3 }}>
                <Content />
            </Box>
            <Footer />
        </div>
    );
}

export default HomePage;

"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../weatherHead/WeatherCard";
import { Box, Container, Stack, Typography } from "@mui/material";
import TimeStatus from "../../components/timeStatus/TimeStatus";
import MapView from "./MapView";
import { AnimatedComponent } from "../../components/timeStatus";
import Content from "./Content";
import useResponsive from "@/Hooks/useResponsive";
import Footer from "@/components/Footer";

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
    const Card = () => {
        return (
            <Box
                sx={{
                    width: mdUp ? "40%" : "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
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
            <Box sx={{ padding: 6, mt: 15 }}>
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

                <Content />
            </Box>
            <Footer />
        </div>
    );
}

export default HomePage;

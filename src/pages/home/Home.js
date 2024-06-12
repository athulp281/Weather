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
import noonimg from "../../assets/Banner/noon.jpg";
import nightimg from "../../assets/Banner/night.jpg";
import HomeSearchField from "@/components/HomeSearchField";

function HomePage() {
    const smUp = useResponsive("up", "sm");
    const mdUp = useResponsive("up", "md");
    const styles = {
        fontFamily: "Poppins ",
        fontWeight: "bold",
        fontSize: mdUp ? "2.5rem" : "1rem",
        lineHeight: "1.5",
        marginBottom: "1.5rem",
    };
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const getCurrentHour = () => {
            const now = new Date();
            return now.getHours();
        };

        const setImageBasedOnTime = () => {
            const img1 = morningImg;
            const img2 = noonimg;
            const img3 = nightimg;

            const hour = getCurrentHour();
            let imagePath = "";

            if (hour >= 6 && hour < 12) {
                imagePath = img1;
            } else if (hour >= 12 && hour < 18) {
                imagePath = img2;
            } else {
                imagePath = img3;
            }

            setImageSrc(imagePath);
        };

        setImageBasedOnTime();
    }, []);

    // useEffect(() => {
    //     localStorage.removeItem("navItem");
    // }, []);

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
    const Title = ({ banner }) => {
        return (
            <Box sx={{ width: mdUp ? "60%" : "100%" }}>
                <Box>
                    <AnimatedComponent />
                    <Typography
                        variant="h1"
                        style={styles}
                        sx={{
                            color:
                                banner.src ===
                                "/_next/static/media/noon.93b8c395.jpg"
                                    ? "white"
                                    : "",
                        }}
                    >
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
                    backgroundImage: `url(${imageSrc.src})`,
                    backgroundSize: "cover",
                    mt: 8,
                    p: 4,
                }}
            >
                <HomeSearchField />
                <Stack direction={mdUp ? "row" : "column"} spacing={2}>
                    {mdUp ? (
                        <>
                            <Card />
                            <Title banner={imageSrc} />
                        </>
                    ) : (
                        <>
                            <Title banner={imageSrc} />
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

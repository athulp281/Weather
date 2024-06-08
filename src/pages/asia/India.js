"use client";
import NewsCard from "@/components/NewsCard";
import TopStories from "@/components/TopStories";
import {
    AsiaTopNews,
    AsiaTreandingNews,
    AsiaWeatherNews,
    IndiaWeatherNews,
} from "@/data/demoData";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useResponsive from "@/Hooks/useResponsive";
import Footer from "@/components/Footer";
import NavigationAccordion from "@/components/Accordion";

function India() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Container sx={{ marginTop: 2 }}>
                <Box sx={{ bgcolor: "#F5F5F5", width: "100%", height: 250 }}>
                    Ads
                </Box>
            </Container>

            <Container
                sx={{
                    mb: 3,
                    mt: 3,
                    display: "flex",
                    flexDirection: mdUp ? "row" : "column",
                }}
            >
                <Box width={mdUp ? "70%" : "100%"}>
                    <Box>
                        <Typography padding={1}>India Top News</Typography>
                    </Box>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {IndiaWeatherNews.map((item) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={item.id}>
                                    <NewsCard
                                        title={item.title}
                                        description={item.description}
                                        img={item.image}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Box>
                        <Typography padding={1}>India Weather News</Typography>
                    </Box>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {AsiaWeatherNews.map((item) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={item.id}>
                                    <NewsCard
                                        title={item.title}
                                        description={item.description}
                                        img={item.image}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Box mt={2}>
                        <NavigationAccordion />
                    </Box>
                </Box>
                <Box
                    width={mdUp ? "30%" : "100%"}
                    ml={mdUp ? 2 : null}
                    mt={mdUp ? null : 2}
                >
                    <Box sx={{ bgcolor: "#F5F5F5" }}>
                        {AsiaTreandingNews.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <TopStories
                                        title={item.title}
                                        description={item.description}
                                        timestamp={item.timestamp}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
}

export default India;

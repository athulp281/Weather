import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
    africaTrending,
    asiaTrending,
    europeTrending,
    news,
    northAmericaTrending,
    southAmericaTrending,
} from "../../data/demoData";
import NewsCard from "@/components/NewsCard";
import NewsGrid from "@/components/NewsGrid";
import NavigationButton from "@/components/NavigationButton";

const NewsGridMapData = [
    {
        id: 1,
        title: "Asia Trending",
        data: asiaTrending,
        link: "/asia",
    },
    {
        id: 2,
        title: "Africa Trending",
        data: africaTrending,
        link: "/africa",
    },
    {
        id: 3,
        title: "Europe Trending",
        data: europeTrending,
        link: "/europe",
    },
    {
        id: 4,
        title: "North America Trending",
        data: northAmericaTrending,
        link: "/north-america",
    },
    {
        id: 5,
        title: "South America Trending",
        data: southAmericaTrending,
        link: "/south-america",
    },
];

function NewsSection() {
    return (
        <div>
            <Paper
                elevation={0}
                sx={{
                    // bgcolor: "#F5F5F5",
                    p: 1,
                    borderRadius: 1,
                }}
            >
                <Typography variant="h4">Weather News</Typography>
                <Box>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        {news.map((item, index) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        key={index}
                                    >
                                        <NewsCard
                                            title={item.title}
                                            description={item.description}
                                            img={item.image}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                    {NewsGridMapData.map((item) => {
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    bgcolor: "#F5F5F5",
                                    padding: 2,
                                    mt: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <NewsGrid
                                    newsData={{
                                        title: item.title,
                                        news: item.data,
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        p: 1,
                                    }}
                                >
                                    <NavigationButton pathName={item.link} />
                                </Box>
                            </Box>
                        );
                    })}

                    {/* -------------------------------------------------- */}
                </Box>
            </Paper>
        </div>
    );
}

export default NewsSection;

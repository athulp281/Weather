import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";

export default function NewsGrid({ newsData }) {
    const { title, news } = newsData;
    return (
        <>
            <Box>
                <Typography padding={1}>{title}</Typography>
            </Box>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {news.map((item) => {
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
        </>
    );
}

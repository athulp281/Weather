import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { news } from "../../data/demoData";
import NewsCard from "@/components/NewsCard";

function NewsSection() {
    return (
        <div>
            <Paper
                elevation={0}
                sx={{
                    bgcolor: "#F5F5F5",
                    p: 5,
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
                                <Grid item xs={6} sm={6} md={6} key={index}>
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
                </Box>
            </Paper>
        </div>
    );
}

export default NewsSection;

import { Box, Container, Stack } from "@mui/material";
import React from "react";
import MapView from "./MapView";
import NewsSection from "./NewsSection";
import TopStories from "@/components/TopStories";
import { topStories } from "../../data/demoData";
import useResponsive from "@/Hooks/useResponsive";
import Footer from "@/components/Footer";

const ContentSection = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <>
            <section>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: 10,
                    }}
                >
                    <Stack direction={mdUp ? "row" : "column"} spacing={1}>
                        <Box sx={{ width: mdUp ? "70%" : "100%" }}>
                            <MapView />
                            <NewsSection />
                        </Box>
                        <Box
                            sx={{
                                width: mdUp ? "30%" : "100%",
                                backgroundColor: "#F5F5F5",
                                borderRadius: 1,
                            }}
                        >
                            {topStories.map((item) => {
                                return (
                                    <Box key={item.id}>
                                        <TopStories
                                            title={item.title}
                                            description={item.description}
                                            timestamp={item.timestamp}
                                            img={item.image}
                                        />
                                    </Box>
                                );
                            })}
                        </Box>
                    </Stack>
                </Box>
            </section>
        </>
    );
};

function Content() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            {smUp ? (
                <Container>
                    <ContentSection />
                </Container>
            ) : (
                <Box>
                    <ContentSection />
                </Box>
            )}
        </div>
    );
}

export default Content;

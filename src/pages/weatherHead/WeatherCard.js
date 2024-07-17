import { Box, Card, Stack, Typography, styled } from "@mui/material";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import useResponsive from "@/Hooks/useResponsive";

function WeatherCard() {
    const GlassCard = styled(Card)(({ theme }) => ({
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        color: "white",
        height: 250,
        width: smUp ? 400 : mdUp ? "100%" : "100%",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: ".1px solid rgba(255, 255, 255, 0.1)",
    }));
    // ---------------------------------------------------------------------
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");

    return (
        <div>
            <GlassCard>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    <Stack direction={"column"} spacing={0.5}>
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
                                mt: 0,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 30,
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
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 15,
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
                                <Box sx={{ mt: 0, color: "black" }}>
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
                                <Box sx={{ mt: 0, color: "black" }}>
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

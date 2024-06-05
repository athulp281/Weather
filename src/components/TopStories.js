import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function TopStories({ img, title, description, timestamp }) {
    return (
        <div>
            <Box width={"100%"} sx={{ padding: 3 }}>
                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <Box>
                            <Typography variant="overline">{title}</Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    lineHeight: 1.2,
                                    color: "#797979",
                                    textAlign: "justify",
                                    fontFamily: "Forum",
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption">
                                {timestamp}
                            </Typography>
                        </Box>
                    </Box>
                    <Box pt={4}>
                        <Box>
                            <Image
                                width={60}
                                height={60}
                                style={{ borderRadius: 5 }}
                                src="https://www.fda.gov/files/CDER-whatsnew.png"
                                alt="image"
                            />
                        </Box>
                    </Box>
                </Stack>
                <Box>
                    <Divider sx={{ bgcolor: "#797979" }} />
                </Box>
            </Box>
        </div>
    );
}

export default TopStories;

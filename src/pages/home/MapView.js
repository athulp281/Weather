import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

function MapView() {
    return (
        <div>
            <Paper
                elevation={3}
                sx={{
                    width: "100%",
                    height: 37,

                    padding: 1,
                }}
            >
                <Typography variant="h6">Weather Map</Typography>
            </Paper>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15652.67711472568!2d76.05078355000002!3d11.248954800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716972186475!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </div>
    );
}

export default MapView;

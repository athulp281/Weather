import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import dynamic from "next/dynamic";

function TimeStatus() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const getGreetingMessage = () => {
        const hours = currentTime.getHours();
        if (hours < 12) {
            return "Good Morning";
        } else if (hours < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    const messages = [
        <Typography key="1" variant="h6">
            <WavingHandIcon sx={{ color: "orange" }} />
            Hey there..!
        </Typography>,
        <Typography key="2" variant="h6">
            {getGreetingMessage()}
        </Typography>,
        <Typography key="3" variant="h6">
            <SentimentSatisfiedAltIcon sx={{ color: "orange" }} />
            Have a good day
        </Typography>,
    ];

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update time every second

        return () => clearInterval(timerId); // Clean up the interval on component unmount
    }, []);

    useEffect(() => {
        const messageTimerId = setInterval(() => {
            setCurrentMessageIndex(
                (prevIndex) => (prevIndex + 1) % messages.length
            );
        }, 3000); // Change message every 3 seconds

        return () => clearInterval(messageTimerId); // Clean up the interval on component unmount
    }, [messages.length]);

    return (
        <div className="time-status">
            <Box sx={{ width: 180 }}>
                <motion.div
                    key={currentMessageIndex}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust duration and ease
                >
                    {messages[currentMessageIndex]}
                </motion.div>
                <p>{currentTime.toLocaleTimeString()}</p>
            </Box>
        </div>
    );
}

export default TimeStatus;

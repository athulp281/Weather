import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MenuItems } from "./navbar/NavConfig";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";
export default function NavigationAccordion({ title, description }) {
    return (
        <div>
            {MenuItems.map((item) => {
                return (
                    <Accordion key={item.id}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component={Link} href={item.href}>
                                <ArrowForwardIcon sx={{ pt: 1 }} />
                                {item.text}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Stack direction={"column"} spacing={2}>
                                    {item.children?.map((child) => {
                                        return (
                                            <Button
                                                sx={{
                                                    backgroundColor: "#F5F5F5",
                                                }}
                                                component={Link}
                                                href={child.href}
                                                key={child.id}
                                            >
                                                {child.name}
                                            </Button>
                                        );
                                    })}
                                </Stack>
                            </Box>
                            {/* <Typography>{description}</Typography> */}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}

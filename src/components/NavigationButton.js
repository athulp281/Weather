import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function NavigationButton({ pathName }) {
    return (
        <div>
            <Button content={Link} href={pathName}>
                <KeyboardDoubleArrowRightIcon />
                Learn More..
            </Button>
        </div>
    );
}

export default NavigationButton;

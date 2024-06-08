import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useResponsive from "@/Hooks/useResponsive";

export default function NewsCard({ img, title, description }) {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: 2,
                minHeight: 290,
                height: smUp ? null : 290,
            }}
        >
            <CardMedia sx={{ height: 140 }} image={img} title={title} />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        lineHeight: 1,
                        textOverflow: smUp ? null : "inherit",
                    }}
                    fontSize={smUp ? 14 : 12}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: smUp ? 12 : 10 }}
                >
                    {description}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}

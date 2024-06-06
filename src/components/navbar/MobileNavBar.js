import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CompanyIcon from "../CompanyIcon";
import { MenuItems } from "./NavConfig";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { usePathname } from "next/navigation";
import ListIcon from "@mui/icons-material/List";

export default function MobileNavBar() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Divider />
            <List>
                {MenuItems.map((item) => (
                    <Box padding={0.5} key={item.text}>
                        <MenuItem
                            key={item.text}
                            component={Link}
                            href={item.href}
                            sx={{
                                wordSpacing: 3,
                                color:
                                    pathname === item.href
                                        ? "white"
                                        : "#9e9e9e",
                                borderRadius: 5,
                                backgroundColor:
                                    pathname === item.href
                                        ? "#1f1f1f"
                                        : "inherit",
                            }}
                        >
                            {item.text}
                        </MenuItem>
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} sx={{ color: "black" }}>
                <ListIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CompanyIcon />
                </Box>
                {DrawerList}
            </Drawer>
        </div>
    );
}

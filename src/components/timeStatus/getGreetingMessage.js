import { useState } from "react";

function getGreetingMessage() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const hours = currentTime.getHours();
    if (hours < 12) {
        return "Good Morning";
    } else if (hours < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

export default getGreetingMessage;

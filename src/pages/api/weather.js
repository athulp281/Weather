// pages/api/weather.js
import axios from "axios";

export default async function handler(req, res) {
    const { lat, lon, q } = req.query;

    const appId = process.env.OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appId}&units=metric&q=${q}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}

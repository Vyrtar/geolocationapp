const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data', async (req, res) => {
    try {
        const response = await fetch('http://ip-api.com/json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data); 
    } catch (error) {
        console.error("Error fetching IP data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running`);
});

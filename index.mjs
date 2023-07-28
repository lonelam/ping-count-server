import express from 'express'
import {publicIpv4} from 'public-ip'
const app = express();
let pingCount = 0;

app.get('/ping', (req, res) => {
    pingCount++;
    console.log(`Ping received. Total count is: ${pingCount}`);
    res.send(`Ping received. Total count is: ${pingCount}`);
});

const PORT = process.env.PORT || 3000;

// Listen on all network interfaces
app.listen(PORT, '0.0.0.0', async () => {
    const ip = await publicIpv4();
    console.log(`Server is running on ${ip}:${PORT}`);
});

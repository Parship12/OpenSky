import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox() {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    let info = {
        city: "Agartala",
        feelsLike: 19.95,
        humidity: 84,
        maxTemp: 19.73,
        minTemp: 19.73,
        temp: 19.73,
        weather: "clear sky",
        wind: 2,
    }
    return(
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.minTemp}&deg;C</p>
                        <p>Max Temp = {info.maxTemp}&deg;C</p>
                        <p>Feels Like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
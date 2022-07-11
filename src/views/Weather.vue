<template>
    <div class="container title-container">
        <h1>Weather</h1>
        <div class="container weather-div">
            <input type="text" class="weather-city-input rounded-pill px-2" placeholder="Enter City Name" >
            <button class="btn btn-primary mx-1">Go</button>
        </div>
        <div class="container weather-display">
            <div class="location-box">
                <div class="location">Cologne, Germany</div>
                <div class="date">Monday 20 January 2022</div>
            </div>

            <div class="weather-info">
                <div class="temp">21°C</div>
                <div class="weather">Cloudy</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherPage',
        data () {
            return {
                api_key: 'ff4424768-00ed-11ed-93b0-0242ac130002-f44247cc-00ed-11ed-93b0-0242ac130002'
            }
        }
    }
</script>

<style scoped>
    .weather-div {
        margin-top: 2rem;
        display: flex;
        justify-content: center;

    }

    .weather-display {
        margin-top: 1rem;
        height: 500px;
        width: 350px;
        border-radius: 25px;
        background-color: steelblue;
    }

    .location {
        color: #FFF;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    .date {
        color: #FFF;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    .weather-info {
        text-align: center;
    }

    .temp {
        display: inline-block;
        padding: 10px 25px;
        color: #FFF;
        font-weight: 900;
        font-size: 100px;

        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
        background-color: rgba(255,255,255, 0.25);
        border-radius: 20px;
        margin: 30px 0;
        box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
    
    .weather {
        color: #FFF;
        font-size: 48px;
        font-weight: 700;

        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }
</style>
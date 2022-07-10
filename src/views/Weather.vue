<template>
    <div class="container title-container">
        <h1>Weather</h1>
        <div class="container weather-div">
            <input type="text" class="weather-city-input rounded-pill px-2" placeholder="Enter City Name" >
            <button class="btn btn-primary mx-1">Go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherPage',
        data () {
            return {

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

</style>
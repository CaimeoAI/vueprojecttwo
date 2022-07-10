<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/"><i class="fa-solid fa-house"></i></router-link></li>
            <li><router-link to="/stocks"><i class="fa-solid fa-chart-line"></i></router-link></li>
            <li><router-link to="/weather"><i class="fa-solid fa-cloud-sun"></i></router-link></li>
            <li><router-link to="/news"><i class="fa-regular fa-newspaper"></i></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 2rem;
        height: 100vh;
        background-color: #E4E6EB;
    }

    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    li {
        margin: 1rem 0;
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
</style>
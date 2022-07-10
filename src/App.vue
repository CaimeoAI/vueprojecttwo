<template>
  <NavBar/>
  <router-view/>
</template>

<script>
  import NavBar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    background-color: #404040;
  }

  .title-container {
    width: 100%;
  }

  h1 {
    color: white;
    padding-top: 2rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
    
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

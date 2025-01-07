<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};

</script>

<template>
  <div class="bg-bgImage bg-cover min-h-screen relative">
    <Navbar />
    <div class="absolute top-24 m-10 gap-10 md:gap-32 flex flex-col md:flex-row justify-between items-center">
      <img class="max-w-70 md:max-w-80 xl:max-w-96 bg-white rounded-full p-4 border-separated border-4 border-sky-300" src="./assets/png/profile-character.png" alt="Profile picture">
      <p class="font-lexend text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold hover:scale-110">I am a web developer and frontend developer with a passion for building beautiful and responsive web applications.</p>
    </div>
    <Contacts />
    <RouterView />
  </div>
</template>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};

</script>

<template>
  <div class="flex flex-col bg-bgImage bg-cover min-h-screen w-full relative">
    <Navbar />
    <main class="m-10 gap-10 xl:gap-32 flex flex-col md:flex-row justify-between flex-grow items-center">
      <img class="max-w-72 md:max-w-80 xl:max-w-96 bg-white rounded-full p-4 border-separated border-4 border-sky-300 hover:scale-110 ease-in-out duration-500" src="./assets/png/profile-character.png" alt="Profile picture">
      <p class="font-lexend text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold animate-fade-in-down">I am a web developer and frontend developer with a passion for building beautiful and responsive web applications.</p>
    </main>
    <RouterView />
    <Footer />
  </div>
</template>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
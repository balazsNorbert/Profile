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
    <main class="m-10 gap-10 xl:gap-32 flex flex-col md:flex-row md:justify-between flex-grow items-center">
      <img loading="lazy" class="max-w-72 md:max-w-80 xl:max-w-96 bg-white rounded-full p-4 border-separated border-4 border-sky-300 hover:scale-110 ease-in-out duration-500" src="./assets/png/profile-character.png" alt="Profile picture">
      <div class="text-center md:text-left">
        <p loading="lazy" class="font-lexend text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold animate-fade-in-down">
          I am a <span class="text-sky-300">web developer</span> focusing on <span class="text-sky-300">frontend</span>, with a solid understanding of <span class="text-sky-300">backend</span> technologies and passion for building beautiful and a <span class="text-sky-300">responsive</span> web applications.
        </p>
        <div class="flex gap-4 mt-6">
          <routerLink to="/about-me" class="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition">Learn more</routerLink>
          <routerLink to="/portfolio" class="bg-white text-sky-300 px-6 py-3 rounded-lg hover:text-white hover:bg-sky-300 transition">Projects</routerLink>
        </div>
      </div>
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
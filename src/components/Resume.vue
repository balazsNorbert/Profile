<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init({
        duration: 500,
        delay: 200,
    });
  }
};
</script>
<template>
  <div class="flex flex-col items-center gap-3 mb-14">
    <h2 data-aos="fade-in" class="font-lexend text-white text-3xl md:text-4xl xl:text-5xl mb-6">My Resume:</h2>
    <div data-aos="fade-in" class="flex flex-wrap text-center ml-10 gap-4 text-md md:text-xl xl:text-2xl">
      <a
        href="/Balázs_Norbert_en.pdf"
        target="_blank"
        class="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white py-3 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-teal-600">
        <span class="flex items-center gap-2">
          <span class="material-icons md-36">visibility</span>
          View Resume
        </span>
      </a>
      <a
        href="/Balázs_Norbert_en.pdf"
        download="Balázs_Norbert_en.pdf"
        class="bg-gradient-to-r to-green-500 via-lime-500 from-yellow-500 text-white py-3 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:to-green-600 hover:from-yellow-600">
        <span class="flex items-center gap-2">
          <span class="material-icons md-36">file_download</span>
          Download Resume
        </span>
      </a>
    </div>
  </div>
</template>
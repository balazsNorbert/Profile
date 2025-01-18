<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    AOS.init({
      duration: 500,
    });
  }
}
</script>
<template>
  <div class="flex flex-col items-center gap-8 py-12 bg-gradient bg-sky-200 font-lexend text-sky-700">
    <h2 class="text-3xl md:text-4xl xl:text-5xl font-semibold text-center text-sky-900">{{ $t( 'aboutMe' ) }}</h2>
    <div data-aos="fade-in" class="flex flex-col gap-8 w-full md:w-5/6">
      <p class="text-base md:text-xl xl:text-2xl bg-white p-6 shadow-lg rounded-3xl animate-fade-in-down">
        {{ $t( 'aboutMeText1' ) }}
      </p>
      <p class="text-base md:text-xl xl:text-2xl bg-white p-6 shadow-lg rounded-3xl animate-fade-in-down">
        {{ $t( 'aboutMeText2' ) }}
      </p>
      <p class="text-base md:text-xl xl:text-2xl bg-white p-6 shadow-lg rounded-3xl animate-fade-in-down">
        {{ $t( 'aboutMeText3' ) }}
      </p>
    </div>
  </div>
</template>
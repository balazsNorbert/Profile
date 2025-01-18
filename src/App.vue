<script>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { VueWriter } from 'vue-writer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    VueWriter
  },

  setup() {
    const { t } = useI18n();
    const showCursor = ref(true);
    const textArray = computed(() => {
      return [t('developerIntro')];
    });

    onMounted(() => {
      setTimeout(() => {
        showCursor.value = false;
      }, 3000);
    });

    return {
      showCursor,
      textArray,
    };
  }
};
</script>
<template>
  <div class="flex flex-col bg-radial-gradient min-h-screen w-full relative">
    <Navbar/>
    <main class="m-10 gap-10 xl:gap-20 flex flex-col md:flex-row flex-grow items-center">
      <img loading="lazy" class="max-w-72 md:max-w-80 xl:max-w-96 bg-white rounded-full p-4 border-separated border-4 border-sky-300 hover:scale-110 ease-in-out duration-500" src="./assets/png/profile-character.png" alt="Profile picture">
      <div class="text-center w-full md:text-left">
        <vue-writer :array="textArray" :key="$i18n.locale"
          :typeSpeed="70" :iterations="1" :eraseSpeed="50" :delay="500" class="font-lexend text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold inline-block flex-wrap">
        </vue-writer>
        <div class="flex flex-wrap gap-4 mt-6 text-lg md:text-xl xl:text-2xl">
          <routerLink to="/about-me" class="flex items-center gap-2 bg-sky-400 text-white px-4 py-3 rounded-lg hover:bg-sky-500 transition">
            <span>{{ $t('learn') }}</span>
            <span class="material-icons md-36">expand_more</span>
          </routerLink>
          <routerLink to="/portfolio" class="flex items-center gap-2 bg-white text-sky-300 px-6 py-3 rounded-lg hover:text-white hover:bg-sky-300 transition">
            <span>{{ $t('projects') }}</span>
            <span class="material-icons md-36">code</span>
          </routerLink>
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
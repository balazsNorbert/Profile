<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Navbar',
  setup() {
    const isMenuOpen = ref(false);
    const { locale } = useI18n();
    const currentLang = ref(locale.value);
    const isScrolled = ref(false);
    const menuClasses = computed(() => {
      return {
        'max-h-0 opacity-0 lg:max-h-full lg:opacity-100': !isMenuOpen.value,
        'max-h-[500px] opacity-100': isMenuOpen.value,
      };
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const changeLanguage = (lang) => {
      locale.value = lang;
      currentLang.value = lang;
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isMenuOpen,
      menuClasses,
      toggleMenu,
      currentLang,
      changeLanguage,
      isScrolled,
    };
  },
};
</script>
<template>
  <nav
    :class="['sticky top-0 flex justify-between items-start lg:items-center px-6 xl:px-12 2xl:px-16 py-2 md:py-3 bg-sky-700 hover:bg-opacity-100 text-white transition-all duration-300 z-10',
      isScrolled ? 'lg:bg-opacity-90' : 'lg:bg-opacity-100'
    ]">
    <h1 class="text-xl md:text-2xl 2xl:text-3xl font-bold font-serif mt-1 lg:mt-0">
      <RouterLink to="/">Balázs <span class="text-gray-800">Norbert</span></RouterLink>
    </h1>
    <div @click=" toggleMenu " class="text-right">
      <button class="material-icons md-36 lg:hidden">menu</button>
      <ul :class=" menuClasses "
        class="absolute lg:relative top-full lg:top-0 right-0 pr-6 lg:pr-0 w-full bg-sky-700 lg:bg-transparent lg:text-center flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 xl:gap-8 text-xl 2xl:text-2xl font-medium transition-[max-height] duration-300 ease-in-out">
        <li class="hover:text-sky-400">
          <RouterLink to="/about-me">{{ $t( 'aboutMe' ) }}</RouterLink>
        </li>
        <li class="hover:text-sky-400">
          <RouterLink to="/skills">{{ $t( 'skills' ) }}</RouterLink>
        </li>
        <li class="hover:text-sky-400">
          <RouterLink to="/portfolio">{{ $t( 'portfolio' ) }}</RouterLink>
        </li>
        <li class="hover:text-sky-400">
          <RouterLink to="/contacts">{{ $t( 'contacts' ) }}</RouterLink>
        </li>
        <li class="hover:text-sky-400">
          <RouterLink to="/resume">{{ $t( 'resume' ) }}</RouterLink>
        </li>
        <div
          class="flex gap-2 items-center w-fit ml-auto lg:ml-0 mb-5 lg:mb-0 rounded-full bg-gradient-to-r from-sky-600 to-sky-900 p-1 text-sm md:text-lg shadow-lg">
          <button :class=" [
            'px-4 py-2 rounded-full text-white bg-transparent border-2 border-white transition-all duration-300',
            { 'bg-white text-sky-900': currentLang === 'en' }
          ] " @click="changeLanguage( 'en' )">
            EN
          </button>
          <span class="text-white">|</span>
          <button :class=" [
            'px-4 py-2 rounded-full text-white bg-transparent border-2 border-white transition-all duration-300',
            { 'bg-white text-sky-900': currentLang === 'hu' }
          ] " @click="changeLanguage( 'hu' )">
            HU
          </button>
          <span class="text-white">|</span>
          <button :class=" [
            'px-4 py-2 rounded-full text-white bg-transparent border-2 border-white transition-all duration-300',
            { 'bg-white text-sky-900': currentLang === 'ro' }
          ] " @click="changeLanguage( 'ro' )">
            RO
          </button>
        </div>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
button {
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

button:hover {
  transform: scale(1.1);
  /* Hover effect: gomb nagyobb lesz */
}

button.bg-white {
  background-color: white;
  color: #0284c7;
  /* Sky blue text */
}
</style>
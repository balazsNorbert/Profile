<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    menuClasses() {
      return {
        'max-h-0 opacity-0 lg:max-h-full lg:opacity-100': !this.isMenuOpen,
        'max-h-[500px] opacity-100': this.isMenuOpen,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
<template>
    <nav class="sticky top-0 flex justify-between items-start lg:items-center px-6 lg:px-16 py-4 md:py-5 bg-sky-700 text-white z-10">
        <h1 class="text-2xl md:text-3xl xl:text-4xl font-bold font-serif mt-1 lg:mt-0"><RouterLink to="/">Balázs <span class="text-gray-800">Norbert</span></RouterLink></h1>
        <div @click="toggleMenu" class="text-right">
            <button class="material-icons md-36 lg:hidden">menu</button>
            <ul :class="menuClasses" class="lg:text-center lg:flex lg:gap-10 xl:gap-14 text-2xl 2xl:text-3xl font-medium transition-[max-height] duration-300 ease-in-out">
                <li class="hover:text-sky-400"><RouterLink to="/about-me">About Me</RouterLink></li>
                <li class="hover:text-sky-400"><RouterLink to="/skills">Skills</RouterLink></li>
                <li class="hover:text-sky-400"><RouterLink to="/portfolio">Portfolio</RouterLink></li>
                <li class="hover:text-sky-400"><RouterLink to="/contacts">Contacts</RouterLink></li>
                <li class="hover:text-sky-400"><RouterLink to="/resume">Resume</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>
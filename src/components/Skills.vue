<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    data() {
        return {
            frontendSkills: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'React.js' },
                { name: 'Vue.js' },
                { name: 'Angular' },
                { name: 'TypeScript' },
                { name: 'JQuery' },
            ],

            backendSkills: [
                { name: 'Node.js' },
                { name: 'PHP' },
                { name: 'Laravel' },
                { name: 'Livewire' },
                { name: 'Express.js' },
                { name: 'TypeScript' },
            ],

            databaseSkills: [
                { name: 'MySQL' },
                { name: 'MariaDB' },
                { name: 'Oracle' },
                { name: 'MongoDB' },
            ],

            otherSkills: [
                { name: 'Git' },
                { name: 'GitHub' },
                { name: 'Bitbucket' },
                { name: 'Docker' },
                { name: 'SEO' },
            ],
        };
    },
    computed: {
        allSkills() {
            return [
                ...this.frontendSkills,
                ...this.backendSkills,
                ...this.databaseSkills,
                ...this.otherSkills
            ];
        }
    },
    mounted() {
        AOS.init({
            duration: 500,
            delay: 200,
        });
    }
};
</script>
<template>
    <div class="flex flex-col gap-8 px-6 py-12 bg-sky-200 font-lexend text-white">
        <h2 data-aos="fade-up" class="text-3xl md:text-4xl xl:text-5xl font-semibold text-center text-sky-900">Skills
        </h2>
        <div data-aos="fade-up" class="flex overflow-hidden py-8">
            <ul class="flex animate-scroll gap-3 text-lg md:text-xl xl:text-2xl">
                <li v-for="( skill, index) in allSkills" :key=" index "
                    class="item from-sky-900 to-sky-600 bg-gradient-to-b p-3 rounded-lg hover:animate-threeD shadow-xl">
                    {{ skill.name }}></li>
                <li v-for="( skill, index) in allSkills" :key=" index "
                    class="item from-sky-900 to-sky-600 bg-gradient-to-b p-3 rounded-lg hover:animate-threeD shadow-xl">
                    {{ skill.name }}></li>
            </ul>
        </div>
        <div class="flex flex-col gap-4">
            <h3 data-aos="fade-up" class="text-2xl xl:text-3xl font-bold text-teal-600">Frontend Development</h3>
            <ul class="grid grid-cols-2 md:grid-cols-3 text-center gap-4 text-xl xl:text-2xl">
                <li data-aos="fade-up" v-for="( skill, index) in frontendSkills" :key=" index " class="flex flex-col
          relative group bg-gradient-to-b from-teal-600 to-teal-400 p-3 rounded-xl
          hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
        </div>

        <div class="flex flex-col gap-4">
            <h3 data-aos="fade-up" class="text-2xl xl:text-3xl font-bold text-indigo-600">Backend Development</h3>
            <ul class="grid grid-cols-2 md:grid-cols-3 text-center gap-4 text-xl xl:text-2xl">
                <li data-aos="fade-up" v-for="( skill, index) in backendSkills" :key=" index " class="flex flex-col
                relative group bg-gradient-to-b from-indigo-600 to-indigo-400 p-3 rounded-xl
                hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
        </div>

        <div class="flex flex-col gap-4">
            <h3 data-aos="fade-up" class="text-2xl xl:text-3xl font-bold text-purple-600">Databases</h3>
            <ul class="grid grid-cols-2 md:grid-cols-3 text-center gap-4 text-xl xl:text-2xl">
                <li data-aos="fade-up" v-for="( skill, index) in databaseSkills" :key=" index " class="flex flex-col
        relative group bg-gradient-to-b from-purple-600 to-purple-400 p-3 rounded-xl
        hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
        </div>

        <div class="flex flex-col gap-4">
            <h3 data-aos="fade-up" class="text-2xl xl:text-3xl font-bold text-yellow-600">Other Skills</h3>
            <ul class="grid grid-cols-2 md:grid-cols-3 text-center gap-4 text-xl xl:text-2xl">
                <li data-aos="fade-up" v-for="( skill, index) in otherSkills" :key=" index " class="flex flex-col
        relative group bg-gradient-to-b from-yellow-600 to-yellow-400 p-3 rounded-xl
        hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
@keyframes scroll {
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(-50%);
    }
}

.animate-scroll {
    animation: scroll 20s linear infinite;
    animation-play-state: running;
}

.animate-scroll:hover {
    animation-play-state: paused;
}

.item:has(+ *:hover) {
    transform: rotateY(-45deg) scale(1.1);
}

.item:hover+* {
    transform: rotateY(45deg) scale(1.1);
}

.transform-style-3d {
    transform-style: preserve-3d;
}

.perspective-midrange {
    perspective: 1200px;
    perspective-origin: center center;
}
</style>
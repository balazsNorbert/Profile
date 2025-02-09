<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    AOS.init({
      duration: 500,
    });
  }
};
</script>
<template>
  <div class="bg-sky-200 font-lexend text-sky-700 text-sm md:text-xl xl:text-2xl">
    <div class="w-5/6 mx-auto flex flex-col items-center gap-14 py-12">
      <h2 class="text-3xl md:text-4xl xl:text-5xl font-semibold text-center text-sky-900">{{ $t( 'portfolio' ) }}</h2>
      <div class="flex items-center text-left w-full gap-2">
        <span class="material-icons text-3xl md:text-4xl">
          work
        </span>
        <h3 class="text-2xl md:text-3xl xl:text-4xl">Internship:</h3>
      </div>
      <div class="flex flex-col text-left w-full gap-4 bg-white p-6 rounded-3xl shadow-2xl">
        <p>
          {{ $t( 'developed' ) }} <span class="font-bold">full-stack</span> {{ $t( 'webApp' ) }} <span
            class="font-bold">TALL(Tailwind, Alpinge.js, Laravel, Livewire) stack</span> {{ $t( 'figma' ) }}.
        </p>
        <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex items-center gap-2"
          href="https://bitbucket.org/mencs2022/mencs-repo-ll/" target="_blank">
          <span>Tall stack {{ $t( 'project' ) }}</span>
          <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
            east
          </span>
        </a>
      </div>
      <h3 data-aos="fade-up"
        class="flex items-center flex-wrap gap-2 text-left w-full text-2xl md:text-3xl xl:text-4xl">
        <div class="flex items-center gap-2">
          <span class="material-icons text-3xl md:text-4xl">school</span>
          <span>Certifications & </span>
        </div>
        <div class="flex items-center gap-2">
          <span class="material-icons text-3xl md:text-4xl">folder</span>
          <span>Projects:</span>
        </div>
      </h3>
      <div class="flex flex-col gap-8 text-left w-full">
        <div data-aos="fade-up" class="flex flex-col gap-4">
          <div class="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-2xl">
            <h3 class="text-lg md:text-xl xl:text-2xl">
              Workout Tracker website (React.js, Node.js, MongoDB)
            </h3>
            <div class="flex gap-5 flex-wrap">
              <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
              items-center gap-2" href="https://workoutracker.com" target="_blank">
                <span>View website</span>
                <span class="material-icons text-2xl md:text-3xl lg:text-4xl">visibility</span>
              </a>
              <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
              items-center gap-2" href="https://github.com/balazsNorbert/PR-tracker" target="_blank">
                <span>Workout tracker {{ $t( 'project' ) }}</span>
                <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                  east
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="flex flex-col gap-4">
          <div class="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-2xl">
            <h3 class="text-lg md:text-xl xl:text-2xl">
              My Profile website (Vue.js)
            </h3>
            <div class="flex gap-5 flex-wrap">
              <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
              items-center gap-2" href="https://github.com/balazsNorbert/Profile" target="_blank">
                <span>Profile {{ $t( 'project' ) }}</span>
                <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                  east
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-2xl">
          <h3 class="text-lg md:text-xl xl:text-2xl">
            THE COMPLETE 2023 WEB DEVELOPMENT BOOTCAMP
          </h3>
          <div class="flex gap-5 flex-wrap">
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit
                        flex items-center gap-2"
              href="https://www.udemy.com/certificate/UC-ca1032bc-daab-47a9-b8d6-72fd527a87af/" target="_blank">
              <span>{{ $t( 'viewCertificate' ) }}</span>
              <span class="material-icons text-2xl md:text-3xl lg:text-4xl">visibility</span>
            </a>
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit
                        flex items-center gap-2" href="https://github.com/balazsNorbert/Keeper-App" target="_blank">
              <span>React {{ $t( 'project' ) }}</span>
              <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                east
              </span>
            </a>
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
                        items-center gap-2" href="https://github.com/balazsNorbert/To-Do-List" target="_blank">
              <span>ToDo List {{ $t( 'project' ) }}</span>
              <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                east
              </span>
            </a>
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
                        items-center gap-2" href="https://github.com/balazsNorbert/Blog-{{ $t('project') }}"
              target="_blank">
              <span>Blog {{ $t( 'project' ) }}</span>
              <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                east
              </span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" class="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-2xl">
          <h3 class="text-lg md:text-xl xl:text-2xl">
            Angular - The Complete Guide (2023 Edition)
          </h3>
          <div class="flex gap-5 flex-wrap">
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
                      items-center gap-2"
              href="https://www.udemy.com/certificate/UC-ca1032bc-daab-47a9-b8d6-72fd527a87af/" target="_blank">
              <span>{{ $t( 'viewCertificate' ) }}</span>
              <span class="material-icons text-2xl md:text-3xl lg:text-4xl">visibility</span>
            </a>
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit flex
                      items-center gap-2" href="https://github.com/balazsNorbert/Angular-{{ $t('project') }}"
              target="_blank">
              <span>Angular {{ $t( 'project' ) }}</span>
              <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                east
              </span>
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-2xl">
          <h3 class="text-lg md:text-xl xl:text-2xl">
            Understanding TypeScript
          </h3>
          <div class="flex gap-5 flex-wrap">
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit
              flex items-center gap-2"
              href="https://www.udemy.com/certificate/UC-ca1032bc-daab-47a9-b8d6-72fd527a87af/" target="_blank">
              <span>{{ $t( 'viewCertificate' ) }}</span>
              <span class="material-icons text-2xl md:text-3xl lg:text-4xl">visibility</span>
            </a>
            <a class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white p-3 rounded-full w-fit
              flex items-center gap-2" href="https://github.com/balazsNorbert/Typescript-{{ $t('project') }}"
              target="_blank">
              <span>TypeScript {{ $t( 'project' ) }}</span>
              <span class="material-icons-outlined text-2xl md:text-3xl lg:text-4xl">
                east
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
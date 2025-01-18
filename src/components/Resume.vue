<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    const resumeLink = computed(() => t('resumeLink'));

    return {
      resumeLink
    };
  }
};
</script>
<template>
  <div class="flex flex-col items-center gap-3 mb-14 w-5/6 mx-auto">
    <h2 class="font-lexend text-white text-3xl md:text-4xl xl:text-5xl mb-6">{{ $t('myResume') }}</h2>
    <div class="flex flex-wrap text-center gap-4 text-md md:text-xl xl:text-2xl">
      <a
        :href="resumeLink"
        target="_blank"
        class="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white py-3 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-teal-600">
        <span class="flex items-center gap-2">
          <span class="material-icons md-36">visibility</span>
            {{ $t('viewResume') }}
        </span>
      </a>
      <a
        :href="resumeLink"
        :download="resumeLink"
        class="bg-gradient-to-r to-green-500 via-lime-500 from-yellow-500 text-white py-3 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:to-green-600 hover:from-yellow-600">
        <span class="flex items-center gap-2">
          <span class="material-icons md-36">file_download</span>
            {{ $t('downloadResume') }}
        </span>
      </a>
    </div>
  </div>
</template>
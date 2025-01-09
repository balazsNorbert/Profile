<script>
export default {
  data() {
    return {
      copied: 0, // Visszajelzés állapota
    };
  },
  methods: {
    copyToClipboard(index) {
      const text = this.$refs[`contact${index}`].textContent;

      // Navigator API a szöveg másolására
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            this.copied = index;
            setTimeout(() => (this.copied = 0), 2000); // 2 mp-es visszajelzés
          })
          .catch((err) => console.error("Másolási hiba: ", err));
      } else {
        // Visszamenőleges kompatibilitás (execCommand)
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          this.copied = index;
          setTimeout(() => (this.copied = 0), 2000);
        } catch (err) {
          console.error("Másolási hiba: ", err);
        }
        document.body.removeChild(textarea);
      }
    },
  },
};
</script>
<template>
    <div class="w-full absolute bottom-28 text-white flex justify-center">
        <ul class="flex flex-col xl:flex-row justify-between gap-10 text-xl md:text-2xl">
            <li class="flex items-center gap-3">
                <span class="material-icons text-white md-60">
                    phone
                </span>
                <button ref="contact1"
                    @click="copyToClipboard('1')"
                    class="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  +40773836994
                </button>
                <p v-if="copied == 1" class="mt-2 text-green-500 text-sm">Copied!</p>
            </li>
            <li class="flex items-center gap-3">
                <span class="material-icons-outlined text-white md-60">
                    email
                </span>
                <button ref="contact2"
                    @click="copyToClipboard('2')"
                    class="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  balazs_norbert99@yahoo.com
                </button>
                <p v-if="copied == 2" class="mt-2 text-green-500 text-sm">Copied!</p>
            </li>
            <li class="flex items-center gap-3">
                <img class="w-14 h-14 text-white" src="../assets/svg/linkedin-brands-solid.svg" alt="Linkedin image">
                <a  href="https://www.linkedin.com/in/bal%C3%A1zs-norbert-a17313261/"
                    class="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300 truncate ..."
                >
                Linkedin profile
                </a>
            </li>
        </ul>
    </div>
</template>
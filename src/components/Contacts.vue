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
    <div class="w-full text-white flex justify-center mb-14">
        <ul class="flex flex-col xl:flex-row justify-between gap-3 xl:gap-10 text-sm md:text-xl lg:text-2xl">
            <li class="flex items-center gap-2 md:gap-3">
                <span class="material-icons text-white md-48">
                    phone
                </span>
                <button ref="contact1"
                    @click="copyToClipboard('1')"
                    class="bg-sky-600 shadow-xl text-white py-2 px-3 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  +40773836994
                </button>
                <p v-if="copied == 1" class="mt-2 text-green-500 text-sm">Copied!</p>
            </li>
            <li class="flex items-center gap-2 md:gap-3">
                <span class="material-icons-outlined text-white md-48">
                    email
                </span>
                <button ref="contact2"
                    @click="copyToClipboard('2')"
                    class="bg-sky-600 shadow-xl text-white py-2 px-3 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300" truncate="..."
                >
                  balazs_norbert99@yahoo.com
                </button>
                <p v-if="copied == 2" class="mt-2 text-green-500 text-sm">Copied!</p>
            </li>
            <li class="flex items-center gap-2 md:gap-3">
                <img class="w-12 h-12 text-white" src="../assets/svg/linkedin-brands-solid.svg" alt="Linkedin image">
                <a  href="https://www.linkedin.com/in/bal%C3%A1zs-norbert-a17313261/"
                    class="bg-sky-600 shadow-xl text-white py-2 px-3 rounded-lg hover:bg-sky-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-300 truncate ..."
                >
                Linkedin profile
                </a>
            </li>
        </ul>
    </div>
</template>
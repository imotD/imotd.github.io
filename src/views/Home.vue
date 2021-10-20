<template>
  <div class="home flex flex-col items-center justify-center lg:mx-52 md:mx-20">
    <div class="mx-auto container">
      <div class="md:grid grid-flow-col grid-cols-2">
        <div class="text-center sm:text-left">
          <p class="text-4xl font-bold tracking-wider">
            <span class="text-lg font-normal text-gray-500">
              Halo, Dunia
            </span>
            <br />
            Saya
            <span class="font-black font-black" title="Tommy Alhamra">
              Tommy.
            </span>
          </p>
          <div class="py-8 tracking-wide">
            Salam kenal 👋, saya suka buat sesuatu. <br />
            Mimpi saya saat ini menjadi <i>Frontend Developer</i> <br />
            yang dapat diandalkan. <span class="text-gray-300">~hoho</span>
          </div>
          <div class="text-gray-500">
            <p>
              <span v-for="m in menus[0].up" :key="m.id">
                <router-link
                  class="hover:text-black tolink"
                  :to="m.link"
                  :title="m.note"
                >
                  {{ m.title }}
                </router-link>
                &#8728;
              </span>
            </p>
            <p>
              <span v-for="g in menus[1].down" :key="g.id">
                <router-link
                  class="hover:text-black tolink"
                  :title="g.note"
                  :to="g.link"
                >
                  {{ g.title }}
                </router-link>
                &#8728;
              </span>
            </p>
          </div>
          <div
            class="flex m-auto sm:m-0 text-gray-500 pt-4 w-24 justify-between"
          >
            <a
              class="hover:text-black"
              target="_blank"
              href="https://github.com/imotD"
            >
              <ph-github-logo :size="22" />
            </a>
            <a
              class="hover:text-black"
              target="_blank"
              href="mailto:tommy.alhamra@gmail.com"
            >
              <ph-envelope-simple :size="22" />
            </a>
            <a
              class="hover:text-black"
              target="_blank"
              href="https://id.linkedin.com/in/tommy-alhamra-217112151"
            >
              <ph-linkedin-logo :size="22" />
            </a>
          </div>
        </div>
        <div class="m-auto hidden sm:inline">
          <img
            src="@/assets/mask-logo.png"
            alt="Dottom Logo"
            title="Branding"
          />
        </div>
      </div>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { PhEnvelopeSimple, PhLinkedinLogo, PhGithubLogo } from "phosphor-vue";

export default {
  name: "Home",
  components: {
    PhEnvelopeSimple,
    PhLinkedinLogo,
    PhGithubLogo,
    Footer,
  },
  data() {
    return {
      menus: [
        {
          up: [
            {
              id: 1,
              title: "Portofolio",
              link: "/portofolio",
              note: "Project yang saya Buat",
            },
            {
              id: 2,
              title: "Podcast",
              link: "/podcast",
              note: "Mengasah Komunikasi",
            },
            {
              id: 3,
              title: "Karya",
              link: "/karya",
              note: "Gaya Geni",
            },
          ],
        },
        {
          down: [
            {
              id: 4,
              title: "Dukung",
              link: "/dukung",
              note: "Traktir Kopi untuk saya",
            },
            {
              id: 5,
              title: "Tentang",
              link: "/tentang",
              note: "Orang Biasa gak Special pake Telor",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<template>
  <div class="home">
    <div class="container mx-auto px-32">
      <div class="grid sm:grid-cols-2 gap-4 flex items-center home__content">
        <div class="">
          <p class="text-4xl font-bold tracking-wider">
            Hai, Saya
            <span
              class="font-black bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500"
              title="Tommy Alhamra"
            >
              ImotD
            </span>
          </p>
          <div class="py-8 tracking-wide">
            salam kenal 👋, saya suka buat sesuatu. <br />
            mimpi saya menjadi frontend developer✨ <br />
            yang dapat diandalkan. <span class="text-gray-300">~itu saja</span>
          </div>
          <div class="text-gray-500">
            <router-link class="hover:text-black tolink" to="/portofolio" title="Project yang saya Buat">
              Portofolio
            </router-link>
            &#8728;
            <router-link class="hover:text-black tolink" to="/podcast" title="Mengasah Komunikasi">
              Podcast
            </router-link>
            &#8728;
            <router-link class="hover:text-black tolink" to="/karya" title="Gaya Geni">
              Karya
            </router-link>
            &#8728; <br />
            <router-link class="hover:text-black tolink" to="/dukung" title="Traktir Kopi untuk saya">
              Dukung
            </router-link>
            &#8728;
            <router-link class="hover:text-black tolink" to="/tentang" title="Orang Biasa gak Special pake Telor">
              Tentang
            </router-link>
          </div>
          <div class="flex text-gray-500 pt-4 w-24 justify-between">
            <a class="hover:text-black" href="https://github.com/imotD">
              <ph-github-logo :size="22" />
            </a>
            <a class="hover:text-black" href="mailto:tommy.alhamra@gmail.com">
              <ph-envelope-simple :size="22" />
            </a>
            <a
              class="hover:text-black"
              href="https://id.linkedin.com/in/tommy-alhamra-217112151"
            >
              <ph-linkedin-logo :size="22" />
            </a>
          </div>
        </div>
        <div class="m-auto">
          <img src="@/assets/mask-logo.png" alt="Dottom Logo" title="Branding" />
        </div>
      </div>
      <Footer />
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
      menu: [
        {
          id: 1,
          title: "Web",
          link: "/about",
        },
        {
          id: 2,
          title: "Podcast",
          link: "/about",
        },
        {
          id: 3,
          title: "Karya",
          link: "/about",
        },
        {
          id: 4,
          title: "Dukung",
          link: "/about",
        },
        {
          id: 5,
          title: "Tentang",
          link: "/about",
        },
      ],
    };
  },
};
</script>

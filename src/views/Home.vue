<template>
  <div class="home">
    <div class="container mx-auto px-32">
      <div class="grid sm:grid-cols-2 gap-4 flex items-center home__content">
        <div class="">
          <p class="text-4xl font-bold tracking-wider">
            Hai, Saya
            <span class="text-yellow-400 font-black">ImotD</span>.
          </p>
          <div class="py-8 tracking-wide">
            salam kenal, saya suka buat sesuatu. <br />
            mimpi saya menjadi frontend developer <br />
            yang dapat diandalkan. <span class="text-gray-300">~itu saja</span>
          </div>
          <div class="text-gray-500">
            <router-link
              class="hover:text-gray-700 focus:text-yellow-300"
              to="/portofolio"
            >
              Portofolio
            </router-link>
            &#8728;
            <router-link
              class="hover:text-gray-700 focus:text-yellow-300"
              to="/podcast"
            >
              Podcast
            </router-link>
            &#8728;
            <router-link
              class="hover:text-gray-700 focus:text-yellow-300"
              to="/karya"
            >
              Karya
            </router-link>
            &#8728; <br />
            <router-link
              class="hover:text-gray-700 focus:text-yellow-300"
              to="/dukung"
            >
              Dukung
            </router-link>
            &#8728;
            <router-link
              class="hover:text-gray-700 focus:text-yellow-300"
              to="/tentang"
            >
              Tentang
            </router-link>
          </div>
          <div class="flex text-gray-500 pt-4 w-24 justify-between">
            <a
              class="hover:text-gray-700 focus:text-yellow-300"
              href="https://github.com/imotD"
            >
              <ph-github-logo :size="22" />
            </a>
            <a
              class="hover:text-gray-700 focus:text-yellow-300"
              href="mailto:tommy.alhamra@gmail.com"
            >
              <ph-envelope-simple :size="22" />
            </a>
            <a
              class="hover:text-gray-700 focus:text-yellow-300"
              href="https://id.linkedin.com/in/tommy-alhamra-217112151"
            >
              <ph-linkedin-logo :size="22" />
            </a>
          </div>
        </div>
        <div class="m-auto">
          <img src="@/assets/mask-logo.png" alt="" />
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

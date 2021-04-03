<template>
  <div class="project grid grid-cols-12 gap-5 relative">
    <section
      class="project__sidebar w-52 h-screen col-span-2 fixed bg-gradient-to-r from-green-400 to-blue-500 "
    >
      <div
        class="rounded-full h-20 w-20 bg-black ring-4 absolute project__sidebar--profile"
      ></div>
      <div class="absolute bottom-0 right-0 left-0 mb-16">
        <ul>
          <li class="my-2">
            <button class="p-2 flow-root bg-blue-100 w-40 m-auto rounded">
              Live Demo
            </button>
          </li>
          <li class="my-2">
            <button class="p-2 flow-root bg-blue-100 w-40 m-auto rounded">
              Workflow
            </button>
          </li>
        </ul>
      </div>
    </section>
    <section class="project__content col-start-3 col-span-10">
      <div class="p-5 pl-10">
        <div>
          <h1 class="text-5xl font-black tracking-wide mb-5">Git Master</h1>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
        </div>
        <div class="content mt-5">
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Masalah
          </h3>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Pengguna & Audiens
          </h3>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Peran & Tanggung Jawab
          </h3>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Ruang Lingkup & Batasan
          </h3>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Solusi
          </h3>
          <span class="font-light tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            adipisci, facere cum error eum magni neque rerum dolores culpa,
            nihil excepturi nulla rem! Corporis non ullam dolore culpa dolores
            amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis ratione maiores est, id laudantium quia itaque? Unde eum
            eius eos hic
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  components: {},
  data() {
    return {
      // datas: [],
    };
  },
};
</script>

<style scoped>
.project__sidebar--profile {
  top: 50px;
  right: -40px;
}
</style>

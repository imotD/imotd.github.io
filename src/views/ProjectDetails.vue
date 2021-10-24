<template>
  <div class="project grid grid-cols-12 gap-5 relative">
    <section
      class="project__sidebar w-64 h-screen fixed bg-gradient-to-r from-green-400 to-blue-500 "
    >
      <div
        class="rounded-full h-20 w-20 bg-black ring-4 ring-yellow-300 ring-opacity-50 shadow-xl absolute project__sidebar--profile"
      ></div>
      <div class="absolute bottom-0 right-0 left-0 mb-16">
        <ul>
          <li class="my-2">
            <a
              :href="data.url"
              target="_blank"
              class="p-2 flow-root bg-red-300 w-40 m-auto rounded text-center"
            >
              Live Demo
            </a>
          </li>
          <li class="my-2">
            <a
              :href="data.case"
              target="_blank"
              class="p-2 flow-root bg-gray-300 w-40 m-auto rounded cursor-not-allowed text-center"
            >
              Case Studies
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="project__content col-start-4 col-span-8">
      <div class="container py-9">
        <div>
          <h1 class="text-5xl font-black tracking-wide mb-5">
            <PuSkeleton width="350px" :loading="loading">
              {{ data.title }}
            </PuSkeleton>
          </h1>
          <span
            class="font-light tracking-wide"
            v-for="(content, i) in data.description"
            :key="i"
          >
            <PuSkeleton :loading="loading" :count="2">
              <span v-for="(data, v) in content" :key="v">
                <span v-for="(vs, x) in data.content" :key="x">
                  {{ vs.value }}
                </span>
              </span>
            </PuSkeleton>
          </span>
        </div>
        <div class="content mt-5">
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Tools
          </h3>
          <span class="font-light tracking-wide">
            <PuSkeleton :loading="loading" circle height="50px" width="50px">
              <div
                v-for="(icon, i) in data.icon"
                :key="i"
                class="
            h-11
            w-11
            bg-gray-100
            rounded
            flex
            justify-items-center
            items-center
          "
                :title="icon.fields.title"
              >
                <img
                  class="m-auto"
                  :src="icon.fields.file.url"
                  :alt="icon.fields.title"
                />
              </div>
            </PuSkeleton>
          </span>
          <h3 class="font-bold text-2xl tracking-wider leading-loose">
            Tujuan
          </h3>
          <span
            class="font-light tracking-wide"
            v-for="(content, i) in data.goal"
            :key="i"
          >
            <PuSkeleton :loading="loading" :count="2">
              <span v-for="(data, v) in content" :key="v">
                <span v-for="(vs, x) in data.content" :key="x">
                  {{ vs.value }}
                </span>
              </span>
            </PuSkeleton>
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
      data: "",
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: "i3y6mpxci9qy",
      environment: "master",
      accessToken: "EqpCCpPDhk2o9LQwDVgbR_clnf8jY7avy6-ZnEUqPn4",
    });
    await client
      .getEntry(this.$route.params.id)
      .then((res) => {
        this.loading = false;
        this.data = res.fields;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
  },
};
</script>

<style scoped>
.project__sidebar--profile {
  top: 50px;
  right: -40px;
}
</style>

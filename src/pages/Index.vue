<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">Hi, i'm ImotD</h1>
      <div class="content">
        <p>
         Seorang Web Designer yang bercita-cita menjadi Frontend Developer.
         <h5 class="text-red-500">Web ini masih dalam pengembangan</h5>
        </p>
        <h2 class="text-3xl">Features</h2>
        <ul class="mb-12 list-disc pl-4">
          <li>Build sites faster with the power of Gridsome, TailwindCSS and SCSS</li>
          <li>Image lazyloading via gridsome builtin functionality</li>
          <li>A simple blog with categories, tags and featured images</li>
        </ul>
        <h2 class="text-3xl">Credits</h2>
        <p>
          This template was built for <a href="https://www.11ty.dev/docs/" target="_blank">Eleventy</a> by <a href="https://github.com/josephdyer" target="_blank"> Joseph Dyer</a>.
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

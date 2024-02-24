<template>
  <div class="bg-app pb-5">
    <Header />

    <!-- content -->
    <v-container>
      <v-row>
        <v-col v-for="menu in menus" :key="menu.label" cols="auto">
          <v-btn
            :loading="isLoading"
            :active="hasMenu.value === menu.value"
            :class="hasMenu.value === menu.value ? 'bg-yellow' : ''"
            variant="outlined"
            rounded="xs"
            density="comfortable"
            @click="selectedMenu(menu)"
          >
            {{ menu.label }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <template v-if="products?.total > 0">
          <v-col
            v-for="item in products?.items"
            :key="item.id"
            cols="12"
            sm="6"
          >
            <CardImage :item="item" @onDialog="handleDialogOn" />
          </v-col>
        </template>
        <div v-else-if="products?.total == 0">
          Oops, data tidak ditemukan...
        </div>
        <div v-else>loading...</div>
      </v-row>
    </v-container>

    <!-- dialog -->
    <DialogDetail
      :model="dialog"
      :data="detail"
      @onclickDialog="handleDialogOff"
    />
  </div>
</template>

<script setup>
onMounted(() => {
  fetchDataProject();
});

const fetchDataProject = async (category = "all") => {
  let data;

  if (category == "all") {
    data = await $fetch("/api/projects");
  } else {
    data = await $fetch(`/api/projects-category?category=${category}`);
  }

  products.value = data;
};

const products = ref({});
const isLoading = ref(false);
const dialog = ref(false);
const detail = ref(null);

const hasMenu = ref({
  label: "All",
  value: "all",
});

const menus = ref([
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "Personal",
    value: "personal",
  },
  {
    label: "Company",
    value: "company",
  },
  {
    label: "Freelance",
    value: "freelance",
  },
]);

const selectedMenu = async (menu) => {
  hasMenu.value = menu;

  fetchDataProject(menu.value);
};

const handleDialogOn = (id) => {
  dialog.value = true;

  try {
    useFetch(`/api/projects-detail?id=${id}`, {
      lazy: true,
    })
      .then((res) => {
        detail.value = res?.data?.value["items"][0]?.fields;
      })
      .catch((e) => {
        console.log("🚀 ~ handleDialogOn ~ e:", e);
      });
  } catch (error) {
    handleDialogOff();
  }
};

const handleDialogOff = () => {
  dialog.value = false;
};
</script>

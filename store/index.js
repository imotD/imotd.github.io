export const state = () => ({
  sosmed: [
    {
      icon: 'github',
      link: 'https://github.com/imotD'
    },
    {
      icon: 'email',
      link: 'mailto:tommy.alhamra@gmail.com',
      hover: 'email-open'
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com/tommyalhamra/'
    },
    {
      icon: 'book-open-blank-variant',
      link: 'https://medium.com/@tommyalhamra '
    },
    {
      icon: 'linkedin',
      link: 'https://id.linkedin.com/in/tommy-alhamra '
    }
  ],
  menus: [
    {
      title: 'Projects',
      to: '/projects',
      hint: 'Kerjaan/Karya'
    },
    {
      title: 'Podcast',
      to: '/podcast',
      hint: 'Keluh Kesah'
    },
    {
      title: 'Dottom Style',
      to: '/art',
      hint: 'Gallery Seni'
    },
    {
      title: 'Support',
      to: '/support',
      hint: 'Traktir Kopi untuk saya'
    },
    {
      title: 'Tentang',
      to: '/about',
      hint: 'Saya Pemalu'
    }
  ],
  project: {}
});

export const getters = {
  getCounter(state) {
    return state.counter;
  }
};

export const mutations = {
  SET_PROJECT(state, project) {
    return (state.project = project);
  }
};

export const actions = {
  fetchProject({ commit }) {
    return this.$contentful.client
      .getEntries({
        content_type: 'product'
      })
      .then((res) => {
        commit('SET_PROJECT', res.items);
      })
      .catch((err) => {
        throw err;
      });
  }
};

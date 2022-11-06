export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Issam elbouhati | Full Stack Developer',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: "Hello I'm Issam elbouhati, a full stack developer based in Tangier, Morocco. I'm passionate about software development and I'm always looking for new challenges.",
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: "Issam elbouhati full stack developer based in Tangier, Morocco. I'm passionate about software development and I'm always looking for new challenges.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: "Issam elbouhati | Full Stack Developer",
    },

    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/firebase.js',
  },
  {
    src: '~/plugins/vuelidate.js',
    ssr: false
  },
  {
    src: './plugins/vue-easy-lightbox.js',
    ssr: false,
  },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  googleFonts: {
    families: {
      // a simple name
      Poppins: true,
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/toast',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/image',
    'vue-sweetalert2/nuxt'

  ],
  toast: {
    position: 'top-center',
    register: [{
      name: 'my-error',
      message: 'Oops...Something went wrong',
      options: {
        type: 'error'
      }
    }]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

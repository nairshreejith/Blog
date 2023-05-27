module.exports = {
  ssr: false,
  target:'static',
    // Add your Nuxt.js configuration options here
    // For example, configure the modules or plugins you want to use
    modules: [
      // Add modules here
    ],
    plugins: [
      // Add plugins here
    ],
    // Add the following line to include the layouts property
  layouts: {
    // Customize the default layout name if needed
    default: '~/layouts/DefaultLayout.vue',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue') // Update the path and component as per your file structure
      });
    }
  }
  };
  
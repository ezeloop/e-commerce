
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['5oGag5emwnDQDyeRydwabU'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
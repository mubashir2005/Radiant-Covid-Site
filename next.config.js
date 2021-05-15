const { createSecureHeaders } = require("next-secure-headers");
const withPwa = require("next-pwa");

const config = {
  future: {
    webpack5: true,
  },
  pwa: {
    dest: "public",
  },
};

module.exports = withPwa(config);

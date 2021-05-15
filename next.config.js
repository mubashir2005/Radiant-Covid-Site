const { createSecureHeaders } = require("next-secure-headers");
const withPwa = require("next-offline");

const config = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  future: {
    webpack5: true,
  },
  pwa: {
    dest: "public",
  },
};

module.exports = withPwa(config);

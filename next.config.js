const { createSecureHeaders } = require("next-secure-headers");
const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const config = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  future: {
    webpack5: true,
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports = withPwa(config);

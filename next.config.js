const { createSecureHeaders } = require("next-secure-headers");

const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const config = {
  // other next withPwa
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  future: { webpack5: true },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    runtimeCaching,
  },
};
module.exports = withPwa(config);

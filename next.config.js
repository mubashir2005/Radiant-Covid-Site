const { createSecureHeaders } = require("next-secure-headers");

const config = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};

module.exports = config;

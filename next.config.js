const { createSecureHeaders } = require("next-secure-headers");

const withPwa = require('next-pwa')

const config = {
  // other next withPwa
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    target: "serverless"
  }
}

module.exports = withPwa(config)


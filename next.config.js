const { createSecureHeaders } = require("next-secure-headers");


const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withOffline = require('next-offline')


const config = {
  // other next withPwa
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  future: {webpack5: true},
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    runtimeCaching
  },
  target: "serverless"
}

module.exports = withOffline(withPwa(config))


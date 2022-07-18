const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  redirects: async () => [{
      source: '/',
      destination: '/notice',
      permanent: true
    }
  ],
  pwa: {
    dest: 'public'
  }
})

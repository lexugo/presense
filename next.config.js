module.exports = {
  reactStrictMode: true,
  redirects: async () => [{
      source: '/',
      destination: '/notice',
      permanent: true
    }
  ]
}

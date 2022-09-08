const progressive = require('next-pwa')

module.exports = progressive({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	reactStrictMode: false
})

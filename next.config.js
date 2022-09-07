const progressive = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development'
})

module.exports = progressive({
	reactStrictMode: false
})

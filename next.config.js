module.exports = {
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: 'https://bmuco-workshop-platform.vercel.app/:path*',
      },
    ]
  },
}

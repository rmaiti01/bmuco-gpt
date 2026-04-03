module.exports = {
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: 'https://bmuco-workshop-platform-git-main-rmaiti01s-projects.vercel.app/:path*',
      },
    ]
  },
}

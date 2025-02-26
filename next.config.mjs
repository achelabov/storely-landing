/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Игнорировать ошибки ESLint во время сборки
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Игнорировать ошибки TypeScript во время сборки
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig

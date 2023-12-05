/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: ['@next/babel'],
    images: {
        domains: ['avatars.githubusercontent.com'], 
      },
}

module.exports = nextConfig
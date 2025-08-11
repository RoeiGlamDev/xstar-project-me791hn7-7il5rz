import { NextResponse } from 'next/server';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  optimizeFonts: true,
  experimental: {
    images: {
      layoutRaw: true
}
},
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
},
        ]
},
    ];
  }
};

export default nextConfig;
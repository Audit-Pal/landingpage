import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/subnet/:path*',
                destination: 'http://localhost:3001/api/subnet/:path*',
            },
        ];
    },
};

export default nextConfig;

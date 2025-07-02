/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['framer-motion'],
    
    // SEO and performance optimizations
    compress: true,
    
    // Headers for SEO and security
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=43200',
                    },
                ],
            },
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'text/plain',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400',
                    },
                ],
            },
        ];
    },
    
    // Redirects for SEO (301 redirects for any old URLs if needed)
    async redirects() {
        return [
            // Add any necessary redirects here
            // Example: redirect from old product URLs to new ones
            // {
            //     source: '/old-products/:slug',
            //     destination: '/products/:slug',
            //     permanent: true,
            // },
        ];
    },
    
    // Rewrites for clean URLs and SEO
    async rewrites() {
        return [
            // Add any URL rewrites if needed
            // Example: API routes or clean URLs
        ];
    },
    
    // Image optimization for better SEO and performance
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [
            'lubeckelevators.com',
            'img.youtube.com', // For video thumbnails
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lubeckelevators.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/vi/**',
            },
        ],
    },
    
    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['framer-motion'],
    },
    
    // webpack: (config: Configuration) => {
    //     // Safely initialize module and rules if they don't exist.
    //     config.module = config.module ?? {};
    //     config.module.rules = config.module.rules ?? [];

    //     config.module.rules.push({
    //         test: /\.mjs$/,
    //         include: /node_modules/,
    //         type: 'javascript/auto',
    //     });

    //     return config;
    // },
};

export default nextConfig;

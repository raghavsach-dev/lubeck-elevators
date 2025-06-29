import { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['framer-motion'],
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

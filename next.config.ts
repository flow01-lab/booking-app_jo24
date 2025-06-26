import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* == Configuration adding for Cypress Code Coverage == */
  /* === START === */
  ...(process.env.NEXT_TEST === '1' ? {
        webpack: (config) => {
          config.module.rules.push({
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["next/babel"],
                plugins: [
                  ["istanbul", {
                    exclude: ["**/*.cy.tsx"]
                  }]
                ]
              }
            }
          })
          return config
        }
    }: {})
  /* === END === */
  
};

export default nextConfig;

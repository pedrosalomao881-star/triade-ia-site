import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 300,
  async rewrites() {
    return {
      beforeFiles: [
        // Serve ContabOS Sistema (app-contabos.triadeiaos.com)
        {
          source: "/:path((?!api|_next|.*\\.).*)",
          destination: "/contabos/sistema/index.html",
          has: [
            {
              type: "host",
              value: "app-contabos\\.triadeiaos\\.com",
            },
          ],
        },
        // Serve SOAF Empresa (soaf-empresa.triadeiaos.com)
        {
          source: "/:path((?!api|_next|.*\\.).*)",
          destination: "/soaf-empresa/index.html",
          has: [
            {
              type: "host",
              value: "soaf-empresa\\.triadeiaos\\.com",
            },
          ],
        },
        // Serve SOAF Contador (soaf-contador.triadeiaos.com)
        {
          source: "/:path((?!api|_next|.*\\.).*)",
          destination: "/soaf-contador/index.html",
          has: [
            {
              type: "host",
              value: "soaf-contador\\.triadeiaos\\.com",
            },
          ],
        },
      ],
    };
  },
};

export default nextConfig;

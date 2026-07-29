import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 300,
  async redirects() {
    return [
      // /creditorX era um proxy quebrado (CSS não carregava). Agora redireciona
      // para a landing real, que já renderiza com o layout correto.
      {
        source: "/creditorX",
        destination: "/creditorx-landing",
        permanent: false,
      },
      // Página fantasma removida — manda quem tinha o link salvo direto pro login real.
      {
        source: "/creditorX/sistema",
        destination: "https://frontend-three-iota-19.vercel.app/login",
        permanent: false,
      },
      {
        source: "/creditorX/sistema/:path*",
        destination: "https://frontend-three-iota-19.vercel.app/login",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Serve ScenarioOS em /scenarioos-app (proxy para o deployment scenarioos-triade)
        {
          source: "/scenarioos-app",
          destination: "https://scenarioos-triade.vercel.app/scenarioos-app",
        },
        {
          source: "/scenarioos-app/:path*",
          destination: "https://scenarioos-triade.vercel.app/scenarioos-app/:path*",
        },
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar o modo estrito do React
  reactStrictMode: true,
  
  // Configurações de compilação do TypeScript
  typescript: {
    // Habilitar verificação de tipos rigorosa
    ignoreBuildErrors: false,
  },
  
  // Configurações de otimização de imagens
  images: {
    domains: [],
  },
  
  // Configurações de webpack
  webpack: (config, { isServer }) => {
    // Personalizações adicionais do webpack podem ser adicionadas aqui
    return config;
  },
};

export default nextConfig;

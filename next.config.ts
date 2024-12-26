import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 类型断言，将对象强制转换为符合 NextConfig['eslint'] 要求的类型
    ...({
      ignoreDuringBuilds: false,
      extends: '@next/eslint-plugin-next',
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    } as any as NextConfig['eslint']),
  },
};


export default nextConfig;

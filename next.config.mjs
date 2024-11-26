/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "/**", // Matches all paths under pixabay.com
      },
    ],
  },
};

export default nextConfig;

  
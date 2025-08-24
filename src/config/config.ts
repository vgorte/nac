// config/config.ts

// Configuration for deployment paths
export const config = {
  // Use repo name when deployed, root when local
  basePath: process.env.NODE_ENV === 'production' ? '/nac' : '/',

  // Get the full path for routing
  getBasePath: () => {
    return config.basePath === '/' ? '' : config.basePath;
  },

  // Get asset path for images and other assets
  getAssetPath: (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${config.basePath}/${cleanPath}`;
  }
};

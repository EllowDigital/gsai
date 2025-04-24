import { defineConfig } from 'vite'; // Add this line to import defineConfig
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(async ({ mode }) => {
  const isDev = mode === 'development';
  const isGitHub = process.env.DEPLOY_TARGET === 'github';
  const base = isDev ? '/' : isGitHub ? '/gsai-webv3/' : '/';

  // Plugins array with dynamic import of tempo-devtools
  const plugins = [react()];

  if (isDev) {
    try {
      const { tempo } = await import('tempo-devtools/dist/vite');
      plugins.push(tempo());
    } catch {
      console.warn('⚠️ tempo-devtools not found, skipping...');
    }

    plugins.push(componentTagger());
  }

  return {
    base,
    server: {
      host: '::',
      port: 8080,
      open: true,
      strictPort: true,
    },
    plugins,
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': path.resolve(__dirname, 'src'),
        three: path.resolve(__dirname, 'node_modules/three'),
      },
    },
    build: {
      minify: 'esbuild',
      sourcemap: isDev,
    },
    optimizeDeps: {
      include: ['three'],
      entries: ['src/main.tsx', 'src/tempobook/**/*'],
    },
  };
});

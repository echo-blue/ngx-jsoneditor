import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    angular({
      tsconfig: resolve(rootDir, 'tsconfig.spec.json')
    })
  ],
  resolve: {
    alias: {
      '@echo-blue/ngx-jsoneditor': resolve(
        rootDir,
        'projects/ngx-jsoneditor/src/public-api.ts'
      )
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: [
      'src/**/*.spec.ts',
      'projects/**/*.spec.ts',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: resolve(rootDir, 'coverage/vitest')
    }
  }
});

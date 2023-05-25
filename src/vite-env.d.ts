/// <reference types="vite/client" />

// in vite-env.d.ts
interface ImportMeta {
  env: {
    NODE_ENV?: 'development' | 'production'
    MODE?: 'development' | 'production'
    [key: string]: string | undefined
  }
}

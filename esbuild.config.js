import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['server/index.ts'],
  platform: 'node',
  format: 'esm',
  bundle: true,
  outdir: 'dist',
  external: ['express', 'cors', 'dotenv', 'node-fetch'],  // 添加你的外部依赖
}) 
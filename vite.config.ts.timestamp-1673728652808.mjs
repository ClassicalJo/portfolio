// vite.config.ts
import { defineConfig } from "file:///home/weiss/_coding/portfolio/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/weiss/_coding/portfolio/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
import sveltePreprocess from "file:///home/weiss/_coding/portfolio/node_modules/svelte-preprocess/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [svelte({
    preprocess: [sveltePreprocess()]
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS93ZWlzcy9fY29kaW5nL3BvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvd2Vpc3MvX2NvZGluZy9wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvd2Vpc3MvX2NvZGluZy9wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcbmltcG9ydCBzdmVsdGVQcmVwcm9jZXNzIGZyb20gJ3N2ZWx0ZS1wcmVwcm9jZXNzJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtzdmVsdGUoe1xuICAgIHByZXByb2Nlc3M6IFtzdmVsdGVQcmVwcm9jZXNzKCldXG4gIH0pXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsU0FBUyxjQUFjO0FBQ3ZCLE9BQU8sc0JBQXNCO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxPQUFPO0FBQUEsSUFDZixZQUFZLENBQUMsaUJBQWlCLENBQUM7QUFBQSxFQUNqQyxDQUFDLENBQUM7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
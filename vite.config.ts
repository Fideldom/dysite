import { defineConfig } from 'vite';

export default defineConfig({
  // ... outras configurações do seu projeto ...

  preview: {
    allowedHosts: [
      'dysite.onrender.com', // Libera o seu domínio do Render
      '.onrender.com'        // Libera qualquer subdomínio do Render
    ]
  },
  
  // Caso esteja rodando em modo dev/server no Render, adicione também no server:
  server: {
    allowedHosts: [
      'dysite.onrender.com',
      '.onrender.com'
    ]
  }
});

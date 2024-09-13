const http = require('http');
const app = require('../src/app'); 
const port = parseInt(process.env.PORT, 10) || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});

server.on('error', (error) => {
    console.error('Erro no servidor:', error);
});

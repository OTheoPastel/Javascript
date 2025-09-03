//importando o modulo os (operating system)
const os = require('os');
//exibindo informações do sistema operacional
//exibindo a arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch());
//exibindo a quantidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().length);
//exibindo o total da memoria em bytes
console.log('Memoria total (bytes):', os.totalmem());
//exibindo a memoria livre em bytes
console.log('Memoria livre (bytes):', os.freemem());
//exibindo o sistema
console.log(os.platform());
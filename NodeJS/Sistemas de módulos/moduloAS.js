//Todo arquivo que contenha código JS é considerado um módulo no NodeJS, contendo variáveis, funções exportadas ou não.
//cada modulo é um objeto

//criando dinamicamente
this.ola = "Fala pessoal!"
exports.bemvindo = "Sejam bem vindos ao node"
module.exports.atelogo = "até o próximo exemplo"

//outra forma de exportar um arquivo é criando um objeto dentro dekle
exports.ola {
    bomDia = 'Bom Dia!'
    boaNoite(){
        return "boa noite!"
    }
}
const temIngresso = true;
const censura = 16;
const idade = 14
const estaComOsPais = true;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode Entrar")
    } else {
        console.log("Não pode entrar")
    }
} else {
    console.log("Não pode entrar")
}
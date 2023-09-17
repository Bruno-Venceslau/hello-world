const valorDoProduto = 100;
const parcelas = 3;

if (parcelas === 1) {
    const desconto = valorDoProduto * 0.9
    console.log(`O produto fica R$${desconto}, pois a vista tem 10% de desconto.`)
} else {
    const valorDaParcela = (valorDoProduto / parcelas).toFixed(2)
    console.log(`O produto fica em ${parcelas} vezes de R$${valorDaParcela}.`)
}
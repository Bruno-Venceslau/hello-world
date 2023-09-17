const valorDoProduto = 100;
const parcelas = 8;

if (parcelas === 1) {
    const desconto = valorDoProduto * 0.9;
    console.log(`O valor com desconto a vista é de R$${desconto}.`);
} else if (parcelas >= 2 && parcelas <= 6) {
    const valorDaParcela = (valorDoProduto / parcelas).toFixed(2);
    console.log(`Você vai pagar ${parcelas}x parcelas sem juros no valor de R$${valorDaParcela}.`);
} else if (parcelas >= 7 && parcelas <= 12) {
    const valorDaParcelaComJuros = (valorDoProduto * (1 + 0.01) ** parcelas).toFixed(2);
    const valorDaParcela = (valorDaParcelaComJuros / parcelas).toFixed(2);
    console.log(`Você deve pagar em ${parcelas}x de R$ ${valorDaParcela}, totalizando R$ ${valorDaParcelaComJuros}, devido a incidência de juros.`);
} else {
    console.log("Número de parcelas inválido.")
}
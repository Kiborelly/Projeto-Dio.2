# Calculadora de Partidas Rankeadas 🎮

## Sobre o Projeto

Este projeto consiste em uma calculadora de saldo de partidas ranqueadas para jogadores de games. A função determina o nível do jogador com base no saldo de vitórias e derrotas.

## Abordagem do Código

O código foi abordado de maneira a criar uma função simples e eficiente, `saldoRankeadas(vitorias, derrotas)`, que calcula o saldo de vitórias subtraindo o número de derrotas. Com base nesse saldo, a lógica das estruturas de decisão define automaticamente o nível do jogador no ranqueado.

### Estrutura de Decisão

Utilizei estruturas `if...else if...else` para definir o nível do jogador de acordo com faixas de vitórias. Isso permite uma definição precisa do nível com base no saldo obtido.

## Detalhes de Implementação

Esta seção detalha aspectos específicos da implementação, como:

- Como a função `saldoRankeadas()` foi estruturada.
- Detalhes sobre a lógica das estruturas de decisão para determinar o nível do jogador.

## Níveis de Ranqueamento

- Menos de 10 vitórias: Ferro
- 11 a 20 vitórias: Bronze
- 21 a 50 vitórias: Prata
- 51 a 80 vitórias: Ouro
- 81 a 90 vitórias: Diamante
- 91 a 100 vitórias: Lendário
- Mais de 100 vitórias: Imortal

## Instruções de Uso

1. Defina a quantidade de vitórias e derrotas do jogador.
2. Utilize a função `saldoRankeadas()` passando as vitórias e derrotas como argumentos.
3. O resultado mostrará o saldo do jogador no ranqueado.

### Observação Importante

- Certifique-se de inserir apenas números válidos como entrada para a função.


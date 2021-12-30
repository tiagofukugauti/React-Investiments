export function corrigeDados(allInvestiments) {
  let novaBase = [];

  for (var fundos of allInvestiments) {
    for (var fundo of fundos['investments']) {
      let novoRegistro = {
        id: fundo['id'],
        descricao: fundo['description'],
        report: [],
      };
      for (var reports of fundos['reports']) {
        if (reports['investmentId'] === fundo['id']) {
          novoRegistro['report'].push(reports);
        }
      }
      novoRegistro['report'] = novoRegistro['report'].sort((a, b) => {
        return a.month - b.month;
      });
      novaBase.push(novoRegistro);
    }
  }
  return novaBase;
}

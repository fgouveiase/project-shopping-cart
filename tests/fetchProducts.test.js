require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('verifica se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Verifica se ao chamar a funcao fetchProducts com o argumento computador, fetch sera chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Verifica se ao chamar a funcao fetchProducts com argumento computador, a funcao fetch utiliza o endpoint correto', async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Verifica se o retorno da funcao fetchProducts com argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect( await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('Verifica se ao chamar a funcao fetchProducts sem argumento, retorna mensagem de erro', async () => {
    const retorno = new Error('You must provide an url')
    expect( await fetchProducts()).toEqual(retorno);
  })
});

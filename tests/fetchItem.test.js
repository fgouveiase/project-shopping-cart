require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Testa se fetchItem com argumento MLB1615760527 utiliza a endpoint correta', async () => {
    const url = `https://api.mercadolibre.com/items/MLB1615760527`;
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Testa se fetchItem com argumento MLB1615760527 e uma estrutura de dados igual ao objeto item', async () => {
    expect( await fetchItem ('MLB1615760527')).toEqual(item);
  })
  it('Testa se fetch foi chamada quando a funcao fetchItem possui argumento do "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('Testa se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const message = new Error('You must provide an url')
    expect(await fetchItem()).toEqual(message);
  });
})

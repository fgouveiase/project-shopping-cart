const getUrl = (computador) => `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

const fetchProducts = async (computador) => {
  if (computador === undefined) {
    const error = new Error('You must provide an url');
    return error;
  }
  const url = getUrl('computador');
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

const fetchProducts = async (computador) => {
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
  try {
    if (computador === undefined) {
      throw (new Error('You must provide an url')); 
    }
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

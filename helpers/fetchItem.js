const fetchItem = async (idItem) => {
    if (idItem === undefined) {
      const error = new Error('You must provide an url');
      return error;
    }
    const url = `https://api.mercadolibre.com/items/${idItem}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

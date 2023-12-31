// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const carrinhoItem = document.querySelector('.cart__items'); 
const item = document.querySelector('.items');
const buttonRemove = document.querySelector('.empty-cart');
const ItemCart = document.querySelectorAll('.cart__item');

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  console.log(id, title, price);
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  console.log(li);
  return li;
};

const addCarts = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((botao) => botao.addEventListener('click', async (event) => {
    const buttonEvent = event.target.parentElement.firstChild.innerText;
    const product = await fetchItem(buttonEvent);
    const productIdent = { 
      id: product.id, 
      title: product.title, 
      price: product.price, 
    };
    carrinhoItem.appendChild(createCartItemElement(productIdent));
    }));
};

const removeCartItem = () => {
  buttonRemove.addEventListener('click', () => {
    carrinhoItem.innerHTML = '';
  });
};

const loadingText = () => {
  const elements = document.querySelector('.items');
  const createElement = document.createElement('p');
  createElement.className = 'loading';
  createElement.innerHTML = 'carregando...';
  elements.appendChild(createElement);

    setTimeout(() => {
      createElement.remove();
    }, 1000);
};

window.onload = async () => {
  const fetchProd = await fetchProducts('computador');
  fetchProd.results.forEach((prod) => {
    item.appendChild(createProductItemElement(prod));
  });
  addCarts();
  loadingText();
  removeCartItem();
};

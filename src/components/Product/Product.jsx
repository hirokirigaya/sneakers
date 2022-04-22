import { useParams } from 'react-router-dom';
import Container from '../layout/Container';
import ErrorPage from '../pages/ErrorPage';
import Slider from '../layout/Slider';
import './Product.css';

import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { RiSubtractLine as Min } from 'react-icons/ri';
import { BsPlusLg as Max } from 'react-icons/bs';

import Products from './Products';

import { useState } from 'react';

function Product() {
  const param = useParams();
  const productId = param.productId;


  const [modal, setModal] = useState(0)


  const product = Products.filter((product) => product.slug === productId)[0];

  const [value, setValue] = useState(0);

  const Subtract = () => {
    setValue(value === 0 ? 0 : value - 1);
  };

  const Add = () => {
    setValue(value != 0 ? value + 1 : value + 1);
  };
  const Change = (e) => {
    let change = e.target.value;
    setValue(parseInt(change));
  };

  const overlay = () => {
    setModal(!modal)
  }

  if (product) {
    return (
      <Container>
        <div className={modal == true ? "modal-open" : ''} onClick={overlay}></div>
        <section className="product">
          <div className="content-desc">
            <p className="company">{product.company.toLocaleUpperCase()}</p>
            <h1>{product.title}</h1>
            <p className="productdesc">{product.desc}</p>
            <div className="price">
              <div>
                <p> $ {product.pricedisc}.00</p>
                <span>
                  {((product.pricedisc / product.price) * 100).toFixed(0)}%
                </span>
              </div>
              <p className="last">$ {product.price}.00</p>
            </div>
            <div className="add-cart">
              <div className="count">
                <button className="min" onClick={Subtract}>
                  <Min />
                </button>
                <input
                  type="number"
                  value={value}
                  onChange={Change}
                  name=""
                  id=""
                  min="0"
                />
                <button className="max" onClick={Add}>
                  <Max />
                </button>
              </div>
              <button className="btn-cart">
                <Cart /> Add to cart
              </button>
            </div>
          </div>
          <div className='content-slider'>
            <Slider slides={product} modal={modal} setModal={setModal}/>
          </div>
        </section>
      </Container>
    );
  } else {
    return <ErrorPage />;
  }
}

export default Product;

import styles from './CartContainer.module.css'

function CartContainer(props) {

  return (
    <div className={props.active ? styles.cartOpen : styles.cart}>
      <h2>Cart</h2>
      <div>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default CartContainer;
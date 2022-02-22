/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart } from "@/redux/action";
import "./Cart.scss";

function Cart() {
  const state = useSelector((state: RootStateOrAny) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item: unknown) => {
    dispatch(addCart(item));
  };

  const handleDel = (item: unknown) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => <h1 className="title">Your cart is empty</h1>;

  const cartItems = (product: any) => (
    <div className="product-item" key={product.id}>
      <div className="left">
        <img src={product.image} alt={product.title} height="200px" width="180px" />
      </div>
      <div className="right">
        <h2 className="title">{product.title}</h2>
        <div className="count-item">
          <h3>Price</h3>
          <span className="count">{product.qty}</span> X <span className="price">${product.price}</span> ={" "}
          <span className="total">{product.qty * product.price}$</span>
        </div>
        <div className="btn-box">
          <button type="button" className="plus" onClick={() => handleAdd(product)}>
            +
          </button>
          <button type="button" className="minus" onClick={() => handleDel(product)}>
            -
          </button>
        </div>
      </div>
    </div>
  );

  const buttons = () => <Link to="/checkout">Proceed to checkout</Link>;

  return (
    <main>
      <section className="cart wrapper">
        {state.length === 0 && emptyCart()}
        <div className="product-items">{state.length !== 0 && state.map(cartItems)}</div>
        <div className="checkout">{state.length !== 0 && buttons()}</div>
      </section>
    </main>
  );
}

export default Cart;

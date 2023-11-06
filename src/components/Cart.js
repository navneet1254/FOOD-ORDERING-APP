import { useState } from "react";
import "../assets/css/basket.css";

function Cart({ items, remove }) {

    const [first, setFirst] = useState(true);
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "0";
  };

  const handleChange = () => {
    setFirst(()=> totalPrice>0? !first: first);
  };
  // Calculate total price
  const totalPrice = items.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.qty * currentValue.price,
    0
  );
  const GST = totalPrice * 0.5;

  return (
    <div id="mySidenav" className="sidenav">
      <a href="/" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <div className="container" id="container">
        {(first)  ? (<div className="row">
          <div className="col-md-6">
            <h3>Cart</h3>
            <hr />
            
            <div className="table-responsive" id="table">
              <table className="table">
                <thead id="table-header">
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody id="table-body">
                  {items.map((pizza) => (
                    <tr key={pizza.id}>
                      <td>
                        <strong>{pizza.name}</strong>
                      </td>
                      <td>{pizza.qty}</td>
                      <td>INR ₹ {pizza.price}</td>
                      <td id="remove">
                        <i
                          onClick={() => remove(pizza)}
                          className="far fa-trash-alt"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Checkout</h3>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="lead">Subtotal</p>
              <p className="lead">INR ₹ {totalPrice}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>GST</p>
              <p>INR ₹ {GST}</p>
            </div>
            <hr />
            <button
              className="btn btn-success d-flex justify-content-between align-items-baseline"
              id="checkout"
              type="button"
              onClick={handleChange}
            >
              Checkout
              <span className="badge bg-success">INR ₹ {totalPrice + GST}</span>
            </button>
          </div>
        </div>) : <div className="fs-2 text-center">Thanks for the order!</div>}
      </div>
    </div>
  );
}

export default Cart;
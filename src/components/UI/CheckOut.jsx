import React, { useContext } from "react";
import Modal from "./Modal";
import { currencyFormatter } from "../../util/formatting";
import CartContext from "../../store/CartContext";
import Input from "./Input";
import Button from "./Button";
import UserProgressContext from "../../store/UserProgressContext";

const CheckOut = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total amount:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default CheckOut;

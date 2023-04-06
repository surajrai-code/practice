import { useSelector, useDispatch } from 'react-redux';
import { toggleCartVisibility } from './cartReducer';

function Cart() {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleCartVisibility())}>
        {isVisible ? 'Hide Cart' : 'Show Cart'}
      </button>
      {isVisible && <div>Cart content goes here</div>}
    </div>
  );
}

export default Cart;
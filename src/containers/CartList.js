import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import CartTable from '../components/CartTable';
import { increment, decrement, remove } from '../store/cartSlice';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})

    function getTotalCost() {
        return Object.keys(cart).reduce((accum, item) => {
            let g = goodsObj[item];
            accum += cart[item] * g.cost;
            return accum;
        }, 0)
    }

    function clickHandler(e) {
        let target = e.target;
        let art = target.dataset.art;

        if (!target.classList.contains('btn')) return;

        if (target.classList.contains('increase-btn')) {
            dispatch(increment(art))
        }

        if (target.classList.contains('reduce-btn')) {
            dispatch(decrement(art))
        }

        if (target.classList.contains('remove-btn')) {
            dispatch(remove(art))
        }
    }

    return (
        <div>
            <h1>Cart</h1>
            <div className="cart-field">
                <table className="table">
                    <tbody onClick={clickHandler}>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Unit cost</th>
                            <th>Count</th>
                            <th>Total cost</th>
                            <th>Change</th>
                        </tr>
                        <CartTable goods={goodsObj} cart={cart} />
                        <tr>
                            <td className="total-cost" colSpan="5">Total cart cost</td>
                            <td>{getTotalCost()}$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CartList;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import Goods from '../components/Goods';
import { increment } from '../store/cartSlice';

function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    function clickHandler(e) {
        e.preventDefault();
        let target = e.target;
        if(!target.classList.contains('add-to-cart')) return;
        dispatch(increment(target.getAttribute('data-key')))
    }

    return (
        <>
            <div className='goods-field' onClick={clickHandler}>
                {goods.map(item => <Goods title={item.title} cost={item.cost}
                    image={item.image} articul={item.articul} key={item.articul} />)}
            </div>
        </>
    )
}

export default GoodsList;
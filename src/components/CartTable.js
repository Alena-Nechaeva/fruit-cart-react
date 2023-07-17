function CartTable(props) {
    return (
        <>
            {Object.keys(props.cart).map(key => {
                let goods = props.goods[key];
                return (
                    <tr key={key}>
                        <td><img className="sm" src={goods.image} alt="item" /></td>
                        <td>{goods.title}</td>
                        <td>{goods.cost}$</td>
                        <td>{props.cart[key]}</td>
                        <td>{props.cart[key] * goods.cost}$</td>
                        <td>
                            <div className="btns-wrap">
                                <button className="btn increase-btn" data-art={key}>+</button>
                                <button className="btn reduce-btn" data-art={key}>-</button>
                                <button className="btn remove-btn" data-art={key}>x</button>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default CartTable;
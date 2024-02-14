import { useDispatch, useSelector } from 'react-redux';
import '../css/cart-p.css'
import testImg from '../images/img-pro-03.jpg'
import { useEffect } from 'react';
import { clear, deletFromCart } from '../redux-TK/Slices/cart-slice';
function CartPage(){

    const dispatch = useDispatch()
    
    const myCart = useSelector((state)=> state.cart);

    const totalPrice = myCart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)

    return(
        <>
        <div className="cartPage">
            <div className='container'>
                <h1 className='main-heading'>Your Cart</h1>
                <div className='general'>
                <button className='clear' onClick={()=>{
                    dispatch(clear())
                }} >Clear All</button>
                <span className='total-price'> Total Price: "{totalPrice.toFixed(2)}$"</span>
                </div>
                <div className='cart-holder w-100 row justify-content-center  ' >
            
                    {myCart.map((item)=>{
                        return(
                    <div className='item col-7 col-md-5 col-lg-3 m-4' key={item.id}>
                        <div className='image d-flex align-items-center justify-content-center  '>
                            <img src={item.image} className=' '/>
                        </div>
                        <div className='info'>
                            <div className='top-sec'>
                            <span className='item-title'>{item.title}</span>
                            <span className='item-id'>Id: <span className=' fst-italic  '>'{item.id}'</span></span>
                            </div>
                            <span className='qty '>quantity:  &#91;{item.quantity}&#93;</span>
                            <div className='bottom-sec'>
                            <span className='item-price'>{item.price} $</span>
                            <div className='extra-op'>
                                <button className='mb-1'>operation</button>
                                <button>operation</button>
                            </div>
                            </div>
                            <button className='delete' onClick={
                                ()=>{
                                    dispatch(deletFromCart(item));
                                }
                            }>Delete from cart</button>
                        </div>
                    </div>

                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}


export default CartPage;
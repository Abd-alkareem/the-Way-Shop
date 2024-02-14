import { useDispatch, useSelector } from 'react-redux';
import '../css/products-p.css'
import testImg from '../images/img-pro-04.jpg'
import { useEffect } from 'react';
import { fetchProducts } from '../redux-TK/Slices/products-slice';
import { addToCart } from '../redux-TK/Slices/cart-slice';
function ProductsPage(){

    const dispatch = useDispatch();

    const myProducts = useSelector((state)=> state.products)
    
        useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return(
        <>
        <div className="Products-page">
            <h1 className='main-heading'>Our Products</h1>
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between  ">

                    {myProducts.map((product)=>{
                        return(
                    <div className='col-lg-5 col-10 ms-4 me-4  ' key={product.id}>
                        <div className='product-card'>
                            <div className='image'>
                                <img src={product.image}></img>
                            </div>
                            <div className='info'>
                                <span className='product-title'>{product.title.slice(0,10)}</span>
                                <span className='product-id'>Id: "{product.id}"</span>
                                <span className='product-price'>{product.price}$</span>
                                <span className='product-category'>- {product.category}</span>
                                <p className='product-discreption'>{product.description}</p>
                                <button className='add' onClick={()=>{
                                    dispatch(addToCart(product))
                                }}>add to cart</button>
                            </div>
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


export default ProductsPage;



 /*
                     <div className='col-4'>
                        <div className='product-card'>
                            <div className='image'>
                                <img src={testImg}></img>
                            </div>
                            <div className='info'>
                                <span className='product-title'>Product Title</span>
                                <span className='product-id'>Id: "Product id"</span>
                                <span className='product-price'>20.05 $</span>
                                <span className='product-category'>- category</span>
                                <p className='product-discreption'>Your perfect pack for everyday use and walks in the forest. Stash your laptop ,Your perfect pack for everyday use and walks in the forest. Stash your laptop,Your perfect pack for everyday use and walks in the forest. Stash your laptop</p>
                                <button className='add'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
 
 */
import { useEffect } from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

        function minuBtn(){
                document.querySelector(".nav-bar .naves").classList.toggle("active");
                document.querySelector(".nav-bar .minu-btn").classList.toggle("active");
            
        }
        let currentActiveLink=0;
        if(window.sessionStorage.getItem("current link") == null){
            window.sessionStorage.setItem("current link",currentActiveLink);
        }

        useEffect(()=>{
            document.querySelectorAll(".nav-bar .naves li.navi ").forEach((e,i)=>{
            e.addEventListener("click",()=>{            
            document.querySelectorAll(".nav-bar .naves li").forEach((nav)=>{
                nav.classList.remove("active");
            })
            document.querySelector(".nav-bar .naves").classList.remove("active");
            document.querySelector(".nav-bar .minu-btn").classList.remove("active");
            document.querySelectorAll(".nav-bar .naves li ")[i].classList.add("active");
            window.sessionStorage.setItem("current link",i)  
                })
            })
            currentActiveLink = window.sessionStorage.getItem("current link");
            document.querySelectorAll(".nav-bar .naves li ")[currentActiveLink].classList.add("active");
        },[])
        const myCart = useSelector((state)=> state.cart)
    return(
        <>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='minu-btn d-flex d-lg-none align-items-center justify-content-center ' onClick={()=>{minuBtn()}}>
                    <FontAwesomeIcon icon={faBars} className=' w-100 h-75' />
                </div>
                <ul className='naves '>
                    <li className=' navi' id="li-1"  >
                        <Link to="/"  className='a'>Home</Link>
                    </li>
                    <li className='navi'>
                        <Link to="/cart"  className='a' >Cart-{myCart.length}</Link>
                    </li >
                    <li className='navi'>
                        <Link to="/products" className='a' >Products</Link>
                    </li>
                    <li className='navi'>
                        <Link to="/shop" className='a' >SHOP</Link>
                    </li>
                    <li className='navi'>
                        <Link to="/contact" className='a' >Contact us</Link>
                    </li>
                    <li>
                    <form id='' action='#' className='search-form'>
                    <input type='text' placeholder='Search' className='search-fild'/>
                    <FontAwesomeIcon icon={faSearch} className='icon-search'/>
                    </form>
                    </li>
                </ul>
            </div>

        </>
    )
}



export default Navbar;


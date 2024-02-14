import { useDispatch, useSelector } from 'react-redux';
import '../css/categoryes.css'
import CateSpan from './Category-span';
import { useEffect } from 'react';
import { getCategorys } from '../redux-TK/Slices/categorye-slice';


function Categoryes (){

    // const dispatch = useDispatch();

    // const categorys = useSelector((state)=> state.categorys);

    // useEffect(()=>{
    //     dispatch(getCategorys);
    // },[])
    return(
        <>  
        <div className='categoryes'>
            <h1 className='cate-heading'> Categoreys</h1>
            <div className='categoryes-holder justify-content-center fw-bold text-danger  '>
                {/* <CateSpan/>
                <CateSpan/>
                <CateSpan/>
                <CateSpan/> */}
                <span className='sorry text-center p-5 '>
                    SORRY!! THIS SECTION IS NOT READY TO USE YET, WE ARE WORKING ON IT TO MAKE IT READY AS SOON AS POSSIBLE..
                </span>
            </div>
        </div>

        </>

    )

}


export default Categoryes;
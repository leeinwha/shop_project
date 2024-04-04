import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props){

  let {id} = useParams();
  let prd = props.shoes.find(x => x.id == id);  
  let [alert , setAlert] = useState(true)

  useEffect(()=>{
    let timer = setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{
      clearTimeout(timer)
    }
  }, [])

  return(
    <div className='container'>
      {
        alert == true
        ? <div className='alert alert-warning'>
            2초이내 구매시 할인
          </div>
        : null
      }
      <div className='row'>          
        <div className='col-md-6'>
          <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width='100%'/>          
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{prd.title}</h4>
          <p>{prd.content}</p>
          <p>{prd.price} 원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>       
      </div>
    </div>
  )
}

export default Detail;
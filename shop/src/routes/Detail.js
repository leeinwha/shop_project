import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props){

  let {id} = useParams();
  let prd = props.shoes.find(x => x.id == id);  
  let [alert , setAlert] = useState(true)
  let [tab, setTab] = useState(0)

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

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey='link0'>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey='link1'>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey='link2'>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  )
}
/*
function TabContent(props){
  if (props.tab == 0){
    return <div>내용0</div>
  } 
  if(props.tab == 1){
    return <div>내용1</div>
  }
  if(props.tab == 2){
    return <div>내용2</div>
  }
}
*/
function TabContent({tab}){
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
}
export default Detail;
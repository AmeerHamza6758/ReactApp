import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Loader from './Loader';

function Cards() {
    const [data,setData]=useState([]);
    const [loader,setLoader]=useState(true)

    const dataFunc=async()=>{
const response=await axios.get("https://fakestoreapi.com/products")
setData(response.data);
setLoader(false);
    }
useEffect(()=>{
  dataFunc();
},[])


  return (
    <div>
      {loader?<Loader/>:null}
      <div className="container d-flex flex-wrap justify-content-between gap-5 mt-5">
       {data.map((a)=>{
        return(
          <div class="card" style={{width: "18rem"}}>
  <img src={a.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{a.title}</h5>
    <p class="card-text">{a.description}</p>
    <a href="#" class="btn btn-primary">{a.price}</a>
  </div>
</div>
        )
       })}
     

      </div>
    </div>
  )
}

export default Cards

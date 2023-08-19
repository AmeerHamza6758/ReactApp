import React,{useState} from 'react'

function Cards() {
    const [data,setData]=useState([
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/mccafe-dsk-en.jpg",
            title:"McCafé",
            desc:"Browse our menu for more information on topics such as our tasty coffee and espresso drinks.",
            btnText:"Order Now"
         },
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/mcdelivery-574x249-en.jpg",
            title:"McDelivery",
            desc:"Delivering food at your doorsteps.",
            btnText:"Order Now"
         },
      
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/mccafe-dsk-en.jpg",
            title:"Our App",
            desc:"McDonald's in your Pocket..",
            btnText:"Download Now"
         },
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_449/https://mcdonalds.com.pk/wp-content/uploads/2022/07/item-4.png",
            title:"Our Menu",
            desc:"Our exclusive menu is waiting for you.",
            btnText:"Order Now"
         },
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_446/https://mcdonalds.com.pk/wp-content/uploads/2022/07/item-5.png",
            title:"Trending Now",
            desc:"Find out what's new.",
            btnText:"Learn More"
         },
         {
            img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_574/https://mcdonalds.com.pk/wp-content/uploads/2022/08/careers-info-card-1.png",
            title:"Careers",
            desc:"Be a part of our team.",
            btnText:"Apply Now"
         },

])
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-between gap-5 mt-5">
        {data.map((item)=>{
            return(
                <div class="card" style={{width: "24rem"}}>
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="card-body  d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title text-danger fs-2"><b>{item.title}</b></h5>
                  <p class="card-text w-75 text-center">{item.desc}</p>
                  <a href="#" class="btn btn-primary" style={{backgroundColor:"#ffbc0d",color:"black",border:"none" }}>{item.btnText}</a>
                </div>
              </div>
            )
        })}
     

      </div>
    </div>
  )
}

export default Cards

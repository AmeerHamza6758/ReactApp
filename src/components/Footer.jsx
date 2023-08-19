import React,{useState} from 'react'

function Footer() {
    const [data,setData]=useState([
        {
            heading:"Our Company",
            list1:"Our Community",
            list2:"Our History"
        },
        {
            heading:"Carrers",
            list1:"Corporate",
            list2:"Resturant"
        },
        {
            heading:"Contact us",
            list1:"Suggestion",
            list2:"Complaint"
        }, {
            heading:"Newsroom",
            list1:"Local",
            list2:""
        }

    ])
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            {data.map((item)=>{
                return(
<div className="col-lg-3 col-md-6 col-sm-12">
                <ul className='d-flex flex-column gap-3 list-unstyled'>
                    <li><b>{item.heading}</b></li>
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>

                </ul>
            </div>
                )
            })}
            
        </div>
      </div>
    </div>
  )
}

export default Footer

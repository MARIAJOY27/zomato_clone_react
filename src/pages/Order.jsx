import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSort } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Restaurants from '../components/Restaurants'




function Order() {
  
  return (
    <>
      <Header />
      
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-10" >
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/diningout">
              <div style={{display:"flex"}}>
                <div className='pic'>
                  <div><img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp" alt="" width={'36px'} /></div>
                  </div>
                <div><h4 className=' mt-3' style={{color:"black",overflowY: "hidden"}}>Dining Out</h4></div>
              </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/order' eventKey="link-1">
              <div style={{display:"flex"}}>
                <div className='pic'>
                  <div><img className='ms-3' src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="" width={'36px'} /></div>
                  </div>
                <div>
                  <h4 className=' mt-3' style={{color:"#f792b0",overflowY: "hidden"}}>Delivery</h4 ></div>
              </div>
             </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/nightlife' eventKey="link-1">
              <div style={{display:"flex"}}>
                <div className='pic'><div><img className='ms-2' src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="" width={'36px'} /></div>
                </div>
                <div>
                  <h4 className=' mt-3' style={{color:"black",overflowY: "hidden"}}>Nightlife</h4></div>
              </div>
             </Nav.Link>
            </Nav.Item>

          </Nav>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className='mt-1 ms-5 justify-content-evenly' style={{display:"flex"}}>
            <div className='mt-3 '><button className='btn1' style={{borderRadius:"6px",backgroundColor:"white"}}><span style={{color:"rgb(156, 156, 156)"}}><FontAwesomeIcon className='me-2' icon={faSort} />Filters</span></button></div>
            <div className='mt-3'><button className='btn1 ' style={{borderRadius:"6px",backgroundColor:"white"}} ><span style={{color:"rgb(156, 156, 156)"}}>Rating:4.0+</span></button></div>
            <div className='mt-3 '><button className='btn1 ' style={{borderRadius:"6px",backgroundColor:"white"}} ><span style={{color:"rgb(156, 156, 156)"}}>Pure Veg</span></button></div>
            <div className='mt-3 '><button className='btn1' style={{borderRadius:"6px",backgroundColor:"white"}} ><span style={{color:"rgb(156, 156, 156)"}}>Cuisines <FontAwesomeIcon icon={faCaretDown} /></span></button></div>
          </div>
        </div>
      </div>

      <section className='mt-4' style={{backgroundColor:"rgb(248, 248, 248)"}}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <h2 className='ms-5 mt-4' style={{overflowY:"hidden"}}>Eat what makes you happy</h2>
          <div className='mt-4' style={{display:"flex"}}>
            <div className='ms-4'>
              <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}}>
                <img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" width={'160px'} alt="" />
                <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Biriyani</h5>
              </Link>
            </div>
            <div className='ms-5'>
              <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}} >
                <img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" width={'160px'} alt="" />
                <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Chicken</h5>
              </Link>
            </div>
            <div className='ms-5'>
            <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}} >
              <img style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/dish_photos/8e9/86238a8a24ca33856778c406639748e9.jpg" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Pothichoru</h5>
              </Link>
            </div>
            <div className='ms-5'>
            <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}} >
              <img style={{borderRadius:"50%"}} src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" width={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Pizza</h5>
              </Link>
            </div>
            <div className='ms-5'>
            <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}} >
              <img style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/dish_photos/d7c/d68f90bbf43c59ca6b09a0fcd2595d7c.jpg" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Chicken Mandi</h5>
              </Link>
            </div>
            <div className='ms-5'>
            <Link to={'/diningout'} style={{textDecoration:'none',color:'black'}} >
              <img style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Fried Rice</h5>
              </Link>
            </div>
            {/* <div className='ms-5'>
              <img style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Cake</h5>
            </div> */}
          </div>
         
          </div>
        </div>
        <br /><br />

      </section>

      <section className='mt-4'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <h2 className='ms-5 mt-4' style={{overflowY:"hidden"}}>Top brands for you</h2>
          <div className='mt-4' style={{display:"flex"}}>
            <div className='ms-4'>
              <img className='border shadow' style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433844.png" width={'160px'}  alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>KFC</h5>
            </div>
            <div className='ms-5'>
              <img className='border shadow' style={{borderRadius:"50%"}} src="https://b.zmtcdn.com/data/brand_creatives/logos/d78cacb4cb49d84e50340c7c279f2d1c_1598075399.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Gokul Oottupura</h5>
            </div>
            <div className='ms-5'>
              <img className='border shadow' style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Chicking</h5>
            </div>
            <div className='ms-5'>
              <img className='border shadow' style={{borderRadius:"50%"}} src="https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png" width={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Al Taza</h5>
            </div>
            <div className='ms-5'>
              <img className='border shadow' style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983699.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Mc Donald's</h5>
            </div>
            <div className='ms-5'>
              <img className='border shadow' style={{borderRadius:"50%"}}  src="https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550059625.png" width={'160px'} height={'160px'} alt="" />
              <h5 className='text-center mt-2' style={{overflowY:"hidden"}}>Dominos Pizza</h5>
            </div>
            
          </div>
         
          </div>
        </div>
        <br /><br />

      </section>

      <h2 style={{marginLeft:"180px",overflowY:"hidden"}}>Food Delivery Restaurants in Kochi</h2>
      <Restaurants/>


    </>
  )
}

export default Order

import React from 'react'
import Header from '../components/Header'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSort } from '@fortawesome/free-solid-svg-icons';
import Nighthotels from '../components/Nighthotels';


function Nightlife() {
  return (
    <>
    <Header/>
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
                  <h4 className=' mt-3' style={{color:"black",overflowY: "hidden"}}>Delivery</h4 ></div>
              </div>
             </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/nightlife' eventKey="link-1">
              <div style={{display:"flex"}}>
                <div className='pic'><div><img className='ms-2' src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="" width={'36px'} /></div>
                </div>
                <div>
                  <h4 className=' mt-3' style={{color:"#f792b0",overflowY: "hidden"}}>Nightlife</h4></div>
              </div>
             </Nav.Link>
            </Nav.Item>

          </Nav>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className='mt-1 ms-5 justify-content-evenly' style={{display:"flex"}}>
            <div className='mt-3 '><button className='btn1' style={{borderRadius:"6px",backgroundColor:"white"}}><span style={{color:"rgb(156, 156, 156)"}}><FontAwesomeIcon className='me-2' icon={faSort} />Filters</span></button></div>
            <div className='mt-3 '><button className='btn1' style={{borderRadius:"6px",backgroundColor:"white"}}><span style={{color:"rgb(156, 156, 156)"}}><FontAwesomeIcon icon={faCrown} style={{color: "#d7c02d",}} /> Gold</span></button></div>
            <div className='mt-3'><button className='btn1 ' style={{borderRadius:"6px",backgroundColor:"white"}} ><span style={{color:"rgb(156, 156, 156)"}}>Rating:4.0+</span></button></div>
            <div className='mt-3 '><button className='btn1 ' style={{borderRadius:"6px",backgroundColor:"white"}} ><span style={{color:"rgb(156, 156, 156)"}}>Pubs & bars</span></button></div>
            
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <img style={{borderRadius:"7px"}} src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" height={'260px'} alt="" />
        </div>
        <div className="col-md-2"></div>
      </div>

      <h2 className='mt-4' style={{marginLeft:"190px",overflowY:"hidden"}}>Nightlife: Night clubs, pubs &amp; bar in Kochi</h2>
      <Nighthotels/>
    </>
  )
}

export default Nightlife

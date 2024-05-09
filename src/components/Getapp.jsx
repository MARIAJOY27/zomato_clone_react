import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Getapp() {
  return (
    <>
    <Header/>

    <section className='mt-5'>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-4 mt-5">
            <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" style={{ width: "400px",height:"390px" }} alt="" />
          </div>
          <div className="col-md-4">
            <h1 className='mt-3' style={{ overflowY: "hidden" }}>Get the Zomato app</h1>
            <p style={{ fontSize: "18px" }}>We will send you a link, open it on your phone to download the app</p>
            <input className='me-2 mb-3' type="radio" name="contactMethod" id="email" />
            <label className='me-5' style={{ fontSize: "20px" }} htmlFor="email">Email</label>
            <input className='me-2' type="radio" name="contactMethod" id="phone" />
            <label className='mt-2' style={{ fontSize: "20px" }} htmlFor="phone">Phone</label>
            <br />
            <div style={{ display: "flex" }}>
              <input className='me-3 ps-2 border border-outline-light' style={{ height: "40px", width: "260px", borderRadius: "6px" }} type="text" class="form-control" placeholder="Email" />
              <button className='border border-outline-light w-25' style={{ height: "40px", borderRadius: "6px", color: "white", backgroundColor: "red" }}>Share App Link</button>
            </div>

            <p className='mt-3'>Download App from</p>
            <img className='mt-1 me-3' style={{ width: "140px" }} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
            <img className='mt-1 ms-1' style={{ width: "140px" }} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />

          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
      
    </>
  )
}

export default Getapp

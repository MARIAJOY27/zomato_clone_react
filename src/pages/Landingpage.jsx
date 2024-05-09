import React from 'react'
import { Link } from 'react-router-dom';
import { faCaretDown, faChevronRight, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Landingpage() {
  return (
    <>

      <div className="row">
        <div className="col-md-12">
          <img className='w-100' style={{ height: "420px" }} src="https://zomato-landing-page.netlify.app/Images/Nav.jpg" alt="Zomato image" />
          <div className='overlay'>
            <Navbar expand="lg" className="bg-body-transparent mb-5 justify-content-space-between" style={{ width: "1100px" }}>
              <Container>
                <Link style={{overflowY:"hidden",textDecoration:"none"}}  to={'/getapp'}><Navbar.Brand href="#home" className='text-light ms-5' style={{overflowY:"hidden"}} >Get the App</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto ">
                    <Link style={{overflowY:"hidden",textDecoration:"none"}} to={'/investor'}><Nav.Link href="#home" className='text-light fs-4 ms-5'>Investor Relations</Nav.Link></Link>
                    <Nav.Link href="#link" className='text-light fs-4 ms-4 me-3'>Add Restaurant</Nav.Link>
                    <NavDropdown title="Maria" id="basic-nav-dropdown" className='text-light fs-4 ms-5'>
                      <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <img style={{ width: "300px" }} src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
            <h6 className='mt-3' style={{ overflowY: "hidden" }}>Discover the best food & drinks in Kochi</h6>

            <div className='ms-5 header-location-search-container1 ms-4 mt-3 mb-5 bg bg-light '>
              <div className='location-wrapper'>
                <div className='location-icon'>
                  <FontAwesomeIcon className='icon mt-2 ms-2 me-2' icon={faLocationDot} style={{ color: "#f792b0"}} size='xl' />
                  <div className='mt-2'>Kochi</div>
                </div>
                <FontAwesomeIcon className='mt-2' icon={faCaretDown} style={{ color: "#353536", }} size='xl' />
              </div>
              <div className='location-search-seperator mt-2'></div>
              <div className='header-searchbar w-100'>
                <FontAwesomeIcon className='ms-3 mt-2' icon={faMagnifyingGlass} style={{ color: "#8f8f8f", }} />
                <input className='search-input ms-2 mt-1' type="text" placeholder='Search for restaurant,cuisine or a dish' />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row p-5">
        <div className="col-md-2"></div>
        <div className="box col-md-4" >
          <Link to={'/order'} style={{ textDecoration: "none" }} >
            <a href="./src/pages/Order" style={{ color: 'black', textDecoration: 'none' }}  >
              <div>
                <img style={{ backgroundPosition: "center", width: '30rem', height: '10rem', borderRadius: "10px 12px 0px 0px" }} src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="img" />
              </div>
              <div className='border border-outline' style={{ borderRadius: "0px 0px 10px 10px" }}>
                <h3 className='ms-3 mt-2' style={{ color: 'black', textDecoration: 'none', overflowY: "hidden" }}>Order Online</h3>
                <p className='ms-3' style={{ color: 'black', textDecoration: 'none' }}>Stay home and order to your doorstep</p>
              </div>


            </a>
          </Link>
        </div>

        <div className="box col-md-4">
          <Link to={'/diningout'} style={{ textDecoration: "none" }} >
            <a href="./src/pages/Order" style={{ color: 'black', textDecoration: 'none' }} >
              <div>
                <img style={{ backgroundPosition: "center", width: '30rem', height: '10rem', borderRadius: "10px 12px 0px 0px" }} src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="img" />
              </div>
              <div className='border border-outline' style={{ borderRadius: "0px 0px 10px 10px" }}>
                <h3 className='ms-3 mt-2' style={{ textDecoration: "none", overflowY: "hidden" }}>Dining</h3>
                <p className='ms-3' style={{ textDecoration: 'none' }}>View the city's favourite dining venues</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row p-4 mt-3 mx-3">
        <div className="col-md-2"></div>
        <div className="col-md-7 ">
          <h1 style={{ overflowY: "hidden" }}>Collections</h1>
          <p style={{ fontSize: "20px" }}>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2 mt-3">
          <Link to={'/diningout'}><img className="img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/photo-wall-ideas-statement-wall-643bb78f039f2.png?crop=0.8939222348055871xw:1xh;center,top&resize=980:*" alt="" style={{ width: "250px" }} /></Link>
          <div className='over'>
            {/* <p>8 Places for Art Lovers</p> */}
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <Link to={'/diningout'}><img className="img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/photo-wall-ideas-statement-wall-643bb78f039f2.png?crop=0.8939222348055871xw:1xh;center,top&resize=980:*" alt="" style={{ width: "250px" }} /></Link>
          <div className='over'>
            {/* <p>8 Places for Art Lovers</p> */}
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <Link to={'/diningout'}><img className="img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/photo-wall-ideas-statement-wall-643bb78f039f2.png?crop=0.8939222348055871xw:1xh;center,top&resize=980:*" alt="" style={{ width: "250px" }} /></Link>
          <div className='over'>
            {/* <p>8 Places for Art Lovers</p> */}
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <Link to={'/diningout'}><img className="img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/photo-wall-ideas-statement-wall-643bb78f039f2.png?crop=0.8939222348055871xw:1xh;center,top&resize=980:*" alt="" style={{ width: "250px" }} /></Link>
          <div className='over'>
            {/* <p>8 Places for Art Lovers</p> */}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <section>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 style={{overflowY:'hidden'}}>Popular localities in and around Kochi</h1>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <div className='border shadow mt-3 ' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Kakkanad</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Panampilly Nagar</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>109 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Palarivattom</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>150 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
          </div>
          
          <div className="col-md-3">
          <div className='border shadow mt-3 ' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Edapally</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>M G Road</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Vyttila</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
          </div>
        
          <div className="col-md-3">
          <div className='border shadow mt-3 ' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Fort Kochi</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Kacheripadi</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
            <div className='border shadow mt-3' style={{borderRadius:'13px'}}>
             <div className='d-flex ms-auto'>
                <div>
                  <h3 className='ms-3 mt-2' style={{overflowY:'hidden'}}>Kakkanad</h3>
                  <h5 className='ms-3 mb-3' style={{overflowY:'hidden'}}>461 places</h5>
                </div>
                <FontAwesomeIcon className='ms-auto me-4 mt-4' icon={faChevronRight} />
             </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>

      <section className='mt-5' style={{ backgroundColor: "rgb(255, 251, 247)" }}>
        <div className="row mt-3">
          <div className="col-md-3"></div>
          <div className="col-md-2 mt-5">
            <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" style={{ width: "230px" }} alt="" />
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
          <div className="col-md-3"></div>
        </div>
        <br /> <br />
      </section>
    </>
  )
}

export default Landingpage

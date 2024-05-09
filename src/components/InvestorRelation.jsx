import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function InvestorRelation() {
    return (
        <>
            <section style={{ backgroundColor: "rgb(226, 55, 68)" }}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 ms-4" style={{ display: "flex" }}>
                        <Link to={'/'}><img className='mt-3' src="https://b.zmtcdn.com/data/o2_assets/d1c6eed080cb5705f0a6112566312bc21684137946.png" height={"22px"} width={'100px'} alt="" /></Link>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='mt-3 ms-2'>| Investor Relations</h4>
                    </div>
                    <div className="d-flex col-md-7 mt-3">
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>Home</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>Financials</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>Announcements</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>Blog</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>Governance</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }} className='me-4'>ESG</h4>
                        <h4 style={{ overflowY: "hidden", color: "white" }}>Resources</h4>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-5 mt-4">
                        <h3 style={{ color: "white", overflowY: "hidden" }}>Better food for more people</h3>
                        <div>
                            <img src="https://b.zmtcdn.com/data/o2_assets/d1c6eed080cb5705f0a6112566312bc21684137946.png" height={"22px"} width={'100px'} alt="" />
                            <img className='ms-5' src="https://b.zmtcdn.com/data/o2_assets/6dbfe3a5279476dc181ab6ffbfe201401684148330.png" height={"30px"} width={'140px'} alt="" />
                        </div>
                        <hr style={{ color: "white" }} />
                        <h3 style={{ color: "white", overflowY: "hidden" }}>Instant commerce indistinguishable from magic</h3>
                        <div>
                            <img src="https://b.zmtcdn.com/data/o2_assets/14fe1799dae80af17dd1ea6de5be88f81682596775.png" height={"21px"} width={'100px'} alt="" />
                        </div>
                        <hr style={{ color: "white" }} />
                        <h3 style={{ color: "white", overflowY: "hidden" }}>Make India malnutrition free</h3>
                        <div>
                            <img src="https://b.zmtcdn.com/data/o2_assets/b4af5da818e7d573914f1efb5deb43781684148225.png" height={"30px"} width={'140px'} alt="" />
                        </div>

                    </div>
                    <div className="col-md-4 mt-3">
                        <div className='me-3' style={{ backgroundColor: "white", borderRadius: "8px" }}>
                            <div className='d-flex align-items-center'>
                                <div><h2 className='ms-3 mt-2' style={{ overflowY: "hidden", fontWeight: "bold" }}>Q3FY24 results</h2></div>
                                <div><h5 style={{ overflowY: "hidden", fontWeight: "bold", marginLeft: "180px", color: "rgb(239, 79, 95)" }} >see all</h5></div>
                            </div>
                            <div className='d-flex align-items-center justify-content-evenly border-outline-secondary mt-3' style={{ backgroundColor: "white", borderRadius: "8px" }}>
                                <div className='w-25 h-100' style={{ backgroundColor: "#FFF0F5" }}>
                                    <img className='ms-4 p-3' src="https://b.zmtcdn.com/data/o2_assets/09df26bd254fb468ed9c462b32a3c8e11682663138.png" height={'64px'} alt="" />
                                </div>
                                <div>
                                    <h5 style={{ overflowY: "hidden" }}>Shareholder's Letter</h5>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='ms-4' icon={faArrowRight} />
                                </div>

                            </div>
                            <br />

                            <div className='d-flex align-items-center justify-content-evenly border-outline-secondary' style={{ backgroundColor: "white", borderRadius: "8px" }}>
                                <div className='w-25 h-100' style={{ backgroundColor: "#FFF0F5" }}>
                                    <img className='ms-4 p-3' src="https://b.zmtcdn.com/data/o2_assets/c105990076f924c4bb9fe31abdcc577c1682663179.png" height={'64px'} alt="" />
                                </div>
                                <div>
                                    <h5 style={{ overflowY: "hidden" }}>Earnings Call Replay</h5>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='ms-4' icon={faArrowRight} />
                                </div>

                            </div>
                            <br />

                            <div className='d-flex align-items-center justify-content-evenly border-outline-secondary' style={{ backgroundColor: "white", borderRadius: "8px" }}>
                                <div className='w-25 h-100 mb-3' style={{ backgroundColor: "#FFF0F5" }}>
                                    <img className='ms-4 p-3' src="https://b.zmtcdn.com/data/o2_assets/baae7f06737db60f94296c2cbf86be931682663208.png" height={'64px'} alt="" />
                                </div>
                                <div>
                                    <h5 style={{ overflowY: "hidden" }}>Earnings Call Transcript</h5>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='ms-4' icon={faArrowRight} />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <br /> <br />

            </section>

            <div className="row mt-5 mx-3">
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <h1 style={{ overflowY: "hidden", fontWeight: 'bold' }}>Our core offerings</h1>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-2 mx-3">
                <div className="col-md-2"></div>
                <div className="col-md-3 mt-4 ">
                    <div className='border shadow' style={{ borderRadius: '40px' }}>
                        <div className='d-flex' style={{ backgroundColor: 'rgb(255, 237, 239)' }}>
                            <img className='mt-4 ms-5' src="https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png" width={'80px'} alt="" />
                            <h2 className='mt-4 ms-5' style={{ overflowY: 'hidden' }}>FOOD DELIVERY</h2>
                        </div>
                        <div className='p-4'>
                            <h5 style={{ overflowY: 'hidden' }}>Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</h5>
                            <h5 className='mt-3' style={{ overflowY: 'hidden', color: 'rgb(175, 180, 192)' }}>Q3FY24</h5>
                            <hr />

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>INR 8,486 crore</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}>Food delivery GOV</p>

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>18.8 million</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}>Avg. monthly transacting customers</p>

                        </div>

                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className='border shadow' style={{ borderRadius: '40px' }}>
                        <div className='d-flex' style={{ backgroundColor: 'rgb(255, 237, 239)' }}>
                            <img className='mt-4 ms-4' src="https://b.zmtcdn.com/data/o2_assets/c2fdc5b7c3a1b1aadd48fbe31e4d6eed1684136246.png" width={'80px'} alt="" />
                            <h2 className='mt-4 ms-5' style={{ overflowY: 'hidden' }}>QUICK COMMERCE</h2>
                        </div>
                        <div className='p-3'>
                            <h5 style={{ overflowY: 'hidden' }}>Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes</h5>
                            <br />
                            <h5 className='mt-3' style={{ overflowY: 'hidden', color: 'rgb(175, 180, 192)' }}>Q3FY24</h5>
                            <hr />

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>INR 3,542 crore</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}>Quick commerce GOV</p>

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>5.4 million</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}>Avg. monthly transacting customers</p>

                        </div>

                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className='border shadow' style={{ borderRadius: '40px' }}>
                        <div className='d-flex' style={{ backgroundColor: 'rgb(255, 237, 239)' }}>
                            <img className='mt-4 ms-4' src="https://b.zmtcdn.com/data/o2_assets/a892d88c8ad69348f8735ba9dd6b57831684136311.png" width={'70px'} alt="" />
                            <h2 className='mt-4 ms-5' style={{ overflowY: 'hidden' }}>B2B SUPPLIES</h2>
                        </div>
                        <div className='p-4'>
                            <h5 style={{ overflowY: 'hidden' }}>Hyperpure is a B2B platform supplying high quality food ingredients and other products</h5>
                            <br /><br />
                            <h5 className='mt-3' style={{ overflowY: 'hidden', color: 'rgb(175, 180, 192)' }}>Q3FY24</h5>
                            <hr />

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>INR 859 crore</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}>Hyperpure revenue</p>

                            <h3 style={{ overflowY: 'hidden', fontWeight: 'bold' }}>8</h3>
                            <p style={{ color: 'rgb(175, 180, 192)' }}># of cities present in</p>

                        </div>

                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <h1 style={{ overflowY: "hidden", fontWeight: 'bold', fontSize: '45px' }}>Beyond business</h1>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <p style={{ fontSize: '20px', color: 'rgb(175, 180, 192)' }}>At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row mt-4 mx-3">
                <div className="col-md-2"></div>
                <div className="col-md-3 mt-4">
                    <Card style={{ width: '18rem',borderRadius:'20px' }}>
                        <Card.Img variant="top" src="https://b.zmtcdn.com/data/o2_assets/1ef4b31977addf56d67ede5f6eed18a91691498028.png" />
                        <Card.Body>
                            <Card.Title style={{overflowY:'hidden', fontWeight: 'bold'}}>Feeding India</Card.Title>
                            <Card.Text>
                            A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 mt-4">
                <Card style={{ width: '18rem',borderRadius:'20px' }}>
                        <Card.Img variant="top" src="https://b.zmtcdn.com/data/o2_assets/41e873bace2423c2ee84d342fab887cd1691497904.png" />
                        <Card.Body>
                            <Card.Title style={{overflowY:'hidden', fontWeight: 'bold'}}>Feeding India</Card.Title>
                            <Card.Text>
                            A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 mt-4">
                <Card style={{ width: '18rem',borderRadius:'20px' }}>
                        <Card.Img variant="top" src="https://b.zmtcdn.com/data/o2_assets/081cec87b25796ece0ed45d89cd425691691497935.png" />
                        <Card.Body>
                            <Card.Title style={{overflowY:'hidden', fontWeight: 'bold'}}>Feeding India</Card.Title>
                            <Card.Text>
                            A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-1"></div>
            </div>
        </>
    )
}

export default InvestorRelation

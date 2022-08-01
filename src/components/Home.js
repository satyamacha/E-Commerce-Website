import React from 'react'
import { Link } from 'react-router-dom'

function Home() {


    return (
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='Home img-fluid headImages' src="bailey-alexander-Ms2AGDRcOLo-unsplash.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img className='Home img-fluid headImages' src="elevate-oRl7BoX7QCE-unsplash.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img className='Home img-fluid headImages' src="fachry-zella-devandra-bNSdIkCBJOs-unsplash.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img className='Home img-fluid headImages' src="my-networking-apparel-54VE0-oytqo-unsplash2.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img className='Home img-fluid headImages' src="brian-lundquist-fuz8AWSsp2g-unsplash.jpg" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <section className="container-fluid px-0">

                <div className="row align-items-center content">
                    <div className="col-md-6  order-2 order-md-1">
                        <img className="Home img-fluid headImages" src="filipp-romanovski-lv-oiuGbyPM-unsplash.jpg" alt="" />
                    </div>
                    <div className="col-md-6 text-center  order-1 order-md-2 ">
                        <div className="row justify-content-center headImagediv">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2 className='hov1' data-text='Men'>Men</h2>
                                <br/>
                                <p className="lead">
                                    Must have Polos,Tees,Denim,Sports wear,Ethinic wear &more exclusively available in all brands.
                                </p>
                                <div className='container'>
                                    <Link to='/Men'>
                                        <button className='btn1'>Shop Now</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center content mt-2">
                    <div className="col-md-6 text-center ">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2 className='hov2' data-text='Women'>Women</h2>
                                 <br/>
                                <p className="lead">
                                    Our standout selection of varsity wear,urban wear,monochrome designs & more.
                                    <br />
                                    Make a statement in ethnic wear
                                </p>

                                <Link to='/Women'>
                                    <button className='btn2'>Shop Now</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-md-6 ">
                        <img className="Home img-fluid headImages" src="dollar-gill-oH-PNVWykUo-unsplash.jpg" alt="" />
                    </div>
                </div>

                <div className="row align-items-center content mb-1 mt-2 mr-0">
                    <div className="col-md-6 order-2 order-md-1">
                        <img className=" Home img-fluid headImages" src="edward-cisneros-r_Tnjj6TB30-unsplash.jpg" alt="" />
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2 className='hov3' data-text='Kids'>Kids</h2>
                                <br/>
                                <p className="lead">
                                    Vibrant feels for the little ones with Graphic prints & Vibrant colours.
                                </p>
                                <div className='container'>
                                    <Link to='/Kids'>
                                        <button className='btn3'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default Home
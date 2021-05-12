import React, { Component } from 'react'
import AppBar from '../Components/AppBar'

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className="wallpaper" >
                    <div className="wrap" >
                        <div className="heading-ctn" >
                            <h1 style={{fontSize:"45px"}} >
                                Creating content that captures attention
                            </h1>
                            <div className="sub-heading" >
                                We help brands grow by unleashing the potential of social media 🚀
                            </div>
                            <p style={{marginTop:"40px"}} >
                                <button className="glow-button" >
                                    Learn How
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="wrap" >
                        <img alt="i" src={"https://markitup.in/assets/img/hero-img-min.png"} className="wallpaper-image" />
                    </div>
                </div>

                <div style={{textAlign:"center"}} >
                    <div>
                        OUR SERVICES
                    </div>
                    <h1>
                        Here's what we offer
                    </h1>
                </div>

                <div  className="offer" >
                    <div className="offer-item">
                        <div className="wrap offer-image" >
                            <img alt="i" src={"https://markitup.in/assets/img/values-1.png"} width="70%" />
                        </div>
                        <div className="offer-heading" >
                            360° YouTube Management
                        </div>
                        <p className="offer-sub" >
                            We'll cover it all! From researching content 
                            ideas to publishing the videos and everything in between
                        </p>
                    </div>

                    <div className="offer-item">
                        <div  className="wrap offer-image"  >
                            <img alt="i" src={"https://markitup.in/assets/img/values-2.png"} width="70%" />
                        </div>
                        <div className="offer-heading" >
                            Social Media Management
                        </div>
                        <p className="offer-sub" >
                            We'll help in developing brand awareness and in 
                            strengthening engagement strategies to increase customer loyalty
                        </p>
                    </div>

                    <div className="offer-item">
                        <div className="wrap offer-image" >
                            <img alt="i" src={"https://markitup.in/assets/img/values-4.png"} width="70%" />
                        </div>
                        <div className="offer-heading" >
                            Content Creation
                        </div>
                        <p className="offer-sub" >
                            We'll curate innovative content like memes, short videos etc 
                            which will engage your audience and skyrocket your brand value
                        </p>
                    </div>
                </div>

                <div className="schedule" >
                    <div className="offer-heading" >
                        Schedule a Call with us
                    </div>
                    <p>
                        Want to know how we can help your brand stand out? Let's discuss!
                    </p>
                    <button className="glow-button" style={{margin:"20px 0px"}} >
                        Book A Call
                    </button>
                </div>
            </div>
        )
    }
}

export default Home

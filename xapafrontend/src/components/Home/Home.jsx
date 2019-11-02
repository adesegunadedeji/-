import React from 'react';

import {Button} from 'reactstrap'
import './home.css'
import CarouselHome from './CarouselHome'

function Home(props) {
        return(
            <div>
                <CarouselHome/>
                <div className ="ButtonHolder">
                <Button  className = "buttonOrg" href ="/directory/new">Create an Org</Button>
                </div>
                <div className="container-bottom">
                    <div id="tutorials">
                        <h4>About Us</h4>
                        <ul>
                            <li ><a href="#">Careers</a></li>
                            <li ><a href="#">Leadership</a></li>
                            <li ><a href="#">Corporate Responsbility</a></li>
                            <li ><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div id="inspiration">
                        <h4>Business</h4>
                        <ul>
                        <li ><a href="#">Buy Ads</a></li>
                        <li ><a href="#">Targeting</a></li>
                        <li ><a href="#">Analytics</a></li>
                        <li ><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div id="recipes">
                        <h4>Marketing</h4>
                        <ul>
                        <li ><a href="#">Insights</a></li>
                        <li ><a href="#">Testimonials</a></li>
                        <li ><a href="#">Solutions</a></li>
                        <li ><a href="#">Events</a></li>
                        </ul> 
                    </div>
                </div> 
            <br/>
            </div>
        )
    }

export default Home;
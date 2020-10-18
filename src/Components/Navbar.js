import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5" >
                    <img src="https://media.glassdoor.com/sqll/2125863/fullthrottle-labs-squarelogo-1550834507823.png" alt="..." width="50" height="50" data-placement="right" title="FullThrottle Labs"/>
                    <a class="navbar-brand font-weight-bolder ml-3" href="#" data-placement="right" title="FullThrottle Labs">FullThrottle Labs</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        <form class="form-inline my-5 my-lg-0">
                            <a class="navbar-brand font-weight-bolder" data-placement="right" title="Home" href="#">Home</a>
                            <a class="navbar-brand font-weight-bolder ml-4" href="#" data-placement="right" title="About Us">About Us </a>
                            <a class="navbar-brand font-weight-bolder ml-4" href="#" data-placement="right" title="Contact Us">Contact Us</a>
                            <a class="navbar-brand font-weight-bolder ml-4" href="#" data-placement="right" title="Feedback">Feedback</a>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

import React, { Component } from 'react'

// import { a } from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Daily News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-a" aria-current="page" href="/" style={{textDecoration:'none', margin:'25px'}}>Home</a></li>
                                <li className="nav-item"><a className="nav-a" href="/business" style={{textDecoration:'none', margin:'25px'}}>Business</a></li>
                                <li className="nav-item"><a className="nav-a" href="/health" style={{textDecoration:'none', margin:'25px'}}>Health</a></li>
                                <li className="nav-item"><a className="nav-a" href="/sports" style={{textDecoration:'none', margin:'25px'}}>Sports</a></li>
                                <li className="nav-item"><a className="nav-a" href="/technology" style={{textDecoration:'none', margin:'25px'}}>Technology</a></li>
                                <li className="nav-item"><a className="nav-a" href="/science" style={{textDecoration:'none', margin:'25px'}}>Science</a></li>
                                <li className="nav-item"><a className="nav-a" href="/general" style={{textDecoration:'none', margin:'25px'}}>General</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

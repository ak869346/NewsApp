// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  state = {
    progress:0
  }

  setProgress = (progress)=> {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        {/* <Router> */}
        <Navbar/>
        <LoadingBar
        height={3}
        color='#0000FF'
        progress={this.state.progress}
      />
      <News setProgress={this.setProgress}   key="general" pageSize={6} country="in" category="general"/>
      {/* <News setProgress={this.setProgress}   key="business" pageSize={6} country="in" category="business"/>
      <News setProgress={this.setProgress}   key="entertainment" pageSize={6} country="in" category="entertainment"/>
      <News setProgress={this.setProgress}   key="general" pageSize={6} country="in" category="general"/>
      <News setProgress={this.setProgress}   key="health" pageSize={6} country="in" category="health"/>
      <News setProgress={this.setProgress}   key="science" pageSize={6} country="in" category="science"/>
      <News setProgress={this.setProgress}   key="sports" pageSize={6} country="in" category="sports"/>
      <News setProgress={this.setProgress}   key="technology" pageSize={6} country="in" category="technology"/> */}
        {/* <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}   key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}   key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}   key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}   key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress}   key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress}   key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}   key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}   key="technology" pageSize={6} country="in" category="technology"/>}></Route>
        </Routes>
        </Router> */}
      </div>
    )
  }
}


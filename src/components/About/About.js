import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <h3><Link to="/about" className="subnav_links">About</Link></h3>
          <h3><Link to="/about/history" className="subnav_links">History</Link></h3>
          <h3><Link to="/about/contact" className="subnav_links">Contact</Link></h3>
        </div>
        <div className='box'>
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contant" component={Contact} />
            <Route path="/about" 
              render={() => (
                <div>
                  <h1>
                    About the University
                  </h1>
                  <p>
                    It's a good University. We have smart people here.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import Project from './Project';
import Modal from './Modal';
import Modal1 from './Modal1';

import Footer from './Footer';

import Page1 from './Page1';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
            name: 'test',
            children: 'test' 
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);        
    }

  openModal(){  
    this.setState({
      open: true
    });  
  }

  closeModal(){
    this.setState({
      open: false
    });
}

  render() {

    return (
      <div className="Portfolio">
     
        <div className="wrapper">

          <Header />

          <div className="content">

            <Intro />

            

           {        
              // // When the user clicks on <span> (x), close the modal
              // span.onclick = () => {
              //   modal.style.display = "none";
              // }

              // // When the user clicks anywhere outside of the modal, close it
              // window.onclick = (event) => {
              //   if (event.target == modal) {
              //     modal.style.display = "none";
              //   }
              // }
           }
             
                      
            <button onClick={this.openModal}>Open Modal</button>

            <h3>Projects</h3>
            <div className="projects">

              {/* <div onClick={this.openModal}>
                <Project
                name='Portfolio'               
                />
              </div> */}
           
              {/* <Link to="/page1"> */}
              <div onClick={this.openModal}>
                <Project
                name='Portfolio'               
                />
              </div>
              {/* </Link> */}

              <Modal
                open={this.state.open} 
                handleClose={this.closeModal}   
                name="Portfolio Modal"
                children="portfolio blahmlms.msd">     
              </Modal>
              
              <div onClick={this.openModal}>
                <Project
                name='Radial Engineering'
                />
              </div>

              <Modal 
                open={this.state.open} 
                handleClose={this.closeModal}   
                name="Radial Modal"
                children="radial blah blah blah">
              </Modal>

              <div onClick={this.openModal}>
                <Project
                  name='Jim Rhodes Music'
                />
              </div>

              <Modal 
                open={this.state.open} 
                handleClose={this.closeModal}   
                name=""
                children="">
              </Modal>

              <Project
                name='Dynaco'
              />
              <Project
                name='Dogwood Rescue'
              />
              <Project
                name='Inward Edward'
              />


            <Switch>
              <Route path="/page1" component={Page1} />
    
            </Switch>
            </div>{/* end projects */}
            
            

          </div>{/* end content  */}
        </div>{/* end wrapper */}



        <Footer />

      </div>
    )
  }
}
export default withRouter(App);
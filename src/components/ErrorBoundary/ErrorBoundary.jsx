import React, {Component} from 'react'
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  
  constructor(){
    super();

    this.state ={
      hasError: false,
      message: ''
    }
  }

  static getDerivedStateFromError(error){
    //process the error
    return {
      hasError: true,
      message: error.message
    }
  }

  componentDidCatch(error, info){
    console.log(info);
  }

  render() {  
    
    if(this.state.hasError){
      return (
        <div className='error-image-overlay'>
          <div className='error-image-container'>
            <h2>Sorry! Something went wrong</h2>
            <small>{this.state.message}</small>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}
 
export default ErrorBoundary;

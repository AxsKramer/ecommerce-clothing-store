import React, {Component} from 'react';
import Section from '../Section/Section';

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
      return <Section 
        title={'Sorry! Something went wrong'} 
        message={this.state.message} 
        urlImage={'https://i.imgur.com/qIufhof.png'}
      />
    }
    return this.props.children;
  }
}
 
export default ErrorBoundary;

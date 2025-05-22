// ==============================
// 🔹 Error Boundaries in React
// ==============================
// An Error Boundary in React is a special component that catches JavaScript errors in its child components during rendering, 
// lifecycle methods, and constructors, and displays a fallback UI instead of crashing the app.
// 👉 There are two ways to handle errors in React components:
// 1. Custom ErrorBoundary component
// 2. Using a library like "react-error-boundary" (recommended for easier usage)

// 👉 We'll use the "react-error-boundary" library in this example

// Step 1: Import ErrorBoundary and useErrorHandler from the library
// import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
/* 
<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onError={handleError}
>
  <MyComponent />
</ErrorBoundary>;
*/


// Custom Error Boundary Component
import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error){
        return  {hasError: true};   // Update state so the next render will show the fallback UI.
    }

    componentDidCatch(error, errorInfo){
        console.log("errror", error);
    }

    render(){
        if(this.state.hasError) return <p>Something went to wrong</p>
        return this.props.children;
    }
}

export default ErrorBoundary;
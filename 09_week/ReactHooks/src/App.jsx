import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [render, setRender] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setRender(false)
    }, 5000)
  },[])

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}
// Functional Components
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


// Class-Based Components
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("Component mounted")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.error("Component un-mounted")
//     };
//   }, []);

//   // Render UI
//   return <div>
//     From inside the component
//   </div>
// }


class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.error("Component mounted")
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.error("Component un-mounted")
  }

  render() {
    // Render UI
    
  }
}
export default App

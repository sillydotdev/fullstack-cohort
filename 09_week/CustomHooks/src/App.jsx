import { useEffect, useState } from 'react'
import axios from 'axios'

// data fetching custom hook
// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)  // loading state 

//   function getData() {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false)
//       })
//   }

//   useEffect(() => {
//     const value = setInterval(() => { // Auto-refreshing
//       getData();
//     }, n*1000)
//     getData()

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])
//   return { todos, loading };
// }


// useIsOnline hook
function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)
  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, [])

  return isOnline
}

// debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => clearInterval(timerId);

  }, [value, delay])

  return debouncedValue;
}

// performance-based hooks
const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay)

    return () => clearInterval(intervalId);
  }, [callback, delay])
}

function App() {
  // const { todos, loading } = useTodos(5);
  // const isOnline = useIsOnline();
  // const [count, setCount] = useState(0);

  // // loading logic
  // if (loading) {
  //   return <div>
  //     loading...
  //   </div>
  // }
  // return (
  //   <>
        //  {todos.map(todo => <Track todo={todo} />)}   // for loading
  //     {isOnline ? "You are online, Yay!!!!!!" : "You are offline..."}
  //   </>


  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );


//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)
//   return (
//     <>
//     Timer is at {count}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
}

export default App
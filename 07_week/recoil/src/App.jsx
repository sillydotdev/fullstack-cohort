import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";
import { evenSelector } from "./store/selectors/count";

function App() {
  
  // wrap anything that wants to use the value inside a Provider
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
      
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It's even" : null}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
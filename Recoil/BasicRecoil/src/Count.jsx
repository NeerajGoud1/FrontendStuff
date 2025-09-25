import React from "react";
import { countAtom } from "./store/count";
import { useRecoilState } from "recoil";

export default function Count() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

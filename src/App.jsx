import React, { useState } from "react";
/* 상태를 useState로 관리 */

/* 결과 값 저장 */
export default function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");

  /* state로 리렌더링 */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /* 더하기 후에 input 초기화 */
  const handleAdd = () => {
    setResult(result + parseInt(inputValue));
    setInputValue("");
  };

  /* 빼기 후에 input 초기화 */
  const handleSubtract = () => {
    setResult(result - parseInt(inputValue));
    setInputValue("");
  };

  /* reset 클릭시 초기화 */
  const handleReset = () => {
    setResult(0);
    setInputValue("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        만큼을
        <button onClick={handleAdd}>더할게요</button>
        <button onClick={handleSubtract}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

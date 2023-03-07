import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
export default function ButtonContainer() {
  let [displayString, setdisplayString] = useState("");

  const updateNumber = (input) => {
    setdisplayString(displayString + input);
    // alert("inside updateNumber" + input);
    // Display({ displayString });
  };

  const clearString = () => {
    setdisplayString("");
  };

  const calcuclate = () => {
    setdisplayString(eval(displayString));
  };

  return (
    <div>
      <div>
        <Display value={displayString} />
      </div>

      <div>
        <Button btnValue="1" callBackFunc={updateNumber} />
        <Button btnValue="2" callBackFunc={updateNumber} />
        <Button btnValue="3" callBackFunc={updateNumber} />
        <Button btnValue="+" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="4" callBackFunc={updateNumber} />
        <Button btnValue="5" callBackFunc={updateNumber} />
        <Button btnValue="6" callBackFunc={updateNumber} />
        <Button btnValue="-" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="7" callBackFunc={updateNumber} />
        <Button btnValue="8" callBackFunc={updateNumber} />
        <Button btnValue="9" callBackFunc={updateNumber} />
        <Button btnValue="*" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="AC" callBackFunc={clearString} />
        <Button btnValue="0" callBackFunc={updateNumber} />
        <Button btnValue="=" callBackFunc={calcuclate} />
        <Button btnValue="/" callBackFunc={updateNumber} />
      </div>
    </div>
  );
}

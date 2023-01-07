
import React, { useState } from "react";

function SearchBar(pros) {
  const [inputText, setinputText] = useState('')
  function clickImage() {
    //pass 输入内容到
    pros.onsend(inputText)
  }

  function hanlderChange(e) {
    const input = e.target.value
    console.log(input);
    setinputText(input)
  }

  return <div>

    <div style={searchDiv}>
      <input style={searchInput} onChange={hanlderChange}></input>
      <img src="./favicon.ico" style={searchIcon} onClick={clickImage}></img>
    </div>

  </div>
}

const searchDiv = {
  position: 'relative',
  marginLeft: '5%',
  width: '90%',
  height: 50,
}

const searchInput = {
  width: '100%',
  height: '100%',
  borderRadius: 25,
  paddingLeft: 25
}

const searchIcon = {
  position: 'absolute',
  width: 30,
  height: 30,
  right: 20,
  top: 10
}

export default SearchBar;
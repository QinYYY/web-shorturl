import React from "react";


function FooterSection() {

  return (<div style={footerDiv} className='center'>
    <div style={container} >
      Made with love by
      <a href="https://thedevs.network/" style={aStyle}>The Devs</a>
      |
      <a href="https://thedevs.network/" style={aStyle}>The Devs</a>
      |
      <a href="https://thedevs.network/" style={aStyle}>The Devs</a>
      |
      <a href="https://thedevs.network/" style={aStyle}>Contact </a>
      |
      <a href="https://github.com/QinYYY" style={aStyle}>Github</a>
    </div>
  </div>)
}

const aStyle = {
  marginLeft: 5,
  marginRight: 5,
  fontWeight: 'bold',
  textDecoration: 'none',
}

const container = {

}
const footerDiv = {
  width: '100%',
  height: 200,
  backgroundColor: 'white',
}

export default FooterSection
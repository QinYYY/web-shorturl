import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function CenterSection() {
  const navigation = useNavigate()
  function login() {
    // LoginPage
    console.log('click');
    navigation('./LoginPage')
  }
  return (
    <div>
      <section >
        <div style={centerStyle}>
          <div style={centerLeftDiv}>
            <label style={centerLeftP} className='center'>
              Manage links, set custom domains and view stats
            </label>
            <Button style={centLeftButton} onClick={login}>Login</Button>
          </div>
          <div style={centerRightDiv} >
            <img src='https://kutt.it/images/callout.png' style={centerRightImg}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

const centerLeftP = {
  height: "200px",
  // backgroundColor: 'white',
  textAlign: 'center',
  padding: 30,
}
const centLeftButton = {

  marginTop: 50,

}

const centerRightImg = {


  width: '100%',
  height: '100%',
}

const centerLeftDiv = {
  float: 'left',
  width: '40%',
  height: '100%',
  textAlign: 'center',

}
const centerRightDiv = {
  // position: 'relative',
  float: 'right',
  width: '60%',
  height: '100%',
  // backgroundColor: '#ff7100',
  // backgroundImage: 'url("https://kutt.it/images/callout.png")'
}

const centerStyle = {
  marginLeft: '10%',
  marginRight: '10%',
  width: '80%',
  height: 400,
  marginTop: 30,
  marginBottom: 50,
  // backgroundColor: '#2eb872',
}


export default CenterSection
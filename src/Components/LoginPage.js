import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../CommonFunc";
import NavigationBar from "./NavigationBar";


function LoginPage() {
  const [inputText, setinputText] = useState()
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: '',
  })
  const [showReset, setshowReset] = useState(false)
  const navigation = useNavigate()
  function resetPwd() {
    navigation('/resetPwd')
  }

  function handlerLogin() {

    checkEmail(loginInfo.email)
    console.log('登录 信息 - >' + loginInfo.email + loginInfo.password);
  }
  function handlerChange(name, text) {

    if (name === 'email') {

      setloginInfo((preInfo) => {
        return {
          email: text,
          password: preInfo.password
        }
      })
    } else if (name === "password") {

      setloginInfo((preInfo) => {
        return {
          email: preInfo.email,
          password: text
        }
      })
    } else {

    }
  }



  return (<div style={loginBox}>

    <div>
      <NavigationBar></NavigationBar>
      <InputSection title='Email address' addChange={handlerChange} name='email'></InputSection>
      <InputSection title='Password' passwordChange={handlerChange} name='password'></InputSection>
      <Button style={loginButtonStyle} onClick={handlerLogin}>
        <img src="./favicon.ico" width="20" alt="folder" style={buttonImg} />
        Login</Button>
      <a style={aStyle} href="" onClick={resetPwd}>Forgot your password?</a>
    </div>

    {/* {
      showReset ? (<ResetPwd></ResetPwd>) : ()
    } */}
  </div>)
}

function InputSection(pros) {

  function textChange(e) {

    const name = pros.name
    const text = e.target.value
    if (pros.name === 'email') {
      pros.addChange(name, text)
    } else if (pros.name === 'password') {
      pros.passwordChange(name, text)
    }

  }

  return <div className='center' style={inputSection}>
    <div style={inputBox}>
      <p style={inputTitle}>{pros.title}</p>
      <input style={borderInput} placeholder={pros.title} onChange={textChange}></input>
    </div>
  </div>

}

export { ResetPwd }
function ResetPwd() {
  return (<div style={restPwdStyle}>
    <NavigationBar></NavigationBar>
    <h1>Reset password</h1>
    <p>If you forgot you password you can use the form below to get reset password link.</p>
    <div className="center">
      <div style={resetinputBox}><InputSection title='Email address'></InputSection>
        <Button style={resstButton}>Reset</Button>
      </div>

    </div>
  </div>)
}

const buttonImg = {
  marginRight: 20
}
const loginButtonStyle = {
  width: '50%',
  marginTop: 60,
  marginBottom: 30,
  height: 50,
  borderRadius: 25,
}

const resetinputBox = {
  position: 'relative',
  width: '60%',
  float: 'left',
  textAlign: 'right',
}

const resstButton = {
  position: 'absolute',
  marginLeft: 10,
  right: 0,
  bottom: 10,
  width: '20%',
  minWidth: 100,
}
const restPwdStyle = {
  height: 1000,
  minHeight: 800,
}

const inputSection = {
  width: '100%',

}

const aStyle = {
  display: 'block',
  width: '50%',
  textAlign: 'left',
  marginLeft: '25%',
  marginTop: 20,
  color: '#0081C9',
  fontWeight: 'bold',
  textDecoration: 'none',
}
const loginBox = {
  width: '100%',
  minheight: 1000,
  height: 1000,
}

const inputTitle = {
  textAlign: 'left',
  padding: 10,
  margin: 0
}

const borderInput = {
  width: '100%',
  borderRadius: 25,
  height: 50,
  paddingLeft: 20,
  marginTop: 0,
  border: 'none',
}
const inputBox = {
  marginTop: 20,
  height: 100,
  minheight: 100,
  width: '50%',

  // backgroundColor: '#fd0054'

}


export default LoginPage
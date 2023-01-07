import React from "react";
import Button from 'react-bootstrap/Button';
function DownLoadSection() {

  return (<div style={DownLoadBox} >
    <label className="center" style={TopLabel}>managing links</label>
    <div>
      <Button className="margin20" style={LeftDownButton}>
        <img src="./favicon.ico" width="20" alt="folder" style={buttonImg} />
        Download for chrome</Button>
      <Button className="margin20" style={RightDownButton}>
        <img src="./favicon.ico" width="20" alt="folder" style={buttonImg} />Download for firefox</Button>
    </div>
  </div>)
}
const buttonImg = {
  marginRight: 20
}
const LeftDownButton = {
  margin: 20,
  backgroundColor: '#EEEEEE',
  color: '#4B56D2',
  fontWeight: 'bold',
}
const RightDownButton = {
  margin: 20,
  backgroundColor: '#EEEEEE',
  color: '#EB6440',
  fontWeight: 'bold',
}
const color = {
  color: 'yellow',
}

const DownLoadBox = {
  backgroundColor: '#181D31',
  width: '100%',
  height: 300,
  marginTop: 50,
}

const TopLabel = {
  marginTop: 50,
  margin: 50,
  color: 'white',
  fontSize: 40,
  height: 100,
}


export default DownLoadSection


import React from "react";

function FeatureBox() {

  return (<div style={featureBox} >
    <img src="./favicon.ico"></img>
    <label className="center" style={centerLabel}>managing links</label>
    <label className="center" style={bottomLabel}>Create, protect and delete your links and monitor them with detailed statistics.</label>
  </div>)
}

const featureBox = {
  float: 'left',
  width: '25%',
  minWidth: 200,
  height: '100%'
}
const centerLabel = {
  fontWeight: 'bolder',
  fontSize: 20,
  marginTop: 40,
  marginBottom: 40,
  width: '100%'
}

const bottomLabel = {
  marginLeft: 30,
  marginRight: 30,

  marginBottom: 0,

}


export default FeatureBox
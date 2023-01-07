import React from "react";
import FeatureBox from "./FeatureBox";

function FeatureSection() {
  return (<div>
    <div >
      <div style={featureTitle}>Kutting edge features</div>
      <div style={featureBox}>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>

      </div>
    </div>
  </div>)
}

const featureTitle = {
  marginTop: 60,
  marginBottom: 30,
  marginLeft: '10%',
  marginRight: '10%',
  fontSize: 30,
}
const featureBox = {

  marginLeft: '10%',
  marginRight: '10%',
  width: '80%',
  height: 300,
  marginBottom: 100,
}


export default FeatureSection
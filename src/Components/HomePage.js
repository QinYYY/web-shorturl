import React from "react";
import NavigationBar from './NavigationBar';

import SearchBar from './SearchBar';
import Image from 'react-bootstrap/Image'
import FeatureSection from './FeatureSection';
import CenterSection from './CenterSection';
import DownLoadSection from './DownLoadSection';
import FooterSection from './FooterSection';

function HomePage() {

  function handlerSend(searchBarInput) {
    console.log('搜索栏输入内容' + searchBarInput);
  }

  function handlerLogin() {
    console.log('loginButtonClick');
  }

  return <div>
    <NavigationBar loginAction={handlerLogin}></NavigationBar>
    <div style={searchDiv}>
      <div style={spanStyle}>Short your links shorter</div>
      <SearchBar onsend={handlerSend}></SearchBar>
    </div>
    <CenterSection></CenterSection>
    <FeatureSection></FeatureSection>
    <DownLoadSection></DownLoadSection>
    <FooterSection></FooterSection>
  </div>
}

const searchDiv = {
  width: "80%",
  height: 300,
  marginTop: 50,
  marginLeft: '10%',

}

const spanStyle = {
  margin: 20,
  padding: 10,
  fontSize: 30,
  color: '#2eb872',
  fontWeight: 'lighter',

}

export default HomePage
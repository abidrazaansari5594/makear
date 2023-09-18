import React from 'react'
import "./Main.css"
import sourvenirs from "../../assets/sourvenirs.png"
import HomeIcone from "../../assets/home-icon.png"
import MilkeyBarLogo from "../../assets/milkybar-logo-01 1.png"
import MyPassport from "../../assets/my passport.png"
import DetailsPassportInside from "../../assets/details passport inside.png"
import PassportBottom from "../../assets/passport bottom.png"
import Download from "../../assets/Group 18 1.png"
import Frame17 from "../../assets/Frame 17.png"
import {LiaLessThanSolid} from "react-icons/lia"
import {LiaGreaterThanSolid} from "react-icons/lia"
import {GoShare} from "react-icons/go"
import {BiBookOpen} from "react-icons/bi"
import {LiaCopy} from 'react-icons/lia'


const Main = ({openCamera}) => {
  return (
    <div className="Main_Container">
      <div className="inner_main">
        <img className="milkylogo" src={MilkeyBarLogo} alt="" />
        <img className="sourvenirs" onClick={openCamera} src={sourvenirs} alt="" />
        <img className="homeicons" src={HomeIcone} alt="" />
      </div>
      <div className="body_Container">
        <img className="mypassport" src={MyPassport} alt="" />
        <img className="detailspasswordinside" src={DetailsPassportInside} alt="" />
        <img className="passportbottom" src={PassportBottom} alt="" />
        <img className="download" src={Download} alt="" />
      </div>

      <div className="bottom_parts">
        <img className="frame17" src={Frame17} alt="" />
        <div className="innerBottom">
            <LiaLessThanSolid/>
            <LiaGreaterThanSolid/>
            <GoShare/>
            <BiBookOpen/>
            <LiaCopy/>
        </div>
      </div>
    </div>
  )
}

export default Main
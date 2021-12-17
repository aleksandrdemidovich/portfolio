import React from 'react';
import '../App.css';
import {IconButton, Paper, styled, Typography} from "@mui/material";
import {SkillType} from "../data/Skills";
import {Fade} from "react-awesome-reveal";



function Skill({skillImg, skillInfo, skillName, skillNameColor, skillDocumentationLink, fadeDirection}: SkillType) {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <SkillContainer elevation={5} onClick={() => openInNewTab(skillDocumentationLink)}>
            <Fade direction={fadeDirection}>
            <img src={skillImg} style={{width:'100px', height:'100px'}}  alt="logo"/>
            <Typography variant={"h5"} color={skillNameColor}>
                {skillName}
            </Typography>
            <Typography variant={"body1"}>
                {skillInfo}
            </Typography>
            <IconButton size={"small"} >Learn more</IconButton>
            </Fade>
        </SkillContainer>
    );
}

export default Skill;

export const SkillContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  min-height: 420px;
  padding: 30px 20px 0 20px;

  .MuiTypography-root {
    padding: 20px;
    text-align: center;
  }
  .MuiIconButton-root {
    padding-bottom: 20px;
    color: gray;
  }
  .MuiIconButton-root::after {
    margin-left: 5px;
    font-size: 20px;
    content: "→";
  }

  .scale-up-hor-left {
    -webkit-animation: scale-up-hor-left 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: scale-up-hor-left 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @-webkit-keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(2.5);
      transform: scaleX(2.5);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  
  :hover{
    cursor: pointer;
    .MuiIconButton-root {
      color: red;
      background: none;
      ::after{
        content: "\\2192";
        margin-left: 5px;
        animation: scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      }
    }
    
  }
  
  @media (max-width: 768px) {
    width: 95%;
    margin: auto auto 20px;
    min-height: 300px;
  }

`

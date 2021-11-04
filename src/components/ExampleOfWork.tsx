import React from 'react';
import logo from '../logo.svg'
import '../App.css';
import {Grid, styled, Typography} from "@mui/material";

type SkillPropsType = {
    skillName: string
    skillNameColor: string
    skillInfo: string
    skillImg: string
}

function Skill({skillImg, skillInfo, skillName, skillNameColor}: SkillPropsType) {

    return (
        <SkillContainer>
            <img src={skillImg} style={{width:'100px', height:'100px'}}  alt="logo"/>
            <Typography variant={"h5"} color={skillNameColor}>
                {skillName}
            </Typography>
            <Typography variant={"body1"}>
                {skillInfo}
            </Typography>
        </SkillContainer>
    );
}

export default Skill;

const SkillContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;

  & .MuiTypography-root {
    padding: 20px;
  }
`

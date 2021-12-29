import React, {useState} from 'react';
import {
    AppBar,
    Avatar,
    Button, createTheme, CssBaseline,
    Grid,
    IconButton,
    PaletteOptions, Paper,
    styled,
    TextField, ThemeProvider,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import Typewriter from 'typewriter-effect';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Skill from "./components/Skill";
import ExampleOfWork from "./components/ExampleOfWork";
import {skills} from "./data/Skills";
import {workExamples} from "./data/WorkExamples";
import {particleOpt} from "./common/backgroundOptions";
import Particles from "react-tsparticles";
import {Fade, Flip} from "react-awesome-reveal";


function App() {
    const [isDarkMode, setDarkMode] = useState(true)

    const mainRef = React.useRef<HTMLDivElement>(null)
    const skillsRef = React.useRef<HTMLDivElement>(null)
    const worksRef = React.useRef<HTMLDivElement>(null)
    const contactsRef = React.useRef<HTMLDivElement>(null)


    const scrollTo = (ref: any) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <div className="App">
                <Particles style={{position: "absolute", top: 0, bottom: 0, right: 0, left: 0}}
                           params={particleOpt}/>
                <RootContentContainer ref={mainRef}>
                    <AppBar>
                        <CustomToolbar>
                            <HeaderButtonContainer>
                                <Button color={"secondary"} onClick={() => scrollTo(mainRef)}>Home</Button>
                                <Button color={"secondary"} onClick={() => scrollTo(skillsRef)}>Skills</Button>
                                <Button color={"secondary"} onClick={() => scrollTo(worksRef)}>Works</Button>
                                <Button color={"secondary"} onClick={() => scrollTo(contactsRef)}>Contacts</Button>
                            </HeaderButtonContainer>
                        </CustomToolbar>
                    </AppBar>
                    <MyInfoContainer>
                        <Grid item>
                            <Typewriter
                                options={{deleteSpeed: 30, wrapperClassName: 'autoWrite', cursorClassName: 'autoWrite'}}
                                onInit={(typewriter) => {
                                    typewriter.typeString('Hello!' + '<br> ')
                                        .changeDelay(50)
                                        .typeString('My name is Aleksandr Demidovich')
                                        .pauseFor(300)
                                        .deleteChars(20)
                                        .typeString('<strong><em>Aleksandr Demidovich</em></strong><br>')
                                        .typeString('I am  developer')
                                        .pauseFor(300)
                                        .deleteChars(9)
                                        .typeString('front-end React developer')
                                        .start()
                                }}/>
                        </Grid>
                        <Grid item>
                            <CustomAvatar
                                alt="Remy Sharp"
                                src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                            />
                        </Grid>
                    </MyInfoContainer>
                    <SkillsContainer ref={skillsRef}>
                        <Flip direction={"horizontal"}>
                        <Typography fontFamily={"inherit"} variant={"h3"}>
                            My skills
                        </Typography>
                        </Flip>
                        <Skills>
                            {
                                skills.map((s, i) => {
                                    return <Skill key={i}
                                                  skillName={s.skillName}
                                                  skillNameColor={s.skillNameColor}
                                                  skillInfo={s.skillInfo}
                                                  skillImg={s.skillImg}
                                                  skillDocumentationLink={s.skillDocumentationLink}
                                                  fadeDirection={s.fadeDirection}/>
                                })
                            }
                        </Skills>
                    </SkillsContainer>
                    <MyWorksContainer ref={worksRef}>
                        <Flip direction={"horizontal"}>
                        <Typography fontFamily={"inherit"} variant={"h3"}>
                            Examples of my work
                        </Typography>
                        </Flip>
                        <WorksExamples>
                            {
                                workExamples.map((e, i) => {
                                    return <ExampleOfWork key={i}
                                                          previewImage={e.previewImage}
                                                          projectName={e.projectName}
                                                          projectDescription={e.projectDescription}
                                                          gitHubURL={e.gitHubURL}/>
                                })
                            }
                        </WorksExamples>
                    </MyWorksContainer>
                    <ContactsContainer ref={contactsRef}>
                        <Flip direction={"horizontal"}>
                        <Typography fontFamily={"inherit"} variant={"h3"}>Contacts</Typography>
                        </Flip>
                        <RootPaperContactsContainer elevation={5}>
                            <Grid item>
                                <Fade direction={"left"}>
                                    <Typography variant={'h2'} fontFamily={"inherit"} fontWeight={"bold"}>Let's discuss
                                        your
                                        offer</Typography>
                                    <Grid item>
                                        <PhoneCallbackOutlinedIcon fontSize={"medium"}/>
                                        <h4 style={{margin: '0 0 0 10px', fontSize: 'large'}}>+44 1632 967704</h4>
                                    </Grid>
                                    <Grid item display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                        <EmailOutlinedIcon fontSize={"medium"}/>
                                        <h4 style={{margin: '0 0 0 10px', fontSize: 'large'}}>your@gmail.com</h4>
                                    </Grid>
                                    <Grid item display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                        <LocationOnOutlinedIcon fontSize={"medium"}/>
                                        <h4 style={{margin: '0 0 0 10px', fontSize: 'large'}}>Brest, Belarus</h4>
                                    </Grid>

                                    <SocialContactsContainer>
                                        <IconButton aria-label="LinkedIn">
                                            <LinkedInIcon style={{color: '#2867B2'}} fontSize={"large"}/>
                                        </IconButton>
                                        <IconButton aria-label="GitHub">
                                            <GitHubIcon style={isDarkMode ? {color: '#e8eaea'} : {color: '#171515'}}
                                                        fontSize={"large"}/>
                                        </IconButton>
                                        <IconButton aria-label="Instagram">
                                            <InstagramIcon style={{color: '#bc2a8d'}} fontSize={"large"}/>
                                        </IconButton>
                                    </SocialContactsContainer>

                                    <Grid item display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                        <CheckIcon style={{margin: '0 20px 0 50px'}} color={"success"}
                                                   fontSize={"large"}/>
                                        <h3>Also i am considering the option of remote work</h3>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Grid container>

                                <FormContainer>

                                    <TextField fullWidth id="outlined-basic" label="Name" variant="standard" required/>
                                    <TextField fullWidth id="outlined-basic" label="Email" variant="standard" required/>
                                    <TextField
                                        variant={"standard"}
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        required
                                        rows={3}
                                    />
                                    <Button variant="contained" size={"large"} endIcon={<SendIcon/>}>Send</Button>

                                </FormContainer>

                            </Grid>
                        </RootPaperContactsContainer>
                    </ContactsContainer>
                    <FooterContainer>
                        <Typography variant={"h4"}>Aleksandr Demidovich</Typography>
                        <Typography variant={"subtitle1"} display={"flex"} alignItems={"center"}>
                            <CopyrightIcon fontSize={"small"}/>
                            All rights reserved
                        </Typography>
                    </FooterContainer>
                </RootContentContainer>
                <ModeButton aria-label="Switcher Mode" size={"large"} onClick={() => setDarkMode(!isDarkMode)}>
                    {isDarkMode
                        ? <Tooltip title={'Switch to light mode'} placement={"top-end"}>
                            <LightModeIcon color={"warning"}/>
                        </Tooltip>
                        : <Tooltip title={'Switch to dark mode'} placement={"top-end"}>
                            <DarkModeIcon/>
                        </Tooltip>}
                </ModeButton>
            </div>
        </ThemeProvider>
    );
}

export default App;

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#ce93d8',
        },
    },
});
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    } as PaletteOptions,
});

const RootContentContainer = styled(Grid)`
  width: 75%;
  margin: auto;

  @media (max-width: 768px) {
    width: 95%;;
  }
`
const HeaderButtonContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap;

   .MuiButton-root {
    color: white;
    background: none;

     :hover{
      transform: translateY(-5px);
      color: #ce93d8;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`
const CustomToolbar = styled(Toolbar)`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 95%;
    justify-content: center;
  }
`
const MyInfoContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  //.MuiTypography-h3 {
  //  font-size: 48px;
  //  font-weight: 400;
  //}

  .MuiGrid-item div {
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
    margin: 0;
  }

  .MuiGrid-item div h1 {
    width: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    overflow-x: hidden;
    padding-top: 15%;
    .MuiAvatar-root {
      margin-top: 50px;
    }

  ;
    h2 {
      font-size: 1rem;
    }
  }
`
const CustomAvatar = styled(Avatar)`
  width: 350px;
  height: 350px;
  border: 1px solid gray;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`
const SkillsContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  vertical-align: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    height: 100%;
  }
`
const Skills = styled(Grid)`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const MyWorksContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`
const WorksExamples = styled(Grid)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`
const ContactsContainer = styled(Grid)`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;


  .MuiButton-root {
    margin-top: 20px;
    color: white;
    margin-left: auto;
  }

  .MuiGrid-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 30px;

  }

  @media (max-width: 768px) {
    flex-direction: column;
    .MuiPaper-root {
      flex-direction: column;
    }


    .MuiGrid-container {
      width: 100%;
    }
  }
`
const RootPaperContactsContainer = styled(Paper)`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 30px;

  .MuiGrid-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .MuiGrid-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .MuiPaper-root {
      flex-direction: column;
    }

  ,
  }
`
const FormContainer = styled('form')`
  width: 80%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  .MuiTextField-root {
    margin: 20px;
  }

`
const FooterContainer = styled(Grid)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;


  .MuiTypography-h4 {
    font-size: 1.5rem;
  }
`
const SocialContactsContainer = styled(Grid)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  .MuiIconButton-root { 
    :hover {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`
const ModeButton = styled(IconButton)`
  position: sticky;
  bottom: 10px;
  right: 0;
`


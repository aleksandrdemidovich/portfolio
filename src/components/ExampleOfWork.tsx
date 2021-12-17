import React from 'react';
import '../App.css';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    styled, Tooltip,
    Typography
} from "@mui/material";
import {ExampleProjectType} from "../data/WorkExamples";
import {Flip} from "react-awesome-reveal";


function ExampleOfWork({previewImage, projectName, projectDescription, gitHubURL}: ExampleProjectType) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <ExampleOfWorkContainer elevation={5}>
            <Flip direction={"horizontal"}>
                <img src={previewImage} title={'Click to open preview'} onClick={handleClickOpen}/>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth={"xl"}
                >
                    <DialogTitle>
                        {projectName}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <img src={previewImage} style={{width: '77vw', overflowX: 'hidden'}}/>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color={"secondary"}>close</Button>
                        <Button onClick={handleClose} color={"success"} href={gitHubURL} target="_blank">Try
                            online</Button>
                    </DialogActions>
                </Dialog>
                <Typography variant={"h5"}>
                    {projectName}
                </Typography>
                <Typography variant={"subtitle2"}>
                    {projectDescription}
                </Typography>
            </Flip>
        </ExampleOfWorkContainer>
    );
}

export default ExampleOfWork;

const ExampleOfWorkContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 45%;
  height: 100%;
  padding: 40px;


  img {
    width: 500px;
    border: 1px solid gray;
    transition: 0.5s;

    :hover {
      opacity: 0.3;
      cursor: pointer;
      transform: scale(1.2);
    }
  }


  .MuiTypography-h5 {
    padding-top: 20px;
  }

  & :hover {
    & + .MuiTypography-body2 {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: auto auto 20px;
    img {
      width: 400px;
    }
  }
  @media (max-width: 1024px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 1440px) {
    img {
      width: 300px;
    }
  }

`



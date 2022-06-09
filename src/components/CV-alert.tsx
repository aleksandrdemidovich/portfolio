import React from 'react';
import '../App.css';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper,} from "@mui/material";
import cv from "./../temp/CV_png.png"


function CValert() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => setOpen(false);


    return (
        <>
            <Button style={{animation:'.5s linear 1s infinite alternate slidein', color:'red'}} variant={"outlined"} color={"error"} onClick={handleClickOpen} >CV</Button>
            <Paper elevation={5}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth={"xl"}
                >
                    <DialogTitle>
                        CV
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <img src={cv} style={{width: '77vw', overflowX: 'hidden'}}/>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color={"secondary"}>close</Button>
                        <Button onClick={handleClose}
                                href={'https://drive.google.com/file/d/1hZJZafhGyCqHk4WgRaqwBC4jWa5CKc8f/view?usp=sharing'}
                                target={"_blank"}
                                color={"success"}>open in google file</Button>
                    </DialogActions>
                </Dialog>

            </Paper>
        </>
    );
}

export default CValert;





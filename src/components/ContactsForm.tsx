import React, {useState} from 'react';
import '../App.css';
import {Button, CircularProgress, styled, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useFormik} from "formik";
import {offerAPI} from "../api/api";

type FormikErrorType = {
    email?: string
    name?: string
    message?: string
}

function ContactsFrom() {

    const [isSent, setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.message) {
                errors.message = 'Required';
            }

            return errors;
        },
        onSubmit: (values) => {
            setIsLoading(true)
            offerAPI.sendOffer(values)
                .then(() =>
                    setIsLoading(false)
                ).then(() => {
                setIsSent(true)
            })
        },
    })

    // if (isLoading) {
    //     return <CircularProgress color="success"/>
    // }

    return (
        <FormContainer onSubmit={formik.handleSubmit}>
            {!isSent ? <> <TextField fullWidth id="name"
                                     onChange={formik.handleChange}
                                     value={formik.values.name}
                                     error={!!formik.errors.name}
                                     helperText={formik.errors.name}
                                     label="Name"
                                     name="name"
                                     variant="standard"/>
                    <TextField fullWidth id="email"
                               onChange={formik.handleChange}
                               value={formik.values.email}
                               error={!!formik.errors.email}
                               helperText={formik.errors.email}
                               label="Email"
                               name="email"
                               variant="standard"/>
                    <TextField
                        variant={"standard"}
                        fullWidth
                        name="message"
                        id="message"
                        label="Message"
                        multiline
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        error={!!formik.errors.message}
                        helperText={formik.errors.message}
                        rows={3}
                    />
                    <Button variant="contained"
                            type="submit"
                            size={"large"}
                            disabled={isLoading}
                            endIcon={isLoading ? <CircularProgress size={20} color="success"/> : <SendIcon/>}>
                        Send
                    </Button>
                </>
                : <h1>Thank you <b>{formik.values.name}</b> for offering. I sincerely appreciate your time and
                    consideration. I will definitely answer you shortly!<span>&#128521;</span></h1>}
        </FormContainer>
    )
}

export default ContactsFrom;


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
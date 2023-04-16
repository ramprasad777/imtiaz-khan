import React from "react"
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
  Checkbox
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"

const useStyle = makeStyles((theme) => ({
    giftFormWrapper: {
        // padding: theme.spacing(3),
        padding:'24px',
        '& .input-field':{
            border:'1px solid #155E8B',
            borderRadius:'5px',
            '& label':{
                color:'#A2ADBD',
            },
            '& input':{
                color:'#fff'
            }
        }
    },
    submitBtn: {
        // margin: theme.spacing(1),
        margin:'8px',
        background:'#62ADEC',
        color:'#fff',
        borderRadius:'5px'
    },
}))

//Data
const initialValues = {
  firstName: "",
  phone: "",
  occupation: "",
  email: "",
}

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const GiftForm = () => {
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Grid container justify="center" spacing={1}>
        <div className={classes.giftFormWrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                    <CardContent>
                    <Grid item container spacing={1} justify="center">
                        <Grid item xs={12} md={12}>
                            <Field
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={values.firstName}
                            component={TextField}
                            className="input-field"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Field
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            type="number"
                            className="input-field"
                            onInput = {(e) =>{
                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                            }}
                            value={values.phone}
                            component={TextField}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                                Occupation
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Occupation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.occupation}
                                className="input-field"
                                name="occupation">
                                <MenuItem>None</MenuItem>
                                {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                                ))}
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Field
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            component={TextField}
                            className="input-field"
                            />
                        </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <span>
                        <Checkbox defaultChecked />
                        I want to subscribe for weekly newsletter
                    </span>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.submitBtn}>
                      Get Now
                    </Button>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </div>
    </Grid>
  )
}

export default GiftForm;
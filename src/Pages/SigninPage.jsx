import React, { Fragment } from 'react';
import { useForm} from 'react-hook-form';
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';

import { supabaseClient } from '../api/supabaseClient';


export function SigninPage() {

  const validationSchema = Yup.object().shape({

    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
   
  });

  

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async ({ email, password }) => {
    // sign the user in
    await supabaseClient.auth.signIn({
      email,
      password,
    }).then(res => {
      if(res.user){
      console.log(res.user)
      alert("signed in successfully!")
      }else{
        alert("sign in unsuccessful!")
      }
    }).catch(err => {
      console.error(err)
    });
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            SignIn Page!
          </Typography>

          <Grid container spacing={1}>
           
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          
          </Grid> 

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              SignIn
            </Button>
            <Link to="/signup">
                <Button
                
                color="primary"
                >
                  SignUp
                </Button>
              </Link>
          </Box>
          
        </Box>
      </Paper>
    </Fragment>
  );
};
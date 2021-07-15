import React, { Fragment, useEffect } from 'react';
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


export function SignoutPage() {

  useEffect(()=> {
    supabaseClient.auth.signOut()
},[])   

  // const validationSchema = Yup.object().shape({

  //   email: Yup.string()
  //     .required('Email is required')
  //     .email('Email is invalid'),
  //   password: Yup.string()
  //     .required('Password is required')
  //     .min(6, 'Password must be at least 6 characters')
  //     .max(40, 'Password must not exceed 40 characters'),
   
  // });

  

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({
  //   resolver: yupResolver(validationSchema)
  // });

  
   

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            SignOut Page!
          </Typography>

          <Box mt={3}>
          You've been signed out.
        <Link to="/">
            <Button>
                Go to home page
            </Button>
        </Link>
        <Link to="/signin">
            <Button>
                Sign in
            </Button>
        </Link>
          </Box>
          
        </Box>
      </Paper>
    </Fragment>
  );
};
import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
  Paper,
  Box,
  Typography,
  Button
} from '@material-ui/core';

import { supabaseClient } from '../api/supabaseClient';


export function SignoutPage() {

  useEffect(()=> {
    supabaseClient.auth.signOut()
},[])   

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
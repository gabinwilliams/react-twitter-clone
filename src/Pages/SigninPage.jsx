import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom"; // use RouterLink as alias for react-router-dom's Link component so that the names don't collide.
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

import { supabaseClient } from "../api/supabaseClient";

export function SigninPage() {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }) => {
    // sign the user in
    await supabaseClient.auth
      .signIn({
        email,
        password,
      })
      .then((res) => {
        if (res.user) {
          console.log(res.user);
          alert("signed in successfully!");
          // route user to home page
          history.push("/");
        } else {
          alert("sign in unsuccessful!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <Paper>
        <div style={{ padding: 20 }}>
          <Box px={3} py={2}>
            <Typography variant="h6" align="center" margin="dense">
              SignIn Page!
            </Typography>

            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  {...register("email")}
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
                  {...register("password")}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
            </Grid>

            <Grid item s={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Sign In
              </Button>
              <Link
                underline="none"
                to="/signup"
                component={RouterLink}
                color="inherit"
              >
                <Button color="inherit">Sign up</Button>
              </Link>
            </Grid>
          </Box>
        </div>
      </Paper>
    </Fragment>
  );
}

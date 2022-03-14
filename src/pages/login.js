import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import { Facebook as FacebookIcon } from '../icons/facebook';
//import { Google as GoogleIcon } from '../icons/google';

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              이전 화면
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                align="center"
                color="textPrimary"
                variant="h4"
              >
                HISEOUL ML CONSOLE
              </Typography>
              <Typography
                align="center"
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                로그인 화면 입니다
              </Typography>
            </Box>
            
            <TextField
              error={Boolean(formik.touched.userid && formik.errors.userid)}
              fullWidth
              helperText={formik.touched.userid && formik.errors.userid}
              label="User ID"
              margin="normal"
              name="userid"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="userid"
              value={formik.values.userid}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                minWidth
                size="large"
                type="submit"
                variant="contained"
              >
                로그인
              </Button>
            </Box>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                minWidth
                size="large"
                type="submit"
                variant="contained"
              >
                회원가입
              </Button>
            </Box>

            <Typography>
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  아이디 찾기
                </Link>
              </NextLink>
            </Typography>

            <Typography>
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  비밀번호 찾기
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;

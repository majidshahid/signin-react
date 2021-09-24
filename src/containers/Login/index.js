import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link } from 'react-router-dom'
function Login() {
   return (
      <div>
         <MenuAppBar title="Login" />
         ِ<Container>
            <Grid container justifyContent="center">
               <Grid item xs={12} lg={6} md={12}>
                  <MyCard>
                     <h1>Login</h1>
                     <div className="mt-20">
                        <BasicTextFields label="Email" type="email" />
                     </div>
                     <div className="mt-20">
                        <BasicTextFields label="Password" type="password" />
                     </div>
                     <div className="mt-20">
                        <BasicButtons title="LOGIN " />
                     </div>
                     <div className="mt-20" style={{textAlign: 'center'}}>
                        <Link to="/signup">Register now</Link>
                     </div>
                  </MyCard>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Login;
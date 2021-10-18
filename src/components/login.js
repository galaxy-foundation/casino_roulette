import React from "react";
import { TextField, Grid, Button } from '@mui/material';

function Login({ history }) {
    const [username, setUsername] = React.useState(null);

    const changeValue = (e) => {
        setUsername(e.target.value);
    };

    function login() {
        localStorage.setItem("username", username);
        history.push("/home");
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "20vh" }}>
            <Grid item xl={5} lg={3} md={3}></Grid>
            <Grid item xl={2} lg={6} md={3}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={changeValue} /><br /><br />
                <Button variant="contained" size="large" onClick={login}>
                    Login
                </Button>
            </Grid>
            <Grid item xl={5} lg={3} md={3}></Grid>
        </Grid>
    );
}

export default Login;

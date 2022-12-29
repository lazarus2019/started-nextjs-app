import React from 'react';

type Props = {};

interface BaseProps {
  name: string
}

interface Human {
  handsCount: number
}

interface Admin extends Human, BaseProps {
  isAdmin: boolean
}

const krix:Admin = {
  name: "Krix",  
  handsCount: 1,
  isAdmin: true
}

const Login = (props: Props) => {
  return <div>Login</div>;
};

export default Login;

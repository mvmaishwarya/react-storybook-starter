import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";

export default {
    title: "LoginSignUp",
    component: LoginSignUp,
    argTypes: { onSignUpClick : { action: 'handleSignUpClick' }, onLoginClick : { action: 'handleLoginClick' }},
}

export const BasicLook = () => <LoginSignUp />

export const WithRedTheme = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    theme: 'red',
  },
};

export const WithBlueTheme = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    theme: 'blue',
  },
};

export const WithPreFilledValues = {
    args: {
      name: 'Ais',
      email: 'aish@123',
      password:'******',
    },
  };
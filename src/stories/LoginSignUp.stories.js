import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";

export default {
    title: "LoginSignUp",
    component: LoginSignUp,
    argTypes: { 
      onSignUpClick : { action: 'handleSignUpClick' }, 
      onLoginClick : { action: 'handleLoginClick' },
      size: { control: 'radio', options: [ 'sm', 'md', 'lg'] },
      color: { control: 'color' },
      backgroundColor: { control: 'color' },
      name: { control: 'text' },
    },
    tags: ['autodocs'],
    parameters: {
      docs: {
        toc: true, // Enables the table of contents
      },
    },
}

export const BasicLook = () => <LoginSignUp />

export const WithRedTheme = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    color:'red',
    backgroundColor:'red'
  },
};

export const WithBlueTheme = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    color:'blue',
    backgroundColor:'blue'
  },
};

export const WithSmallSize = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    color:'blue',
    backgroundColor:'blue',
    size: 'sm'
  },
};

export const WithLargeSize = {
  args: {
    name: 'Ais',
    email: 'aish@123',
    password:'******',
    color:'green',
    backgroundColor:'green',
    size: 'lg'
  },
};

export const WithPreFilledValues = {
    args: {
      name: 'Ais',
      email: 'aish@123',
      password:'******',
      color:'blue',
    backgroundColor:'blue',
    size: 'md'
    },
  };
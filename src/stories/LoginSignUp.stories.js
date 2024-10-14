import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";

export default {
  title: "LoginSignUp",
  component: LoginSignUp,
  args: {
    onSignUpClick: fn(),
    onLoginClick: fn(),
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    name: { control: "text" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
  tags: ['autodocs'],
    parameters: {
      docs: {
        toc: true, // Enables the table of contents
      },
    }
};

export const BasicLook = (args) => <LoginSignUp {...args} />;

BasicLook.args = {
    name: "Jen Thompson",
    email: "jenthompson@gmail.com",
    password: "******",
}

export const WithRedTheme = {
  args: {
    ...BasicLook.args,
    color: "red",
    backgroundColor: "red",
  },
};

export const WithBlueSmallSizeTheme = {
  args: {
    ...BasicLook.args,
    color: "blue",
    backgroundColor: "blue",
    size: "sm"
  },
};

export const WithGreenMedSizeTheme = {
  args: {
    color: "green",
    backgroundColor: "green",
    size: "md"
  },
  play: async ({ args, canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
 
    await step('Enter credentials', async () => {
      await userEvent.type(canvas.getByTestId('name'), 'Jill Holden');
      await userEvent.type(canvas.getByTestId('email'), 'jillholden@gmail.com');
      await userEvent.type(canvas.getByTestId('password'), 'supersecret');
    });
 
    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
 
    await waitFor(() => expect(args.onSignUpClick).toHaveBeenCalled());
  },
};
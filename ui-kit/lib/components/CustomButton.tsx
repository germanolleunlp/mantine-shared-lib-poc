import { Button, type ButtonProps } from '@mantine/core';

export type CustomButtonProps = ButtonProps;
export const CustomButton = ({ children, ...props}: CustomButtonProps) => {
  return <Button {...props}>
    {children}
  </Button>
}

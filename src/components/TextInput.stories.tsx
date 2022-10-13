import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
  title: 'Components/TextInput', 
  component: TextInput.Root,
  args: {
    children: 'Create Account',
    size: 'md'
  },

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
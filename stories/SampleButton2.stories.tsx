import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SampleButton2 } from './SmapleButton2'

export default {
  title: 'SampleButton2',
  component: SampleButton2,
} as ComponentMeta<typeof SampleButton2>

const Template: ComponentStory<typeof SampleButton2> = (args) => (
  <SampleButton2 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
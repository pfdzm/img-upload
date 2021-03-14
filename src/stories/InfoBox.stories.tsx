import InfoBox from '../components/InfoBox/index'
import { InfoBoxProps } from 'components/InfoBox/types'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'InfoBox',
  component: InfoBox,
} as Meta

const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />

export const InformationBox = Template.bind({})

InformationBox.args = {
  contentBody:
    "Here's some valuable information I wanted to share with you! 🌞",
  type: 'info',
  showContent: false
}

export const SuccessBox = Template.bind({})

SuccessBox.args = {
  contentBody: 'Awesome! That thing just succeeded! 🥳',
  type: 'success',
}

export const ErrorBox = Template.bind({})

ErrorBox.args = {
  contentBody: "Oops! I'm afraid we ran into an error ... 😬",
  type: 'error',
}

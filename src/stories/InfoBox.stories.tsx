import InfoBox from '../components/InfoBox/index'
import { InfoBoxProps } from 'components/InfoBox/types'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'InfoBox',
  component: InfoBox,
} as Meta

const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />

export const Information = Template.bind({})

Information.args = {
  contentBody: 'Bla bla bla!',
  type: 'info',
}

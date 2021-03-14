export interface InfoBoxProps {
  /** The text content of the header */
  contentHeader?: string
  /** The main content of the info box */
  contentBody: string
  /** Whether the info box should be 'open' by default */
  showContent?: boolean
  /** The type of box you wish to show: info, warn, error */
  type?: 'info' | 'error' | 'success'
}

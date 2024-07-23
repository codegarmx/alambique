type LinkType = 'primary' | 'secondary' | 'tertiary'

export interface LinkProps {
  to: string
  text: string
  type?: LinkType
}

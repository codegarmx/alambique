import React, { FC } from 'react'
import { Link as GLink } from 'gatsby'

import { LinkProps } from './type'

//TODO: create a function to check if an link is external or internal
export const Link: FC<LinkProps> = ({ to, text, type = 'primary' }) => {
  const styles: Record<string, string> = {
    primary:
      'font-bold uppercase text-white border border-brown bg-brown py-3 px-8 hover:bg-white hover:text-slate-900',
  }

  return (
    <GLink
      to={to}
      className={`font-sans transition-all duration-300 text-sm ${styles[type]}`}
    >
      {text}
    </GLink>
  )
}

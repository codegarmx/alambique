import React, { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={'w-screen h-screen'}>{children}</div>
}

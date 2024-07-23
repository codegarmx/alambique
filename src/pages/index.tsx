import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import { Container, Link } from '../components'

const IndexPage: FC<PageProps> = () => {
  return (
    <Container>
      <h1 className="text-5xl font-body">Hello World</h1>
      <Link to="/" text="My link" />
    </Container>
  )
}

export default IndexPage

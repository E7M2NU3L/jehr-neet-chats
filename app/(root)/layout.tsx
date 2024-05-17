import Foot from '@/components/footer/footer'
import Nav from '@/components/nav/nav'
import React from 'react'

const HomePages = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <Nav />
        {children}
      <Foot />
    </div>
  )
}

export default HomePages
import React, { ReactNode } from 'react'
import "./layout.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='main_layout'>
        {children}
    </div>
  )
}

export default Layout
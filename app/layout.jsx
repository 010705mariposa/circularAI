import React from 'react'
import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Footer from '@components/Footer'

export const metadata = {
  title: 'Circula',
  description: 'Voice cloning technology'
}

const RootLayout = ({ children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
        <div className="gradient"></div>

        <div>
          <Nav />
          { children }
          </div>

          <Footer />
          </Provider>
      </body>
    </html>
  )
}

export default RootLayout

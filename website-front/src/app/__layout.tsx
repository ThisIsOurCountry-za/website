// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// import { createGetInitialProps } from '@mantine/next';

// const getInitialProps = createGetInitialProps();

// import { MantineProvider } from '@mantine/core';


export const metadata = {
  title: 'This is our country!',
  description: 'This is our country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

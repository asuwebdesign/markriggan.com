import localFont from 'next/font/local'
import './styles/main.scss'

const Gilroy = localFont({
  src: [
    {
      path: './fonts/gilroy-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/gilroy-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/gilroy-semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/gilroy-extrabold-webfont.woff2',
      weight: '700',
      style: 'normal',
    }
  ]
})

export const metadata = {
  title: 'Mark Riggan',
  description: 'Description...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Gilroy.className}>
      <body>{children}</body>
    </html>
  )
}

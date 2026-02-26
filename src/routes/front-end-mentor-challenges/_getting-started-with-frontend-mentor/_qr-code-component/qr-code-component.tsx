import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import styles from './styles.css?inline'
import qrCodeImg from './images/qrCodeImg.png'

export const Route = createFileRoute('/front-end-mentor-challenges/_getting-started-with-frontend-mentor/_qr-code-component/qr-code-component')({
  head: () => ({ meta: [{ title: 'QR Code Component | Frontend Mentor' }] }),
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    const el = document.createElement('style')
    el.textContent = styles
    document.head.appendChild(el)
    return () => { document.head.removeChild(el) }
  }, [])

  return (
    <main>
      <div className="outer-card">
        <div className="inner-card">
          <img src={qrCodeImg} alt="QR Code" />
          <p className="tagline">Improve your front-end skills by building projects</p>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  )
}

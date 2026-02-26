import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import styles from './global.css?inline'
import illustrationArticle from './assets/images/illustration-article.svg'
import imageAvatar from './assets/images/image-avatar.webp'

export const Route = createFileRoute(
  '/front-end-mentor-challenges/_getting-started-with-frontend-mentor/_blog-preview-card/blog-preview-card',
)({
  head: () => ({ meta: [{ title: 'Blog Preview Card | Frontend Mentor' }] }),
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
      <article className="card">
        <div className="card-content-container">
          <img className="thumbnail" src={illustrationArticle} alt="" />
          <header className="card-header">
            <div className="tag">Learning</div>
            <time className="publish-date">Published 21 Dec 2023</time>
            <h2 className="post-title">
              <a className="post-link" href="#">HTML & CSS foundations</a>
            </h2>
          </header>
          <p className="blog-description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="author">
            <img
              className="avatar"
              src={imageAvatar}
              alt="Headshot of Greg Hooper, author of the HTML & CSS foundations blog."
            />
            <p className="author-name">Greg Hooper</p>
          </div>
        </div>
      </article>
    </main>
  )
}

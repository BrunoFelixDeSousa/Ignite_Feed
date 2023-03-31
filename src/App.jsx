import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  { 
      id: 1,
      author: {
          avatarUrl:'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @Rocketseat'
      },
      content: [
          {type: 'paragraph', content: 'Fala galera 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento show de bola'},
          {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-03-30 16:00:00')
  
  },
  { 
      id: 2,
      author: {
          avatarUrl:'https://github.com/maykbrito.png',
          name: 'Mayke Brito',
          role: 'Educator @Rocketseat'
      },
      content: [
          {type: 'paragraph', content: 'Fala galera 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento show de bola'},
          {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-03-15 16:00:00')
  
  }
]

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <aside>

          <Sidebar />
        
        </aside>
        <main>
          {posts.map(post => {
            return (

              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />

            )
          })}
        </main>
      </div>
    </div>
  )
}
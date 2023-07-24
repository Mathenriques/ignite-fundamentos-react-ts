import { Avatar } from './Avatar'
import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function SideBar() {
  return (
    <>
      <aside className={styles.sideBar}>
        <img 
          className={styles.cover}
          src="https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
        />

        <div className={styles.profile}>
          <Avatar 
            src="https://github.com/Mathenriques.png"
            hasBorder={true}
          />
          
          <strong>Matheus Henriques</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
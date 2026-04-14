import { useNavigate } from 'react-router-dom'
import styles from './UserCard.module.css'

export function UserCard() {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <p className={styles.cardName}>田中 一郎</p>
      <p className={styles.cardRole}>フロントエンドエンジニア</p>
      <button className={styles.cardButton} onClick={() => navigate('/profile')}>
        プロフィールを見る
      </button>
    </div>
  )
}

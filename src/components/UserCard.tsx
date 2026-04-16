import { useNavigate } from 'react-router-dom'
import styles from './UserCard.module.css'

type UserCardProps = {
  name: string;
  role: string;
};

export function UserCard({ name, role }: UserCardProps) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <p className={styles.cardName}>{name}</p>
      <p className={styles.cardRole}>{role}</p>
      <button className={styles.cardButton} onClick={() => navigate('/profile')}>
        プロフィールを見る
      </button>
    </div>
  )
}

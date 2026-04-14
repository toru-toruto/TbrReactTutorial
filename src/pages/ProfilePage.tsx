import { useNavigate } from 'react-router-dom'
import { ProfileCard } from '../components/ProfileCard'
import styles from './ProfilePage.module.css'

export function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/')}>← 戻る</button>
      <ProfileCard />
    </div>
  )
}

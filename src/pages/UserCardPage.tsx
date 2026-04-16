import { useEffect, useRef, useState } from 'react'
import { UserCard } from '../components/UserCard'
import styles from './UserCardPage.module.css'

export function UserCardPage() {
  const [isResized, setIsResized] = useState(false)
  const timerRef = useRef<number>(null)

  useEffect(() => {
    const showResized = () => {
      setIsResized(true)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => {
        setIsResized(false)
      }, 500)
    }
    window.addEventListener('resize', showResized)

    return () => window.removeEventListener('resize', showResized)
  }, [])

  return (
    <div>
      <UserCard name="田中 一郎" role="フロントエンドエンジニア" />
      <UserCard name="佐藤 太郎" role="バックエンドエンジニア" />
      {isResized && <p className={styles.resized}>リサイズされました！</p>}
    </div>
  )
}

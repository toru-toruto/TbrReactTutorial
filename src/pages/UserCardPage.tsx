import { UserCard } from '../components/UserCard'

export function UserCardPage() {
  return (
    <div>
      <UserCard name="田中 一郎" role="フロントエンドエンジニア" />
      <UserCard name="佐藤 太郎" role="バックエンドエンジニア" />
    </div>
  )
}

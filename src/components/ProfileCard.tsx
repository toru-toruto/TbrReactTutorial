import { AvatarCard } from './AvatarCard'
import { StatsRow } from './StatsRow'
import styles from './ProfileCard.module.css'

export function ProfileCard() {
  return (
    <div className={styles.card}>
      <AvatarCard name="田中太郎" handle="tanaka_taro" initials="田太" />
      <StatsRow items={[
        { value: "128", label: "投稿" },
        { value: "1.2k", label: "フォロワー" },
        { value: "340", label: "フォロー中" },
      ]} />
    </div>
  );
}

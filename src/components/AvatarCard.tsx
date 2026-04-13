import { Section } from './Section'
import styles from './AvatarCard.module.css'

type AvatarCardProps = {
  name: string;
  handle: string;
  initials: string;
};

export function AvatarCard({ name, handle, initials }: AvatarCardProps) {
  return (
    <Section label="AVATARCARD">
      <div className={styles.avatarRow}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userHandle}>@{handle}</div>
        </div>
      </div>
    </Section>
  );
}

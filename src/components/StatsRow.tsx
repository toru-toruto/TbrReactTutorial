import { Section } from './Section'
import styles from './StatsRow.module.css'

type StatItem = {
  value: string;
  label: string;
};

type StatsRowProps = {
  items: StatItem[];
};

export function StatsRow({ items }: StatsRowProps) {
  return (
    <Section label="STATSROW">
      <div className={styles.statsRow}>
        {items.map((item) => (
          <div key={item.label} className={styles.statItem}>
            <span className={styles.statValue}>{item.value}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

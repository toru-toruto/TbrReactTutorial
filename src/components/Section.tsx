import styles from './Section.module.css'

type SectionProps = {
  label: string;
  children: React.ReactNode;
};

export function Section({ label, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionLabel}>{label}</div>
      {children}
    </div>
  );
}

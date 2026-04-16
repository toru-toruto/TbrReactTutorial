import { useNavigate } from "react-router-dom";
import styles from "./UserCard.module.css";
import { useState, useRef } from "react";

type UserCardProps = {
  name: string;
  role: string;
};

export function UserCard({ name, role }: UserCardProps) {
  const navigate = useNavigate();

  const [isCount10, setIsCount10] = useState(false);

  const count = useRef(0);
  const nameRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    count.current++;
    if (count.current >= 10) {
      setIsCount10(true);
    }

    if (nameRef.current) {
      nameRef.current.style.color = "red";
    }
  };

  return (
    <div className={styles.card}>
      <p className={styles.cardName} ref={nameRef}>
        {name}
      </p>
      <p className={styles.cardRole}>{role}</p>
      <button
        className={styles.cardButton}
        onClick={() => navigate("/profile")}
      >
        プロフィールを見る
      </button>
      <button className={styles.cardButton} onClick={handleClick}>
        カウントアップ
      </button>
      {isCount10 &&
        <p className={styles.cardName}>10回押されました！</p>
      }
    </div>
  );
}

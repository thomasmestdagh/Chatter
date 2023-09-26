import { Link } from "react-router-dom";
import styles from "./SideNavigationLink.module.css";
import { ReactNode } from "react";

interface Props {
  imgUrl?: string;
  to: string;
  round?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function ({ imgUrl, to, round, className, children }: Props) {
  return (
    <div className={styles.wrapper + " " + className}>
      <Link to={to}>
        <div className={styles.imageBox}>
          {imgUrl ? (
            <img
              src={imgUrl}
              className={styles.img + " " + (round && styles.round)}
            />
          ) : (
            children
          )}
        </div>
      </Link>
    </div>
  );
}

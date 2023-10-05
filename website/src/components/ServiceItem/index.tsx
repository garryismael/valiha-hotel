import { IconType } from "react-icons";
import styles from "./index.module.css";

type Props = {
  img: string;
  text: string;
  Icon: IconType;
};

export default function SectionService({ img, text, Icon }: Props) {
  return (
    <div className={styles.container}>
      <img src={img} alt="img" />
      <div className={styles.center}>
        <Icon size={32}/>
        <p>{text}</p>
      </div>
    </div>
  );
}

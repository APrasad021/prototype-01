import { motion } from 'framer-motion';
import styles from '../styles/IntentCircles.module.scss'

type Props = {
    intents: string[];
}

function IntentCircles(props: Props) {
    const { intents } = props;
  return (
    <div className={styles["intent-circles"]}>
      {intents.map((intent) => (
        <motion.div
          key={intent}
          className={styles["intent-circle"]}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 5, duration: 2 }}
        >
          {intent}
        </motion.div>
      ))}
    </div>
  );
}

export default IntentCircles;

import { AnimateSharedLayout, motion } from "framer-motion";
import Item from "./Item";
import styles from '../../styles/Items.module.css'
const items = [0, 1, 2, 3, 4];

function ItemList() {
    return (
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }} className={styles.list}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    );
  }

export default ItemList;
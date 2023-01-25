import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/Items.module.css'


const Content = () => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.row} />
            <div className={styles.row} />
            <div className={styles.row} />
        </motion.div>
    );
}

function Item({ isListItem = false, layout = true, inactiveContent = null, activeContent = <Content /> }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    if (isListItem) {
    return (
        <motion.li
            layout
            onMouseEnter={toggleOpen}
            onMouseLeave={toggleOpen}
            initial={{ borderRadius: 10 }}
            className={styles.listitem}
        >
            <motion.div className="avatar" layout />
            <AnimatePresence>
                {!isOpen && <motion.div>Item</motion.div>}
                {isOpen && <Content />}
            </AnimatePresence>
        </motion.li>
    );
    }

    return (
        <motion.div
        layout={layout}
        onMouseEnter={toggleOpen}
        onMouseLeave={toggleOpen}
        initial={{ borderRadius: 10 }}
        className={styles.item}
    >
        <motion.div className="avatar" layout />
        <AnimatePresence>
            {!isOpen && inactiveContent}
            {isOpen && activeContent}
        </AnimatePresence>
    </motion.div> 
    )
}



export default Item;
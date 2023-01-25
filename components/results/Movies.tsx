import { AnimateSharedLayout } from 'framer-motion';
import { useState } from 'react';
import styles from '../../styles/Movies.module.css';
import Item from '../reuse/Item';

function Movies() {
    const [isOnline, setIsOnline] = useState(false);

    const toggleOnline = () => setIsOnline(!isOnline);

    const getAvailableSources = () => {
        if (isOnline) {
            return "Netflix, Amazon Prime, Hulu, Disney+";
        }
        return "Local Library";
    };

    return (
        <div className={styles.container}>
            <AnimateSharedLayout>
                <div className={styles.row}>
                    <Item isListItem={false} inactiveContent={<p>Continue Watching</p>} />
                    <Item isListItem={false} inactiveContent={<p>Play a random movie</p>} />
                </div>
                <div className={styles.row}>
                    <Item isListItem={false} inactiveContent={<p>Get Movie tickets</p>} />
                    <Item isListItem={false} inactiveContent={<p>Browse Movies</p>} />
                </div>
            </AnimateSharedLayout>
        </div>
    )
}

export default Movies;
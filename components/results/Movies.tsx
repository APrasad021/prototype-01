import { AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../../styles/Movies.module.css';
import Item from '../reuse/Item';

function Movies() {
    // TODO: Move online state to context
    const [isOnline, setIsOnline] = useState(false);
    const [content, setContent] = useState<string[]>([]);

    useEffect(() => {
        if (isOnline) {
            setContent(["Continue Watching", "Play a random movie", "Get Movie Tickets", "Browse Movies"]);
        } else {
            setContent(["Continue Watching", "Watch Again", "Watch Later", "Browse"]);
        }
    }, [isOnline]);

    const toggleOnline = () => setIsOnline(!isOnline);

    const getAvailableSources = () => {
        if (isOnline) {
            return "Netflix, Amazon Prime, Hulu, Disney+";
        }
        return "Local Library";
    };


    return (
        <>
            <button className={styles.button} onClick={toggleOnline} />
            <div className={styles.container}>
                <AnimateSharedLayout>
                    <div className={styles.row}>
                        <Item isListItem={false} inactiveContent={<p>{content[0]}</p>} />
                        <Item isListItem={false} inactiveContent={<p>{content[1]}</p>} />
                    </div>
                    <div className={styles.row}>
                        <Item isListItem={false} inactiveContent={<p>{content[2]}</p>} />
                        <Item isListItem={false} inactiveContent={<p>{content[3]}</p>} />
                    </div>
                </AnimateSharedLayout>
            </div>
        </>
    )
}

export default Movies;
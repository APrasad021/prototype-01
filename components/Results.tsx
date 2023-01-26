import { animate, motion, MotionConfig, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Movies from "./results/Movies";
import ItemList from "./reuse/ItemList"
import SearchFooter from "./SearchFooter";

type Props = {
    mode: string;
    resultCount: any;
}

function Results({ mode, resultCount }: Props) {
    const [actionCount, setActionCount] = useState(0);

    useEffect(() => {
        const animation = animate(actionCount, resultCount, { duration: .25, onUpdate: latest => { if (Math.round(latest) !== actionCount) setActionCount(Math.round(latest) * Math.floor(Math.random() * 5)) } });

        return animation.stop;
    }, [resultCount, actionCount]);

    const getResults = () => {
        if (mode === 'media') {
            return <Movies />
        }
        return <ItemList />;
    };

    console.log(actionCount);

    return (
        <div>
            <h1>Results</h1>
            {resultCount && <motion.div style={{ display: "inline-flex" }}><motion.p>Recommended actions: </motion.p>{actionCount}</motion.div>}
            {getResults()}
            <SearchFooter />
        </div>
    )
}

export default Results
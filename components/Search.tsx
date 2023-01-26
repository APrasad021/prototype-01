import { duration } from "@mui/material";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Results from "./Results";



function Search() {
    const [search, setSearch] = useState('');
    const [searchMode, setSearchMode] = useState('default');
    const [showResults, setShowResults] = useState(false);
    const [resultCount, setResultCount] = useState(0);

    const onSearchButtonClick = async () => {
        if (search === 'watch a movie') {
            setSearchMode('media');
            setResultCount(10)
        } else if (search === 'learn something') {
            setSearchMode('learning');
        } else if (search === 'create something') {
            setSearchMode('creating');
        } else {
            setSearchMode('default');
        }
        setShowResults(true);
    }

    return (
        <>
        <motion.div style={{ display: "inline-flex" }}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={onSearchButtonClick}>Search</button>
            <button onClick={toggleOnline} />
        </motion.div>
            {showResults && <Results mode={searchMode} resultCount={resultCount} />}
        </>
    )
}

export default Search;
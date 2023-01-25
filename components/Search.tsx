import { useState } from "react";
import Results from "./Results";



function Search() {
    const [search, setSearch] = useState('');
    const [searchMode, setSearchMode] = useState('default');
    const [showResults, setShowResults] = useState(false);

    const onSearchButtonClick = () => {
        if (search === 'watch a movie') {
            setSearchMode('media');
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
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={onSearchButtonClick}>Search</button>
        </div>
            {showResults && <Results mode={searchMode} />}
        </>
    )
}

export default Search;
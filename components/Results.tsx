import Movies from "./results/Movies";
import ItemList from "./reuse/ItemList"

type Props = {
    mode: string;
}

function Results({ mode }: Props) {

    const getResults = () => {
        if (mode === 'media') {
            return <Movies />
        }
        return <ItemList />;
    };
    return (
        <div>
            <h1>Results</h1>
            {getResults()}
        </div>
    )
}

export default Results
import SearchBar from '../components/SearchBar';

export default function Store() {
    return (
        <>
        <div className={StyleSheet.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you&#39;ll find a variety of products from the Fake Store API.</p>
            <SearchBar/>
        </div>
        </>
    );
}
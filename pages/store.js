import SearchBar from '../src/app/components/SearchBar';
import styles from "../styles/Store.module.css"

export default function Store() {
    return (
        <>
        <div className={styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you&#39;ll find a variety of products from the Fake Store API.</p>
            <SearchBar/>
        </div>
        </>
    );
}
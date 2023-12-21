import style from '../ui/globals.css';

export default function LayoutReview({ children }) {
    return (
        <main className={style.main}>
            Este es el layout de Review!
            {children}
        </main>
    )
}
import style from '../ui/globals.css';

export default function LayoutHome({ children }) {
    return (
        <main className={style.main}>
            {children}
        </main>
    )
}
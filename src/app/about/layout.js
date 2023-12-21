import style from '../ui/globals.css';

export default function LayoutAbout({ children }) {
    return (
        <main className={style.main}>
            <p>Este es el layout de about</p>
            {children}
        </main>
    )
}
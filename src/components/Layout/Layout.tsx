import { Header } from '../Header/Header'

export function Layout({children} : {children: JSX.Element}) {
    return (
        <div className='container'>
            <Header />
            {children}
        </div>
    )
}

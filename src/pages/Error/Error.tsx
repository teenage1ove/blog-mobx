import { Link } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import './Error.scss'

export function Error() { 
    return <div className='error'>
        <h2 className='error__title'>404</h2>
        <p className='error__text'>Page not found</p>
        <Link className='error__link' to={ROUTES.HOME}>Back to main page</Link>
    </div>
}

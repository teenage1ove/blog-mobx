import { observer } from 'mobx-react-lite'
import { FaReact } from 'react-icons/fa'
import { IoLogIn } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'
import './Header.scss'

export const Header = observer(() => {
	const {
		authStore: { setLogout, isAuth },
	} = useStore()

    const navigate = useNavigate()
    const handleClickLogout = () => {
        setLogout()
        navigate(ROUTES.HOME)
    }

	return (
		<div className='header'>
			<Link to={ROUTES.HOME} className='header__title'>
				<FaReact />
				React Blog App
			</Link>
			<nav className='header__menu'>
				<Link to={ROUTES.HOME} className='header__menu-item'>
					Home
				</Link>
				<Link to={ROUTES.ADD} className='header__menu-item'>
					Add post
				</Link>
				{isAuth ? (
					<div className='header__menu-item' onClick={handleClickLogout}>
						Logout <IoLogIn />
					</div>
				) : (
					<Link to={ROUTES.AUTH} className='header__menu-item'>
						Login
						<IoLogIn />
					</Link>
				)}
			</nav>
		</div>
	)
})

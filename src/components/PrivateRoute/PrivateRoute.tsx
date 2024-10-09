import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'

export const PrivateRoute = function () {

    const { authStore: { isAuth } } = useStore()

	const navigate = useNavigate()
    const location = useLocation()
	useEffect(() => {
		if (!isAuth) {
			navigate(ROUTES.HOME)
		}
	}, [isAuth, navigate])

	if (!isAuth) {
		return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />
		// если пользователь не авторизован, то перенаправляем его на маршрут /login с помощью компонента Navigate
		// свойство replace указывает, что текущий маршрут будет заменен на новый, чтобы пользователь не мог вернуться
		// обратно, используя кнопку "назад" в браузере.
	} else {
		return <Outlet />
	}
}

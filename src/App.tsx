import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { AddArticle } from './pages/AddArticle/AddArticle'
import { Article } from './pages/Article/Article'
import { Auth } from './pages/Auth/Auth'
import { Error } from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import { ROUTES } from './router/router-paths'

export function App() {
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				{/* Приватные маршруты */}
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={`${ROUTES.ARTICLE}/:id`} element={<Article />} />
				<Route path={ROUTES.ERROR} element={<Error />} />
				<Route path={ROUTES.ADD} element={<AddArticle />} />
			</Route>
			{/* Обычные маршруты */}
			<Route path={ROUTES.AUTH} element={<Auth />} />
		</Routes>
	)
}

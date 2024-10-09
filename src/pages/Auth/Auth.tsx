import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'
import './Auth.scss'
import { InputsAuth } from '../../interfaces/react-forms-interface'



export const Auth = () => {
	const {
		authStore: { setUser, isAuth },
	} = useStore()

	useEffect(() => {
		if (isAuth) {
			navigate(ROUTES.HOME)
		}
	}, [])

	const { handleSubmit, register, formState } = useForm<InputsAuth>({
		mode: 'onChange',
	})

	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || ROUTES.HOME

	const onSubmit: SubmitHandler<InputsAuth> = data => {
		setUser(data)
		console.log(data)
		navigate(from, { replace: true })
	}

	const loginError = formState.errors['login']?.message
	const passwordError = formState.errors['password']?.message

	return (
		<div className='auth'>
			<h2 className='auth__title'>Log in</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='auth__form'>
				<input
					type='text'
					placeholder='Login'
					className='auth__input'
					{...register('login', {
						required: { value: true, message: 'Login is required' },
						minLength: {
							value: 3,
							message: 'Login must be at least 3 characters',
						},
					})}
				/>
				{loginError && <p className='auth__error'>{loginError}</p>}
				<input
					type='password'
					placeholder='Password'
					className='auth__input'
					{...register('password', {
						required: { value: true, message: 'Password is required' },
						minLength: {
							value: 3,
							message: 'Password must be at least 3 characters',
						},
					})}
				/>
				{passwordError && <p className='auth__error'>{passwordError}</p>}
				<button
					className={
						loginError || passwordError
							? 'auth__button auth__button_disabled'
							: 'auth__button'
					}
				>
					Log in
				</button>
			</form>
		</div>
	)
}

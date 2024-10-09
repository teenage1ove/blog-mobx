import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { InputsAddPost } from '../../interfaces/react-forms-interface'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'
import './AddArticle.scss'

export function AddArticle() {
	const { handleSubmit, register, formState } = useForm<InputsAddPost>({
		mode: 'onChange',
	})

	const {
		blogStore: { addPost },
	} = useStore()

	const navigate = useNavigate()
	const location = useLocation()

	const onSubmit: SubmitHandler<InputsAddPost> = data => {
		const newPost = {
			...data,
			id: Date.now().toString(),
			date: new Date().toLocaleDateString('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			}),
			likes: 0,
		}
		addPost(newPost)
		navigate(location.state?.from?.pathname || ROUTES.HOME, { replace: true })
	}

	const errorTitle = formState.errors['title']?.message
	const errorContent = formState.errors['content']?.message
	const errorAuthor = formState.errors['author']?.message

	return (
		<div className='add'>
			<h2 className='add__title'>Add post</h2>
			<form className='add__form' onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('title', {
						required: { value: true, message: 'Field is required' },
						maxLength: {
							value: 30,
							message: 'Max length is 30',
						},
					})}
					className='add__input'
					type='text'
					placeholder='Title'
				/>
				{errorTitle && <p className='add__error'>{errorTitle}</p>}
				<textarea
					{...register('content', {
						required: { value: true, message: 'Field is required' },
					})}
					className='add__textarea'
					placeholder='Content'
				/>
				{errorContent && <p className='add__error'>{errorContent}</p>}
				<input
					{...register('author', {
						required: { value: true, message: 'Field is required' },
						maxLength: {
							value: 15,
							message: 'Max length is 15',
						},
					})}
					className='add__input'
					type='text'
					placeholder='Author'
				/>
				{errorAuthor && <p className='add__error'>{errorAuthor}</p>}
				<button
					className={
						errorAuthor || errorContent || errorTitle
							? 'add__button add__button_disabled'
							: 'add__button'
					}
					type='submit'
				>
					Save
				</button>
			</form>
		</div>
	)
}

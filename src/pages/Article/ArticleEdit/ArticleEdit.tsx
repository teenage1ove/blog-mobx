import { observer } from 'mobx-react-lite'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoHeart, IoPeople } from 'react-icons/io5'
import { Post } from '../../../interfaces/posts-interface'
import { InputsEditPost } from '../../../interfaces/react-forms-interface'
import { useStore } from '../../../store/root-store-context'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../router/router-paths'

type Props = {
	post: Post
}

export const ArticleEdit = observer(({ post }: Props) => {
	const { handleSubmit, register } = useForm<InputsEditPost>({
		mode: 'onChange',
		defaultValues: {
			title: post?.title,
			content: post?.content,
			author: post?.author,
		},
	})

	const {
		blogStore: { updatePost, deletePost },
	} = useStore()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || ROUTES.HOME

	const onSubmit: SubmitHandler<InputsEditPost> = data => {
		console.log(updatePost(post, data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				className='article__title-edit'
				{...register('title')}
				maxLength={30}
			/>
			<div className='article__text'>
				<textarea {...register('content')} className='article__text-edit' />
			</div>

			<div className='article__toolbar'>
				<p className='article__author'>
					<IoPeople />
					<input
						{...register('author')}
						type='text'
						maxLength={15}
						className='article__author-edit'
					/>
				</p>
				<p className='article__date'>{post?.date}</p>
				<div className='article__likes article__likes_disabled'>
					<IoHeart /> {post?.likes}
				</div>
			</div>

			<button className='article__save' type='submit'>
				Save
			</button>
            <button className='article__delete' onClick={() => {
                deletePost(post.id)
                navigate(from, { replace: true })
            }}>
				Delete
			</button>
		</form>
	)
})

import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'
import './Article.scss'
import { ArticleEdit } from './ArticleEdit/ArticleEdit'
import { ArticleView } from './ArticleView/ArticleView'

export const Article = observer(() => {
	const { id } = useParams()
	const [isEditPage, setIsEditPage] = useState(false)
	const {
		blogStore: { getPost },
	} = useStore()

	let currentPost

	if (id) {
		currentPost = getPost(id)
	}

	return (
		<div className='article'>
			<Link className='article__link' to={ROUTES.HOME}>
				<BiArrowBack /> Back
			</Link>
			<div className='article__toggle'>
				{isEditPage ? (
					<button
						className='article__toggle-button'
						onClick={() => {
							setIsEditPage(false)
						}}
					>
						Cancel
					</button>
				) : (
					<button
						className='article__toggle-button'
						onClick={() => {
							setIsEditPage(true)
						}}
					>
						Edit
					</button>
				)}
			</div>

			{isEditPage ? (
				<ArticleEdit post={currentPost!} />
			) : (
				<ArticleView post={currentPost!} />
			)}
		</div>
	)
})

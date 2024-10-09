import { IoHeart, IoPeople } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../router/router-paths'
import { useStore } from '../../store/root-store-context'
import './Home.scss'
export const Home = () => {
	const {
		blogStore: { posts },
	} = useStore()

	return (
		<div className='articles'>
			<h1 className='articles__title'>Articles</h1>
			<div className='articles__list'>
				{posts.map(post => (
					<Link
						to={`${ROUTES.ARTICLE}/${post.id}`}
						key={post.id}
						className='articles__item'
					>
						<h2 className='articles__item-title'>{post.title}</h2>
						<p className='articles__item-text'>
							{post.content.slice(0, 70)}
							{post.content.length > 70 && '...'}
						</p>
						<p className='articles__item-author'>
							<IoPeople />
							{post.author}
						</p>
						<div className='articles__item-likes'>
							<IoHeart /> {post.likes}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

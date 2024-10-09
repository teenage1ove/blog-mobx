import { IoHeart, IoPeople } from 'react-icons/io5'
import { Post } from '../../../interfaces/posts-interface'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../store/root-store-context'

type Props = {
	post: Post 
}

export const ArticleView = observer(({ post }: Props) => {

    const {blogStore: {likePost}} = useStore()

	return (
		<div>
            <h1 className='article__title'>{post?.title}</h1>
			<div className='article__text'>{post?.content}</div>

			<div className='article__toolbar'>
				<p className='article__author'>
					<IoPeople />
					{post?.author}
				</p>
				<p className='article__date'>{post?.date}</p>
				<div className='article__likes' onClick={() => likePost(post?.id)}>
					<IoHeart /> {post?.likes}
				</div>
			</div>
		</div>
	)
})

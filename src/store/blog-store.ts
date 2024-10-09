import { makeAutoObservable } from 'mobx'
import { Post } from '../interfaces/posts-interface'
import { InputsEditPost } from '../interfaces/react-forms-interface'
class BlogStore {
	posts: Post[] = [
		{
			id: '1',
			title: 'Post 1',
			content:
				'lorem ipsum dolor sit amet consectetur adipiscing elit lore more lorem ipsum dolor sit amet consectetur adipiscing elit',
			author: 'Author 1',
			date: '10/09/2024',
			likes: 6,
		},
		{
			id: '2',
			title: 'Post 2',
			content:
				'lorem ipsum dolor sit amet consectetur adipiscing elit lore more lorem ipsum dolor sit amet consectetur adipiscing elit',
			author: 'Author 2',
			date: '10/09/2024',
			likes: 1,
		},
		{
			id: '3',
			title: 'Post 3',
			content:
				'lorem ipsum dolor sit amet consectetur adipiscing elit lore more lorem ipsum dolor sit amet consectetur adipiscing elit',
			author: 'Author 3',
			date: '10/09/2024',
			likes: 100,
		},
		{
			id: '4',
			title: 'Post 4',
			content:
				'lorem ipsum dolor sit amet consectetur adipiscing elit lore more lorem ipsum dolor sit amet consectetur adipiscing elit',
			author: 'Author 4',
			date: '10/09/2024',
			likes: 1,
		},
		{
			id: '5',
			title: 'Post 5',
			content:
				'lorem ipsum dolor sit amet consectetur adipiscing elit lore more lorem ipsum dolor sit amet consectetur adipiscing elit',
			author: 'Author 5',
			date: '10/09/2024',
			likes: 1,
		},
	]
	constructor() {
		makeAutoObservable(this)
	}

	addPost = (post: Post) => {
		this.posts.push(post)
	}

	getPost = (id: string) => {
		if (id && this.posts) {
			return this.posts.find(post => post.id === id)
		}
	}

	deletePost = (id: string) => {
		this.posts = this.posts.filter(post => post.id !== id)
	}

	likePost = (id: string) => {
		this.posts = this.posts.map(post => {
			if (post.id === id) {
				return {
					...post,
					likes: post.likes + 1,
				}
			}
			return post
		})
	}

	updatePost = (post: Post, data: InputsEditPost) => {
		const { title, content, author } = data
		this.posts = this.posts.map(postItem => {
			if (post.id === postItem.id) {
				postItem = { ...postItem, title, content, author }
			}
			return postItem
		})
	}
}

export default new BlogStore()

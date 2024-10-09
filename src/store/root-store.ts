import authStore from './auth-store'
import blogStore from './blog-store'

class RootStore {
    blogStore = blogStore
    authStore = authStore
}

export default RootStore
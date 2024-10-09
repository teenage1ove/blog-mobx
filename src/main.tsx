import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import './index.scss'
import { RootStoreContext } from './store/root-store-context.ts'
import RootStore from './store/root-store.ts'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<RootStoreContext.Provider value={new RootStore()}>
			<Layout>
				<App />
			</Layout>
		</RootStoreContext.Provider>
	</BrowserRouter>
)

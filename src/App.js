import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts'
import { publicRoutes } from '~/routes'
import Home from './pages/Home/Home'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>{<Page />}</DefaultLayout>
                                }
                            />
                        )
                    })}
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App

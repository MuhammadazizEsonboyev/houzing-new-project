import useUniqueId from '../hooks/useId'
import HomePage from '../pages/Home/index'
import PropertiesPage from '../pages/Properties/index'

const navbar = [
  {
    id: useUniqueId,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
    element: <HomePage />
  },
  {
    id: useUniqueId,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
    element: <PropertiesPage />
  }
]


export default navbar
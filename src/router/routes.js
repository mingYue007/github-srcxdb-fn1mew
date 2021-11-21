import Detail from '../view/Detail';
import Home from '../view/Home';

const list = [
  {
    path: '/home',
    name: 'home',
    components: Home,
  },
  {
    path: '/detail',
    name: 'detail',
    components: Detail,
  },
  {
    from: '/',
    to: '/home',
  },
];

export default list;

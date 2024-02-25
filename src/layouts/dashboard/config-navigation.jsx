import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: icon('ic_blog'),
  },
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'verification',
    path: '/verification',
    icon: icon('ic_user'),
  },
  {
    title: 'register',
    path: '/register',
    icon: icon('ic_user'),
  },
  {
    title: 'feedback',
    path: '/feedback',
    icon: icon('ic_cart'),
  },
  {
    title: 'employee',
    path: '/employee',
    icon: icon('ic_user'),
  }

];

export default navConfig;

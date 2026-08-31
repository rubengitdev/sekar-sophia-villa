import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('App.tsx', { id: 'home' }),
    route('about', 'App.tsx', { id: 'about' }),
    route('roomandfacility', 'App.tsx', { id: 'roomandfacility' }),
    route('gallery', 'App.tsx', { id: 'gallery' }),
    route('reserve', 'App.tsx', { id: 'reserve' }),
] satisfies RouteConfig;

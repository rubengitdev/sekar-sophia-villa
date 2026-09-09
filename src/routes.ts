import {
    type RouteConfig,
    index,
    layout,
    route,
} from '@react-router/dev/routes';

export default [
    layout('App.tsx', [
        index('routes/about.tsx', { id: 'home' }),
        route('about', 'routes/about.tsx', { id: 'about' }),
        route('roomandfacility', 'routes/roomandfacility.tsx', {
            id: 'roomandfacility',
        }),
        route('gallery', 'routes/gallery.tsx', { id: 'gallery' }),
        route('reserve', 'routes/reserve.tsx', { id: 'reserve' }),
    ]),
] satisfies RouteConfig;

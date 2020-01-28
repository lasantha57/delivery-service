

export const validateRoute = (route) => {
    const routes = route.split('-').join('');
    if (!/^[A-Z]+$/.test(routes)) {
        return 'Invalid route format. Eg: A-B-E';
    } else {
        if (routes.length === 0) {
            return 'Invalid route format. Eg: A-B-E';
        } else if (routes.length === 1) {
            return 'Destination route is required. Eg: A-B';
        }
    }
    return '';
}


export const validateRoute = (route) => {
    const routes = route.split('-').join('');
    if (!/^[A-Z]+$/.test(routes)) {
        return 'Invalid route format.';
    } else {
        if (routes.length === 0) {
            return 'Invalid route format.';
        } else if (routes.length === 1) {
            return 'Destination route is required.';
        }
    }
    return '';
}

export const validateTextInput = (input) => {
    return /^[A-Z]+$/.test(input);
}
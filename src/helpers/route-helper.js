const routes = [
    'AB1',
    'AC4',
    'AD10',
    'BE3',
    'CD4',
    'CF2',
    'DE1',
    'EB3',
    'EA2',
    'FD1',
];

export const getAvailableRoutes = () => {
    const formatted = [];
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        formatted.push({
            startLocation: route[0],
            endLocation: route[1],
            cost: route[2]
        });
    }
    return formatted;
}

export const addNewRoute = (route) => {
    routes.push(route);
}

export const getPossibleRoutes = (from, to, stops) => {
    return [{ routes: 'ABE', cost: 10, cheapest: true }, { routes: 'BCE', cost: 15, cheapest: false }];
}

export const getDeliveryCost = (route) => {
    return '15';
}
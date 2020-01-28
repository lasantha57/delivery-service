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

const routesGraph = {
    A: {
        B: 1,
        C: 4,
        D: 10,
    },
    B: {
        E: 3,
    },
    C: {
        D: 4,
        F: 2,
    },
    D: {
        E: 1,
    },
    E: {
        B: 3,
        A: 2,
    },
    F: {
        D: 1,
    }
}

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
    let cost = 0;
    route = route.split('-');

    for (let i = 1; i < route.length; i++) {
        const start = route[i - 1];
        const end = route[i];

        const routeCost = routesGraph[start][end]

        if (!routeCost) {
            return NaN;
        }

        cost += routeCost;
    }

    return cost;
}
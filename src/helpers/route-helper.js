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
        B: 1, C: 4, D: 10
    },
    B: {
        E: 3
    },
    C: {
        D: 4, F: 2
    },
    D: {
        E: 1,
    },
    E: {
        B: 3, A: 2
    },
    F: {
        D: 1
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

export const getPossibleRoutes = (from, end) => {

    const paths = calculatePossiblePaths(from, end, '').split(',');

    if (paths.length === 0) {
        return [];
    }

    const mappedPaths = [];

    for (let i = 0; i < paths.length; i++) {
        const pathWithCost = paths[i].split('=');
        mappedPaths.push({
            routes: pathWithCost[0],
            cost: parseInt(pathWithCost[1])
        });
    }

    return mappedPaths;
}

function calculatePossiblePaths(from, end, visited, count = 0) {
    const edges = routesGraph[from];

    if (from === end) {
        return visited + end + '=' + count;
    }

    if (visited.indexOf(visited[visited.length - 1] + from) >= 0) {
        return '';
    }

    visited += from;

    let routePaths = [];
    for (const edge in edges) {
        if (edges[edge] === 0) {
            return '';
        }
        const route = calculatePossiblePaths(edge, end, visited, (count + edges[edge]));
        if (route) {
            routePaths.push(route);
        }
    }

    return routePaths.join(',');
}

export const getDeliveryCost = (route) => {
    let cost = 0;
    route = route.split('-');

    for (let i = 1; i < route.length; i++) {
        const start = route[i - 1];
        const end = route[i];

        const node = routesGraph[start];

        if (node) {
            const routeCost = node[end];
            if (!routeCost) {
                return NaN;
            }
            cost += routeCost;
        } else {
            return NaN;
        }
    }

    return cost;
}
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
        E: 1
    },
    E: {
        A: 2, B: 3
    },
    F: {
        D: 1
    }
}

export const getAvailableRoutes = () => {
    const formatted = [];

    for (const startNode in routesGraph) {
        const element = routesGraph[startNode];
        for (const endNode in element) {
            formatted.push({
                startLocation: startNode,
                endLocation: endNode,
                cost: element[endNode]
            });
        }
    }
    return formatted;


}

export const addNewRoute = (startLocation, endLocation, cost) => {
    routesGraph[startLocation][endLocation] = cost;
}

export const getPossibleRoutes = (from, end, stops) => {

    const paths = calculatePossiblePaths(from, end, '').split(',');
    const stoppers = ((parseInt(stops)) || 10) + 2;

    if (paths.length === 0) {
        return [];
    }

    const mappedPaths = [];

    for (let i = 0; i < paths.length; i++) {
        const pathWithCost = paths[i].split('=');
        const route = pathWithCost[0];
        if (route.length <= stoppers) {
            mappedPaths.push({
                routes: route,
                cost: parseInt(pathWithCost[1])
            });
        }
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
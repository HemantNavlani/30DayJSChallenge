class Graph{
    constructor (){
        this.adj = []
    }
    addVertex(vertex){
        if (!this.adj[vertex]){
            this.adj[vertex] = []
        }
    }
    addEdge(u,v){
        if (this.adj[u] && this.adj[v]){
            this.adj[u].push(v);
            this.adj[v].push(u);
        }
    }
    bfs(start){
        const q = [start];
        const res = []
        const visited = {}
        visited[start] = true

        while(q.length){
            const curVertex = q.shift()
            res.push(curVertex)

            this.adj[curVertex].forEach(neighbour => {
                if (!visited[neighbour]){
                    visited[neighbour] = true;
                    q.push(neighbour)
                }
            });
        }
        return res;
    }

    findShortestPath(start,end){
        const q = [[start]]
        const visited = new Set();
        visited.add(start)
        while(q.length>0){
            const path = q.shift()
            const vertex = path[path.length-1]
            if (vertex==end) return path
            
            for (const neighbour of this.adj[vertex]) {
                if (!visited.has(neighbour)){
                    visited.add(neighbour)
                    const newPath = [...path,neighbour]
                    q.push(newPath)
                }
            }
        }
        return null
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log("BFS starting from vertex A:");
console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

console.log(graph.findShortestPath('A','F'));
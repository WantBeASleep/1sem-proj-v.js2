import graph from './wayGraph.js';

function wayFounding(startInput, endInput) {
    let wayStr = [];
    let wayCount = 9999;
    
    let localWayStr = [];
    let localWayCount = -1;
    
    function recursionSearch(start, end){
        graph.vertexes[start] = false;
        localWayCount++;
        localWayStr.push(start);
        if (start == end) {
            if (localWayCount < wayCount) {
                wayCount = localWayCount;
                wayStr = localWayStr.slice();
            } 
        }
        for (let i = 0; i < graph.nodes.length; i++){
            if (graph.nodes[i].s == start){
                if (graph.vertexes[graph.nodes[i].e]){
                    recursionSearch(graph.nodes[i].e, end);
                    localWayCount--;
                    localWayStr.pop();
                    graph.vertexes[graph.nodes[i].e] = true;
                }
            }
        }
    }
    
    recursionSearch(startInput, endInput);

    const obj = {
        count : wayCount,
        string : wayStr
    };

    return obj;
}

export default wayFounding;

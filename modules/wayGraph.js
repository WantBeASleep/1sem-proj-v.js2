// s - start, e - end, b - been
const graph = {
    nodes : [
        {s : "G2", e : "G1"},
        {s : "G2", e : "G3"},
        {s : "G2", e : "G4"},
        {s : "G2", e : "A2"},
        {s : "G2", e : "B2"},
        {s : "G1", e : "G2"},
        {s : "G3", e : "G2"},
        {s : "G4", e : "G2"},
        {s : "B2", e : "G2"},
        {s : "B2", e : "A2"},
        {s : "B2", e : "B3"},
        {s : "B3", e : "B2"},
        {s : "A2", e : "G2"},
        {s : "A2", e : "B2"},
        {s : "A2", e : "W2"},
        {s : "W2", e : "A2"},
        {s : "W2", e : "W1"},
        {s : "W2", e : "W3"},
        {s : "W2", e : "W4"},
        {s : "W1", e : "W2"},
        {s : "W3", e : "W2"},
        {s : "W4", e : "W2"}
    ],
    vertexes : {
        G1 : true,
        G2 : true,
        G3 : true,
        G4 : true,
        B2 : true,
        B3 : true,
        A2 : true,
        W1 : true,
        W2 : true,
        W3 : true,
        W4 : true
    }
}

export default graph;
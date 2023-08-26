type TreeNode = {
    value: string;
};

type LeafNode = TreeNode & {
    isLeaf: true;
};

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode];
};

// la & es la intersección de tipos en este caso TreeNode & { isLeaf: true; }
// children es un array de 1 o 2 elementos

/* Ejemplos  */
let a: TreeNode = { value: "a" };

let b: LeafNode = { value: "b", isLeaf: true };

let c: InnerNode = { value: "c", children: [b] };

export let a1 = mapNode(a, (_) => _.toUpperCase());
export let b1 = mapNode(b, (_) => _.toUpperCase());
export let c1 = mapNode(c, (_) => _.toUpperCase());

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
    return {
        ...node,
        value: f(node.value),
    };
}

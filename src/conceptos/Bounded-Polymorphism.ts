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
/*--------------------------- con multiples limitaciones ---------------------------*/

type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

export function logPerimeter<Share extends HasSides & SidesHaveLength>(
    s: Share
): Share {
    console.log(s.numberOfSides * s.sideLength);
    return s;
}

type Square = HasSides & SidesHaveLength;
let square: Square = { numberOfSides: 4, sideLength: 3 };
logPerimeter(square); // 12
console.log(logPerimeter(square)); // { numberOfSides: 4, sideLength: 3 }

/*--------------------------- Para modelar la arity  ---------------------------*/
function call<T extends unknown[], R>(f: (...args: T[]) => R, ...args: T[]): R {
    return f(...args);
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
}

call(fill, 10, "a"); // returns an array of 10 'a's // ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
call(fill, 10, 1); // error TS2345: Argument of type '1' is not assignable to parameter of type 'string'.
call(fill, 10); // error TS2554: Expected 2 arguments, but got 1.

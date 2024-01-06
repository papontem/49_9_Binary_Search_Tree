class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		// console.log("INSERTING :", val, " > into > ", this);
		const newNode = new Node(val);

		// if the tree is empty, set the new node as the root
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		const stack = [this.root];

		while (stack.length > 0) {
			const current = stack.pop();

			if (val === current.val) {
				// handle the case where the value is already in the tree

				return this;
			}

			if (val > current.val) {
				// if the value is greater than the current node's value, go right
				if (!current.right) {
					// if there's no right child, insert the new node here
					current.right = newNode;

					return this;
				}
				// push the right child onto the stack
				stack.push(current.right);
			} else {
				// if the value is less than the current node's value, go left
				if (!current.left) {
					// if there's no left child, insert the new node here
					current.left = newNode;

					return this;
				}
				// push the left child onto the stack
				stack.push(current.left);
			}
		}
	}

	/** insertrecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */
	insertrecursively(val) {
		const insertNode = (node, val) => {
			if (!node) {
				return new Node(val);
			}

			if (val === node.val) {
				// handle the case where the value already exists
				return node;
			}

			if (val > node.val) {
				node.right = insertNode(node.right, val);
			} else {
				node.left = insertNode(node.left, val);
			}

			return node;
		};

		this.root = insertNode(this.root, val);
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;

		while (current) {
			if (val === current.val) {
				// nodee with the desired value found
				return current;
			} else if (val > current.val) {
				// If the value is greater than the current node's value, go right
				current = current.right;
			} else {
				// If the value is less than the current node's value, go left
				current = current.left;
			}
		}

		// If the loop exits, the value was not found in the tree
		return undefined;
	}

	/** findrecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findrecursively(val) {
		const findNode = (node, val) => {
			if (!node) {
				return undefined; // value not found in the current subtree
			}

			if (val === node.val) {
				return node; // nodee with the desired value found
			} else if (val < node.val) {
				return findNode(node.left, val); // Search in the left subtree
			} else {
				return findNode(node.right, val); // Search in the right subtree
			}
		};

		return findNode(this.root, val);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		const visitedNodes = [];

		const traverse = (node) => {
			if (node) {
				// visit the current node
				visitedNodes.push(node.val);
				// recursively traverse the left subtree
				traverse(node.left);
				// recursively traverse the right subtree
				traverse(node.right);
			}
		};

		traverse(this.root);
		return visitedNodes;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {
		const visitedNodes = [];
	
		const traverse = (node) => {
		  if (node) {
			// recursively traverse the left subtree
			traverse(node.left);
			// visit the current node
			visitedNodes.push(node.val);
			// recursively traverse the right subtree
			traverse(node.right);
		  }
		};
	
		traverse(this.root);
		return visitedNodes;
	  }

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		const visitedNodes = [];
	
		const traverse = (node) => {
		  if (node) {
			// recursively traverse the left subtree
			traverse(node.left);
			// recursively traverse the right subtree
			traverse(node.right);
			// visit the current node
			visitedNodes.push(node.val);
		  }
		};
	
		traverse(this.root);
		return visitedNodes;
	  }

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		const visitedNodes = [];
		const queue = [this.root];
	
		while (queue.length > 0) {
		  const current = queue.shift();
		  if (current) {
			// visit the current node
			visitedNodes.push(current.val);
			// queue the left and right children for iteration
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		  }
		}
	
		return visitedNodes;
	  }

	// /** Further Study!
	//  * remove(val): Removes a node in the BST with the value val.
	//  * Returns the removed node. */

	// remove(val) {}

	// /** Further Study!
	//  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	// isBalanced() {}

	// /** Further Study!
	//  * findSecondHighest(): Find the second highest value in the BST, if it exists.
	//  * Otherwise return undefined. */

	// findSecondHighest() {}
}

module.exports = BinarySearchTree;

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertrecursively(15);
// binarySearchTree.root.value // 15
// binarySearchTree.root.left // null
// binarySearchTree.root.right // null

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insertrecursively(15);
// binarySearchTree.insertrecursively(20);
// binarySearchTree.insertrecursively(10);
// binarySearchTree.insertrecursively(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertrecursively(15)
// binarySearchTree.insertrecursively(20)
// binarySearchTree.insertrecursively(10)
// binarySearchTree.insertrecursively(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findIteratively(20);
// foundNode.value // 20
// foundNode.left // null
// foundNode.right // null

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findIteratively(120);
// foundNode // undefined

/**
 *  Implementation Binary Search Tree in JavaScript using a recursive process.

 *
 */
function Node( val ) {

     this.val = val;

     this.left = null;

     this.right = null;
}

Node.prototype.insert = function( node ) {

 if(node)

    if(node.val < this.val) {

       if( this.left ) {

          this.insert(this.left)
 
       } else {

          this.left = node;

       } 
 
    } else {

       if(this.right) {

          this.insert(this.right)
 
       } else {

          this.right = node;

       } 

    }
}

Node.prototype.inorder = function() {

     if(this.left != null) {
        this.left.inorder();
     }

     console.log(this.val);

     if(this.right != null) {
        this.right.inorder();
     }    
}

Node.prototype.preorder = function() {

     console.log(this.val);

     if(this.left != null) {
        this.left.preorder();
     }

     if(this.right != null) {
        this.right.preorder();
     }    
}

Node.prototype.postorder = function() {

     if(this.left != null) {
        this.left.postorder();
     }

     if(this.right != null) {
        this.right.postorder();
     }

     console.log(this.val);    
}


function BinarySearchTree( ob ) {

     if(ob instanceof Node) {

           this.root = ob; 

     }else {

           this.root = new Node( ob )
     }
}

BinarySearchTree.prototype.insert = function( val ) {

      if(val instanceof Node) {

        this.root.insert( val );

      } else {

        this.root.insert( new Node( val ) )
     }
}

BinarySearchTree.prototype.inorder = function() {

     this.root.inorder(); 
}

BinarySearchTree.prototype.preorder = function() {

     this.root.preorder(); 
}

BinarySearchTree.prototype.postorder = function() {

     this.root.postorder(); 
}

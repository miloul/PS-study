/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* reverseOddLevels(TreeNode* root) {
        // bfs..
        int level = 0;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int size = q.size();
            vector<TreeNode*> nodes;

            for (int i=0; i<size; i++){
                TreeNode* cur = q.front();
                q.pop();

                // 현재껄 다 넣어두고
                nodes.push_back(cur);

                if (cur->left) q.push(cur->left);
                if (cur->right) q.push(cur->right);
            }

            if (level % 2 != 0){ // 홀수면
                // reverse
                int left = 0;
                int right = nodes.size() - 1;

                while (left < right) {
                    swap(nodes[left]->val, nodes[right]->val);
                    left++;
                    right--;
                }
            }
            
            level++;
        }

        return root;
    }
};
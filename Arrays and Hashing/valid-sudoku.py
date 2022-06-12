class Solution:
    def isValidSudoku(self, board):
        hash_set = set()
        for r in range(9):
            for c in range(9):
                element = board[r][c]
                if element == '.':
                    continue
                current_size = len(hash_set)
                hash_set.add('add ' + element + 'to row ' + str(r))
                hash_set.add('add ' + element + 'to col ' + str(c))
                hash_set.add('add ' + element + 'to box ' +
                             str(r//3) + str(c//3))
                if current_size + 3 != len(hash_set):
                    return False
        return True

import sys
from collections import deque
n=int(sys.stdin.readline().strip())
d1=deque(list(i for i in range(1, n+1)))

while len(d1)>1:
    d1.popleft()
    d1.append(d1.popleft())

print(d1[0])
import sys
from collections import deque
n=int(sys.stdin.readline().strip())
l1=deque([])

for _ in range(n):
    line=list(sys.stdin.readline().strip().split())
    cmd=line[0] 
    if len(line)==2:
        num=line[1]

    if cmd=='push_front':
        l1.appendleft(num)
    elif cmd=='push_back':
        l1.append(num)
    elif cmd=='pop_front':
        if len(l1)==0:
            print(-1)
        else:
            k=l1.popleft()
            print(k)
    elif cmd=='pop_back':
        if len(l1)==0:
            print(-1)
        else:
            k=l1.pop()
            print(k)
    elif cmd=='front':
        if len(l1)==0:
            print(-1)
        else:
            print(l1[0])
    elif cmd=='back':
        if len(l1)==0:
            print(-1)
        else:
            print(l1[-1])
    elif cmd=='size':
        print(len(l1))
    else:
        if len(l1)==0:
            print(1)
        else:
            print(0)

from collections import deque
import sys
n = int(sys.stdin.readline().strip())
for _ in range(n):
    k, m = map(int, sys.stdin.readline().split())
    l1=deque(list(map(int, sys.stdin.readline().strip().split())))

    if k==1 and m==0:
        print(1)
    else:
        cnt=0
        while True:
            first=max(l1)
            now=l1.popleft()
            m-=1
            #print(m)
            #print(first, l1)
            if now==first:
                cnt+=1
                if m<0:
                    break
                #print("pop", l1)
            else:
                l1.append(now)
                if m<0:
                    m+=len(l1)
                    #print(len(l1))
                #print("pop and append", l1)
        print(cnt)
import sys
n=int(sys.stdin.readline().strip())
l1=[]

for _ in range(n):
    line=list(sys.stdin.readline().strip().split())
    cmd=line[0] 
    if len(line)==2:
        num=line[1]
    if cmd=='push':
        l1.append(num)
    elif cmd=='pop':
        if len(l1)==0:
            print(-1)
        else:
            k=l1.pop()
            print(k)
    elif cmd=='top':
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

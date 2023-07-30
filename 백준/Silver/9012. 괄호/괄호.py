import sys
n=int(sys.stdin.readline().strip())
for _ in range(n):
    a=list(sys.stdin.readline().strip())
    j=0
    for i in a:
        check=0
        if i=='(':
            for m in range(j+1,len(a)):
                if a[m]==')':
                    a.remove(a[m])
                    check=1
                    break
        if i==')':
            check=0
        if check==0:
            break
        j+=1
    if check==0:
        print("NO")
    else:
        print("YES")
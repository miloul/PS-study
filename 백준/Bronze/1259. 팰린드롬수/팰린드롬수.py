while True:
    a=int(input())
    if a==0:
        break
    l1=list(str(a))
    m=len(l1)//2
    r="yes"
    for i in range(m):
        if l1[i]!=l1[len(l1)-i-1]:
            r="no"
            break
    print(r)
import sys 
n=int(sys.stdin.readline())

s = []

for i in range(n):
    tmp=sys.stdin.readline().split()
    if len(tmp)==1:
        if tmp[0]=="all":
            s=list(str(i) for i in range(1,21))
        else:
            s=[]
    else:
        e, num =tmp[0],tmp[1]
        check=num in s
        if (e=="check"):
            print(1 if check else 0)
        elif (e=="add" and check==False):
            s.append(num)
        elif (e=="remove" and check):
            s.remove(num)
        elif (e=="toggle"):
            if (check):
                s.remove(num)
            else:
                s.append(num)


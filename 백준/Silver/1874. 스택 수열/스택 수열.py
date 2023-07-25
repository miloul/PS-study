n=int(input())
l1=list(int(input()) for _ in range(n)) #입력받기
a=len(l1)
stack=[]
result=[]
cnt,no=0,0

for i in range(a):
    for j in range(cnt+1, l1[i]+1):
        stack.append(j)
        result.append("+")
        cnt+=1
    if cnt>=l1[i]:
        if l1[i]==stack[-1]:
            stack.pop()
            result.append("-")
        else:
            no=1

if no==1:
    print("NO")
else:
    for i in result:
        print(i)
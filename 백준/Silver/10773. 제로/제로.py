n=int(input())
l1=[]
result=0
for _ in range(n):
    a=int(input())
    if a==0:
        l1.pop()
    else:
        l1.append(a)
for i in l1:
    result+=i
print(result)
n=int(input())
l1=[]
for i in range(n):
    a=input()
    if a not in l1:
        l1.append(a)
l1.sort()
l1.sort(key=len)
for i in l1:
    print(i)
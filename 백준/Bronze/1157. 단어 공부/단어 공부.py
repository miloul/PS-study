a=list(input().upper())
b=[]
c=list(set(a))
# print(c)
for i in c:
    temp=a.count(i)
    b.append(temp)
# print(b)
max=max(b)
if b.count(max)>1:
    print("?")
else:
    maxidx=b.index(max)
    print(c[maxidx])
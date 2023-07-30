n=int(input())
l1=[0,-1,-1,1,-1,1]
k=100000000
for i in range(6,n+1):
    tmp,tmp2=i-3,i-5
    m=0
    if l1[tmp]!=-1:
        k=l1[tmp]+1
    if l1[tmp2]!=-1:
        k=min(k,l1[tmp2]+1)
    elif l1[tmp]==-1 and l1[tmp2]==-1:
        m=1
    
    if m==0: #리스트에 추가
        l1.append(k)
    else:
        l1.append(-1)
print(l1[n])
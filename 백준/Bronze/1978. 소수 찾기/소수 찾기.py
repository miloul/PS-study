a=int(input())
b=list(input().split())
p_list=[]
for i in b:
    k=int(i)
    prime=1
    for j in range(2, k, 1):
        if k%j==0:
            prime=0
            break
        else:
            prime=1
    if prime==1 and k !=1:
        p_list.append(k)
print(len(p_list))
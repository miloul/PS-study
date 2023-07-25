import math as m
n=int(input())
result=m.factorial(n)
cnt=0
while True:
    tmp=str(result)
    if tmp[len(tmp)-1]=='0':
        cnt+=1
    else:
        break
    result=result//10
print(cnt)
n=int(input())
result=0
for i in range(1, n+1):
    sum1=sum(map(int, str(i)))
    if sum1+i==n:
        result=i
        break
print(result)
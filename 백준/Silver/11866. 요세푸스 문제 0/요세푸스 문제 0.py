import sys
n, k = map(int, sys.stdin.readline().split())
l1 = []
for i in range(1, n+1):
    l1.append(i)

result = []
tmp=k-1
while True:
    result.append(l1.pop(tmp))
    if len(l1)==0:
        break
    tmp+=k-1
    if tmp>=len(l1):
        tmp%=len(l1)

print("<", end='')
for i in range(n):
    if i==n-1:
        print(result[i], end='')
    else:
        print(str(result[i])+",", end=' ')
print(">", end='')
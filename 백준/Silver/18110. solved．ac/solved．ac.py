import sys
n=int(sys.stdin.readline().strip())
ar=round(n*0.15+0.0000001)
l1=[]
result=0
for _ in range(n):
    l1.append(int(sys.stdin.readline().strip()))
l1.sort()
l1=l1[ar:len(l1)-ar:] #리스트자르기
for i in l1:
    result+=i
if n==0:
    print(0)
else:
    print(round(result/len(l1)+0.0000001))
import sys
n=int(sys.stdin.readline().strip()) #안하면시간초과남
ar=round(n*0.15+0.0000001)
l1=[]
result=0
for _ in range(n):
    l1.append(int(sys.stdin.readline().strip()))
l1.sort()
l1=l1[ar:len(l1)-ar:] #리스트자르기
result=sum(l1)
if n==0: #n이 0일때 처리
    print(0)
else:
    print(round(result/len(l1)+0.0000001))
a=int(input())
b=list(map(int, input().split()))
max=max(b)
score=[]
r=0
for i in range(len(b)):
    r+=b[i]/max*100
print(r/a)
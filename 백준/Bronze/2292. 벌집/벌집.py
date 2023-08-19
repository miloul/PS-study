import sys
n=int(sys.stdin.readline().strip())
tmp=1
cnt=1
while True:
    if tmp>=n:
        break
    tmp+=6*cnt
    cnt+=1
print(cnt)
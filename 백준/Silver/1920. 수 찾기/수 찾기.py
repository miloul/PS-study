import sys

def bsearch(l1, num, left, right) :
    mid = (left+right)//2
    if left>right or mid >= len(l1):
        return 0
    if l1[mid]>num:
        r = bsearch(l1, num, left, mid-1)
    elif l1[mid]<num:
        r = bsearch(l1, num, mid+1, right)
    else:
        return 1
    return r


n = sys.stdin.readline().strip()
l1=list(map(int, sys.stdin.readline().strip().split()))
m = sys.stdin.readline().strip()
l2=list(map(int, sys.stdin.readline().strip().split()))

result = []
l1.sort()
for num in l2:
    check=0
    print(bsearch(l1, num, 0, len(l1)))
    result.append(check)

#for r in result:
 #   print(r)
s=int(input())
s1=list(map(int,input().split(' ')))

def isd(num):
    l1= [num]
    for i in range(1,s):
        if num-i<0 or num+i>=s:
            break
        if s1[num - i] == s1[num + i]:
            l1.append(num - i)
            l1.append(num + i)
        else: break
    return l1

def changelight(sex, num):
    if sex==1:
        for j in range(num-1, s, num):
            if s1[j]==0:
                s1[j]=1
            else:
                s1[j]=0
    else:
        l1 = isd(num-1)
        for l in l1:
            if s1[l]==0:
                s1[l]=1
            else:
                s1[l]=0


n=int(input())
for i in range(n):
    sex, num=map(int, input().split(' '))
    changelight(sex, num)

for i in range(s):
    print(s1[i], end=' ')
    if ((i+1)%20==0 and i+1>=20):
        print()

n,m=map(int, input().split())
l1=[]
for i in range(n):
    l1.append(input())

#체스판은 흰색으로 시작하거나 검은색으로 시작함
w=[ 
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW']

b=[
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB']

def check(i,j):
    wcnt=0
    bcnt=0
    for k in range(8):
        for l in range(8):
            if l1[i+k][j+l]!=w[k][l]:
                wcnt+=1 #흰색시작보드랑 비교해서 다시 칠하기
            if l1[i+k][j+l]!=b[k][l]:
                bcnt+=1 #검은색시작보드랑 비교해서 다시 칠하기
    return min(wcnt, bcnt)

result=100000000
for i in range(n-7):
    for j in range(m-7): # 8 * 8로 자르기
        result=min(result,check(i,j))

print(result)
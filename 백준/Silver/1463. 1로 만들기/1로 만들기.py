a = int(input())

dp=[0,0,1,1,2]
for i in range(5, a+1):
    a3,a2,a1=10000,10000,dp[i-1]
    if i%3==0:
        a3=dp[i//3]
    if i%2==0:
        a2=dp[i//2]
    dp.append(1+min(a3, a2, a1))

print(dp[a])
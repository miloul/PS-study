while True:
    a,b,c=map(int, input().split())
    max1=max(a,b,c)
    if max1==0:
        break

    if a==max1:
        n3=max1**2
        n1=b**2+c**2
    elif b==max1:
        n3=max1**2
        n1=a**2+c**2
    else:
        n3=max1**2
        n1=a**2+b**2

    if n3==n1:
        print("right")
    else:
        print("wrong")
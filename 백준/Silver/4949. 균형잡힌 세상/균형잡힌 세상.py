while True:
    check=0
    n=list(input())
    if n==['.']: #if n[0]=='.': #온점 하나면 종료
        break
    stack=[]
    for i in n:
        if i=="(" or i=='[': #stack 리스트에 여는 괄호 넣기
            stack.append(i)
        elif i==")" or i=="]":
            if len(stack)==0: #닫는 괄호인데 stack 빈 경우도 처리!! ex.(()))
                check=1
                break
            elif i==")" and stack[-1]=="(": #닫는 괄호면 pop
                stack.pop()
            elif i=="]" and stack[-1]=="[":
                stack.pop()
            else: #닫는 괄호인데 스택에서 pop 못할 경우
                check=1
                break
    if len(stack)==0 and check==0:
        print("yes")
    else:
        print("no")
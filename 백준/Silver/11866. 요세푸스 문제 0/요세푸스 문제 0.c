#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
typedef struct list* listPointer;
typedef struct list {
	int data;
	listPointer link;
} listNode;

insert(listPointer* list, listPointer next, int n);
int delete(listPointer* list, listPointer taril, listPointer deletenode);

int main()
{
	int n, k; listPointer a, next, first; int node;
	int i = 1;
	scanf("%d %d", &n, &k);
	a = (listPointer)malloc(sizeof(listNode));
	a->link = NULL; a->data = 1;
	next = a;

	if (n < k)
		exit(1);
	for (int i = 2; i <= n; i++)
	{
		insert(&a, next, i);
		next = next->link;
	}
	listPointer temp;
	next->link = a;

	printf("<");
	first = a;
	while (i<=n)
	{
		for (int j = 1; j < k - 1; j++)
		{
			first = first->link;
		}
		if (k==1)
			node = delete(&a, NULL, a);
		else
		{
			node = delete(&a, first, first->link);
			first = first->link;
		}

		printf("%d", node);
		if (i!=n)
			printf(", ");
		else
		{
			printf(">");
		}
		i++;
	
	}

	return 0;
}

insert(listPointer* list, listPointer next, int n)
{
	listPointer temp;
	temp = (listPointer)malloc(sizeof(listNode));
	temp->data = n;
	temp->link = NULL;
	if (*list)
	{
		temp->link = next->link;
		next->link = temp;
	}
	else
	{
		*list = temp;
	}
}

int delete(listPointer* list, listPointer before, listPointer deletenode)
{
	listPointer temp; int n;
	temp = (listPointer)malloc(sizeof(listNode));
	if (before == NULL)
	{
		*list = (*list)->link;
	}
	else
	{
		before->link = deletenode->link;
	}
	n = deletenode->data;
	free(deletenode);
	return n;
}
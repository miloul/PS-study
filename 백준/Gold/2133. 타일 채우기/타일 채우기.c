#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int t[31];

int tile(int n) {
	int result = 0;
	if (n == 0)
		return 1;
	if (n == 1)
		return 0;
	if (n == 2)
		return 3;
	else if (t[n] != 0)
		return t[n];
	result = (3 * tile(n - 2));
	for (int i = 3; i <= n; i++) {
		if (i % 2 == 0)
			result += 2*tile(n - i);
	}
	return t[n] = result;
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%d", tile(n));
	return 0;
}
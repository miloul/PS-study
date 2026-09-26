#include <string>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

int solution(vector<int> diffs, vector<int> times, long long limit) {
    int left = 1;
    
    int max = *max_element(diffs.begin(), diffs.end());
    int right = max;
    while (left < right) {
        int mid = (left + right) / 2;
        long long limits = limit;
        
        for (int i=0; i<diffs.size(); i++) {
            if (diffs[i]<= mid) limits-=times[i];
            else {
                limits -= times[i];
                if (i>0) {
                    limits -= abs(diffs[i] - mid) * (times[i-1] + times[i]);
                } else {
                    limits -= abs(diffs[i] - mid) * times[i];
                }
            }
            if (limits < 0) break;
        }
        if (limits < 0) left = mid + 1;
        else right = mid;
    }
   
    return left;
}
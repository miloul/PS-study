#include <string>
#include <vector>

using namespace std;

int solution(vector<int> bandage, int health, vector<vector<int>> attacks) {
    int answer = health;
    int before = 0;
    for (int i=0; i<attacks.size();i++) {
        int amount = attacks[i][0] - before - 1;
        answer += amount * bandage[1];
        answer += (amount / bandage[0]) * bandage[2];
        
        if (answer > health) answer = health;
        
        answer -= attacks[i][1];
        if (answer <= 0) return -1;
        before = attacks[i][0];
    }
    return answer;
}
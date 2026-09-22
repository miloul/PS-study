#include <string>
#include <vector>

using namespace std;

string solution(string video_len, string pos, string op_start, string op_end, vector<string> commands) {
    
    // 문자열 "MM:SS"를 초로 변환
    auto toSecond = [](string time) {
        int m = stoi(time.substr(0, 2));
        int s = stoi(time.substr(3, 2));
        return m * 60 + s;
    };

    int videoEnd = toSecond(video_len);
    int current = toSecond(pos);
    int openStart = toSecond(op_start);
    int openEnd = toSecond(op_end);
    
    // 오프닝 구간이면 오프닝 끝으로 이동
    if (openStart <= current && current <= openEnd)
        current = openEnd;

    for (string command : commands) {

        // 명령 수행
        if (command == "next")
            current += 10;
        else
            current -= 10;

        // 0초보다 작아지면 0초로
        if (current < 0)
            current = 0;

        // 영상 길이보다 커지면 영상 끝으로
        if (current > videoEnd)
            current = videoEnd;
        
        // 오프닝 구간이면 오프닝 끝으로 이동
        if (openStart <= current && current <= openEnd)
            current = openEnd;
    }

    // 초 → MM:SS
    int m = current / 60;
    int s = current % 60;

    string answer = "";

    if (m < 10)
        answer += "0";

    answer += to_string(m);
    answer += ":";

    if (s < 10)
        answer += "0";

    answer += to_string(s);

    return answer;
}

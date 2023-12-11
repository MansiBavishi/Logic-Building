// convert Rs to Ps and vise Versa

#include <iostream>
using namespace std;

int main()
{
    string cur;
    float n;
    cout << "In which Do you want to convert? (Rs/Ps)";
    cin >> cur;
    cout << endl;
    cout << "Enter Amoutn : ";
    cin >> n;
    if (cur == "Rs")
    {
        cout << n * 100;
    }
    else
    {
        cout << n / 100;
    }
}
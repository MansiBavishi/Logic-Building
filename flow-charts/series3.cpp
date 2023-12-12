// series 1 232 34543 4567654

#include <iostream>
using namespace std;

int main()
{
    int n, i, j, num = 1;
    cout << "Enter N : ";
    cin >> n;
    cout << endl;
    for (j = 1; j <= n; j++)
    {
        num = j;
        for (i = 1; i <= j; i++)
        {
            cout << num;
            num++;
        }
        num--;
        num--;
        for (i = 1; i < j; i++)
        {
            cout << num;
            num--;
        }
        cout << endl;
    }
    return 0;
}
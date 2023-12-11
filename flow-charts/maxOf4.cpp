// find max of four number

#include <iostream>
using namespace std;

int main()
{
    int a, b, c, d;
    cout << "Enter a : ";
    cin >> a;
    cout << endl;
    cout << "Enter b : ";
    cin >> b;
    cout << endl;
    cout << "Enter c : ";
    cin >> c;
    cout << endl;
    cout << "Enter d : ";
    cin >> d;
    cout << endl;
    if (a >= b)
    {
        if (a >= c)
        {
            if (a >= d)
            {
                cout << "max is " << a;
            }
        }
    }
    else if (b >= c)
    {
        if (b >= d)
        {
            cout << "Max is " << b;
        }
    }
    else
    {
        cout << "max is " << d;
    }
}
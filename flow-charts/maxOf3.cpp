// find max of three number

#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cout << "Enter a : ";
    cin >> a;
    cout << endl;
    cout << "Enter b : ";
    cin >> b;
    cout << endl;
    cout << "Enter c : ";
    cin >> c;
    cout << endl;
    if (a >= b)
    {
        cout << "max is " << a;
    }
    else
    {
        cout << "max is " << b;
    }
}
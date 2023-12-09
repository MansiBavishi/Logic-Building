// Q2. print "Adult" if age is greater than 21 else "Not Adult"

#include <iostream>
using namespace std;

int main()
{
    int age;
    cout << "Enter Your Age : ";
    cin >> age;
    if (age >= 21)
    {
        cout << "Adult";
    }
    else
    {
        cout << "Not Adult";
    }
}
// Q6. Area and Perimeter of Rectangle

#include <iostream>
using namespace std;

int main()
{
    int l, b, area, perimeter;
    cout << "Enter l : ";
    cin >> l;
    cout << endl;
    cout << "Enter b : ";
    cin >> b;
    cout << endl;
    area = l * b;
    perimeter = 2 * (l + b);
    cout << "Area of the rectangle is " << area << endl;
    cout << "Perimeter of the rectangle is " << perimeter << endl;
}
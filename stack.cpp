#include <iostream>
#include <vector>
#include <list>
#include <stack>
#include <string>

using namespace std;


// using vector...

// class Stack {
//     vector<int> v;
// public:

//     void push(int val) { // O(1)
//             v.push_back(val);
//     }

//     void pop () {   // O(1)
//             v.pop_back();
//     }

//     int top () {    // O(1)
//     return v[v.size()-1];
//     }

//     bool empty() {
//         return v.size () == 0;
//     }

// };

// int main() {
//     Stack s;

//     s.push(10);
//     s.push(20);
//     s.push(30);
//    while (!s.empty()) {
//     cout << s.top() << " ";
//     s.pop();
//    }
//    cout << endl;
//    return 0;
// }


// using linkedlist....

// class Stack {
//     list<int> ll;
// public:

//     void push(int val) { // O(1)
//         ll.push_front(val);  
//     }

//     void pop () {   // O(1)
//          ll.pop_front();   
//     }

//     int top () {    // O(1)
//         return ll.front();
//     }

//     bool empty() {
//         return ll.size() == 0;
//     }

// };

// int main() {
//     Stack s;

//     s.push(10);
//     s.push(20);
//     s.push(30);
//    while (!s.empty()) {
//     cout << s.top() << " ";
//     s.pop();
//    }
//    cout << endl;
//    return 0;
// }
   


   // using array....

    // properties

 
// class Stack {
// public:
//     int *arr;
//     int top;
//     int size;

//     Stack(int size) {
//         this->size = size;
//         arr = new int[size];
//         top = -1;
//     }

//     void push(int element) {
//         if (size - top > 1) {
//             top++;
//             arr[top] = element;
//         } else {
//             cout << "Stack overflow" << endl;
//         }
//     }

//     void pop() {
//         if (top >= 0) {
//             top--;
//         } else {
//             cout << "Stack underflow" << endl;
//         }
//     }

//     int peek() {
//         if (top >= 0) {
//             return arr[top];
//         } else {
//             cout << "Stack is empty" << endl;
//             return -1;
//         }
//     }

//     bool isEmpty() {
//         return top == -1;
//     }
// };

// int main() {
//     Stack s(5);

//     s.push(10);
//     s.push(20);
//     s.push(30);
 
//         cout << s.peek() << endl;
//         s.pop();
//          cout << s.peek() << endl;
    

//     cout << endl;
//     return 0;
// }



// valid parantheses...

// class Solution {
// public:
//     bool isValid(string str) {
//         stack<char> st;

//         for (int i = 0; i < str.size(); i++) {
//             if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
//                 st.push(str[i]);
//             } else {
//                 if (st.size() == 0) {
//                     return false;
//                 }

//                 if ((st.top() == '(' && str[i] == ')') ||
//                     (st.top() == '{' && str[i] == '}') ||
//                     (st.top() == '[' && str[i] == ']')) {
//                     st.pop();
//                 } else {
//                     return false;
//                 }
//             }
//         }
//         return st.size() == 0;
//     }
// };




// Reverse a string using stack...

int main () {
    string str = "babbar";

    stack<char> s;

    for (int i = 0; i<str.length(); i++) {
        char ch = str[i];
        s.push(ch);
    } 
        string ans = "";
        while (!s.empty()) {
            char ch = s.top();
            ans.push_back(ch);
            s.pop();
        } 

    cout << "answer is: " << ans << endl;

    return 0;
}



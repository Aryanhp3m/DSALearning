#include <iostream>
#include <queue>
using namespace std;

// int main() {

//create a queue

//     queue<int>q;

//     q.push(15);

//     cout << "front of q is: " << q.front() << endl;
//     q.push(11);
//      cout << "front of q is: " << q.front() << endl;
//     q.push(13);
//      cout << "front of q is: " << q.front() << endl;

//     cout << "size of queue is : " << q.size () << endl;

//     q.pop();
    
//     cout << "size of queue is : " << q.size () << endl;

//     if(q.empty()) {
//         cout << " Queue is empty " << endl;
//     }  else {
//         cout<< "Queue is not empty" << endl;
//     }

// }




// class Queue {
//     int *arr;
//     int frontIndex;
//     int rear;
//     int size;

// public:
//     Queue() {
//         size = 100001;
//         arr = new int[size];
//         frontIndex = 0;
//         rear = 0;
//     }

//     bool isEmpty() {
//         if (frontIndex == rear) {
//             return true;
//         }
//         return false;
//     }

//     void enqueue(int data) {
//         if (rear == size) {
//             cout << "queue is full" << endl;
//         } else {
//             arr[rear] = data;
//             rear++;
//         }
//     }

//     int dequeue() {
//         if (frontIndex == rear) {
//             return -1;
//         } else {
//             int ans = arr[frontIndex];
//             arr[frontIndex] = -1;
//             frontIndex++;
//             if (frontIndex == rear) {
//                 frontIndex = 0;
//                 rear = 0;
//             }
//             return ans;
//         }
//     }

//     int front() {
//         if (frontIndex == rear) {
//             return -1;
//         } else {
//             return arr[frontIndex];
//         }
//     }
// };


// int main() {
//     Queue q;

//     q.enqueue(10);
//     q.enqueue(20);
//     q.enqueue(30);

//     cout << q.front() << endl;
//     cout << q.dequeue() << endl;
//     cout << q.front() << endl;

//     return 0;
// }



class CircularQueue {
    int *arr ;
    int front;
    int rear;
    int size;

    public: 

    CircularQueue(int n) {
        size =  100001;
        arr = new int[size];
        front = rear = -1;
    }

    bool enqueue (int value) {
        if (front == 0 && rear == size-1 || (rear == (front-1) % (size-1))) {
            cout<<"queue is full";
            return false;
        } else if (front == -1) // first element to push
        {
            front = rear = 0;
        }
        else if (rear == size-1 && front!=0) {
            rear = 0;
          
        }
        else {
            rear++;
        }
        
        arr[rear] = value;
        return true;
    }

    int dequeue() {
        if (front == -1) {
            cout << "Queue is empty" << endl;
            return -1;
        }

        int ans = arr[front];
        arr[front] = -1;
        if (front == rear ) { // single element is present
        front = rear = -1;

        }

        else if (front == size -1 ) {
            front = 0;   // to maintain cyclic nature
        } else {
            front ++;
        }
        return ans;
    }
};

int main() {
    CircularQueue q(5);

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << q.dequeue() << endl;
    cout << q.dequeue() << endl;
    cout << q.dequeue() << endl;

    return 0;
}



class Solution {
    public:
    int firstUniqueChar(string s) {
        unordered_map<char, int> m;
        queue<int> Q;
        for (int i=0; i<s.size();i++) {
            if (m.find(s[i]) == m.end()) {
                Q.push(i);
            }
            m[s[i]]++;

            while(Q.size()>0 && m[s[Q.front()]]>1) {
                Q.pop();
            }
        }
        return Q.empty() ? -1 : Q.front();
    }

};
let a, b;
a = 5;
b = 12;

for (i = a; i <= b; i++) {
    console.log('Integer is: ' + i);
}

let n = a;
while (n <= b) {
    console.log('Integer is: ' + n);
    n++;
}

let m = a - 1;
do {
    m ++;
    console.log('Integer is: ' + m);
} while (m < b);

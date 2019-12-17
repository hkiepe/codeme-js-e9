/* Napisz funkcję, która przyjmie dwa parametry min i max
 * typu number - liczby całkowite, które będą określały przedział
 * liczb całkowitych z obu stron zamknięty - czyli - liczby
 * te należą do tego zbioru liczb.
 * 
 * Funkcja powinna wypisać (console.log) wszystkie liczby parzyste
 * oraz zwrócić sumę wszystkich liczb z przedziału określonego
 * przez parametr min i max.
 */

function evenNumber (a, b) {
    let sum = 0; // for the sum of all numbers

    // check if a < b
    if (a<=b) {
        for (i = a; i <= b; i+= 1) {

            //check for even numbers
            if (i % 2 == 0) {
                console.log(i);
            }
        }

        // sum of all the numbers from a to b
        for (i = a; i <= b; i+= 1) {
            sum = sum + i;
        }

    } else {
        // Error message when a > b
        console.log("[Error]: 'a' has to be smaller than 'b'.");
    }

    return sum;
}

console.log("Sum of all numbers: " + evenNumber(4,1));

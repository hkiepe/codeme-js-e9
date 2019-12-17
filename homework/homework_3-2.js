/* Napisz funkcję, która przyjmie jako parametr str łańcuch znaków.
 * Funkcja powinna zwrócić string stworzony ze znaków znajdujących
 * się na nieparzystej pozycji. Jeżeli podczas wywołania funkcji nie
 * zostanie podany argument to domyślnie funkcja jako parametr str
 * przyjmie łańcuch 'koparka'
 */

function train (aString="koparka") {

    anArray = aString.split('');
    let str = "";
    
    for (let i = 0; i < anArray.length; i+= 1) {
        if (i % 2 != 0) {
            str = str + anArray[i];
        }
    }
    
    console.log(str);
}

train();

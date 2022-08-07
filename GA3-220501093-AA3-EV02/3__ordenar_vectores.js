//create an array of 5 random integers ordered from smallest to largest caled vector_1
var vector_1 = [];
for (var i = 0; i < 5; i++) {
    vector_1[i] = Math.floor(Math.random() * 100);
}
ordenarVector(vector_1);

//create an array of 5 random integers ordered from largest to smallest called vector_2
var numeros = [];
for (var i = 0; i < 5; i++) {
    vector_2[i] = Math.floor(Math.random() * 100);
}
ordenarVector(vector_2);

//create a function to order the array from largest to smallest
function ordenarVector(vector_2) {
    var vector_3 = [];
    for (var i = 0; i < vector_2.length; i++) {
        for (var j = 0; j < vector_2.length; j++) {
            if (vector_2[i] > vector_2[j]) {
                vector_3[i] = vector_2[i];
                vector_3[j] = vector_2[j];
            }
        }
    }
    return vector_3;
}

//mergue the two arrays and order them from smallest to largest
var vector_4 = vector_1.concat(vector_2);
ordenarVector(vector_4);
// Array


// let items = [1, 2, 3, 4, 5, ]

// console.log("items ilk hali : ", items)

// items.push(8) // Array :sona öge eklemek için push 

// console.log("sona 8 sayısı eklendi : ", items)

// items.unshift(88) //Array : başa ögle eklemek için unshift

// console.log("başa 88 eklendi : ", items)

// items.pop() // Array : sondaki ögeyi çıkartmak için 

// console.log("sondaki ögeyi çıkart : ", items)

// items.shift() // Array : baştaki ögeyi çıkartmak için

// console.log("baştaki ögeyi çıkart : ", items)

// items[0] = 85 // Array : içerdeki ilk  ögeyi değiştirme 

// console.log("içerdeki ilk ögeyi değiştirme : ", items)

// items[items.length - 1] = 66 // Array : içerdeki son  ögeyi değiştirme

// console.log("içerdeki son ögeyi değiştirme : ", items)






// function vowelsAndConsonants(s) {
//     const vowels = "aeiou"; // Sesli harfler
//     const consonants = "bcdfghjklmnpqrstvwxyz"; // Ünsüz harfler

//     // Sesli harfleri yazdırma
//     for (let char of s) {
//         if (vowels.includes(char)) {
//             console.log(char);
//         }
//     }

//     // Ünsüz harfleri yazdırma
//     for (let char of s) {
//         if (consonants.includes(char)) {
//             console.log(char);
//         }
//     }
// }

// // Örnek girdi
// vowelsAndConsonants("JavaScript döngüleri");




// function vowelsAndConsonants(s) {
//     const vowels = "aeiou"; // Sesli harfler
//     const consonants = "bcdfghjklmnpqrstvwxyz"; // Ünsüz harfler

//     // Sesli harfleri yazdırma
//     for (let char of s) {
//         if (vowels.includes(char)) {
//             console.log(char);
//         }
//     }

//     // Ünsüz harfleri yazdırma
//     for (let char of s) {
//         if (consonants.includes(char)) {
//             console.log(char);
//         }
//     }
// }

// // Örnek girdi
// vowelsAndConsonants("JavaScript döngüleri");



function vowelsAndConsonants(s) {
    const ünlü = "aeiou" 
    const ünsüzler = "bcdfghjklmnpqrstvwxyz"

    for (let char of s ){
        if (ünlü.includes(char)){
            console.log(char)
        }
    }

for(let char of s){
    if (ünsüzler.includes(char)){
        console.log(char)
    }
}

}

vowelsAndConsonants("JavaScript döngüleri");
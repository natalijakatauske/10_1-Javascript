//1.Susikuriame objektą "car". Duodame jam tris properties: "doors", "color",
//"brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color
//ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car
//objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

const cars = {doors: 3, color: "black", brand: "BMW"}
console.log(cars)
console.log(cars.color)
console.log(cars.brand)
console.log(cars.doors)


//2.Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi
//pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas
//turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar
//addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas
//gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja. 

// document.querySelector('form').addEventListener('submit', myFunciotn)
// function myFunciotn (event) {
//     event.preventDefault ()
//     const name = document.querySelector('input[name=name]').value
//     const surname = document.querySelector('input[name=surname]').value
//     const person = {name: name, surname: surname}
//     console.log(person.name + " " + person.surname)
// }


//3.Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus
//duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge.
//Name - string, o isLegalAge - boolean.
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    const name1 = e.target.elements.name1.value
    const age = Number(e.target.elements.age.value)
    const isLegalAge = age >= 18 ? true : false
    //True and false galima net nera6yti
    console.log(isLegalAge)

    const person = {
        name: name1,
        isLegal: isLegalAge
    }
    console.log(person)
})

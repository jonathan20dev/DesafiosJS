const directory = [
    {name: 'John', age: 36, id: 0, phome: '1234567890'},
    {name: 'Jane', age: 32, id: 1, phome: '1234567890'},
    {name: 'Jack', age: 28, id: 2, phome: '1234567890'},
    {name: 'Jill', age: 24, id: 3, phome: '1234567890'},
    {name: 'Jen', age: 20, id: 4, phome: '1234567890'},
    {name: 'Jim', age: 16, id: 5, phome: '1234567890'},
    {name: 'Joe', age: 12, id: 6, phome: '1234567890'},
    {name: 'Jen', age: 8, id: 7, phome: '1234567890'},
]

const registrations = [
    {name: "John", age: 36, id: 0, email: 'john@gmail.com', confirmed: true},
    {name: "Jane", age: 32, id: 1, email: 'jane@gmail.com', confirmed: false},
    {name: "Jack", age: 28, id: 2, email: 'jack@gmail.com', confirmed: false},
    {name: "Jill", age: 24, id: 3, email: 'jill@gmail.com', confirmed: true},
]

const InnerJoinFunction = (array1, array2, key) => {
    return array2.map(item1 => {
        const item2 = array1.find(item2 => item2[key] === item1[key])
        if(item2){
            return {...item1, ...item2}
        }
    })
}

console.log(InnerJoinFunction(directory, registrations, 'id'))
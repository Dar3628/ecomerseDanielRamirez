const items = [
    { id: '01', name: 'Iphone6', price:'11111', stock:'11'},
    { id: '02', name: 'Iphone6 plus', price:'22222', stock:'12'},
    { id: '03', name: 'Xiaomi redmi 9', price:'33333', stock:'13'},
    { id: '04', name: 'Samsung A5', price:'44444', stock:'14'},
    { id: '05', name: 'Motorola c115', price:'55555', stock:'15'},
];

export const getItems = new Promise ((resolve, reject) => {
    //acciones
    let condition = true 
    if(condition){
        setTimeout(()=>{
            resolve(items)
        },3000)
    }else{
        reject('Se pudrio todo')}
    })

    export default items

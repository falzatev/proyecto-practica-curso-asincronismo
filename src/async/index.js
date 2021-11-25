const doSomenthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test error'))
    });
}

const doSomenthingFunction = async () => {
    const something = await doSomenthingAsync();
    console.log(something);
}


console.log('Before');
doSomenthingFunction();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomenthingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');

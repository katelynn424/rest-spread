
const filterOutOdds = (...nums) => {
    return nums.filter(num => num % 2 === 0);
};
  

const findMin = (...args) => {
    return Math.min(...args);
};

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map(arg => arg * 2)];
};


const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1 )];
};


const extend = (array1, array2) =>  {
    return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
};

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

export default function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;

    let factorCount = 0;
    for(let i = 1 ; i <= num ; i++)
    {
        if(num % i === 0)
        {
            factorCount++;
        }
    }

    return factorCount === 2 ? true : false;
}
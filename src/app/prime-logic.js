
export function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;

    if(num % num === 0 && num % 1 === 0)
    {
        let factorNum = [];
        for(let i = 1 ; i <= num ; i++)
        {
            let factorNums = num % i;

            if(factorNums === 0)
            {
                factorNum.push(i);
            }
        }

        if(factorNum.length === 2)
        {
            return true;
        }
        else if(factorNum.length > 2)
        {
            return false;
        }
    }
}
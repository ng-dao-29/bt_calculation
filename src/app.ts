export function filterByTerm(arr: any, pattern: string) {
    return arr.filter( (item: any) => {
        return item.url.match(pattern);
    });
}

export class BasicCalculator {

    add(a:number, b:number):number {
        return a + b;
    }
    subtract(a:number, b:number):number {
        return a - b;
    }
    multiple(a:number, b:number): number {
        return a * b;
    }
    divide(a:number, b:number):number {
        return a / b;
    }
}

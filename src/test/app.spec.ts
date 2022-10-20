import {BasicCalculator, filterByTerm} from '../app'

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});

describe("BasicCalulator Testing", () => {
    let calc : BasicCalculator = new BasicCalculator();
    test("should return an instance of a basic calculator", () => {
        expect(calc).toEqual({});
    })
    test("trả về giá trị a + b", () => {
        expect(calc.add(5,7)).toEqual(12);
    })
    test("trả về giá trị a - b", () => {
        expect(calc.subtract(7,5)).toEqual(2);
    })
    test("trả về giá trị a x b", () => {
        expect(calc.multiple(5,3)).toEqual(15);
    })
    test("trả về giá trị a/b", () => {
        expect(calc.divide(15,3)).toEqual(5)
    })
})
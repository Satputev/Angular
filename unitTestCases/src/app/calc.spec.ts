import { Calculator } from "./calc";
/*  
    karma with jasmine starts the execution from describe()
*/
describe("calculator testing",()=>{
    let obj:Calculator;

    /*
    //it will execute before each describe() function
    beforeEach(()=>{
        obj =  new Calculator();
    });
    */

    /*
        //it will execute only once globally
    */
    beforeAll(()=>{
        obj =  new Calculator();
    });
   
    /*
        these describe() functions used to write the unit test cases to particular functions
    */
    describe("add function testing",()=>{
        /*  
            it() function used to write the test suits 
        */
        it("10+10 should be equal to 20",()=>{
            const result = obj.add(10,10);
            /*
                expect() function used for assertions
            */
            expect(result).toBe(20);
        });
    });
    describe("sub function testing",()=>{
        it("10-10 should be equal to 0",()=>{
            const result = obj.sub(10,10);
            expect(result).toBe(0);
        });
    });
    describe("array testing",()=>{
        it("check 30 in my_array",()=>{
            expect(obj.my_array).toContain(30);
        });
    });
});
# Instructions
## COMP 3133 - Lab02: Testing NodeJS app using mocha
1)	**Download given node project name lab2_mocha_test ZIP file**
2)	**Add package.json file to the project**
3)  **Change directory to lab2_mocha_test**
```
npm init -y
```
4)	**Setup project to working with mocha**
    * Install mocha module
```
npm install --save mocha chai
```

5)	**Write test cases to perform calculator test**

    * Create test/calculator.js file to write all your test cases
    * Write one success and one fail test of add, sub, divide and multiply for calculator.js

    * Sample Test cases
        * add(5, 2) expected result 7 **PASS**<br>
          add(5,2) expected result 8 **FAIL**

        * sub(5, 2) expected result 3 **PASS**<br>
          sub(5,2) expected result 5 **FAIL**

        * mul(5, 2) expected result 10 **PASS**<br>
          mul(5,2) expected result 12 **FAIL**

        * div(10, 2) expected result 5 **PASS**<br>
          div(10,2) expected result 2 **FAIL**

5)	**Display your choice pass/fail messages for each test**
![npm test output of this calculator lab exercise](codeOutput.JPG)

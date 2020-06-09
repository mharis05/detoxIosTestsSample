# E2E Tests with Detox for ReactJs app

## How to run

### Pre-Requisites:
- Make sure you have performed the steps in README.md


### Running Tests
1. Clone/ Unzip the project
2. Configure detox as described here: https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md
3. Open a Terminal and navigate to the root directory of the project (directory with package.json)
4. Run `npm install`


#### Running all tests
 In terminal, run `detox test` in the project root directory

#### Running subset of tests
In terminal, run `detox test e2e/specs/<name>.spec.js` in the project root directory
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderVegetables } from '../vegetable-render.js';

const test = QUnit.test;

test('testing the render-vegetable-functions', (expect) => { 
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Carrots</h3><img src="assets/carrots.jpg" alt="Carrots"><span>$0.5</span><button>Add to Cart</button></li>`;
    const carrots = {
        id: 'carrots',
        name: 'Carrots',
        image: 'assets/carrots.jpg',
        description: 'orange, and crunchy',
        category: 'root',
        price: 0.50
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderVegetables(carrots);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
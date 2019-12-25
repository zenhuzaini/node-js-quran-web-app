const quran = require('./quran');

test('it shoul be Not found', () => {
    quran.quran(1000)
        .then((data) => {
            expect(data.message).toEqual('Not Found')
        })

    //expect.assertions(1); // assertion means if we wan to call below code , so in below code we must put return
    //Example ::::
    //expect.assertions(1);
    // return quran.quran(1000)
    // .then((data) => {
    //     expect(data.message).toEqual('Not Found')
    // })
})


test('it should not be falsy ', () => {
    expect(quran.quran(1)).not.toBeFalsy()
})

test('object must not be null', () => {
    const a = 2
    expect(a).toBe(2)
})

test('returned Object must not be null', () => {
    quran.quran(1)
        .then((data) => {
            expect(data).not.toBeNull()
        })
})

//Async test
test('return not error/ not false', () => {
    expect(quran.listsurah()).not.toBeFalsy()
})
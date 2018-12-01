//{date:{month:{prod, cons, export, stocks}}}

function fakeData() {
    let data = {}
    for (let year = 1990; year < 2018; year++) {
        yearData = {}
        for (let i = 0; i < 3; i++){
            let mData = {'prod': 1000 * Math.random(),
                         'consum': 1000 * Math.random(),
                         'export': 1000 * Math.random(),
                         'stock': 1000 * Math.random()}
            yearData[months[i]] = mData
        }
        data[year] = yearData
    }
    return data
}

data = fakeData()

let importAll = r => r.keys().map(r)
let videos = importAll(require.context('../../assets/webms'))
    .reduce((a, b, index) => {
        a[index] = b.default
        return a
    }, {})

export default videos

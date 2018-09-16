export const categories = new Array(5).fill(null).map((cat,index) => {
    return {
        name: `Category ${index +1}`,
        questions: []
    }
})


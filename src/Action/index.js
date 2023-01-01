
export const Addtodo = (data) => {
    return {
        type: "addtodo",
        paylod: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}


export const Removetodo = (id) => {
    return {
        type: "removetodo",
        data: id
    }
}
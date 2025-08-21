export interface Thread {
    _id?: String,
    title: String,
    authorId: {
        username: String
    },
    content: String,
    createdAt: Date
}
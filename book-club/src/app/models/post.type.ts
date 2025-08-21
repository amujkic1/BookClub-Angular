export interface Post {
    _id?: string,
    authorId: {
        username: string,
        _id: string
    },
    content: string,
    createdAt: Date
}
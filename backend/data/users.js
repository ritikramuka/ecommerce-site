import bcrypt from "bcryptjs"

const user = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Ritik Ramuka",
        email: "ritik@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Ronak Ramuka",
        email: "ronak@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
]

export default user;
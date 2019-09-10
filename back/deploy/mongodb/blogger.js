db.createUser(
    {
        user: "blogger",
        pwd: "1234",
        roles: [ { role: "readWrite", db: "blog" } ]
    }
);

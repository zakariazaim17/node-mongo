db.createUser({
  user: "myUserAdmin",
  pwd: "admin321", // or cleartext password
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase",
  ],
});

db.createUser({
  user: "myTester",
  pwd: "tester321", // or cleartext password
  roles: [
    { role: "readWrite", db: "cat" },
    { role: "read", db: "reporting" },
  ],
});

const express = require("express");
const app = express();
const port = 8000;

const faker = require("faker")

const createUser = () => {
    return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
    }
};
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// console.log( "Random User", createUser() )
// console.log( "Random Company", createCompany() )

app.get( "/api/users/new", (req, res) => res.json( createUser() ));
app.get( "/api/companies/new", (req, res) => res.json( createCompany() ));
app.get( "/api/user/company", (req, res) => res.json( [ createUser(), createCompany() ] ));

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
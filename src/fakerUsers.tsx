import { faker } from '@faker-js/faker';


export const createRandomUser  = () =>{
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        profilePicture: faker.image.avatar(),
    }
};


export const allUsers = faker.helpers.multiple(createRandomUser, {
    count: 20,

})
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  uploadPhoto().then((photo) => {
    ({ body } = photo);
    return createUser();
  })
    .then((userInfo) => {
      ({ firstName, lastName } = userInfo);
    }).then(() => {
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

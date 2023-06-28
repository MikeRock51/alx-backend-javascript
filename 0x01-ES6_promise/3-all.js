import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  let body;
  let firstName;
  let lastName;

  photo.then((response) => {
    ({ body } = response);
    user.then((response) => {
      ({ firstName, lastName } = response);
    });
  }).then(() => {
    console.log(body, firstName, lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}

export default handleProfileSignup;

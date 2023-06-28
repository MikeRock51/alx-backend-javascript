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
  });
}

export default handleProfileSignup;

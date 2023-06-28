import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, userInfo]) => {
      console.log(photo.body, userInfo.firstName, userInfo.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

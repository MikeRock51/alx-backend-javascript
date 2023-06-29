import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => ({
      photo,
      user,
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}

export default asyncUploadUser;

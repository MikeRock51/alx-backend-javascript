import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignUp(firstName, lastName, fileName) {
  const outcome = [];

  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          outcome.push({
            status: result.status,
            value: result.value,
          });
        } else {
          outcome.push({
            status: result.status,
            value: result.reason,
          });
        }
      });
      return outcome;
    });
}

export default handleProfileSignUp;

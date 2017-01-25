const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  console.log('inside action')
  return function(dispatch) {
    fetch(`${ROOT_URL}/signin`, {
      method: 'post',
      body: { email, password }
    })
  }
}

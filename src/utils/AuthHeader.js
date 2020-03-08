export default function AuthHeader() {
  const currentUserToken = localStorage.getItem('userToken');
  if (currentUserToken) {
    return { Authorization: `Bearer ${currentUserToken}` };
  }
  return null;
}

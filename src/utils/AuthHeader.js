export default function AuthHeader() {
  const currentUserToken = localStorage.getItem('accessToken');
  if (currentUserToken) {
    return { Authorization: `Bearer ${currentUserToken}` };
  }
  return null;
}

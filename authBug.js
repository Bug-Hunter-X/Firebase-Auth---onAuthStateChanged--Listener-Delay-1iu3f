The Firebase SDK's `onAuthStateChanged` listener might not trigger immediately after a successful login or signup, leading to unexpected behavior if subsequent code relies on the authenticated user's data. This is especially tricky in asynchronous operations.  For example:

```javascript
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Assume user is authenticated here. This is WRONG!
    const user = userCredential.user;
    console.log(user.uid); // Might not work as expected 
  })
  .catch((error) => {
    // Handle error
  });
```
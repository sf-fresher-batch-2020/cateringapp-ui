class AuthService {

    // registering user
    reigster() {}

    // login function
    login(name, pass) {
        console.log('logging in ' + name);
        return ({'name': name});
    }

    // getting current logged in user
    getCurrentUser() {}
}
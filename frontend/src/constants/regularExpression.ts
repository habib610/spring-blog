const emailRegEx: RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegEX: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,10}$/;
export { passwordRegEX, emailRegEx };

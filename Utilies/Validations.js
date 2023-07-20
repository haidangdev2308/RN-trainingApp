//validate email
export const isValidEmail = (email) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

//validate password
export const isValidPassword = (password) => {
    return password.length >= 4
}

//validate re-password
export const isValidRePassword = (rePassword, password) => {
    return rePassword === password
}
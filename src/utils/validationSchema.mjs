export const createUserValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 5,
                max: 32,
            },
        },
        errorMessage: "User must be 5 -32 charts",
        notEmpty: {
            errorMessage: "User can't be empty",
        },
        isString: {
            errorMessage: "Username must be a string",
        },
    },
    password: {
        isLength: {
            options: { min: 2 },
            errorMessage: 'Password must be at least 2 characters long'
        },
        errorMessage: 'Password is required'
    },
    displayName: {
        notEmpty: true,
    },
};

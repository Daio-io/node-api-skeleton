// PLACE ALL APP CREDENTIALS IN HERE (FILE IS IN .gitignore)
module.exports = {

    mongo: {
        development: {
            connectionString: 'mongodb://sandy:sandy101@ds049868.mongolab.com:49868/sandy'
        },
        production: {
            connectionString: 'place your mongoose live connection string here'
        }

    }

};
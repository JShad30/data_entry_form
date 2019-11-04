# Data Input Form

This project is a form that has been created with Laravel and React to take a users information and input it into a database.

## Technology Used

React
Laravel
PHP
HTML
SASS/ CSS
Javascript

## Further considerations

### Mobile responsive

The frontend design appearance has been created to appear well on larger screen sizes. I would change this using flex box to align the input fields vertically on smaller screen sizes.

### Form content issue

I will need to work on the layout of the content in the second and third boxes of the form. In the custom.sass file I have set the ids of these to display 'none' or 'flex' depending on whether or not they are active. Currently the comments and final comments boxes are displaying as 'block', and overwriting the 'flex' setting I have tried to set in the SASS file.

### Database

The database was created in mysql and the fields are displayed in the database/migrations folder.

### Validations

The validations are checked with javascript in the form.js file. I would have these to do more extensive checks i.e. check whether the days and months are in the correct range, and show a different error to tell the user to update their input.

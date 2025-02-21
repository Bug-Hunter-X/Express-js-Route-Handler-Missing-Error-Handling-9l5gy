# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid input, specifically in this case, invalid user IDs.

The `bug.js` file contains the problematic code. The `bugSolution.js` file shows how to correct the issue by implementing proper error handling.

## Bug

The code attempts to access user data based on a user ID passed in the URL parameter.  However, it fails to check if the ID is valid, which can lead to errors if an invalid ID is supplied.

## Solution

The solution involves adding error handling to validate the user ID before attempting to access user data.  This can involve database queries to check for the existence of the ID or other validation techniques depending on your data model and how IDs are generated and stored.
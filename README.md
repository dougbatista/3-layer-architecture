## 3 Layer architecture  Route -> Controller -> Services 🥪

** src **
   - index.js        # App entry point
   - server.js       # Server status
   - ** app **             
        - ** controller ** Express route controllers for all the endpoints of the app
        - routes.js  Express routes (Can be a folder)
        - index.js   Application routes and middlewares declaration
    - ** core **
         - ** models **   Database objects structure
         - ** services ** Business logic
         - ** utils **    recurrence logic

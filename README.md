## 3 Layer architecture 🥪

src
│   index.js        # App entry point
    server.js       # Server status
└───app             
    └───controller
    │   routes.js  # Express routes (Can be a folder)
│       index.js   # Application routes and middlewares declaration
│
└─── core
     └─── models ** Database objects structure **
     └─── services ** Business logic **
     └─── utils    ** recurrence logic **    

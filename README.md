# Friend finder!

  Answer a series of questions to figure out who cant be your best match!

  ![alt-text](gifs/friendfinder.gif)

 ## Map

 ```
  FriendFinder
    - app
      - data
        - friends.json - file that containes all friends data
      - public
        - home.html - home page served at '/'
        - survey.html - survey page that served at '/survey' and makes ajax post requests
      - routing
        - apiRoutes.js - takes care of get and post route '/api/friends'
        - htmlRoutes.js - takes care of get requests to `/survey` and '/' and provides .html pages
    - node_modules
    - package.json
    - server.js
    
  ```
  
 ## Tools Used
 
 ### Front-end:
  * HTML
  * Bootsrap ^3.3.6
  * JavaScript vs jQuery ^1.11.1
  
### Back-end build with Node.js ^9.11.1 and packages:
  * Express ^4.16.3
  * Path ^0.12.7
  * Body-parser ^1.18.2
 
## Link - https://friendfinder-maxg.herokuapp.com/

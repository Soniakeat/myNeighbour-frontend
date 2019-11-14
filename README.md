# Project Name
myNEIGHBOUR

## Description
myNEIGHBOUR, is an app to free ourselves from all the things we accumulate and never use.
With myNEIGHBOUR, the user can propose his unused items that his neighbors and vis & versa need. A free way to favor recycling, reduce excessive consumption and free up space at home, revitalizing the proximity social bond.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start looking for items of my neighbours.
-  **Login:** As a user I can login to the platform so that I can see the items of my neighbours, my profile, .
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Items** As a user I can see all the items of my neighbour.
-  **Item** As a user I can select one item, see all details about it and I can contact the autor to have it.
-  **Add items** As a user I can add an item so that I can propose it to the community.
-  **delete items** As a user I can delete an item if a neighbour have recover it .
-  **See and edit my profile** As a user I can see my profile, edit or delete it.
-  **See neighbour profiles and items** As a user I can see the other profiles to see the items of each neighbour.


## Backlog

App:
- responsive

Geo Location:
- see myNeighbour location in a map (only by area)

Seach bar:
- to seach an item by name, categories and geografic area.

Chat:
- to contact my neighbour when I'm interesting by an item.
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /restaurants - restaurant list
- /restaurants/create - create a restaurant
- /restaurants/:id - restaurant detail
- /profile/me - my details and favorite restaurants
- 404

## Pages

- Log in Page (public)
- Sign up Page (public)
- Sign up next Page (user only)
- List Items Page (user only)
- Item detail (user only)
- Profile Page (user only)
- Profile edit Page (admin only)
- 404 Page (public)

## Components



## IO


## Services

# Server

## Models

User model

```
  username: String,
  email: {Type: String, required: true, unique: true},
  password: {Type: String, required: true},
  firstname: String,
  lastName: String,
  phoneNumber: Number,
  neighbours: [{ type: Schema.Types.ObjectId, ref: 'User' }]
```

Item model

```
  title: {Type: String, required: true},
  description: {Type: String, required: true},
  autor: { type: Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
```

## API Endpoints/Backend Routes

- GET /auth/me
  - body: (empty)
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/signup/next
    - firstName
    - lastName
    - postalCode
    - phoneNumber
- POST /auth/login
  - body:
    - email
    - password
- POST /auth/logout
   - body: (empty)

- GET /private/items
  - body: (empty)
- GET /private/items/_id
  - body: (empty)
- PUT /private/items/_id
  - body:
      - likes
      - neighbours
- POST /private/items/_id
  - body:
      - phoneNumber
      - email

- GET /private/profile/_id
  - body: (empty)

- GET /private/me/profile/edit
  - body: (empty)
- PUT /private/me/profile/edit
      - username  
      - email
      - password
      - firstname
      - lastName
      - phoneNumber
- DELETE /private/me/profile/edit
  - body: (empty)

- POST /private/me/profile/item/add
  - body:
    - title
    - description
- DELETE /private/me/profile/item/delete
  - body: (empty)


 
## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/gSGSWYib/myneighbour) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)




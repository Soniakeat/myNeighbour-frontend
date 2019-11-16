# Project Name
myNEIGHBOUR

## Description
myNEIGHBOUR is an app to free ourselves from all the things we accumulate and never use.
With myNEIGHBOUR, the user can propose his unused items that his neighbours need and vis & Versa. A freeway to favour recycling, reduce excessive consumption and free up space at home, revitalizing the proximity social bond.

## User Stories
- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As an anon I can sign up in the platform so that I can start looking for items of my neighbours.
- **Login:** As a user I can log in to the platform so that I can see the items of my neighbours, my profile.
- **Logout:** As a user I can log out from the platform so no one else can use it
- **Items** As a user I can see all the items of my neighbour.
- **Item** As a user I can select one item, see all details about it and I can contact the owner to have it.
- **Add items** As a user I can add an item so that I can propose it to the community.
- **delete items** As a user I can delete an item if a neighbour has recovered it.
- **See and edit my profile** As a user I can see my profile, edit or delete it.
- **See neighbour profiles and items** As a user I can see the other profiles to see the items of each neighbour.


## Backlog
Geo Location:
- see myNeighbour location in a map (only by area)
Seach bar:
- to search an item by name, categories and geographic area.
Chat:
- to contact my neighbour when I'm interested by an item.
App:
- responsive
  
# Client
- / - Login
- /signup - Signup
- /signup/next - Signup next
- /items - All the items 
- /items/_id - detail item
- /item/add - add new item
- /item/edit/_id - edit item
- /item/delete/_id - delete item
- /profile/_id - profile of a neighbour
- /profile/edit/_id - Edit own profil
- /profile/delete - Delete own profil


## Routes
### Auth
- /auth/login - Login from
- /auth/signup - Signup form
- /auth/signup/next - Signup next form
- /auth/logout
- /auth/me - Administrator identification

### Items
- /items - items list
- /items/_id - item detail
- /item/add - Add new item form
- /item/_id/edit - Item edit form
- /item/_id/delete - Delete personal item

### profile
- /profile/_id - Profile of a neighbour
- /profile/contact/_id - Contact of a owner item
- /profile/edit/_id - Personal profil edit form
- /profile/delete/_id - Delete personal profile

### Not Found
- 404


## Pages
- Log in Page (anon)
- Sign up Page (anon)
- Sign up next Page (user only)
- List Items Page (user only)
- Item detail (user only)
- Profile Page (user only)
- Profile edit Page (admin only)
- 404 Page (anon)

## Components
- Navbar
- Footer
- Login
- SignUp
- SignUp-Next
- Login
- items-List
- Item-Detail
- Profile
- Profile-Edit
- Profile-Contact


## Services

- getItems() - All the items
- getItem() - item details 


# Server

## Models

User model

```
  userName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true},
  firstName: String,
  lastName: String,
  phoneNumber: String,
  postalCode: String,
  neighbours: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
```

Item model

```
  image: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId,ref: 'User'},
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
```

## API Endpoints/Backend Routes

### Auth
- POST /auth/login
  - body:
    - email
    - password
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
- POST /auth/logout
- GET /auth/me

### Items
- GET /items
- GET /items/_id
- POST /item/add
  - body:
    - image
    - title
    - description
- POST /item/_id/edit
  - body:
    - image
    - title
    - description
- DELETE /item/_id/delete

- PUT /items/_id
  - body:
      - likes
      - neighbours

- POST /items/_id
  - body:
      - phoneNumber
      - email
  

### profile
- GET /profile/_id
- GET /profile/_id/contact
- GET /profile/edit
- PUT /profile/edit
      - username  
      - email
      - password
      - firstname
      - lastName
      - phoneNumber
- DELETE /profile/edit


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




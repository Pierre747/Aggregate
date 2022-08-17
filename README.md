
![Logo](https://i.ibb.co/zsm7CPY/sdf.png)


# Aggregate 🫱🏻‍🫲🏻

Hey guys 😎

Welcome to the official repo of the end of trainning session with the O'Clock school.

This project is called `Aggregate`. It's a social network that will connect devs from all over the world.

Feel free to send us some improvements or impressions 😉

**The application is available online on this URL** : https://aggregate-social.netlify.app/

## Deployment 🛫

To deploy this project we've used https://www.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/9a4321cd-962f-4dfb-8aba-090245c7e745/deploy-status)](https://app.netlify.com/sites/aggregate-social/deploys)

## Tech Stack ⚒️

**Client:** React, Sass, CSS, Uuid, Material Ui, Babel

**Server:** Node, Express, PostgreSQL, Swagger, Email Validator


## Screenshots 📷

![App Screenshot](https://i.ibb.co/PGWQyLw/login.png)

![App Screenshot](https://i.ibb.co/wd3kLSL/feed.png)

![App Screenshot](https://i.ibb.co/Cm0mHGv/dark.png)

## Demo YouTube 📹


[![Lien vidéo](https://i.ibb.co/fHwfBQG/Capture-d-cran-2022-08-08-221122.png)](https://www.youtube.com/watch?v=ozEwinMqyFY)


## Features ✔️

- Login / Register : enter via login or subscribe to create an account
- Light/dark mode toggle
- Log Out : end user session
- Search Bar : find users, posts and comments
- Profile : Change all user credentials and email & password
- Friend List : find a user already friend and delete it from friend list

## Future features 🕰️

Many updates will soon be implemented...

... Connect back-end server to the front

... Add a chat via websocket between users

... Add more CSS, animations, transitions, etc...

... Make the application responsive
## Documentation 📖

![App Screenshot](https://i.ibb.co/zVjsDRW/unknown-2022-08-08-21-33.gif)


## API Reference 👀

### REGISTER

#### POST

```http
  POST /register
```

-----------------------------------
-----------------------------------
### USER

#### GET ALL users

```http
  GET /allUsers
```

#### GET ONE user

```http
  GET /profile/user/:id
```
#### MODIFY ONE user

```http
  PATCH /profile/modify/:id
```

#### DELETE ONE user

```http
  DELETE /profile/user/delete/:id
```

-----------------------------------
-----------------------------------

### POSTS Routes

#### GET ALL posts

```http
  GET /findAllPosts
```

#### GET ALL posts from user

```http
  GET /findAllPosts/:id
```

#### GET ONE post

```http
  GET /findAllPosts/:id
```

#### POST ONE post

```http
  POST /createPost
```

#### MODIFY post

```http
  PATCH /modifyPost
```

#### DELETE ONE post

```http
  DELETE /post/:id
```

-----------------------------------
-----------------------------------

### COMMENT routes

#### GET ALL comments

```http
  GET /findAllComments
```

#### GET ALL posts from user

```http
  GET /findAllComments/:id
```

#### GET ONE post from user

```http
  GET /findComment/:id
```

#### POST ONE comment

```http
  POST /createComment
```

#### MODIFY comment

```http
  PATCH /modifyComment
```

#### DELETE ONE comment

```http
  DELETE /comment/delete/:id
```
## Installation ✍🏻

Install my-project with npm

```bash
  npm i
  cd aggregate
  npm start
```
    
## Authors 👨🏻‍🎓

### Team Backend

- [Leila BENTAHAR](https://www.github.com/leilaBENTAHAR)

- [Gabriel Chertier](https://www.github.com/Skaeryon)

### Team Frontend

- [Arthur LEROUX](https://www.github.com/Arthur-Leroux)

- [Pierre RICARD](https://www.github.com/Pierre747)

## Feedback ✨

Feel free to contact me on my **LinkedIn** account :  https://www.linkedin.com/in/pierre-ricard-/

Or to connect on my **GitHub** account : https://github.com/Pierre747


## Badges 🥇

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

![GitHub repo size](https://img.shields.io/github/repo-size/O-clock-Cassini/aggregate)

![GitHub forks](https://img.shields.io/github/forks/O-clock-Cassini/aggregate?style=social)


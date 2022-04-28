# Bukser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```
NgBusker
├─ .browserslistrc
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ karma.conf.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ comments
│  │  │  ├─ add-comment
│  │  │  │  ├─ add-comment.component.css
│  │  │  │  ├─ add-comment.component.html
│  │  │  │  ├─ add-comment.component.spec.ts
│  │  │  │  └─ add-comment.component.ts
│  │  │  ├─ comment-list
│  │  │  │  ├─ comment-list.component.css
│  │  │  │  ├─ comment-list.component.html
│  │  │  │  ├─ comment-list.component.spec.ts
│  │  │  │  └─ comment-list.component.ts
│  │  │  ├─ comment-list-item
│  │  │  │  ├─ comment-list-item.component.css
│  │  │  │  ├─ comment-list-item.component.html
│  │  │  │  ├─ comment-list-item.component.spec.ts
│  │  │  │  └─ comment-list-item.component.ts
│  │  │  ├─ comment.service.spec.ts
│  │  │  ├─ comment.service.ts
│  │  │  ├─ comments.module.ts
│  │  │  └─ reply-comment-item
│  │  │     ├─ reply-comment-item.component.css
│  │  │     ├─ reply-comment-item.component.html
│  │  │     ├─ reply-comment-item.component.spec.ts
│  │  │     └─ reply-comment-item.component.ts
│  │  ├─ core
│  │  │  ├─ core.module.ts
│  │  │  ├─ footer
│  │  │  │  ├─ footer.component.css
│  │  │  │  ├─ footer.component.html
│  │  │  │  ├─ footer.component.spec.ts
│  │  │  │  └─ footer.component.ts
│  │  │  ├─ guards
│  │  │  │  └─ auth.guard.ts
│  │  │  └─ navigation
│  │  │     ├─ header
│  │  │     │  ├─ header.component.css
│  │  │     │  ├─ header.component.html
│  │  │     │  ├─ header.component.spec.ts
│  │  │     │  └─ header.component.ts
│  │  │     ├─ navigation.component.css
│  │  │     ├─ navigation.component.html
│  │  │     ├─ navigation.component.spec.ts
│  │  │     ├─ navigation.component.ts
│  │  │     ├─ navigation.module.ts
│  │  │     └─ sidenav-list
│  │  │        ├─ sidenav-list.component.css
│  │  │        ├─ sidenav-list.component.html
│  │  │        ├─ sidenav-list.component.spec.ts
│  │  │        └─ sidenav-list.component.ts
│  │  ├─ hero
│  │  │  ├─ hero.component.css
│  │  │  ├─ hero.component.html
│  │  │  ├─ hero.component.spec.ts
│  │  │  ├─ hero.component.ts
│  │  │  └─ hero.module.ts
│  │  ├─ info-window
│  │  │  ├─ info-window.component.css
│  │  │  ├─ info-window.component.html
│  │  │  ├─ info-window.component.spec.ts
│  │  │  └─ info-window.component.ts
│  │  ├─ map
│  │  │  ├─ custom-controls.service.spec.ts
│  │  │  ├─ custom-controls.service.ts
│  │  │  ├─ location.service.spec.ts
│  │  │  ├─ location.service.ts
│  │  │  ├─ map.component.css
│  │  │  ├─ map.component.html
│  │  │  ├─ map.component.spec.ts
│  │  │  ├─ map.component.ts
│  │  │  ├─ map.service.spec.ts
│  │  │  ├─ map.service.ts
│  │  │  ├─ tag.service.spec.ts
│  │  │  └─ tag.service.ts
│  │  ├─ material
│  │  │  └─ material.module.ts
│  │  ├─ not-found
│  │  │  ├─ not-found.component.css
│  │  │  ├─ not-found.component.html
│  │  │  ├─ not-found.component.spec.ts
│  │  │  └─ not-found.component.ts
│  │  ├─ post
│  │  │  ├─ new-post
│  │  │  │  ├─ new-post.component.css
│  │  │  │  ├─ new-post.component.html
│  │  │  │  ├─ new-post.component.spec.ts
│  │  │  │  └─ new-post.component.ts
│  │  │  ├─ post
│  │  │  │  ├─ post.component.css
│  │  │  │  ├─ post.component.html
│  │  │  │  ├─ post.component.spec.ts
│  │  │  │  └─ post.component.ts
│  │  │  ├─ post-list
│  │  │  │  ├─ post-list.component.css
│  │  │  │  ├─ post-list.component.html
│  │  │  │  ├─ post-list.component.spec.ts
│  │  │  │  └─ post-list.component.ts
│  │  │  ├─ post-list-item
│  │  │  │  ├─ post-list-item.component.css
│  │  │  │  ├─ post-list-item.component.html
│  │  │  │  ├─ post-list-item.component.spec.ts
│  │  │  │  └─ post-list-item.component.ts
│  │  │  ├─ post-routing.module.ts
│  │  │  └─ post.module.ts
│  │  ├─ search
│  │  │  ├─ search.component.css
│  │  │  ├─ search.component.html
│  │  │  ├─ search.component.spec.ts
│  │  │  └─ search.component.ts
│  │  ├─ shared
│  │  │  ├─ interfaces
│  │  │  │  ├─ base.ts
│  │  │  │  ├─ comment.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ location.ts
│  │  │  │  ├─ post.ts
│  │  │  │  └─ user.ts
│  │  │  ├─ loader
│  │  │  │  ├─ loader.component.css
│  │  │  │  ├─ loader.component.html
│  │  │  │  ├─ loader.component.spec.ts
│  │  │  │  └─ loader.component.ts
│  │  │  ├─ post.service.spec.ts
│  │  │  ├─ post.service.ts
│  │  │  ├─ profiles
│  │  │  │  ├─ auth-profile-page
│  │  │  │  │  ├─ auth-profile-page.component.css
│  │  │  │  │  ├─ auth-profile-page.component.html
│  │  │  │  │  ├─ auth-profile-page.component.spec.ts
│  │  │  │  │  └─ auth-profile-page.component.ts
│  │  │  │  ├─ current-user
│  │  │  │  │  ├─ current-user.component.css
│  │  │  │  │  ├─ current-user.component.html
│  │  │  │  │  ├─ current-user.component.spec.ts
│  │  │  │  │  └─ current-user.component.ts
│  │  │  │  ├─ profiles.component.css
│  │  │  │  ├─ profiles.component.html
│  │  │  │  ├─ profiles.component.spec.ts
│  │  │  │  ├─ profiles.component.ts
│  │  │  │  ├─ profiles.module.ts
│  │  │  │  ├─ unauth-profile-page
│  │  │  │  │  ├─ unauth-profile-page.component.css
│  │  │  │  │  ├─ unauth-profile-page.component.html
│  │  │  │  │  ├─ unauth-profile-page.component.spec.ts
│  │  │  │  │  └─ unauth-profile-page.component.ts
│  │  │  │  ├─ upload-file.service.spec.ts
│  │  │  │  └─ upload-file.service.ts
│  │  │  ├─ re-password-validator.directive.spec.ts
│  │  │  ├─ re-password-validator.directive.ts
│  │  │  ├─ shared.module.ts
│  │  │  └─ validators.ts
│  │  └─ user
│  │     ├─ login
│  │     │  ├─ login.component.css
│  │     │  ├─ login.component.html
│  │     │  ├─ login.component.spec.ts
│  │     │  └─ login.component.ts
│  │     ├─ other-user
│  │     │  ├─ other-user.component.css
│  │     │  ├─ other-user.component.html
│  │     │  ├─ other-user.component.spec.ts
│  │     │  └─ other-user.component.ts
│  │     ├─ profile
│  │     │  ├─ profile.component.css
│  │     │  ├─ profile.component.html
│  │     │  ├─ profile.component.spec.ts
│  │     │  └─ profile.component.ts
│  │     ├─ register
│  │     │  ├─ register.component.css
│  │     │  ├─ register.component.html
│  │     │  ├─ register.component.spec.ts
│  │     │  └─ register.component.ts
│  │     ├─ user-routing.module.ts
│  │     ├─ user.component.css
│  │     ├─ user.component.html
│  │     ├─ user.component.spec.ts
│  │     ├─ user.component.ts
│  │     ├─ user.module.ts
│  │     ├─ user.service.spec.ts
│  │     └─ user.service.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  └─ photos
│  │     ├─ authWelcomePhoto.jpg
│  │     ├─ firstPostImg.jpg
│  │     ├─ map-icon.svg
│  │     ├─ profile-busker.jpg
│  │     ├─ welcomePageFinalPhoto.jpg
│  │     └─ welcomePageFirstPhoto.jpg
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.css
│  └─ test.ts
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
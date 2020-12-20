# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

```bash
rails g model SocialModel provider:string uid:string first_name:string last_name:string email:string photo:string user:references
```

### Multiple Schema

```bash
rails g model item name:string price:int user:referneces --database second
```
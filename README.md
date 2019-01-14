<p align="center">
  <img width="150" height="150" src="https://s3.eu-west-1.amazonaws.com/tcheymol/pudding.png">
</p>

# Who is Francis

Francis is the standard Theodo project boilerplate.

## Who is it for ?

This boilerplate is used to bootstrap every new Theodo projects.
If you have an existing project and want to benefit from the latest Theodo stack components, use [Steve](https://github.com/theodo/theodo-stack-generator) instead.

## Installation

```bash
git clone git@github.com:theodo/francis.git YOUR_PROJECT
cd YOUR_PROJECT
rm -fr .git
cp api/.env.dist api/.env
docker-compose up -d --build
```

Then visit [localhost](http://localhost).

## Usage

### Fixtures

Fixtures are located in the `api/fixtures` folder.
They are handled by the [AliceBundle](https://github.com/hautelook/AliceBundle).

#### Using fixtures in tests

In order to use fixtures in your backend integration tests, simply put a `RefreshDatabaseTrait` or a `ReloadDatabaseTrait` in your test class.
[Read more about these traits](https://github.com/hautelook/AliceBundle#database-testing).

#### Using fixtures in dev

You can load the provided fixtures in your local database to speed up developments:

```bash
docker-compose exec php bin/console hautelook:fixtures:load
```

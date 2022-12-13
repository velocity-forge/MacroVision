# NextJS Project Template

This is a build guide to help walk you through setting up a new NextJS project.

## Requirements

* [Tiged](https://www.npmjs.com/package/tiged) - `npm install -g tiged`
* [DDev](https://forumone.atlassian.net/wiki/spaces/TECH/pages/2859270145/Installing+DDev)
* [Docker & Docker Compose/Docker Desktop](https://forumone.atlassian.net/wiki/spaces/TECH/pages/2859270145/Installing+DDev#Requirements%3A)

## Getting started...

1. Clone this repository using Tiged/Degit.
```shell
degit --mode=git git@github.com:forumone/nextjs-project.git [project-name]
```
_Note: If you have an issue with that command try without the `--mode=git` option_

2. Initialize the new project as a Git repository.
```shell
cd [project-name]
git init
```
3. Add the git remote for the new repository.
```shell
git remote add origin git@github.com:forumone/[project-name].git
```
4. Update configuration in the `./services/app/.ddev/config.yaml`
   5. Update `name: [project name]` to the correct project name.


* Project name (`[project-name]`): `[project-name]<ENTER>`
* Docroot Location (...): `public<ENTER>`
* Project Type [...]: `php<ENTER>`

6. Go through the rest of the `build process`

### Assuming Forum One hosted project,

#### Do you need storybook?

##### No

Please remove:
* `./services/app/.storybook`
* In the `./services/app/package.json`, remove
  ```
    ...
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
    ...
  ``` 
* Uninstall the storybook related packages as well in `services/app/package.json`
* Run `npm i --package-lock-only`

#### Do you need github action linting?

##### No

Please delete: `./github` folder.

#### Do you need to use `environment variables`?

##### No

* In the `.buildkite`, please delete
  ```
  ...
     - seek-oss/aws-sm#v2.0.0:
       file:
        - path: services/app/.env
          secret-id: [NEED THIS CONFIGURED]
  ...
  ```
* Rename `./buildkite/pipeline-base.yaml` > `.buildkite/pipeline.yaml`

##### Yes

* Please put a `halp` request in to get a `secrets manager` setup for the project. (This may change in the future)
* Will need to provide what `.env` are needed to put into secrets manager.
* In the `.buildkite/pipeline-base.yml` > will need to update: `[NEED THIS CONFIGURED]` tobe updated.
  * Please reference: https://github.com/forumone/NYU-CDHDB/blob/main/.buildkite/pipeline-base.yml#L49
  * That reference is referring to: https://github.com/forumone/NYU-CDHDB/blob/main/.buildkite/pipeline.yml#L7


#### Configuring Capistrano

Configuring Capistrano deployments requires editing of the following files:

* `capistrano/deploy.rb`
* `capistrano/deploy/dev.rb`
* `capistrano/deploy/stage.rb`
* `capistrano/deploy/prod.rb`

If additional environments are required you can copy `capistrano/deploy/dev.rb` to a new stage file and make the required changes.

##### `capistrano/deploy.rb`

Configuring the general deployment settings happens in `capistrano/deploy.rb` and requires replacing the
following placeholder tokens in the settings:

###### `APP_NAME`

This is simply a name for the application that will be used as a directory name. Replace it with a relevant
string to be used to identify your application.

###### `HTTPS_REPO_URL`

This should be the HTTPS clone URL for your repo to be deployed. You may access this from the GitHub UI.

##### `capistrano/deploy/<dev|stage|prod>.rb`

The files located at `capistrano/deploy/*.rb` define deployment targets for the application to be released to.
For each environment the application is being deployed to there should be one matching file with the
environment-specific configuration defined. To create a new deployment environment, the
`capistrano/deploy/dev.rb` file may be duplicated and renamed to match the name of the new environment. Then
the same configuration process described below should be followed by customizing each of the following tokens
in the file settings:

###### `stage`

The stage name should match that of the containing file. For example, the `dev.rb` file should set this to `:dev`.

###### `SITE_URL`

This is the URL used to access the site being deployed.

###### `ENVIRONMENT_NAME`

This is the name of the environment's vhost directory where the application will be deployed to. Usually this
is a combination of a short application name followed by the environment name, e.g., `nextjs.dev`. By replacing
this token in the full path, the setting would look like this:

```ruby
# The path to the project on the server
set :deploy_to, '/var/www/vhosts/nextjs.dev'
```

###### `BRANCH`

This is the specific git branch to be deployed to this environment from the repository. Typically these follow the pattern in the following table.

| Environment | Branch        |
| ----------- | ------------- |
| dev         | `integration`   |
| stage       | `main`          |
| prod        | `live`          |

###### `SERVER_LOGIN`

This defines the servers to be deployed to and the logins to be used for access. In most use cases, each
instance of this token will use the same login. An example login would look like:

```ruby
# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary
# server in each group is considered to be the first
# unless any hosts have the primary property set.
role :app, %w{wordpress@wordpress.byf1.dev}, :primary => true
role :web, %w{wordpress@wordpress.byf1.dev}
role :db,  %w{wordpress@wordpress.byf1.dev}
```

## Project README

Remove this `README.md` file and rename the `README.project.md` file to `README.md`. Update the `README.md` with the correct details for your projects. Take note of the Project Name at the top as well as the Buildkite badge setup. _(**Note**: The Buildkite build status badge can be found in the Buildkite pipeline settings online.)_

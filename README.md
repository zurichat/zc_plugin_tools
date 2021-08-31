# Zuri External Tools Plugin


For quick navigation:

- [How it Works](#how-it-works)
- [Getting Started](#getting-started)
- [Linting Your Code](#linting-your-code)
- [Contributing Your Code](#contributing-your-code)

## How it works

## Getting Started

Ensure that your local machine has all the required software, listed below, before setting up your local environment.

### Requirements

- [Node](https://nodejs.org/en/download/)

### Setup Local Environment

You will first need to setup your local environment and ensure that all configuration files are correctly configured.

1. Fork the repo.
2. Clone your forked repo to you local environment.
3. In your terminal, run `npm install`.
4. In your terminal, run `npm run start`.

## Linting Your Code

1. Run `npm run eslint:fix` to fix all fixable errors in source code and format with prettier
2. Run `npm run eslint` to find errors that still remain in your code syntax/format
3. Ensure you fix any remaining linting errors displayed.
   Run npm run test:ci to ensure your code matches the test

## Contributing Your Code

Are you willing to contribute to this project? You can contribute in many areas but primarily in the following areas

1. Implementing endpoints and controllers for the Backend
2. Implementing views and designs for the Frontend

### Before Submitting Pull Request

- Always lint and test your code as stated [above](#linting-your-code)

- Make use of the PR template and edit the placeholders with relevant information. PR descriptions must reference the issue number being fixed, e.g `fixes #12` or `closes #25`.

- Before pushing your commits, ensure your local/forked repo is synced with the latest updates from the original repo to avoid merge conflicts. You can safely do this with a fast-forwards merge.

```bash
git remote add upstream https://github.com/zurichat/zc_plugin_tools.git
git fetch upstream
git merge upstream/development
git commit
git push origin <branch-name>
```

> For more information on the contributing guidelines and implementation details, please see the [contributing documentation](CONTRIBUTING.md).

## License

Copyright (c) 2021, Team Hobbes. All rights reserved.

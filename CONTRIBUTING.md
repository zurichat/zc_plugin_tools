# Contributing to Zuri External Tool Plugin

We would love for you to contribute to Zuri External Tool Plugin and help make it even better than it already is. As a contributor, here are the guidelines we would like you to follow:

For quick navigation:

- [Code of Conduct](#coc)
- [Question or Problem?](#question-or-problem)
- [Found a bug?](#found-a-bug)
- [Missing feature?](#missing-feature)
- [Submission Guidelines](#submission-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

As a contributor, here are the guidelines we would like you to follow:

## <a name="coc"></a> Code of Conduct

Please read and follow our [code of conduct](https://github.com/zurichat/zc_plugin_tools/blob/main/CODE_OF_CONDUCT.md)

## <a name="question-or-problem"></a> Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [slack forum]() or google.

## <a name="found-a-bug"></a> Found a bug?

If you find a bug in the source code, you can help us by submitting an issue to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

## <a name="missing-feature"></a> Missing feature?

You can request a new feature by submitting an issue to our GitHub Repository. If you would like to implement a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:

- For a Major Feature, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

- Small Features can be crafted and directly submitted as a Pull Request.

## <a name="submission-guidelines"></a> Submission Guidelines

### Submitting a Pull Request (PR):

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.

3. Make sure you sign with the primary email address of the Git identity that has been granted access to the team repository.

4. Fork repo.

5. Make your changes in your development branch:
   ```
   git checkout development
   ```
6. Create your patch / implement your feature

7. Run linting and ensure that all errors are fixed.

8. Commit your changes using a descriptive commit message

   ```
   git commit -m "[(Fixes #20)| {your commit mesage}]" 
   ```
    - Ensure to not commit changes to multiple files at once
    - [Commit Message Guidelines](#commit-message-guidelines)

10. Push your branch to GitHub:

    ```
    git push origin development
    ```

11. In GitHub, send a pull request to the appropriate branch (usually development branch)

12. If we suggest changes, make the required updates.

13. Rebase your branch and force push to your GitHub repository (this will update your Pull Request):
    ```
    git rebase development -i
    git push -f
    ```

That's it! Thank you for your contribution!

After your pull request is merged, you can safely delete your branch and pull the changes from the development (upstream) repository:

1. Update your development with the latest upstream version:

   ```
   git pull --ff upstream development

   ```

## <a name="commit-message-guidelines"></a> Commit Message Guidelines

Each commit message must follow the format below

    ```
    [file/method/function changed]: (Fixes #num | Closes #num) Your descriptive commit message

    ```
    - #num is the issue number you worked on


### Examples:

```
[Navbar]: Closes #20 | Add side-navbar

```

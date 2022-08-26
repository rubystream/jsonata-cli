# Contributing to jsonata-cli

Thank you so much for your interest in contributing!. All types of contributions
are encouraged and valued.  We welcome contributions, but your requests should
follow these guidelines.

- [Raising issues](#raising-issues)
- [Feature requests](#feature-requests)
- [Pull-Requests](#pull-requests)

This project adheres to the [Contributor Covenant 1.4](http://contributor-covenant.org/version/1/4/).
By participating, you are expected to uphold this code. Please report
unacceptable behavior to any of the project's core team.

## Raising issues

Please raise any bug reports on the relevant project's issue tracker. Be sure to
search the list to see if your issue has already been raised.

A good bug report is one that make it easy for us to understand what you were
trying to do and what went wrong.

Provide as much context as possible so we can try to recreate the issue.

At a minimum, please include:

- Version of `jsonata-cli` - either release number if you downloaded a zip, or the
first few lines of `git log` if you are cloning the repository directly.
- Version of Node.js (`node -v`).

## Feature requests

If the project doesn't do something you need or want it to do:

- Open an Issue
- Provide as much context as you can about what you're running into.
- Please try and be clear about why existing features would not work for you.

## Pull requests

To contribute code:

- Make any necessary changes to the source code.
- Include any additional documentation the changes might need.
- Write tests that verify that your contribution works as expected.
- If your PR is connected to an open issue, add a line in your PR's
description that says Fixes: #123, where #123 is the number of the issue you're fixing.

### Coding standards

Please ensure you follow the coding standards used through-out the existing code
base. Coding standards are checked by ESLint. 100% test coverage must be
maintained at all times.

### Label Issues

One of the most important tasks in handling issues is labeling them usefully and
accurately. All other tasks involving issues ultimately rely on the issue being
classified in such a way that relevant parties looking to do their own tasks can
find them quickly and easily.

In order to label issues, and, **from newest to oldest**, read through each one
and apply issue labels according to the table below. If you're unsure about what
label to apply, skip the issue and try the next one: don't feel obligated to
label each and every issue yourself!

Label | Apply When | Notes
--- | --- | ---
`bug` | Cases where the code (or documentation) is behaving in a way it wasn't intended to. | If something is happening that surprises the *user* but does not go against the way the code is designed, it should use the `enhancement` label.
`critical` | Added to `bug` issues if the problem described makes the code completely unusable in a common situation. |
`documentation` | Added to issues or pull requests that affect any of the documentation for the project. | Can be combined with other labels, such as `bug` or `enhancement`.
`duplicate` | Added to issues or PRs that refer to the exact same issue as another one that's been previously labeled. | Duplicate issues should be marked and closed right away, with a message referencing the issue it's a duplicate of (with `#123`)
`enhancement` | Added to feature requests, PRs, or documentation issues that are purely additive: the code or docs currently work as expected, but a change is being requested or suggested. |
`help wanted` | Applied by Committers to issues and PRs that they would like to get outside help for. Generally, this means it's lower priority for the maintainer team to itself implement, but that the community is encouraged to pick up if they so desire | Never applied on first-pass labeling.
`in-progress` | Applied by Committers to PRs that are pending some work before they're ready for review. | The original PR submitter should @mention the team member that applied the label once the PR is complete.
`performance` | This issue or PR is directly related to improving performance. |
`refactor` | Added to issues or PRs that deal with cleaning up or modifying the project for the betterment of it. |
`starter` | Applied by Committers to issues that they consider good introductions to the project for people who have not contributed before. These are not necessarily "easy", but rather focused around how much context is necessary in order to understand what needs to be done for this project in particular. | Existing project members are expected to stay away from these unless they increase in priority.
`support` | This issue is either asking a question about how to use the project, clarifying the reason for unexpected behavior, or possibly reporting a `bug` but does not have enough detail yet to determine whether it would count as such. | The label should be switched to `bug` if reliable reproduction steps are provided. Issues primarily with unintended configurations of a user's environment are not considered bugs, even if they cause crashes.
`tests` | This issue or PR either requests or adds primarily tests to the project. | If a PR is pending tests, that will be handled through the PR review process
`wontfix` | Labelers may apply this label to issues that clearly have nothing at all to do with the project or are otherwise entirely outside of its scope/sphere of influence. Committers may apply this label and close an issue or PR if they decide to pass on an otherwise relevant issue. | The issue or PR should be closed as soon as the label is applied, and a clear explanation provided of why the label was used. Contributors are free to contest the labeling, but the decision ultimately falls on committers as to whether to accept something or not.

### Legal stuff

We have tried to make it as easy as possible to make contributions. This applies
to how we handle the legal aspects of contribution. We use the same
approach&mdash;the [Developer's Certificate of Origin 1.1 (DCO)](DCO1.1.txt)
&mdash;that the Linux&reg; Kernel [community](http://elinux.org/Developer_Certificate_Of_Origin)
uses to manage code contributions. We simply ask that when submitting a pull
request, the developer must include a sign-off statement in the pull request description.

Here is an example Signed-off-by line, which indicates that the submitter accepts
the DCO:

```md
Signed-off-by: John Doe <john.doe@example.com>
```

## Running tests

Tests are written using Mocha and can be run directly via NPM.

```sh
npm test
```


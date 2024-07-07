# Git CLI Tips

Useful Git CLI commands and tips.

- [Git CLI Tips](#git-cli-tips)
  - [Useful Git CLI Commands](#useful-git-cli-commands)
  - [Useful Resolutions and Tips](#useful-resolutions-and-tips)
    - [Edit or Update Last Commit Message](#edit-or-update-last-commit-message)

## Useful Git CLI Commands

1. Get current branch name

   ```bash
   git branch --show-current
   ```

2. Get committed by author name and email for the last commit

   ```bash
   git show -s --format='%an <%ae>' HEAD
   ```

3. Get committed date and time for the last commit

   ```bash
   git show -s --format='%ci' HEAD
   ```

4. Get commit id for the last commit

   ```bash
   git show -s --format='%H' HEAD
   ```

5. Get last n commit details in one line

   ```bash
   git log -n --oneline
   ```

## Useful Resolutions and Tips

### Edit or Update Last Commit Message

Run the amend command in the desired branch. The amend command will open the default editor with the last commit
message. Update the message and save the file.

```bash
git commit --amend
```

> [!TIP]
> Use vs code to run the amend command for easy editing.<br>
> The amend command will open the vs code editor with the last commit message. Press `I` to start editing the
> message.<br>
> Press `Esc` to exit the editing mode.<br>
> Press `:wq` to save and exit the editor.<br>
> Press `:q!` to exit without saving the changes.

# Git 入门

## 版本控制软件（系统）

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211547799.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211547056.png" alt="截图" style="zoom:50%;" />

<br/>

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211547640.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## Git 概念

Git 是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。

### Git 的特性

1. 直接记录快照，而非差异比较
2. 近乎所有的操作都是本地进行

<br/>

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548590.png" alt="截图" style="zoom:50%;" />

<br/>

**Git 的记录快照**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548380.png" alt="截图" style="zoom:50%;" />

<br/>

**近乎所有操作都是本地执行**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548263.png" alt="截图" style="zoom:50%;" />

<br/>

### Git 中的三个区域

使用 Git 管理的项目，拥有三个区域

1. 工作区
2. 暂存区
3. Git 仓库

<br/>

### Git 中的三种状态

1. 已修改 modified
2. 已暂存 staged
3. 已提交 committed

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548964.png" alt="截图" style="zoom:50%;" />

<br/>

### 基本的 Git 工作流程

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548239.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

# Git 基础

## 配置 Git

### 配置用户信息

`git config --global user.name、git config --global user.email`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548339.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548926.png" alt="截图" style="zoom:50%;" />

<br/>

### 检查配置信息

`git config --list --global`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548328.png" alt="截图" style="zoom:50%;" />

<br/>

### 获取帮助信息

`git help config`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548522.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## Git 基本操作

### 获取 Git 仓库

1. 将尚未进行版本控制的本地目录转换为 Git 仓库
2. 从其它服务器克隆一个已存在的 Git 仓库

<br/>

**本地目录初始化仓库**

`git init`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548602.png" alt="截图" style="zoom:50%;" />

<br/>

### Git 文件状态及操作

**工作区中文件的四种状态**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548407.png" alt="截图" style="zoom:50%;" />

<br/>

**检查文件的状态**

`git status`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548148.png" alt="截图" style="zoom:50%;" />

<br/>

**以精简的方式显示文件状态**

`git status -s`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548884.png" alt="截图" style="zoom:50%;" />

<br/>

**跟踪新文件**

`git add **`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548610.png" alt="截图" style="zoom:50%;" />

<br/>

**提交更新**

`git commit -m "**"`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548392.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548911.png" alt="截图" style="zoom:50%;" />

<br/>

**对已提交的文件进行修改**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548805.png" alt="截图" style="zoom:50%;" />

<br/>

**暂存已修改的文件**

`git add ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548691.png" alt="截图" style="zoom:50%;" />

<br/>

**提交已暂存的文件**

`git commit -m "***"`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548568.png" alt="截图" style="zoom:50%;" />

<br/>

**撤销对文件的修改**

`git checkout -- ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548707.png" alt="截图" style="zoom:50%;" />

<br/>

**向暂存区中一次性添加多个文件**

`git add .`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549923.png" alt="截图" style="zoom:50%;" />

<br/>

**取消暂存的文件**

`git reset HEAD ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211548273.png" alt="截图" style="zoom:50%;" />

<br/>

**跳过使用暂存区**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549063.png" alt="截图" style="zoom:50%;" />

<br/>

**移除文件**

`git rm -f ***`

`git rm --cached ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549562.png" alt="截图" style="zoom:50%;" />

<br/>

**忽略文件**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549052.png" alt="截图" style="zoom:50%;" />

glob 模式

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549398.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549277.png" alt="截图" style="zoom: 80%;" />

<br/>

**查看提交历史**

`git log (***)`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549162.png" alt="截图" style="zoom:50%;" />

<br/>

**回退到指定的版本**

`git reset --hard ***`

**git reflog --pretty=oneline**

<br/>

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549083.png" alt="截图" style="zoom:50%;" />

<br/>

### 小结

 <img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549790.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

# Github

## 开源

### 开源概念

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549136.png" alt="截图" style="zoom:50%;" />

<br/>

### 开源许可协议

开源并不意味着完全没有限制，为了限制使用者的使用范围和保护作者的权利，每个开源项目都应该遵守开源许可协议（ Open Source License ) 。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549209.png" alt="截图" style="zoom:50%;" />

<br/>

## Github 概念

Github 是全球最大的开源项目托管平台。因为只支持 Git 作为唯一的版本控制工具，故名 GitHub。

<br/>

### 远程仓库的使用

**访问方式**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549546.png" alt="截图" style="zoom:50%;" />

<br/>

### 基于 HTTPS 将本地仓库上传到 GitHub

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549399.png" alt="截图" style="zoom:50%;" />

后续更新需要继续推送到远程仓库：`git push`

<br/>

**SSH Key**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549290.png" alt="截图" style="zoom:50%;" />

**生成 SSH Key**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549347.png" alt="截图" style="zoom:50%;" />

**配置 SSH Key**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549333.png" alt="截图" style="zoom:50%;" />

**检测 SSH Key 是否配置成功**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549084.png" alt="截图"  />

<br/>

### 基于 SSH 将本地仓库上传到 Github

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549541.png" alt="截图" style="zoom:50%;" />

后续更新需要继续推送到远程仓库：`git push`

<br/>

### 将远程仓库克隆到本地

`git clone`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549707.png" alt="截图" style="zoom:50%;" />

<br/>

<br/>

## Git 分支

### 分支概念

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211549838.png" alt="截图" style="zoom:50%;" />

<br/>

**master 主分支（main 主分支）**

作用：用来保存和记录整个项目已完成的功能代码。

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550422.png" alt="截图" style="zoom:50%;" />

<br/>

**功能分支**

作用：专门用来开发新功能的分支

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550108.png" alt="截图" style="zoom:50%;" />

<br/>

### 本地分支操作

**查看分支列表**

`git branch`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550578.png" alt="截图" style="zoom:50%;" />

<br/>

**创建新分支**

`git branch ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550394.png" alt="截图" style="zoom:50%;" />

<br/>

**切换分支**

`git checkout ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550015.png" alt="截图" style="zoom:50%;" />

<br/>

**分支的快速创建和切换**

`git checkout -b ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550070.png" alt="截图" style="zoom:50%;" />

<br/>

**合并分支**

`git merge ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550474.png" alt="截图" style="zoom:50%;" />

<br/>

**删除本地分支**

要求切换到主分支且合并后才可删除：`git branch -d ***`

切换到主分后未合并而强制删除：`git branch -D ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550170.png" alt="截图" style="zoom:50%;" />

<br/>

**冲突分支合并**

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550322.png" alt="截图" style="zoom:50%;" />

- Accept Current Change 保留当前|
- Accept lncoming Change 保留传入
- Accept Both Changes 保留两者
- Compare Changes 两者比较

<br/>

### 远程分支操作

**将本地分支推送到远程仓库**

第一次需要加-u 绑定：== git push -u origin XXX、（git push -u origin XXX:YYY）==

后续更新推送：`git push origin XXX`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550325.png" alt="截图" style="zoom:50%;" />

<br/>

**查看远程仓库中的分支列表**

`git remote show ***`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550986.png" alt="截图" style="zoom:50%;" />

<br/>

**跟踪分支**

`git checkout xxx`

`git checkout -b XXX YYY/xxx`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550680.png" alt="截图" style="zoom:50%;" />

<br/>

**拉取远程分支的最新代码**

`git pull`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550784.png" alt="截图" style="zoom:50%;" />

<br/>

**删除远程分支**

`git push XXX --delete`

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550753.png" alt="截图" style="zoom:50%;" />

<br/>

### 总结

<img src="https://cdn.jsdelivr.net/gh/LAOVA/Typora_images@main/img/202310211550443.png" alt="截图" style="zoom:50%;" />

<br/>

## Git 工程化

### 初始化仓库（init)

` git init`

<br/>

### 提交到暂存区（add)

` git add .`/ ` git add <file>`

<br/>

### 查看文件状态 （status）

` git status (-s)`

<br/>

### 提交到本地仓库（commit）

`git  commit -m "提交信息"`

<br/>

### 查看版本（log）

`git log`

<br/>

### 回退版本（reset）

`git reset --hard HEAD^`/`git reset --hard HEAD^^` (^：表示回退几个版本)

使用 `~<num>` 向上移动多个提交记录，如 `~3`

<br/>

### 切换版本（reset）

`git reset --hard (版本id)`

<br/>

### 查看版本操作（reflog）

`git reflog`

<br/>

### 查看文件内容变化（diff）

`git diff`

<br/>

### 撤销文件修改（状态：提交到暂存区前）（restore）

`git restore <file>`

<br/>

### 撤销文件提交，移出暂存区（restore --staged）

`git restore --staged <file>`

<br/>

### 删除文件（更新暂存区）（rm）

`git rm <file>`

<br/>

### 创建分支（branch）

`git branch <name>`

<br/>

### 创建并切换分支（checkout -b）

`git checkout -b <name>`

<br/>

### 切换分支（checkout）

`git checkout <name>`

<br/>

### 当前分区为主，合并目标分区（merge）

`git merge <file>`

<br/>

### 删除分区（branch -d）

`git branch -d <name>`

<br/>

### 解决冲突

#### 先合并

`git merge <file>`

#### 再手动打开文件处理冲突内容

#### 最后提交

`git add .`

`git commit -m "提交消息"`

<br/>

### 查看分支合并图（log --graph）

`git log --graph`

<br/>

### 保存（缓存）工作区状态（stash）

`git stash`

<br/>

### 查看缓存现场（stash -list）

`git stash list`

<br/>

### 恢复工作区状态（stash apply)

`git stash apply <name>`/`git stash pop <name> `

git stash pop 会清空 stash list

git stash apply 不会清空 stash list

<br/>

### 忽略文件（.gitnore)

```js
# 忽略.log格式文件
*.log

# 忽略node_modules目录
/node_modules/

# 保留package.json文件
!package.json

#忽略所有文件
/*
```

<br/>

<br/>

## 注意事项

### 版本回退

#### git reset

`git reset [<mode>] [<commit>]`
git reset 将当前分支的 HEAD 指向给定的版本，并根据模式的不同决定是否修改 index 和 working tree。
常用的有三种模式，--soft, --mixed, --hard，如果没有给出`<mode>`则默认是--mixed

> **--soft**
>
> 回到上次版本提交之前，保留了此次版本文件的修改，但此次版本文件已经添加到缓存区（add 之后）

使用`--soft`参数将会仅仅重置`HEAD`到制定的版本，不会修改 index 和 working tree

而本地文件的内容并没有发生变化，而 index 中仍然有最近一次提交的修改，这时执行 git status 会显示这些修改已经在在暂存区中了，无需再一次执行 git add

> **--mixed**
>
> 回到上次版本提交之前，保留了此次版本文件的修改，但此次版本文件还没添加到缓存区（add 之前）

使用`--mixed`参数与--soft 的不同之处在于，--mixed 修改了 index，使其与第二个版本匹配。index 中给定 commit 之后的修改被 unstaged。
如果现在执行 git commit 将不会发生任何事，因为暂存区中没有修改，在提交之前需要再次执行 git add

> **--hard**
>
> 回到上次版本提交之后，不保留了此次版本文件的修改。

使用`--hard`同时也会修改 working tree，也就是当前的工作目录，如果我们执行`git reset --hard HEAD~`，那么最后一次提交的修改，包括本地文件的修改都会被清除，彻底还原到上一次提交的状态且无法找回。所以在执行`reset --hard`之前一定要小心

<br/>

#### git revert

使用`git revert`也能起到回退版本的作用，不同之处在于

- `git revert <commit>`会回退到`<commit>`之前的那次提交，比如`git revert HEAD~3`会回退到最近的第 4 个提交的状态，而不是第 3 个
- `git revert`会产生一个新的 commit，将这次回退作为一次修改记录提交，这样的好处是不修改历史提交记录。

<br/>

### 分支操作

#### git cherry-pick

挑选一个我们需要的 commit 进行操作。它可以将在其他分支上的 commit 修改，移植到当前的分支。

    git cherry-pick xxx xxx ...
    命令的作用，就是将指定的提交（commit）应用于其他分支。

<br/>

## Github 仓库与本地项目连接

1. 在 GitHub 上创建仓库

2. 创建本地项目

3. 在本地项目目录初始化仓库

`git init`

4. 连接仓库 (建议使用 ssh 方式)

`git remote add origin 仓库地址`

5. 强制拉取合并

`git pull origin main —-allow-unrelated-histories`

6. 老三样

`git add .
git commit -m 'commit描述'  
    或者合并上次commit 使用命令：git commit --amend -m 'commit描述'
git push origin master`

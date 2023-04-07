---
layout: post
title: 'github blog - jekyll theme 적용(jalpc)'
date: 2023-04-07
categories: [Archive]
tags: [github, gh-pages, github-blog]
icon: icon-git
---

github blog 만들기 - 1 : [https://klaus9267.github.io/archive/2023/04/05/how-to-create-github-blog-1.html](https://klaus9267.github.io/archive/2023/04/05/how-to-create-github-blog-1.html)

---

이번엔 jekyll를 사용해서 만들어진 기본 사이트에 테마를 적용하겠습니다.

**Before**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dfa6a4b-2b80-40d6-987e-6eb3141ca003/Untitled.png)

**After**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/619bb9b7-a121-46c2-bc01-f2265e99272c/Untitled.png)

---

1. 테마 고르기

    테마 사이트

    - [http://jekyllthemes.org/](http://jekyllthemes.org/)
    - [https://jekyllthemes.io/free](https://jekyllthemes.io/free)
    - [https://jamstackthemes.dev/ssg/jekyll/](https://jamstackthemes.dev/ssg/jekyll/)

    다음과 같은 사이트에서 테마를 골라줍니다.

    저는 첫 번째 사이트에서 테마를 골랐습니다.

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4626bd2-715d-45bc-8520-1793b0478bc3/Untitled.png)

    마음에 드는 테마를 클릭하시면 다음과 같은 화면이 나옵니다.

    **Demo**를 클릭하셔서 테마가 적용된 블로그의 모습을 보실 수 있고

    소스코드가 담겨있는 보고싶으시면 homepage를 클릭하셔서 해당 테마의 github로 이동하실 수 있습니다.

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e9193fd-84d4-4f17-a29e-8456dd163f8e/Untitled.png)

    github에 들어오셔서 **code**를 누르셔서

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8f1243c-c24c-4a48-9db0-cc3bf09d0db0/Untitled.png)

    그림과 같이 **Download ZIP**를 눌러서 해당 파일을 다운받아줍니다.

2. 테마 초기화

    다운받은 파일의 압축을 푸시고 해당 폴더에 들어간 다음, 해당 파일들을 삭제해주세요.

    - `Gemfile.lock`
    - `docs`폴더 및 디렉토리.
    - `.travis.tml`
    - `_posts.docs`
    - `.github` 폴더에서 `workflows` 폴더를 남겨두고 파일 전부를 지우기.
    - `.github/workflows/`에서 `commitlint.yml`과 `page-deploy.yml.hook` 외에 다 지우기.
    - `page-deploy.yml.hook`파일의 `.hook`를 지우기.

3. 테마 적용

    초기화한 테마 파일 및 폴더들을 전부 원래 프로젝트의 폴더로 복사 & 붙여넣기 해줍니다.

    `(다른 테마를 사용하실 경우 테마 초기화 작업이 필요합니다 → 특정 파일 및 폴더를 삭제)`

    그리고 vscode OR Start Command Prompy With Ruby를 실행해서 프로젝트 폴더로 이동해줍니다.

    이동한 후 다음과 같은 명령어를 입력합니다.

    - `bundle install`

    그리고 cinfig

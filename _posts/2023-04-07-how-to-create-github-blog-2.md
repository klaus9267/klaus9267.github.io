---
layout: post
title: 'github blog - jekyll theme 적용(jalpc)'
date: 2023-04-07
categories: [Archive]
tags: [github, gh-pages, github-blog]
icon: icon-database
---

github blog 만들기 - 1 : [https://klaus9267.github.io/archive/2023/04/05/how-to-create-github-blog-1.html](https://klaus9267.github.io/archive/2023/04/05/how-to-create-github-blog-1.html)

---

이번엔 jekyll를 사용해서 만들어진 기본 사이트에 테마를 적용하겠습니다.

**Before**

![1](https://user-images.githubusercontent.com/90795904/230716958-c300c379-12a2-4e10-9363-e68f571d9f8e.png){: width="100%" height="100%"}

**After**

![2](https://user-images.githubusercontent.com/90795904/230716954-44df44d8-cd5d-4ce4-bc69-278a7ac1f011.png){: width="100%" height="100%"}

---

1. 테마 고르기

    테마 사이트

    - [http://jekyllthemes.org/](http://jekyllthemes.org/)
    - [https://jekyllthemes.io/free](https://jekyllthemes.io/free)
    - [https://jamstackthemes.dev/ssg/jekyll/](https://jamstackthemes.dev/ssg/jekyll/)

    다음과 같은 사이트에서 테마를 골라줍니다.

    저는 첫 번째 사이트에서 테마를 골랐습니다.

    ![3](https://user-images.githubusercontent.com/90795904/230716959-2ca9d93b-7c2c-43ad-9b80-57b46d3b35bb.png){: width="70%" height="70%"}

    마음에 드는 테마를 클릭하시면 다음과 같은 화면이 나옵니다.

    **Demo**를 클릭하셔서 테마가 적용된 블로그의 모습을 보실 수 있고

    소스코드가 담겨있는 보고싶으시면 homepage를 클릭하셔서 해당 테마의 github로 이동하실 수 있습니다.

    ![4](https://user-images.githubusercontent.com/90795904/230716960-58bfb45c-cf0b-4f39-98b5-0456713b24fd.png){: width="100%" height="100%"}

    github에 들어오셔서 **code**를 누르셔서

    ![5](https://user-images.githubusercontent.com/90795904/230716962-e4d664f8-984e-4b49-be0f-3dc3d2f1cf40.png){: width="40%" height="40%"}

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
    - `bundle exec jekyll serve`

    ![Untitled](https://user-images.githubusercontent.com/90795904/230708496-736c2757-39fa-438f-9f78-d3516a287f1c.png){: width="100%" height="100%"}

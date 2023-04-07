---
layout: post
title: 'github blog 만들기'
date: 2023-04-05
categories: [Archive]
tags: [github, gh-pages, github-blog]
icon: icon-git
---

-   ruby 설치 → [https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)
-   gem install bundler jekylly webrick
    -   필요 패키지 설치

---

1. repo 생성

    ![Untitled](https://user-images.githubusercontent.com/90795904/229992321-3da4c32f-606b-4b01-88d7-298a6dfefaf4.png)

    repo name을 [github_ID].github.io 형식으로 하면

    https://[github_ID].github.io 로 블로그가 생성

    repo name을 example-name으로 하면

    https://[github_ID].github.io/example-name으로 생성

2. clone

    ![ㄴ](https://user-images.githubusercontent.com/90795904/229992313-6bd3330a-e377-44cf-adcb-2b29e2521e0c.png)

    start command prompt with ruby 실행 밑 clone 위치로 이동

3. jekylly new ./

    local환경에서 새로운 jekyll project 생성 → ruby로 작성된 정적 사이트 생성

4. bundle install

    ruby project의 의존성 패키지를 설치하는 명령어

    → 프로젝트의 실행에 필요한 모든 패키지들을 관리

5. bundle exec jekyll serve

    project에서 사용허는 패키지 버전을 우선적으로 사용하여 로컬 서버를 실행

    ruby를 처음 설치하신 분들은

    jekyll serve를 하셔도 무관합니다 :)

    ![04-localhost](https://user-images.githubusercontent.com/90795904/229993393-d00167fb-b71e-4c9f-826c-85498f7cf4c1.png)

    ### local로 생성 성공!

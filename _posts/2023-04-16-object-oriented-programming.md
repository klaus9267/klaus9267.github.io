---
layout: post
title: '객체지향 프로그래밍이란'
date: 2023-04-16
categories: [Computer-Science]
tags: [OOP, Object-Oriented-Programming, computer-science]
icon: icon-apache
---

## 🎈객체 지향 프로그래밍이란?

객체 지향 프로그래밍(Object-Oriented Programming, OOP)은 컴퓨터 프로그래밍 패러다임 중 하나로, 객체를 기본적인 프로그래밍 단위로 삼는다는 개념입니다.

객체란 데이터와 해당 데이터를 처리하는 메소드(함수)의 묶음을 의미하며, 이러한 객체들이 서로 상호작용하면서 프로그램이 실행됩니다. 객체 지향 프로그래밍은 기존 절차 지향 프로그래밍보다 유지보수성이 높고 코드의 재사용성이 좋은 장점을 가지고 있습니다.

## 🎈객체 지향 프로그래밍의 특징

객체 지향 프로그래밍은 다음과 같은 특징을 가지고 있습니다.

### 1. 캡슐화 (Encapsulation)

-   객체의 데이터와 해당 데이터를 처리하는 메소드를 하나로 묶어서 외부에서의 접근을 제한하는 것을 의미합니다.
-   이를 통해 객체 내부의 상태를 안전하게 보호하고, 객체 간의 의존성을 줄이는데 도움을 줍니다.

### 2. 상속 (Inheritance)

-   부모 클래스가 가지고 있는 특성과 메소드를 자식 클래스가 물려받는 것을 의미합니다.
-   상속을 통해 코드의 재사용성과 유지보수성을 높일 수 있습니다.

### 3. 다형성 (Polymorphism)

-   같은 이름의 메소드나 연산자가 다른 기능을 수행하도록 구현하는 것을 의미합니다.
-   이를 통해 코드의 가독성을 높이고, 유연성을 확보할 수 있습니다.

## 객체 지향 프로그래밍의 예시

-   자바(Java)는 대표적인 객체 지향 프로그래밍 언어입니다.
-   다음은 자바를 이용한 객체 지향 프로그래밍의 예시입니다.

```
javaCopy code
public class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public void sayHello() {
    System.out.println("Hello, my name is " + name);
  }
}

public class Main {
  public static void main(String[] args) {
    Person person = new Person("John", 25);
    System.out.println(person.getName());
    System.out.println(person.getAge());
    person.sayHello();
  }
}

```

-   위 예시에서 Person 클래스는 이름(name)과 나이(age)를 가지고 있으며, 이름을 출력하는 sayHello() 메소드를 가지고 있습니다.
-   Main 클래스에서는 Person 객체를 생성하고, getName(), getAge(), sayHello() 메소드를 호출하여 결과를 출력하고 있습니다.

이처럼 객체 지향 프로그래밍은 객체를 중심으로 코드를 구성함으로써 유지보수성과 코드의 재사용성을 높이는 장점을 가지고 있습니다.

# HayanMind Front-End Technical Assignment

## Assignment #1
The main technical stack for HayanMind front-end developer is "React". Mobile applications are implemented as "React Native", and web projects use "React". In this assignment, we will implement an infinite scroll list using React.
### Requirement
* Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/6203798/125564989-392a721b-1a89-49cd-a5fc-081022711c9b.gif" />
</p>

### Data API
* The user's dummy comment data can be called through the API below.
  * https://jsonplaceholder.typicode.com/comments
* The following parameters are supported:
  * `_page`
    * it starts at 1.
  * `_limit`
    * Please set the `_limit` parameter to 10.
* Example of the first comment page
  * https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10
* Sample data
```JSON
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
]
```
* You can use `id` as comment id, `email` as user's email and `body` as comment text
### Design
* Please look at the following design guide link and reflect the design.
  * [https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA](https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA)
* You have to sign up Figma. If not, you can't see the detailed design guideline.
<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/6203798/125565240-d48f5774-69c6-4963-815d-87a77910ff10.png" />
</p>

* After you sign in Figma, then you can see the detailed design guideline. In addition, you can refer the CSS code on the inspect tab.
<table align="center">
  <tr>
    <td valign="center">
      <img width="450" src="https://user-images.githubusercontent.com/6203798/125565329-c6144364-a519-4028-84bc-5786b5d2af40.png" />
    </td>
    <td valign="center" align="center" width=239>
      <img width="239" alt="스크린샷 2021-07-14 오후 2 47 16" src="https://user-images.githubusercontent.com/6203798/125576636-9dfb1b81-404d-4d6c-8794-2a782579044a.png">
      <img width="239" alt="스크린샷 2021-07-14 오후 2 47 28" src="https://user-images.githubusercontent.com/6203798/125576642-a6bc7695-6b5f-4751-b874-f8a770e55496.png">
    </td>
  </tr>
</table>

* You don't have to make it into a responsive design.
* You don't have to specify a font for the text.

### Note
* Please fork this repository into your account.
<p align="center">
<img width="410" alt="스크린샷 2021-07-13 오후 10 07 51" src="https://user-images.githubusercontent.com/6203798/125465421-8d3c9d4a-1742-4e17-beef-aedd522e5714.png">
</p>

* Please make a new branch based on `master`
* You can start to implement by modifying the `InfiniteScrollList.tsx` file.
* You can modify all other files if you need.
* You can use the third party library.
* Please use TypeScript only.

----

## Assignment #2
HayanMind encourages code review culture to share knowledge and improve code quality among developers. Therefore, developers should be able to make pull requests well so that the other developers can easily review the code. In this assignment, let's make a pull request like we actually get a review of the code we wrote in assignment #1.
### Requirement
* Make pull request for assigment #1 on your repository.
* Please leave a self-review comment reviewing your own code to help reviewers.

### Note
* Please make a pull request assuming that the result is actually reviewed.
* Please make a pull request based on the master branch of your repository not original HayanMind repository.

<img width="600" alt="스크린샷 2021-07-13 오후 10 35 35" src="https://user-images.githubusercontent.com/6203798/125465665-98bf05fc-4855-4c35-b073-97ef1e931bec.png">

----
If you have any questions, please email hr@hayanmind.com!
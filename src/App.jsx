import "./App.css";
import "./counter";
import Counter from "./counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Boys from "./Boys";
import Posts from "./Posts";
import Comments from "./Comments"

const fetchFriends = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchBoys = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const fetchComments=fetch("https://jsonplaceholder.typicode.com/comments")
.then((res)=>res.json());

function App() {
  const boysPromise = fetchBoys();

  function handleClick() {
    alert("I am clicked");
  }
  const handleClicked3 = () => {
    alert("clicked3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<p>Comments are loading</p>}>
        <Comments fetchComments={fetchComments}></Comments>
      </Suspense>

      <Suspense fallback={<p>Posts are loading</p>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming....</h3>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense>

      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Boys are moja ... </h3>}>
        <Boys boysPromise={boysPromise}></Boys>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>click me</button>

      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        click me
      </button>

      <button onClick={handleClicked3}>click me 3</button>

      <button onClick={() => alert("clicked 4")}>click me 4</button>

      <button onClick={() => handleAdd5(10)}>click me 5</button>

      {/* normal js onclick function handing difference */}
      {/* <button onclick="handleClick()">click me</button> */}
    </>
  );
}

export default App;

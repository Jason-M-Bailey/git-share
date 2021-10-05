/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./projectCreate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";

import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Draggable from "react-draggable";
import { FaPen, FaTrash } from "react-icons/fa";

function ProjectCreate() {
  const AddPost = ({ onSave }) => {
    const [text, setText] = useState("");

    const day = Date().toLocaleString();

    const onSubmit = (e) => {
      e.preventDefault();

      if (!text) {
        Swal.fire({
          icon: "error",
          title: "Empty Note",
          text: "It seems that you forgot your pen to write something.",
        });
      } else {
        onSave({ text, day });
      }

      setText("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            className="text-area"
            type="text"
            maxlength="50"
            placeholder="How will you make your Project Better?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <input type="submit" className="stick btn btn-block" value="Stick Postit" />
      </form>
    );
  };

  function ShowForm({ showForm, changeTextAndColor }) {
    const Button = ({ color, text, onClick }) => {
      return (
        <button
          onClick={onClick}
          style={{ backgroundColor: color }}
          className="btn btn-add"
        >
          {text}
        </button>
      );
    };

    return (
      <div className="header">
        <Button
          onClick={showForm}
          color={changeTextAndColor ? "rgb(251, 78, 78)" : "rgb(7, 255, 131)"}
          text={changeTextAndColor ? "➖ Close Postit" : "➕ New Postit"}
        />
      </div>
    );
  }

  function Post({ post, onDelete, onEdit }) {
    return (
      <div>
        <Draggable>
          <div className="container posts">
            <div className="single-post">
              <p className="PostName">{post.text}</p>

              <p className="PostDate">
                <span className="textBold">Posted:</span>
                {post.day}
              </p>
            </div>

            <div className="editPosts">
              <p>
                <FaTrash
                  onClick={() => onDelete(post.id)}
                  className="deleteIcon"
                />

                <FaPen onClick={() => onEdit(post.id)} className="editIcon" />
              </p>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }

  const Posts = ({ posts, onDelete, onEdit }) => {
    return (
      <>
        <div className="postNote">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </>
    );
  };

  function Postit() {
    const [posts, setPosts] = useState([]);
    const [showAddPost, setShowAddPost] = useState(false);

    const getPosts = JSON.parse(localStorage.getItem("postAdded"));
    useEffect(() => {
      if (getPosts == null) {
        setPosts([]);
      } else {
        setPosts(getPosts);
      }
    }, []);

    const AddPosts = (post) => {
      const id = uuidv4();

      const newPost = { id, ...post };

      setPosts([...posts, newPost]);

      Swal.fire({
        icon: "success",
        title: "STICKING POSTIT",
        text: "Your new Postit was successfully pasted!",
      });

      localStorage.setItem("postAdded", JSON.stringify([...posts, newPost]));
    };

    const deletePost = (id) => {
      const deletePost = posts.filter((post) => post.id !== id);

      setPosts(deletePost);

      Swal.fire({
        icon: "success",
        title: "TOSSING POSTIT",
        text: "Your Postit was successfully thrown in the bin!",
      });

      localStorage.setItem("postAdded", JSON.stringify(deletePost));
    };

    const deleteAllPost = () => {
      setPosts([]);

      Swal.fire({
        icon: "success",
        title: "BURNING IT ALL",
        text: "Board successfully cleared!",
      });

      localStorage.removeItem("postAdded", JSON.stringify(deleteAllPost));
    };

    const editPost = (id) => {
      const text = prompt("New Postit:");

      let data = JSON.parse(localStorage.getItem("postAdded"));

      const myData = data.map((x) => {
        if (x.id === id) {
          return {
            ...x,
            text: text,
            id: uuidv4(),
          };
        }

        return x;
      });

      Swal.fire({
        icon: "success",
        title: "FIXING SOMETHING",
        text: "Your Postit was successfully edited!",
      });

      localStorage.setItem("postAdded", JSON.stringify(myData));
      window.location.reload();
    };

    return (
      <>
        <div className="container-fluid">
          <div className="header-main">
            <h1>Postit</h1>

            <ShowForm
              showForm={() => setShowAddPost(!showAddPost)}
              changeTextAndColor={showAddPost}
            />
            {showAddPost && <AddPost onSave={AddPosts} />}

            <Button onClick={deleteAllPost} className="btn delete-btn">
              ❌ Clear Board
            </Button>
          </div>
          <div className="row posti-row">
            {posts.length > 0 ? (
              <Posts posts={posts} onDelete={deletePost} onEdit={editPost} />
            ) : (
              <div className="posti">No Postit was found. Try adding one! </div>
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="App">
      <div className="container container-fluid">
        <Postit />
      </div>
    </div>
  );
}

export default ProjectCreate;

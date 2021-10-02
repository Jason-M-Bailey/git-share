import React from "react";
import "./projectCreate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import { FaPen, FaTrash } from "react-icons/fa";

function ProjectCreate() {
  const AddPost = ({ onSave }) => {
    const [text, setText] = useState("");

    const day = Date().toLocaleString();

    const onSubmit = (e) => {
      e.preventDefault();

      onSave({ text, day });

      setText("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            maxLength="50"
            placeholder="How will you make your Project Better?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <input type="submit" className="btn btn-block" value="Stick Postit" />
      </form>
    );
  };

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

  function ShowForm({ showForm, changeTextAndColor }) {
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

  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);

  const AddPosts = (post) => {
    const id = uuidv4();

    const newPost = { id, ...post };

    setPosts([...posts, newPost]);

    localStorage.setItem("postAdded", JSON.stringify([...posts, newPost]));
  };

  const deletePost = (id) => {
    const deletePost = posts.filter((post) => post.id !== id);

    setPosts(deletePost);

    localStorage.setItem("postAdded", JSON.stringify(deletePost));
  };

  const deleteAllPost = () => {
    setPosts([]);

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
    localStorage.setItem("postAdded", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="header-main">
        <h1>Your Project</h1>

        <ShowForm
          showForm={() => setShowAddPost(!showAddPost)}
          changeTextAndColor={showAddPost}
        />
        {showAddPost && <AddPost onSave={AddPosts} />}

        <Button onClick={deleteAllPost} className="btn delete-btn">
          ❌ Clear Board
        </Button>
      </div>
      <div className="row postit-row">
        {posts.length > 0 ? (
          <Posts posts={posts} onDelete={deletePost} onEdit={editPost} />
        ) : (
          <div className="postit">Start Planning Your Project.</div>
        )}
      </div>
    </div>
  );
}

export default ProjectCreate;

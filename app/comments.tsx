"use client";
export default function Comments() {
  const Comment = () => {
    return <div>comment</div>;
  };
  return (
    <div className="">
      <div className="comment">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="flex flex-col">
        <input></input>
        <textarea></textarea>
        <button>submit</button>
      </div>
    </div>
  );
}

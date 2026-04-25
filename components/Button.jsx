"use client"
const Button = ({ text,handler, type }) => {
  let styles = ""
  switch(type){
    case 2: styles = " border-2 border-(--graphite) text-(--graphite)";
    break;
    case 3: styles = "shadow-2xl text-(--graphite) bg-(--mist)  ";
    break;
    default: styles = " shadow-xl  bg-(--graphite) text-(--snow) border border-transparent "
  }
  return <button onClick={handler} className={`px-4 py-2 rounded-3xl cursor-pointer m-1 ${styles}`}>{text}</button>;
};

export default Button;

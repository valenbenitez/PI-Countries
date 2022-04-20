// import React from "react";
// import { useDispatch, useSelector } from "react-redux"

// export default function Home() {
//   let [input, setInput] = React.useState({
//     city: "",
//   });

//   // const paises = useSelector((state)=>)

//   var dispatch = useDispatch()

//   function handleChange(e) {
//     setInput({ city: e.target.value })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     dispatch()
//   }

//   return (
//     <div>
//       <form>
//         <nav>
//           <input
//             onChange={(e) => handleChange(e)}
//             type={"text"}
//             name={"city"}
//             value={input.city}
//             placeholder="Search city"
//           ></input>
//           <button onSubmit={(e) => handleSubmit(e)}>Search</button>
//         </nav>
//       </form>
//     </div>
//   );
// }
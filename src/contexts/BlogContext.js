// import { createContext } from "react";
// import { useState } from "react"

// export const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//     const [blog, setBlog] = useState({ title: "", body: "" })
//     const [inputError, setInputError] = useState(null)
//     return (
//         <BlogContext.Provider value={{ blog, setBlog, inputError, setInputError }} >
//             {children}
//         </BlogContext.Provider>
//     )
// }
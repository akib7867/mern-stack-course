import React from "react";
import useFetchData from "../CustomHook/useFetchData";


const ExampleCustomHook = () => {
   const url = "https://jsonplaceholder.typicode.com/posts";
   const { data, loading, error } = useFetchData(url);
  
    if(loading) return <h2><i>Loading</i></h2>
    if(error) return <h2>Error{error}</h2>
  return (
    <div>
      {data &&
        data.data.map((each, index) => (
          <p>
            {index + 1} :-  
            {each.title}
          </p>
        ))}
      ;
    </div>
  );
};

export default ExampleCustomHook;




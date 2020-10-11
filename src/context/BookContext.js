import React from "react";

//Create Contexto
const BookContext = React.createContext({});

//Define provider y consumidor
export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;

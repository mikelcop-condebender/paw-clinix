import React from "react";
import { useParams } from "react-router-dom";

interface Params extends Record<string, string | undefined> {
  id: string;
}

export const UserPage: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <div>
      <h1>User Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};



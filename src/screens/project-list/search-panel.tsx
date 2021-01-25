import React, { useEffect, useState } from "react";
import { Project } from "screens/project-list/list";

export interface User {
  id: number | string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = () => {
  return <form></form>;
};

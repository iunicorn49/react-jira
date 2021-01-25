import React from "react";
export interface Project {
  id: number | string;
  name: string;
  personId: number | string;
  pin: boolean;
  organization: string;
  created: number;
}

export const List = () => {
  return <table></table>;
};

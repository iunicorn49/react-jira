import React from "react";
import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "./project-list.slice";

interface ProjectModalProps {}

export const ProjectModal = (props: ProjectModalProps) => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);
  const handleClose = () => {
    dispatch(projectListActions.closeProjectModal());
  };

  return (
    <Drawer visible={projectModalOpen} width="100%" onClose={handleClose}>
      <h1>Project Modal</h1>
      <Button onClick={handleClose}>关闭</Button>
    </Drawer>
  );
};

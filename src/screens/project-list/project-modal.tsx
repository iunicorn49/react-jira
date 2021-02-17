import React from "react";
import { Button, Drawer } from "antd";

interface ProjectModalProps {
  projectModalOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = (props: ProjectModalProps) => {
  const { projectModalOpen, onClose } = props;
  return (
    <Drawer visible={projectModalOpen} width="100%" onClose={onClose}>
      <h1>Project Modal</h1>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
};

import React from "react";
import { Popover, Typography, List, Divider } from "antd";
import { useProjects } from "utils/project";
import styled from "@emotion/styled";

interface ProjectPopoverProps {
  projectButton: JSX.Element;
}

export const ProjectPopover = (props: ProjectPopoverProps) => {
  const { projectButton } = props;
  const { data: projects, isLoading } = useProjects();

  const pinnedProjects = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item.Meta
            title={project.name}
            key={project.id}
          ></List.Item.Meta>
        ))}
      </List>
      <Divider />
      {projectButton}
    </ContentContainer>
  );

  return (
    <Popover placement="bottom" content={content}>
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;

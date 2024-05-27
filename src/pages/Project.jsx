import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { projectId } = useParams();
  // Render content for the specific project based on projectId...
};

export default Project;

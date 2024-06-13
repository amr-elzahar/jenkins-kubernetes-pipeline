# Jenkins Kubernetes CI/CD Pipeline

This repository contains a Jenkins pipeline configuration for deploying a Node.js application to a Kubernetes cluster. The pipeline includes stages for cloning the repository, building a Docker image, pushing the image to DockerHub, and deploying the application to Kubernetes.

## Prerequisites

Before you begin, ensure you have the following setup:

1. **Jenkins**: A running Jenkins server and make sure to install `Docker Pipeline` and `Kubernetes CLI` plugins.
2. **Credentials in Jenkins**:
   - GitHub credentials for accessing the repository.
   - DockerHub credentials for pushing Docker images.
   - A kubeconfig file to authenticate against the Kubernetes cluster.
3. **Kubernetes Cluster**: A running Kubernetes cluster.

## Pipeline Configuration

### Environment Variables

The pipeline uses the following environment variables:

- `DOCKER_IMAGE`: The Docker image name to be built and pushed.
- `KUBE_CONFIG`: Credentials for accessing the Kubernetes cluster.

### Stages

The pipeline consists of the following stages:

1. **Clone repository**:

   - Clones the repository from GitHub using the main branch.

2. **Build Docker image**:

   - Builds a Docker image using the specified Dockerfile.

3. **Push Docker image**:

   - Pushes the built Docker image to DockerHub.

4. **Deploy to Kubernetes**:
   - Deploys the application to the Kubernetes cluster using `kubectl`.

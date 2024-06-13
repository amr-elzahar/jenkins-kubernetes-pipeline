pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'amrelzahar/jenkins-k8s-pipeline'
        KUBE_CONFIG = credentials('kubeconfig')
    }
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/amr-elzahar/jenkins-kubernetes-pipeline.git'
            }
        }
        stage('Build Docker image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Push Docker image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub_creds') {
                        docker.image(DOCKER_IMAGE).push("$BUILD_ID")
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withKubeConfig([credentialsId: 'kubeconfig']) {
                        sh 'kubectl apply -f deployment/'
                    }
                }
            }
        }
    }
}

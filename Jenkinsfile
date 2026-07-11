pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'git@github.com:kiranmarishetti/k8s-ecommerce-project.git'
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Docker build stage'
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh 'kubectl get nodes'
            }
        }
    }
}

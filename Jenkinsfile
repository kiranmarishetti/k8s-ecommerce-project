pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh '''
                kubectl apply -f mysql/
                kubectl apply -f backend/
                kubectl apply -f frontend/
                kubectl apply -f ingress/
                kubectl get pods
                '''
            }
        }
    }
}

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

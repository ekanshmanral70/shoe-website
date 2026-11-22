pipeline {
    agent any

    // We can remove the environment block because docker-compose handles names now!

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling latest shoe website code from GitHub...'
                checkout scm
            }
        }

        stage('Deploy Website Fleet') {
            steps {
                echo 'Tearing down old containers and building fresh instances...'
                
                // 1. Shuts down old instances to cleanly clear out your ports
                sh "docker-compose down"
                
                // 2. Rebuilds any code changes and launches your load balancer on port 8080
                sh "docker-compose up -d --build"
            }
        }
    }

    post {
        success {
            echo 'Shoe website fleet successfully deployed to port 8080!'
        }
        failure {
            echo 'Pipeline failed. Check the console logs.'
        }
    }
}


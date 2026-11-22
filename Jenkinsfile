pipeline {
    agent any

    environment {
        IMAGE_NAME = "shoe-website"
        CONTAINER_NAME = "shoe-website-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Cleaning up old container if running...'
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Deploying new container...'
                // Your project has a server.js file, so it likely runs on port 3000 or 5000 inside the container.
                // Replace 3000 below with whatever port your server.js exposes!
                sh "docker run -d --name ${CONTAINER_NAME} -p 8081:3000 ${IMAGE_NAME}:latest"
            }
        }
    }

    post {
        success {
            echo 'Shoe website deployed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console logs.'
        }
    }
}

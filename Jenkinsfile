pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"  // Adjust this based on the Node.js and npm installation location on your server
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build React project
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Testing commands if you have tests
                    // For example: sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deployment or configuration commands based on your project needs
                }
            }
        }
    }
}

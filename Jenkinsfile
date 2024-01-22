pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests if applicable
                // Replace the following line with your actual test command
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the built app to your server or hosting platform
                // Replace the following line with your actual deployment command
                sh 'npm run deploy'
            }
        }
    }
}

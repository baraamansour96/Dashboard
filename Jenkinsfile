pipeline {
    agent any
    environment {
        PATH = "$PATH:/usr/local/bin"  // Adjust this based on the Node.js and npm installation location on your server
    }
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Test") {
            steps {
                sh 'sudo npm install'
                sh 'npm test'
            }
        }

        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
    }
}

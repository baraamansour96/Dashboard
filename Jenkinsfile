pipeline {
    agent any
    environment {
        PATH = "$PATH:/Users/baraa/path/to/your/nodejs/bin"  // Update this path to the location of your Node.js binary
    }
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Test") {
            steps {
                sh 'npm install'
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

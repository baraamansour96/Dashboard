pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Test") {
            steps {
                script {
                    // Install npm and run tests (for Unix systems)
                    script {
                        sh 'sudo apt install npm || true'
                        sh 'npm test'
                    }
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    // Build the project (for Unix systems)
                    script {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}

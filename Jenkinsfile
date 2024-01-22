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
                    // Install npm on Unix-like systems
                    if (isUnix()) {
                        sh 'sudo apt install npm'
                    } else {
                        echo 'Skipping npm installation on non-Unix system'
                    }

                    sh 'npm test'
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}

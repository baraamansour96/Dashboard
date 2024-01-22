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
                    if (isUnix()) {
                        sh 'sudo apt install npm'
                        sh 'npm test'
                    } else {
                        echo 'Skipping npm installation on non-Unix system'
                    }
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    // Build the project (for Unix systems)
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        echo 'Skipping build on non-Unix system'
                    }
                }
            }
        }
    }
}

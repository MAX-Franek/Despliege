pipeline {
    agent any

    stages {
        stage('Checkout'){
            steps {
                echo "Repo clonado lolo"
                sh 'ls -la'
            }
        }
        stage('Info'){
            steps {
                sh 'git rev-parse --short HEAD'
            }
        }
    }
}
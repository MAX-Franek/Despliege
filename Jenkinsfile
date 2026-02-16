pipeline {
    agent any

    stages {
        stage('Checkout'){
            steps {
                echo "Repo clonado los caracole"
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
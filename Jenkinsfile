pipeline {
    agent any

    tools {
        nodejs 'node 16'
    }
    stages {
        stage('Prepare') {
            steps{
                git 'https://github.com/TimGundmann/bajardo.dk.git'
                sh 'npm ci'
            }                
        }

        stage('Build') {
            steps{   
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps{
                sh 'docker-compose stop'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        failure {
            step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: emailextrecipients([[$class: 'CulpritsRecipientProvider'], [$class: 'RequesterRecipientProvider']])])      
            }
    }    
}

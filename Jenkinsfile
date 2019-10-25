node ('master') {
    try {
        library identifier: "${env.DEFAULT_SHARED_LIBS}",
                retriever: modernSCM([$class: 'GitSCMSource',
                    remote: "${env.DEFAULT_SHARED_LIBS_REPO}"
                ])
        pipelineProps.defaultBuildProperties()

        stage('Checkout') {
            timeout(5) {
                checkout([
                  $class: 'GitSCM',
                  branches: [[name: "${branchOrTag}"]],
                  userRemoteConfigs: [[url: 'git@bitbucket.org:seondesign/vmax-ddp-automation-ui.git']]
                ])
            }
        }
        slackUtils.notifyBuild('STARTED', '#ddp')
        awsUtils.loginToAWS()
        nodejs("Node 10.15.3") {
            stage('Install dependencies') {
                timeout(5) {
                    sh "npm ci"
                }
            }

            stage('Run Api Tests') {
                logger.stage()
                timeout(60) {
                    sh 'npx cucumber-js  --format=json:report/cucumber_results.json'
                } 
            }
            
            // stage('Build') {
            //   timeout(5) {
            //     sh "npm run build"
            //   }
            // }
          }
    }
    catch(ex) {
        currentBuild.result = 'FAILURE'
        throw ex
    }
    finally {
        slackUtils.notifyBuild(currentBuild.result, '#ddp')
    }
}

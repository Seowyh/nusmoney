# DevOps Show and Tell   

## Objectives  

The objective of this project is to migrate the NUS Money app 1.0 from localhost environment to cloud based.  

Netlify will be hosting the static web assets. In addition, it will provide serverless functions that act as APIs for the frontend client to obtain data from the source. Serverless function FaaS model is more cost effective and scalable. Cloud based Fauna database will replace the local MySQL. It has native integration suport with Netlify.   


![](/images/NUSmoney20.jpg)  


## Deploy to Netlify  

Since we already have the code for NUS Money 1.0, we can create a Github repository and deploy to Netlify.   

Make the NUS Money app 1.0 the current folder and execute the git commands:  

git init   
git add .   
git commit -m "v1.0 NUS Money"   

git remote add origin _**your Repo URL**_   
git remote -v    # (to verify that the correct repo URL is entered)  
git push origin main    # (may need to input your email and username for configuration first )  

To deploy the code in your Github repo to Netlify, follow the guide below or use the deploy button.    

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/   


<a href="https://app.netlify.com/start/deploy?repository=https://github.com/Seowyh/nusmoney"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>   


After deployment, NUS Money App 1.0 is live in the link:  

https://nusmoney.netlify.app  


## CI/CD Automation  

Github Action can provide the necessary automation to notify team members of a push/pull event, test, build and deploy the new code into Netlify.  

The workflows are listed in the yml file found under .github\workflows  

![](/images/Github_workflow.jpg)  

Screenshots of the Github Actions and Slack Notifications are shown below:  

![](/images/Slack_Message.jpg)  

![](/images/Action_Slack.jpg)  


Once the workflow is ready, we can disable the auto deploy function in Netlify. Head to your site in Netlify:  
_**Deploys > Stop auto publishing**_  

In order for Github Action to trigger the workflow in Netlify and Slack, you need to get the Secrets(bearer token) for the formal or use webhook for the later. Keep the tokens in a safe location.  

for NETLIFY_AUTH_TOKEN  
_**go to your account by clicking on top right corner icon**_  
_**User settings > Appications > Personal access tokens**_  

for NETLIFY_SITE_ID  
_**Site overview > General > Site details > API ID**_  

for SLACK_WEBHOOK  
_**go to beginning of your channel**_  
_**Connect an app > Incoming WebHooks > Add to Slack >**_  
Under_** Post to Channel**_ Choose a channel as your target to post  
_**Add Incoming Webhooks Integration > Webhook URL**_  

To set up your repository environment with the above keys, go to your repo:  
_**Settings > Secrets > New repository secret**_  



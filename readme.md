# DevOps Show and Tell 

## Objectives

The objective of this project is to migrate the NUS Money app 1.0 from localhost environment to cloud based.

Netlify will be hosting the static web assets. In addition, it will provide serverless functions that act as APIs for the frontend client to obtain data from the source. Serverless function FaaS model is more cost effective and scalable. Cloud based Fauna database will replace the local MySQL. It has native integration suport with Netlify.


![](/images/NUSmoney20.jpg)


## Deploy to Netlify

Since we already have the code for NUS Money 1.0, we can create a Github repository and deploy to Netlify.

Make the NUS Money app 1.0 the current folder and execute the git commands
git init
git add .
git commit -m "v1.0 NUS Money"

git remote add origin _*your Repo URL*_
git remote -v # (to verify that the correct repo URL is entered)
git push origin main # (may need to input your email and username for configuration first )

To deploy the code in your Github repo to Netlify, follow the guide below or use the deploy button.

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/


<a href="https://app.netlify.com/start/deploy?repository=https://github.com/Seowyh/nusmoney"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>


## Automation

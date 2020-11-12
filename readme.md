
Build
`docker build -f .\Dockerfile.dev -t fgremailservice .`

---
docker toolbox
`docker run -p 5500:5500 --name fgr_budget_email_service_web_1 --network budget --env-file .env -v /app/node_modules  -v /c/Users/frank/OneDrive/Development/02_Projects_In_Production/0027_PersonalBudgetApp/fgr_budget_email_service:/app fgremailservice`
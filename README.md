# Recruitment task for DS
Task - Implement a simple website with two subpages: user profile and user information form.
## Requirements:
* header with logo
* simple menu with navigation
* content
* footer (optional - can be just a simple placeholder with paragraph of lorem ipsum to demonstrate responsiveness)

Form should contain the following fields:
* First Name
* Last Name
* Email
* Phone
* Birthday
* About
* Avatar

Once the form is submitted, the content should change to profile view with data from the form. This view should contain:
* Same page header, menu and footer (SPA)
* Space for profile img
* Data completed in the form on the previous page should be displayed in separate lines.

# Description
I decided to use Next.js which is meta framework for React. It's a great tool for both small and larger application. Next comes with great features out of the box such us:
* Routing
* Initial Configuration
* Typescript
* Image preprocessing
* and many many more.

For a deployment, I decided to use Vercel (creators of Next.js) which works perfectly with Next.JS apps. The deployment process is quite easy - just connect your vercel account with git repository and each push creates a new deploy.

## Assumptions:
1. One breakpoint is enough - 768px
2. First Name, Last Name, Email, Birth date are required fields, rest are optional.
3. Form can be populated with already filled in data.
4. The app supports only latest browsers (didn't test on the previous ones)
5. Data are stored in the Session Storage to meet the requirement that data should be session persistant.

## Improvements
1. More accessibility.
2. Styling - date picker and file upload field
3. Better design!

Public url: https://ds-recruitment-task-ashen.vercel.app/

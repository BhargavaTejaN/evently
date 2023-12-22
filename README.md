
Project Banner
Next.js TypeScript stripe
A Full Stack Next 14 Events App
Build this project step by step with our detailed tutorial on JavaScript Mastery YouTube. Join the JSM family!
📋 Table of Contents
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
🕸️ Snippets
🔗 Links
🚀 More
🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, JavaScript Mastery.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!



🤖 Introduction
Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.



⚙️ Tech Stack
Node.js
Next.js
TypeScript
TailwindCSS
Stripe
Zod
React Hook Form
Shadcn
uploadthing
🔋 Features
👉 Authentication (CRUD) with Clerk: User management through Clerk, ensuring secure and efficient authentication.

👉 Events (CRUD): Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.

Create Events: Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
Read Events: Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
Update Events: Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
Delete Events: A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
👉 Related Events: Smartly connects events that are related and displaying on the event details page, making it more engaging for users

👉 Organized Events: Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile

👉 Search & Filter: Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.

👉 New Category: Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.

👉 Checkout and Pay with Stripe: Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.

👉 Event Orders: Comprehensive order management system, providing a clear overview of all event-related transactions.

👉 Search Orders: Quick and efficient search functionality for orders, facilitating easy tracking and management.

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/your-username/your-project.git
cd your-project
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
Replace the placeholder values with your actual credentials

Running the Project

npm start
Open http://localhost:3000 in your browser to view the project.

🕸️ Snippets
globals.css
tailwind.config.ts
Clerk webhook
user.actions.ts
order.model.ts
FileUploader.tsx
DeleteConfirmation.tsx
event.action.ts
order.action.ts
orders/page.tsx
🔗 Links
All assets used in the project can be found here

🚀 More
Advance your skills with Next.js 14 Pro Course

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

Project Banner


Accelerate your professional journey with Expert Training program

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

Project Banner

# Company Directory

This is a **Company Directory** web application built using **Next.js**, **Tailwind CSS**, and **PostgreSQL (NeonDB)**. The project allows users to browse a list of companies and view details about each company, including its directors.

## 🚀 Live Demo
[Company Directory - Deployed on Vercel](https://company-git-main-vishals-projects-f27531e5.vercel.app/)

## 🛠 Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS, Lucide React Icons
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (NeonDB)
- **Deployment**: Vercel

## 📂 Project Structure
```
/company-page
│-- src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── companies/route.js  # API route for fetching companies
│   │   │   ├── directors/route.js  # API route for fetching directors
│   │   ├── page.js   # Entry point for UI
│   │   ├── layout.js # Layout component
│   ├── lib/
│   │   ├── db.js  # Database connection setup
│   ├── styles/
│   │   ├── globals.css  # Global styles
│-- public/  # Static assets
│-- .env.local  # Environment variables
│-- package.json  # Dependencies
```

## 💾 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/company-page.git
cd company-page
```

### 2️⃣ Install Dependencies
```sh
yarn install   # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```
DATABASE_URL=your_neondb_connection_string
```

### 4️⃣ Run the Development Server
```sh
yarn dev   # or npm run dev
```
Visit `http://localhost:3000` in your browser.

## 🔧 Features
✅ Fetch and display a list of companies from PostgreSQL.
✅ View details of a selected company, including its directors.
✅ Responsive design with Tailwind CSS.
✅ API routes to handle database queries securely.
✅ Deployed on Vercel for seamless hosting.

## 🚀 Deployment
The project is deployed on **Vercel**. To deploy manually:
```sh
vercel
```
Ensure your environment variables are set in **Vercel dashboard** under **Project Settings > Environment Variables**.

## 📌 Future Improvements
- Add authentication for admin access.
- Implement search and filtering.
- Improve UI/UX with animations.

## 🤝 Contributing
Feel free to fork the repo, create a branch, and submit a pull request!

## 📜 License
This project is licensed under the MIT License.

Made with ❤️ by Vishal

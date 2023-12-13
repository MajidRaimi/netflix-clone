# 🎥 Netflix Clone Project 🍿

This project is a clone of Netflix, built using a modern tech stack to demonstrate full-stack development capabilities. Below are the technologies used and steps to set up the project.

## 🚀 Technologies Used

- **Next.js**: A React framework for building user interfaces. 🌐 [Next.js Documentation](https://nextjs.org/)
- **Supabase**: An open-source Firebase alternative providing database and authentication solutions. 🔐 [Supabase Documentation](https://supabase.com/)
- **Prisma**: An open-source database toolkit, making database access easy and type-safe. 🗄️ [Prisma Documentation](https://www.prisma.io/)
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/)
- **Next-Auth**: Authentication for Next.js applications. 🔑 [Next-Auth Documentation](https://next-auth.js.org/)
- **Auth.js**: A JavaScript library for authentication. 🛡️ [Auth.js Documentation](https://authjs.dev/)

## 🛠️ Project Setup

1. **Clone the Repository** 📂

   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. **Install Dependencies** 📦

   ```bash
   npm install
   ```

3. **Configure Environment Variables** ⚙️

   Create a `.env.local` file in the root directory and add the necessary environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Initialize the Database** 📚

   Use Prisma to set up your database schema:

   ```bash
   npx prisma migrate dev
   ```

5. **Run the Application** 🏃‍♂️

   Start the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser to see the application. 🌐

## 👥 Contributing

Contributions are welcome! 🙌 Please read our contributing guidelines and submit your pull requests or issues.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

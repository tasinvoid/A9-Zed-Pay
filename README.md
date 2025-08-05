### 🚀 Live Demo

[ https://beautiful-pegasus-3487c2.netlify.app/]

---

### 💸 Bill Management Website

A bill management website that allows users to pay utility bills securely. The application features a dynamic and responsive interface, robust user authentication, and a real-time system for managing and paying bills from a dedicated in-app balance.

---

### ✨ Key Features

* **User Authentication:** 🔐 Users can **register** with a name, email, and password. The password requires a minimum of 6 characters with at least one uppercase and one lowercase letter. The site also supports one-click **social login** via Google.
* **Simple Login:** ➡️ A straightforward login form is provided, along with a link to the registration page. A **"Forget Password"** method is implemented, allowing users to reset their password without email verification.
* **Dashboard & Home Page:** 🏠 The home page features a modern design inspired by local banking websites, including a **slider/carousel** displaying supported organizations and four extra sections to showcase features.
* **Dynamic Bill Listings:** 🧾 The **Bills Page** displays a list of various utility bills (electricity, gas, water, etc.) in a single-column card grid. Users can **filter bills by type** using a dropdown menu.
* **Secure Payments:** 💳 From the **Bill Details Page**, users can pay a specific bill using their in-app balance. The balance is initially set to 10000 BDT. The paid amount is **deducted from the balance**.
* **Payment Tracking:** ✅ After a successful payment, a green tick icon is added to the paid bill card on the Bills page, and users are prevented from paying the same bill twice.
* **Protected Routes:** 🛡️ All pages except the Home, Login, and Register pages are protected. Unauthenticated users are redirected to the login page and, upon successful login, are sent back to their original destination.
* **User Profile:** 🧑‍💻 A **My Profile** page displays the user's name, email, and profile picture. It includes an **update feature** to allow users to change their name and photo URL via a separate form.
* **Responsive Design:** 📱 The website is fully responsive and provides an optimal viewing experience on mobile, tablet, and desktop devices.
* **Error Handling:** 🔔 Toast notifications are used to provide clear success and error messages for a better user experience. A dedicated error page is also available for invalid routes.

### 🛠️ Technologies & NPM Packages

* **React:** ⚛️ The core JavaScript library for building a dynamic, component-based user interface.
* **React Router DOM:** ➡️ For handling client-side routing and protected routes.
* **Firebase Authentication:** 🔑 Used for handling all user registration, login, social authentication, and password management.
* **Swiper.js:** 🖼️ Implemented for creating the carousel on the home page.
* **React Toastify:** ✨ For providing elegant and non-blocking notifications.
* **Environment Variables:** 🔒 Firebase configuration keys are secured using environment variables for a safer deployment.

---

### ⚙️ Hosting & Deployment

The application is designed as a single-page application and is hosted on [Deployment Service, e.g., Netlify/Surge]. It ensures that reloading any route does not result in an error. Firebase has also been configured with the authorized domain for seamless authentication.

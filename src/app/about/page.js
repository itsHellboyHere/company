import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl text-center">
                Welcome to our platform! We aim to help businesses register easily and manage their operations efficiently.
            </p>

            <Link href="/" className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition">
                Back to Home
            </Link>
        </div>
    );
}

import { Suspense } from "react";

export default function SuccessPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-lg">Thank you for your payment.</p>
                <p className="text-lg">Your transaction has been completed successfully.</p>
            </div>
        </>
    );
}
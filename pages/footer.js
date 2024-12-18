function Footer(){

    return (
        <footer className="bg-blue-600 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="space-x-6">
                    <a className="hover:text-gray-300">About</a>
                    <a className="hover:text-gray-300">Contact</a>
                    <a className="hover:text-gray-300">Privacy Policy</a>
                </div>
                <p className="mt-4 text-sm">
                &copy; {new Date().getFullYear()} Entrepreneur Social. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
const Banner = () => {
    const bgImg = {
        backgroundImage: "url('https://i.ibb.co.com/jLSB0ss/pexels-cottonbro-4252146.jpg')",
    }
    return (
        <div>
            <div className="hero min-h-screen" style={bgImg}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-3/4">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">
                        Learn to cook amazing dishes from different continentals and countries. You will become the masterchef  of your family and friends. Join us today and discover the world of cooking.
                    </p>
                    <div className="flex gap-5 flex-col md:flex-row justify-center">
                        <button className="btn bg-green-400 rounded-full text-blue-950 border-none px-10 text-lg">Explore Now</button>
                        <button className="btn bg-transparent rounded-full text-white border-white px-10 text-lg">Feedback</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;
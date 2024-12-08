import Layout from "@/Layouts/layout";
import event1 from '../../assets/website/recent-post-1.jpg';
import event2 from '../../assets/website/recent-post-2.jpg';
import event3 from '../../assets/website/recent-post-3.jpg';
import event4 from '../../assets/website/recent-post-4.jpg';
import Footer from '../components/Footer/Footer.jsx'; // Adjust the path based on your project structure

const RecentPosts = () => {
    const posts = [
        {
            id: 1,
            image: event1,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 2,
            image: event2,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 3,
            image: event3,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 4,
            image: event4,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
    ];

    return (
        <>
        <Layout/>
            {/* Recent Posts Section */}
            <div className="bg-gray-950 px- py-10 text-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 ml-16 font-bold text-2xl">Recent Updates</h2>
                    <p className="mb-8 ml-16 text-gray-400">Check out the upcoming and past events</p>
                    <ul className="space-y-8">
                        {posts.map((post) => (
                            <li
                                key={post.id}
                                className="flex md:flex-row flex-col items-start bg-gray-800 shadow-lg mx-auto rounded-lg max-w-[90%] max-h-[400px] overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/3 h-auto">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="rounded-l-lg md:rounded-t-none w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="flex-1 p-4">
                                    {/* Badge */}
                                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
                                        {post.badge}
                                    </span>
                                    {/* Title */}
                                    <h3 className="mt-3 font-bold text-4xl hover:text-blue-500 cursor-pointer">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <br /><p className="mt-2 pb-20 text-gray-400 text-lg">{post.text}</p>

                                    <div className="flex justify-between items-center mt-4">
                                        {/* Tags */}
                                        <div className="space-x-2">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-blue-400 text-sm hover:underline"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Read Time */}
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <span className="mr-1 text-lg material-icons">schedule</span>
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-3 mt-8">
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <span className="material-icons">Previous</span>
                        </button>
                        <button className="bg-blue-600 px-3 py-1 rounded-full text-white">
                            1
                        </button>
                        <button className="text-gray-400 hover:text-white">2</button>
                        <button className="text-gray-400 hover:text-white">3</button>
                        <span className="text-gray-400">...</span>
                        <button className="flex items-center text-gray-400 hover:text-white">
                            Next <span className="material-icons"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
};

export default RecentPosts;
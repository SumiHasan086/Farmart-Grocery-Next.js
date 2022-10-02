import Image from "next/image"

const BlogCard = ({ image, category, description, title }) => {
    return (
        <div className="p-7 last:border-l  h-full last:border-gray-100 mb-5">
            <Image
                src={image}
                width={500}
                height={330}
                layout="responsive"
                className="rounded-lg"
            />
            {/* Article Details */}
            <div className="">
                <div className="text-grayColor">
                    By <a href="/" className="text-title underline font-bold mr-1">sumihasan</a>
                    in <span className="text-green-500 font-bold mr-1">{category}</span>
                    on 30th Sep 2022
                </div>
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold text-title mt-2">{title}</h3>
            {/* Description */}
            <p className="text-color mt-2 text-sm">{description}</p>
        </div>
    )
}

export default BlogCard
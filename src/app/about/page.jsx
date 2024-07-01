import Image from "next/image";

const page = () => {
	return (
		<div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-4 my-4 mx-16">
			<h2 className="text-3xl sm:text-4xl text-center font-bold mt-4">About Us</h2>
			<Image
				width={720}
				height={360}
				className="max-h-96 rounded-3xl"
				src={"/Images/1.jpg"}
				alt=""
			/>
			<p className="max-sm:text-xs">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ut perspiciatis velit, laudantium cumque quo
				culpa sint doloremque ea repellat est illo maxime similique enim nihil. Ad repellat fugiat maiores tempora
				possimus, rerum totam beatae, aut veniam magni provident minus accusantium tenetur non doloribus reprehenderit.
				Odit minima maiores sapiente? Nobis deleniti in numquam eum repellendus, facilis perferendis rem non repudiandae
				eius accusantium adipisci aliquid! In eius et dolores atque, temporibus reprehenderit velit dolor sapiente
				impedit blanditiis voluptate doloremque at minus corrupti ipsa sint debitis est voluptatibus quis? Fuga aperiam
				optio, aut voluptas quia neque voluptates, doloremque assumenda voluptatem labore magnam est voluptatibus enim
				quos a unde consectetur nisi debitis ut veniam tempore iure! Nisi, repudiandae, distinctio, necessitatibus earum
				aliquam obcaecati deleniti facilis ab enim voluptas vero libero numquam amet repellendus inventore eligendi
				exercitationem! Deserunt ad iusto nesciunt maxime enim numquam quos ea, asperiores odit veniam ipsam nulla
				molestias est consectetur quibusdam ratione inventore cupiditate exercitationem modi hic repudiandae ullam
				aspernatur! Amet et veniam eius labore, odit nesciunt illo, velit nihil neque veritatis quia quis expedita
				tempora saepe, fugit temporibus consequuntur ea perspiciatis quibusdam rem pariatur? Omnis sapiente quam itaque
				excepturi qui ad a molestiae nulla dicta deserunt non hic, voluptate accusamus, vero voluptates, reiciendis nam
				maiores veritatis. Qui doloribus dicta reiciendis voluptatibus nam nobis, et doloremque optio ratione at quam
				saepe tempore ea soluta vel distinctio dignissimos iusto ullam facere, in possimus voluptatum nemo sequi
				tempora. Ullam eius cum praesentium!
			</p>
		</div>
	);
};
export default page;

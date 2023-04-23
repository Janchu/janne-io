export default function Footer() {
	return (
		<footer className="container px-4 py-10 text-center border-t border-gray-200 dark:border-gray-800">
			<div className="max-w-xl mx-auto grid grid-cols-12 gap-4">
				<h1 className="font-bold text-lg text-gray-500 col-span-4">janne.io</h1>
				<div className="flex gap-6 flex-wrap col-span-8 items-center">
					<a
						className="text-xs text-gray-500 hover:underline"
						href="https://github.com/Janchu"
					>
						Github
					</a>
					<a
						className="text-xs text-gray-500 hover:underline"
						href="https://www.linkedin.com/in/jannejäppinen/"
					>
						LinkedIn
					</a>
					<a
						className="text-xs text-gray-500 hover:underline"
						href="https://mas.to/@janchu"
					>
						Mastodon
					</a>
				</div>
			</div>
		</footer>
	);
}

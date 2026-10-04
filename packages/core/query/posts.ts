// Get all posts
export default `*[
	_type == "post"
	&& defined(slug.current)
]|order(publishedAt desc)[0...12]{
	_id,
	title,
	slug,
	publishedAt
}`;
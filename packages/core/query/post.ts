import {defineQuery} from 'groq'

// Get all information from post
export const POST_QUERY = defineQuery(`*[
	_type == "post"
	&& slug.current == $slug
][0]{
	_id,
	title,
	slug,
	publishedAt,
	category->{
		_id,
		title,
		textColor,
		backgroundColor
	},
	author->{
		_id,
		name
	},
	body
}`);

import {defineQuery} from 'groq'

// Get author from id
export const AUTHOR_QUERY = defineQuery(`*[
	_type == "author"
	&& _id == $id
][0]{
	_id,
	name,
	slug,
	image,
	bio
}`);

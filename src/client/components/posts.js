import Spinner from 'components/spinner'

export default ({posts}) =>
	<div className="posts">
		{!posts
			? <Spinner />

			: posts.map((post) =>
				<div className="posts__post media" key={post.id}>
					<div className="media-body">
						<h5 className="media-heading">{post.title}</h5>
						{post.body}
					</div>
				</div>
			)
		}
	</div>
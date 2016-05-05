import Spinner from 'components/spinner'

export default ({posts}) =>
	<div className="posts">
		{!posts
			? <Spinner />

			: posts.map(({body, id, title}) =>
				<div className="posts__post media" key={id}>
					<div className="media-body">
						<h5 className="media-heading">{title}</h5>
						{body}
					</div>
				</div>
			)
		}
	</div>
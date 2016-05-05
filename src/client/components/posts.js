import Spinner from 'components/spinner'

export default ({posts}) =>
	!posts
		? <Spinner />

		: <div className="posts">
			{posts.map(({body, id, title}) =>
				<div className="posts__post media" key={id}>
					<div className="media-body">
						<h5 className="media-heading">{title}</h5>
						{body}
					</div>
				</div>
			)}
		</div>
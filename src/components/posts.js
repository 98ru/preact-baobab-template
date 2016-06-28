import Spinner from 'components/spinner'

export default ({isLoading, items}) =>
	<div className="posts">
		{items.map(({body, id, title}) =>
			<div className="posts__post media" key={id}>
				<div className="media-body">
					<h5 className="media-heading">{title}</h5>
					<div>{body}</div>
				</div>
			</div>
		)}

		{isLoading && <Spinner />}
	</div>
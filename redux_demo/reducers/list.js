module.exports = function(state, action) {
	switch(action.type)
	{
		case 'all':
			return action.list;
		default:
			return {};
	}
}